import * as yup from "yup";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { MenuCloseIcon } from "@assets/icons";
import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { Input, Button, PhoneNumber } from "@components/utils";

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

export default function EstimateModal({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const resolver = useYupValidationResolver(schema);
  const [farmPlan] = useState(null);

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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };

  const phoneNumber = watch("phoneNumber");

  // const handleGenerateFarmPlan = (e: IClickEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setFarmPlan("dummy");
  //   }, 1000);
  // };

  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Free Plan"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "FreePlan"
    // });
    // ReactPixel.track("Free Plan", {});
  };

  return (
    <div className="w-2xl max-w-4xl isolate sm:w-full bg-white sm:rounded-2xl pt-8">
      <div className=" px-6">
        <div className="flex flex-row-reverse">
          <div className="flex flex-row text-center justify-end">
            <button
              className="flex justify-center items-center h-10 w-10 rounded-full bg-custom_gray-200"
              onClick={toggleModal}
            >
              <MenuCloseIcon />
            </button>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-custom_green-900">
              Tell us where to send your free plan
            </h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-xl sm:mt-10"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
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
          <div className="mt-10">
            <Button
              type="submit"
              className="h-16"
              isLoading={isLoading}
              title="Submit"
              isDisabled={!isDirty || !isValid}
            />
          </div>
          <div className="col-span-full mt-8 mb-10">
            <p className="w-full max-w-5xl text-sm text-center text-custom_black-900">
              <span>
                By clicking on Submit, I agree to Complete Farmer{" "}
                <a
                  onClick={handleLinkClick}
                  href="www.completefarmer.com/terms-and-conditions"
                  className="text-grower-500 font-semibold"
                >
                  Terms & Conditions
                </a>{" "}
                and <br className="hidden xl:block" />
                <a
                  onClick={handleLinkClick}
                  href="www.completefarmer.com/privacy-policy"
                  className="text-grower-500 font-semibold"
                >
                  Privacy Policy
                </a>
              </span>{" "}
            </p>
          </div>
        </form>
      </div>

      {farmPlan && (
        <div className="w-full max-w-5xl mt-4 mx-0 relative bg-custom_gray-400 py-8">
          <div className="px-6 flex justify-between hover:cursor-pointer">
            <p className="text-xl font-bold text-left text-custom_black-900">
              Download generated farm plan
            </p>
            <div className="flex justify-start items-start h-6 opacity-80 gap-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
              >
                <path
                  d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z"
                  fill="#31BC2E"
                />
              </svg>
              <p className="text-xl font-bold text-center text-grower-500">
                Download
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
