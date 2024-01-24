import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input } from "@components/utils";

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
  buttonBg: string;
  onClose: () => void;
  product: "Buyer" | "Grower";
}

function ServiceGuideForm({ onClose, product, buttonBg }: IProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty, isValid, isLoading },
  } = useForm<Inputs>({
    // @ts-expect-error ts(2322)
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    reset({ email: "", firstName: "" });

    toast("Successfully Subscribed", {
      type: "success",
    });
  };

  return (
    <div className="relative max-w-2xl z-10 h-auto px-5 py-6 overflow-hidden bg-white border-gray-300 rounded-lg shadow-2xl">
      <div className="flex flex-row-reverse relative">
        <div
          className="absolute text-custom_gray-300 hover:cursor-pointer"
          onClick={onClose}
        >
          <MenuCloseIcon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="mx-auto w-full text-center space-y-3">
          <h2 className="capitalize text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight">
            CF {product} Service Guide
          </h2>
          <p className="mb-6 text-md font-normal">
            Provide just a couple of details and you’ll get the CF {product}{" "}
            Guide PDF delivered straight to your inbox
          </p>
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
            title="Work email"
            autoComplete="email"
            placeholder="example@company.com"
            {...register("email")}
          />
        </div>

        <div>
          <Button
            type="submit"
            isLoading={isLoading}
            className={`!${buttonBg} h-14`}
            title="Send me a service guide"
            isDisabled={!isDirty || !isValid}
          />

          <ToastContainer hideProgressBar />
        </div>
      </form>
    </div>
  );
}

export default ServiceGuideForm;
