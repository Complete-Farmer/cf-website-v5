import * as yup from "yup";
import { toast } from "react-toastify";
import { useStore } from "@nanostores/react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { $applicationFormModal } from "@utils/stores";
import useYupValidationResolver from "@hooks/useYupValidationResolver";

import {
  Input,
  Button,
  Wrapper,
  Uploader,
  PhoneNumber,
} from "@components/utils";
import { MenuCloseIcon } from "@assets/icons";
import { submitApplication } from "@utils/api";
import { fileToBase64 } from "@utils/functions";

type Inputs = {
  town: string;
  email: string;
  region: string;
  lastName: string;
  firstName: string;
  file: File | null;
  phoneNumber: string;
};

const schema = yup
  .object()
  .shape({
    town: yup.string().required(),
    region: yup.string().required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    file: yup
      .mixed()
      .test("fileSize", "The file is too large", (value: File) => {
        if (!value) return false;
        return value.size <= 2097152;
      }),
  })
  .required();

interface Props {
  title: string;
}

const ApplicationForm = ({ title }: Props) => {
  const applicationFormModal = useStore($applicationFormModal);
  const resolver = useYupValidationResolver(schema);

  const onClose = () => $applicationFormModal.set(false);

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
      town: "",
      email: "",
      region: "",
      file: null,
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const subject = title.includes("Agent") ? "Application for Grower Agent": "Application to the farm manager academy";
      const res = await submitApplication({
        text: `
      Dear Complete Farmer,
      
      I am writing to express my interest to ${title.includes("Agent") ? "become an Agent": "enroll in the farm manager academy"} at your company. 
    
      Here are my details:
      
      • First Name: ${data.firstName}
      • Last Name: ${data.lastName}
      • Email: ${data.email}
      • Phone Number: ${data.phoneNumber}
      • Region: ${data.region}
      • Town: ${data.town}
      
      I have attached my resume for your consideration.
      
      Thank you for your time.
      
      Sincerely,
    ${data.firstName} ${data.lastName}
      `,
        to: "grower@completefarmer.com",
        subject,
        attachments: [
          {
            path: await fileToBase64(data.file),
            filename: data.file.name
          },
        ]
      });
  
      if(res.statusCode === 200) {
        reset({});
        onClose();
        toast(res.message, { type: "success" });
        window.gtag("event", "form_submit", {
          event_label: subject,
          event_category: "Job Application Form",
        });

        window.fbq("track", "SubmitApplication", {
          content_name: subject,
          content_category: "Job Application Form",
        });
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
    <Wrapper onClose={onClose} isOpen={applicationFormModal}>
      <div className="w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-2xl px-8 py-12">
        <div className="relative flex flex-row-reverse">
          <div className="absolute flex flex-row text-center justify-end -top-8 -right-4">
            <div
              className="text-custom_gray-300 hover:cursor-pointer"
              onClick={onClose}
            >
              <MenuCloseIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
              {title}
            </h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 sm:mt-10 space-y-8"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              required
              type="text"
              id="firstName"
              title="First Name"
              placeholder="Eg. John"
              autoComplete="given-name"
              {...register("firstName")}
              outerClassName="col-span-2 lg:col-span-1"
            />

            <Input
              required
              type="text"
              id="lastName"
              title="Last Name"
              placeholder="Eg. Okeke"
              autoComplete="family-name"
              {...register("lastName")}
              outerClassName="col-span-2 lg:col-span-1"
            />

            <Input
              required
              id="email"
              type="email"
              autoComplete="email"
              title="Email"
              outerClassName="col-span-2"
              placeholder="example@company.com"
              {...register("email")}
            />

            <div className="col-span-2">
              <PhoneNumber
                required
                value={phoneNumber}
                title="Phone Number"
                onChange={(val: string) => setValue("phoneNumber", val)}
              />
            </div>

            <Input
              required
              type="text"
              id="region"
              title="Region"
              placeholder="Enter your region"
              {...register("region")}
              outerClassName="col-span-2 lg:col-span-1"
            />

            <Input
              required
              id="town"
              type="text"
              title="Town"
              placeholder="Enter your town"
              {...register("town")}
              outerClassName="col-span-2 lg:col-span-1"
            />

            <div className="col-span-2">
              <Uploader
                required
                name="file"
                value={file}
                // @ts-expect-error any
                setValue={setValue}
                title="Upload Resume/CV"
                accept={{ "application/pdf": [".pdf"] }}
                description="Please upload a formatted copy of your resume below. Max size: <span class='font-bold'>2MB</span>"
              />
            </div>
          </div>

          <Button
            title="Submit"
            type="submit"
            className="h-14"
            isLoading={isSubmitting}
            isDisabled={!isDirty || !isValid}
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default ApplicationForm;
