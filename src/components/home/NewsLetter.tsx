import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import useYupValidationResolver from "@hooks/useYupValidationResolver";

import MobileBackground from "@assets/images/home/newsletter-bg-mobile.webp";
import TabletBackground from "@assets/images/home/newsletter-bg-tablet.webp";
import DesktopBackground from "@assets/images/home/newsletter-bg-desktop.webp";

import useResolution from "@hooks/useResolution";

import { Button, Input } from "@components/utils";
import { onMailChimpSubmit } from "@utils/functions";
import { mailChimpTags } from "@utils/constants";

type Inputs = {
  email: string;
};

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
  })
  .required();

export default function NewsLetter() {
  const { screenType } = useResolution();
  const [background, setBackground] = useState<string>();

  useEffect(() => {
    if (screenType === "mobile") {
      setBackground(MobileBackground.src);
      return;
    }

    if (screenType === "tablet") {
      setBackground(TabletBackground.src);
      return;
    }

    if (screenType === "desktop") {
      setBackground(DesktopBackground.src);
      return;
    }
  }, [screenType]);

  const resolver = useYupValidationResolver(schema);

  const {
    reset,
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<Inputs>({
    resolver,
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onMailChimpSubmit({ email: data.email, tags: mailChimpTags["Home"] });
    toast("Please check your inbox for comfirmation", { type: "success", position: "bottom-center" });
    window.gtag("event", "generate_lead", {
      event_category: "Newsletter Subscription",
      event_label: "List: Complete Farmer Signup",
    });
    window.fbq("track", "CompleteRegistration", {
      content_category: "Newsletter Subscription",
      content_name: "List: Complete Farmer Signup",
    });
    reset({ email: "" });
  };

  return (
    <div className="box-border block leading-6 text-center text-indigo-900 w-full max-w-full sm:max-w-full relative overflow-hidden bg-[#ade4ab] h-[400px] sm:h-[520px] lg:h-[400px]">
      <img
        src={background}
        className="w-full h-full 2xl:object-contain"
        alt="Subscribe Logo"
      />
      <div className="flex flex-col justify-start items-center absolute left-1/2 sm:left-0 top-1/2 sm:w-full transform -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2 gap-6 sm:gap-8 md:gap-14">
        <p className="text-xl font-bold text-center text-custom_black-900 sm:text-[32px] lg:text-5xl">
          Subscribe to our newsletters.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-1/3 gap-2 sm:gap-4"
        >
          <Input
            required
            id="email"
            type="email"
            placeholder="Enter email address"
            {...register("email")}
          />

          <Button
            type="submit"
            title="Subscribe"
            isLoading={isSubmitting}
            isDisabled={!isDirty || !isValid}
            className="w-full h-14 lg:w-56"
          />
        </form>
      </div>
    </div>
  );
}
