import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input, PhoneNumber } from "@components/utils/Forms";
import { getInTouch } from "@utils/api";

interface IProps {
  toggleModal: () => void;
  activeCategory: string;
}

type Inputs = {
  email: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
};

const schema = yup
  .object()
  .shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export default function BookDemo({ toggleModal, activeCategory }: IProps) {
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
      email: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await getInTouch({
        text: `
        Dear ${activeCategory} Team,

        I hope this email finds you well. My name is ${data.firstName} ${data.lastName}, and I am interested in learning more about ${activeCategory} through a product demo.
        
        I've heard great things about ${activeCategory} and believe it could greatly benefit [mention your company or yourself briefly, if applicable].
        
        Could you please schedule a product demonstration at your earliest convenience? I am eager to explore its features and see how it aligns with our needs.
        
        Here are my contact details for scheduling the demo:
        
        • Full Name: ${data.firstName} ${data.lastName}
        • Email: ${data.email}

        Looking forward to experiencing ${activeCategory} firsthand and discussing its potential for [mention your goals or needs, if applicable].
        
        Thank you for your attention to this request.
        
        Warm regards,
        ${data.firstName} ${data.lastName}
      `,
        to: (activeCategory + "@completefarmer.com").toLowerCase(),
        subject: `Request for ${activeCategory} Product Demo`,
      });

      if (res.statusCode === 200) {
        toggleModal();
        toast(res.message, { type: "success" });
        window.gtag("event", "form_submit", {
          event_category: "Book Demo",
          event_label: `${activeCategory} Product Demo`,
        });
        window.fbq("track", "CompleteRegistration", {
          content_category: "Book Demo",
          content_name: `${activeCategory} Product Demo`,
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

  const phoneNumber = watch("phoneNumber");

  return (
    <div className="relative w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-md px-4 py-6 sm:p-8">
      <div className="flex mx-auto text-center justify-end">
        <div
          role="button"
          className="absolute top-4 right-3 sm:top-5 sm:right-6 text-custom_gray-300 hover:cursor-pointer"
          onClick={toggleModal}
        >
          <MenuCloseIcon className="h-8 w-8" />
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center space-y-2">
        <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
          Your demo will begin shortly
        </h2>
        <p className="text-xs leading-4 md:text-sm md:leading-5 text-gray-600">
          But first, we need some info. Share a few details in the form
          <br className="hidden lg:block" /> below so we can help you better.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-6 max-w-xl sm:mt-10 space-y-7"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <Input
            required
            type="text"
            id="firstName"
            title="First Name"
            placeholder="Eg. Kofi"
            autoComplete="given-name"
            {...register("firstName")}
          />

          <Input
            required
            type="text"
            id="lastName"
            title="Last Name"
            placeholder="Eg. Okeke"
            autoComplete="family-name"
            {...register("lastName")}
          />

          <Input
            required
            id="email"
            type="email"
            autoComplete="email"
            title="Buisiness Email"
            outerClassName="col-span-2"
            placeholder="example@company.com"
            {...register("email")}
          />

          <PhoneNumber
            required
            value={phoneNumber}
            title="Phone Number"
            outerClassName="col-span-2"
            onChange={(val: string) => setValue("phoneNumber", val)}
          />
        </div>

        <Button
          type="submit"
          title="Submit"
          isLoading={isSubmitting}
          isDisabled={!isDirty || !isValid}
          className="h-14"
        />
      </form>
    </div>
  );
}
