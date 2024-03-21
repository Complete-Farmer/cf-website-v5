import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input } from "@components/utils";

import useYupValidationResolver from "@hooks/useYupValidationResolver";
import { onMailChimpSubmit } from "@utils/functions";
import { mailChimpTags } from "@utils/constants";

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
  const resolver = useYupValidationResolver(schema);

  const isBuyer = product == "Buyer";

  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
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
      id: isBuyer ? "3e78dce99f" : "95c59f4d99",
      tags: mailChimpTags[isBuyer ? "BuyerServiceGuide" : "GrowerServiceGuide"],
    });
    onClose();
    reset({ email: "", firstName: "" });
    toast("Thank you for subscribing", {
      type: "success",
      position: "bottom-center",
    });
    window.gtag("event", "generate_lead", {
      event_category: "Service Guide",
      event_label: isBuyer ? "Buyer " : "Grower " + "Service Guide",
    });
    window.fbq("track", "CompleteRegistration", {
      content_category: "Service Guide",
      content_name: isBuyer ? "Buyer " : "Grower " + "Service Guide",
    });
  };

  return (
    <div className="relative max-w-2xl z-10 h-auto px-5 py-6 overflow-hidden bg-white border-gray-300 rounded-lg shadow-2xl">
      <div className="flex flex-row-reverse relative">
        <div
          className="absolute text-custom_gray-300 hover:cursor-pointer"
          onClick={onClose}
        >
          <MenuCloseIcon className="h-6 w-6" />
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
            isLoading={isSubmitting}
            className={`!${buttonBg} h-14`}
            title="Send me a service guide"
            isDisabled={!isDirty || !isValid}
          />
        </div>
      </form>
    </div>
  );
}

export default ServiceGuideForm;
