import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Input, Button, Textarea, PhoneNumber } from "@components/utils";
import useYupValidationResolver from "@hooks/useYupValidationResolver";
import { MenuCloseIcon } from "@assets/icons";

type Inputs = {
  email: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  message: string;
};

const schema = yup
  .object()
  .shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

export default function ContactForm({
  changeToggle,
}: {
  changeToggle: () => void;
}) {
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
      message: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const phoneNumber = watch("phoneNumber");

  // const handleButtonClick = () => {
  //   // ReactGA.event({
  //   //   category: "Button Click",
  //   //   action: "News Letter"
  //   // });
  //   // window.metapixelfunction("news", "news_letter", {});
  //   // window.dataLayer.push({
  //   //   event: "news_letter"
  //   // });
  // };

  return (
    <div className="bg-white max-w-7xl relative mx-auto xl:px-0 items-center h-full">
      <div className="flex mx-auto text-center justify-between">
        <p className=" my-auto text-sm sm:text-xl font-bold text-left text-custom_black-900">
          Contact our team
        </p>
        <button
          className="flex justify-center items-center h-10 w-10 rounded-full bg-custom_gray-200"
          onClick={changeToggle}
        >
          <MenuCloseIcon />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-3 sm:mt-5">
        <div className="text-left grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
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

          <Textarea
            rows={4}
            required
            title="Leave a Message"
            name="message"
            outerClassName="col-span-2 "
            placeholder="Enter email address"
          />
        </div>
        <div className="mt-10 sm:mt-12">
          <Button
            type="submit"
            className="h-16"
            isLoading={isLoading}
            title="Submit"
            isDisabled={!isDirty || !isValid}
          />
        </div>
      </form>
    </div>
  );
}
