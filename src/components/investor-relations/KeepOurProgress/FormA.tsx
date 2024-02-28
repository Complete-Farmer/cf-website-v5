import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { Input, Button, RaidoButton } from "@components/utils";
import { onMailChimpSubmit } from "@utils/functions";
import { mailChimpTags } from "@utils/constants";
import { useEffect, useState } from "react";

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
  const [isSuccess, setSuccessful] = useState(false);
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
    reset(defaultValues);
    toast("Please check your inbox for comfirmation", {
      type: "success",
      position: "bottom-center",
      theme: "colored",
    });
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Keeping up with our progress"
    // });
    // window.metapixelfunction("news", "news_letter", {});
    // window.dataLayer.push({ event: "news_letter" });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setSuccessful(true);
      setTimeout(() => {
        setSuccessful(false);
      }, 5000);
    }
  }, [isSubmitSuccessful]);

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
            {isSuccess && (
              <span className="text-grower-500">
                Please check your inbox for comfirmation
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormA;
