import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input, PhoneNumber, Uploader } from "@components/utils";
import { getInTouch } from "@utils/api";
import { fileToBase64 } from "@utils/functions";

type Inputs = {
  email: string;
  country: string;
  fullName: string;
  file: File | null;
  phoneNumber: string;
};

const schema = yup
  .object()
  .shape({
    phoneNumber: yup.string(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    file: yup
      .mixed()
      .test("fileSize", "The file is too large", (value: File) => {
        if (!value) return true;
        return value.size <= 10485760;
      }),
  })
  .required();

const GetInTouchForm = ({ toggleModal }: { toggleModal: () => void }) => {
  const resolver = useYupValidationResolver(schema);

  const {
    reset,
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver,
    defaultValues: {
      file: null,
      email: "",
      country: "",
      fullName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await getInTouch({
        to: "grower@completefarmer.com",
        subject: "Inquiry and Contact Information",
        text: `
        Dear Grower Team,
        
        I hope this email finds you well. My name is ${data.fullName} from ${data.country}, and I am reaching out to inquire about the "Grower" product.
        
        In order to provide you with the necessary details and discuss further ${data.file ? ", I've attached my portfolio." : "."} 
        
        Please find below my contact information:
        • Full Name: ${data.fullName}
        • Email: ${data.email}
        • Phone Number: ${data.phoneNumber}
        • Country: ${data.country}
        
        I am looking forward to hearing from you and discussing this matter further. Please feel free to contact me via email or phone at your earliest convenience.
        
        Thank you for your time and consideration.
        
        Warm regards,
        ${data.fullName}  
        ${data.phoneNumber}
        `,
        attachments: [
          {
            path: await fileToBase64(data.file),
            filename: data.file.name,
          },
        ].filter((i) => i.path),
      });

      if (res.statusCode === 200) {
        toggleModal();
        toast(res.message, { type: "success" });
        window.gtag("event", "generate_lead", {
          event_category: "Get in touch",
          event_label: "Grower Inquiry",
        });
        window.fbq("track", "Lead", {
          content_category: "Get in touch",
          content_name: "Grower Inquiry",
        });
        reset({});
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      toast(error.message || error?.data?.message || "Unknown server error", {
        type: "error",
      });
    }
  };

  const file = watch("file");
  const phoneNumber = watch("phoneNumber");

  return (
    <div className="relative w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-md px-4 py-6 sm:p-8">
      <div className="flex flex-row-reverse">
        <div
          role="button"
          className="absolute top-4 right-3 sm:top-5 sm:right-6 text-custom_gray-300 hover:cursor-pointer"
          onClick={toggleModal}
        >
          <MenuCloseIcon className="sm:h-7 sm:w-7" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
            Get in touch
          </h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-6 max-w-xl space-y-8"
      >
        <div className="space-y-4">
          <Input
            required
            type="text"
            id="fullName"
            title="Full Name"
            placeholder="Eg. John Okeke"
            autoComplete="given-name family-name"
            {...register("fullName")}
          />

          <Input
            required
            id="email"
            type="email"
            autoComplete="email"
            title="Buisiness email"
            placeholder="example@company.com"
            {...register("email")}
          />

          <PhoneNumber
            value={phoneNumber}
            title="Phone Number"
            onChange={(number: string, country) => {
              setValue("country", country);
              setValue("phoneNumber", number);
            }}
          />

          <Uploader
            name="file"
            value={file}
            // @ts-expect-error any
            setValue={setValue}
            title="Add attachment (Portfolio)"
            accept={{ "application/pdf": [".pdf"] }}
            description="Be it a rough draft or a detailed brief, as long as you find it relevant. Max size: <span class='font-bold'>10MB</span>"
          />
        </div>

        <Button
          title="Send"
          type="submit"
          isLoading={isSubmitting}
          isDisabled={!isDirty || !isValid}
          className="h-14"
        />
      </form>
    </div>
  );
};

export default GetInTouchForm;
