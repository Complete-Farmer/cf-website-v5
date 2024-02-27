import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { Input, Button, RaidoButton,  } from "@components/utils";
import { onMailChimpSubmit } from "@utils/functions";
import { mailChimpTags } from "@utils/constants";

type Inputs = {
  email: string;
  investorType: string;
};

const schema = yup
  .object()
  .shape({
    existing: yup.string(),
    prospective: yup.string(),
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
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver,
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onMailChimpSubmit({
      email: data.email,
      // firstname: data.investorType,
      tags: mailChimpTags.Investor,
    });
    reset(defaultValues);
    toast("Please check your inbox for comfirmation", { type: "success", position: "bottom-center" });
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Keeping up with our progress"
    // });
    // window.metapixelfunction("news", "news_letter", {});
    // window.dataLayer.push({ event: "news_letter" });
  };

  return (
    <div className="w-full xl:w-1/2">
      <form 
        onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start items-start w-full xl:w-[400px] gap-6">
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
              value="Existing Investor"
              title="Existing Investor"
              {...register("investorType")}
            />
            <RaidoButton
              bgColor="bg-white"
              id="prospective_investor"
              value="Prospective Investor"
              title="Prospective Investor"
              {...register("investorType")}
            />
          </div>

          <Button
            type="submit"
            title="Submit"
            isLoading={isSubmitting}
            isDisabled={!isDirty || !isValid}
            className="xl:!w-fit px-8 py-4 !rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default FormA;
