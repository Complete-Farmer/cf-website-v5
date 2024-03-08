import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Input, Button, Textarea, PhoneNumber } from "@components/utils";
import useYupValidationResolver from "@hooks/useYupValidationResolver";
import { MenuCloseIcon } from "@assets/icons";
import { contactForm } from "@utils/api";

type Inputs = {
  email: string;
  message: string;
  country: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
};

const schema = yup
  .object()
  .shape({
    country: yup.string().required(),
    message: yup.string().required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

export default function ContactForm({
  subject,
  changeToggle,
}: {
  subject: string;
  changeToggle: () => void;
}) {
  const resolver = useYupValidationResolver(schema);

  const {
    watch,
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid, isLoading },
  } = useForm<Inputs>({
    resolver,
    defaultValues: {
      email: "",
      country: "",
      message: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await contactForm({ ...data, subject });
      if (res.statusCode === 200) {
        toast(res.message, { type: "success" });
        window.gtag("event", "contact_form");
        window.fbq("track", "Contact");
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
            onChange={(number: string, country: string) => {
              setValue("country", country);
              setValue("phoneNumber", number);
            }}
          />

          <Textarea
            rows={4}
            required
            title="Leave a Message"
            outerClassName="col-span-2 "
            placeholder="Leave a Message"
            {...register("message")}
          />
        </div>
        <div className="mt-10 sm:mt-12">
          <Button
            type="submit"
            title="Submit"
            className="h-14"
            isLoading={isLoading}
            isDisabled={!isDirty || !isValid}
          />
        </div>
      </form>
    </div>
  );
}
