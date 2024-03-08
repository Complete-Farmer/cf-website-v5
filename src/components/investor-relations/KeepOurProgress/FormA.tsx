import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import useSuccessNotify from "@hooks/useSuccessNotify";
import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { Input, Button, RaidoButton, SuccessText } from "@components/utils";

import { onMailChimpSubmit } from "@utils/functions";
import { mailChimpTags } from "@utils/constants";

type Inputs = {
  email: string;
  investorType: string;
};

const schema = yup
  .object()
  .shape({
    investorType: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const FormA = () => {
  const resolver = useYupValidationResolver(schema);

  const defaultValues = {
    email: "",
    investorType: "",
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>({
    resolver,
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onMailChimpSubmit({
      email: data.email,
      id: "675ea5998d",
      tags: mailChimpTags[data.investorType + "Investor"],
    });
    toast("Please check your inbox for comfirmation", {
      type: "success",
      position: "bottom-center",
      theme: "colored",
    });
    window.gtag("event", "generate_lead", {
      event_category: "Newsletter Subscription",
      event_label: "List: Investors",
    });
    window.fbq("track", "CompleteRegistration", {
      content_category: "Newsletter Subscription",
      content_name: "List: Investors",
    });
    reset(defaultValues);
  };

  const showSuccessMessage = useSuccessNotify(isSubmitSuccessful);

  return (
    <div className="w-full xl:w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-start items-start w-full xl:w-[400px] gap-6"
      >
        <Input
          name="email"
          title="Email"
          className="!bg-white"
          {...register("email")}
          placeholder="Enter email address"
        />
        <div className="flex flex-col justify-start items-start gap-10 w-full xl:w-auto">
          <div className="flex flex-col justify-start items-start gap-4">
            <RaidoButton
              id="existing"
              bgColor="bg-white"
              value="Existing"
              title="Existing Investor"
              {...register("investorType")}
            />
            <RaidoButton
              bgColor="bg-white"
              id="prospective_investor"
              value="Prospective"
              title="Prospective Investor"
              {...register("investorType")}
            />
          </div>
          <div className="space-y-2">
            <Button
              type="submit"
              title="Submit"
              isLoading={isSubmitting}
              isDisabled={!isDirty || !isValid}
              className="xl:!w-fit px-8 py-4 !rounded-xl"
            />
            {showSuccessMessage && (
              <SuccessText text="Please check your inbox for comfirmation" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormA;
