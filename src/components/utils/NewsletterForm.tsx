import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input } from "@components/utils";

import { onMailChimpSubmit } from "@utils/functions";
import useYupValidationResolver from "@hooks/useYupValidationResolver";

type Inputs = {
  email: string;
  firstName: string;
};

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

interface IProps {
  tag: string;
  buttonBg: string;
  onClose: () => void;
}

function NewsletterForm({ tag, onClose, buttonBg }: IProps) {
  const resolver = useYupValidationResolver(schema);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, isLoading },
  } = useForm<Inputs>({
    resolver,
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onMailChimpSubmit({
      email: data.email,
      firstname: data.firstName,
      tags: tag,
    });

    reset({ email: "", firstName: "" });

    toast("Successfully Subscribed", {
      type: "success",
    });
  };

  return (
    <div
      className="relative w-96 z-10 h-auto p-5 overflow-hidden bg-white border-gray-300 rounded-lg shadow-2xl"
    >
      <div className="flex flex-row-reverse relative">
        <div
          className="absolute text-custom_gray-300 hover:cursor-pointer"
          onClick={onClose}
        >
          <MenuCloseIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="mx-auto w-full text-center">
          <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
              Join our newsletter
          </h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-6 max-w-xl sm:mt-10 space-y-8"
      >
        <div className="space-y-4">
          <Input
            required
            type="text"
            title="First Name"
            placeholder="Eg. John"
            autoComplete="given-name"
            {...register("firstName")}
          />

          <Input
            required
            type="email"
            autoComplete="email"
            title="Buisiness email"
            placeholder="example@company.com"
            {...register("email")}
          />
        </div>

        <div>
          <Button
            type="submit"
            title="Subscribe"
            isLoading={isLoading}
            className={`!${buttonBg} h-14`}
            isDisabled={!isDirty || !isValid}
          />

          <ToastContainer hideProgressBar />
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;
