import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@utils/useYupValidationResolver";


import { MenuCloseIcon } from "@assets/icons";
import { Button, Input, PhoneNumber } from "@components/utils/Forms";

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
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid, isLoading },
  } = useForm<Inputs>({
    resolver,
    defaultValues: {
      email: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleButtonClick();

    const emailTo = (activeCategory + "@completefarmer.com").toLowerCase();
    const subject = `Request for ${activeCategory} Demo`;
    const { firstName, lastName, email, phoneNumber } = data;

    const body = `
  Dear Complete Farmer,
  
  Here are my details:
  
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone Number: ${phoneNumber}
  
  
  Sincerely,
  [Your Name]
  `;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  const phoneNumber = watch("phoneNumber");

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Submit",
    // });
    // window.metapixelfunction("submit", "book_demo", {});
    // window.dataLayer.push({
    //   event: "book_demo",
    // });
  };

  return (
    <div className="relative w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-md px-4 py-6 sm:p-8">
      <div className="flex mx-auto text-center justify-end">
        <div
          role="button"
          className="absolute top-4 right-3 sm:top-5 sm:right-6 text-custom_gray-300 hover:cursor-pointer"
          onClick={toggleModal}
        >
          <MenuCloseIcon className="h-8 w-8" aria-hidden="true" />
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
          isLoading={isLoading}
          isDisabled={!isDirty || !isValid}
          className="h-14"
        />
      </form>
    </div>
  );
}
