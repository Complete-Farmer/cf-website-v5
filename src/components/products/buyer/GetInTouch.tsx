import * as yup from "yup";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { useForm, type SubmitHandler } from "react-hook-form";


import useYupValidationResolver from "@hooks/useYupValidationResolver";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input, PhoneNumber, Tab, Uploader } from "@components/utils";

type Inputs = {
  email: string;
  fullName: string;
  file: File | null;
  phoneNumber: string;
};

const schema = yup
  .object()
  .shape({
    phoneNumber: yup.string(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    file: yup
      .mixed()
      .test("fileSize", "The file is too large", (value: File) => {
        if (!value) return true;
        return value.size <= 10485760;
      }),
  })
  .required();

const cateogries = [
  {
    name: "Fill in a form",
    slug: "grower",
    current: true,
  },
  {
    name: "Schedule a call",
    slug: "buyer",
    current: false,
  },
];

function GetInTouchModal({ toggleModal }: { toggleModal: () => void }) {
  const resolver = useYupValidationResolver(schema);
  const [categories, setCategories] = useState(cateogries);
  const [activeCategory, setActiveCategory] = useState("Fill in a form");

  const changeCategory = (i: number) => {
    const catIndex = i === 0 ? "Fill in a form" : "Schedule a call";
    cateogries.filter((c) => {
      if (c.name === catIndex) c.current = true;
      if (c.name !== catIndex) c.current = false;
      return c;
    });
    const activeCat = cateogries.find((i) => i.name === catIndex);
    setCategories(cateogries);
    activeCat && setActiveCategory(activeCat.name);
  };

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid, isLoading },
  } = useForm<Inputs>({
    resolver,
    defaultValues: {
      file: null,
      email: "",
      fullName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Send"
    // });

    // window.metapixelfunction("send", "details_send", {});

    // window.dataLayer.push({
    //   event: "details_send"
    // });
  };

  const file = watch("file");
  const phoneNumber = watch("phoneNumber");

  return (
    <div className="relative w-full max-w-5xl isolate bg-white sm:rounded-xl px-4 py-6 sm:pt-8 sm:pb-14 sm:px-10">
      <div className="flex flex-row-reverse">
        <div
          role="button"
          className="absolute top-4 right-2 sm:top-5 sm:right-6 text-custom_gray-300 hover:cursor-pointer"
          onClick={toggleModal}
        >
          <MenuCloseIcon className="sm:h-7 sm:w-7" aria-hidden="true" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
            Get in touch
          </h2>
        </div>
      </div>

      <Tab
        categories={categories}
        changeCategory={changeCategory}
        activeBgColor="bg-buyer-500"
        normalBgColor="bg-custom_gray-200"
        inActiveBgColor="bg-custom_gray-200"
        className="lg:!max-w-full my-4 lg:mt-0"
        inActiveTextColor="text-custom_black-900"
      />

      {activeCategory === "Fill in a form" && (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-8">
          <div className="space-y-4">
            <Input
              required
              type="text"
              id="fullName"
              title="Full Name"
              placeholder="Eg. John Okeke"
              autoComplete="given-name"
              {...register("fullName")}
            />

            <Input
              required
              id="email"
              type="email"
              autoComplete="email"
              title="Buisiness email"
              placeholder="example@company.com"
              {...register("email")}
            />

            <PhoneNumber
              value={phoneNumber}
              title="Phone Number"
              onChange={(val: string) => setValue("phoneNumber", val)}
            />

            <Uploader
              name="file"
              value={file}
              // @ts-expect-error any
              setValue={setValue}
              title="Add attachment"
              accept={{ "application/pdf": [".pdf"] }}
              description="Be it a rough draft or a detailed brief, as long as you find it relevant. Max size: <span class='font-bold'>10MB</span>"
            />
          </div>

          <Button
            title="Send"
            type="submit"
            isLoading={isLoading}
            isDisabled={!isDirty || !isValid}
            className="py-4"
          />
        </form>
      )}

      {activeCategory === "Schedule a call" && (
        <InlineWidget
          url="https://calendly.com/completefarmerbuyer/30min"
          styles={{
            height: "46vh"
          }}
          pageSettings={{
            backgroundColor: "000000",
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            primaryColor: "2463FF",
            textColor: "4d5055"
          }}
        />
      )}
    </div>
  );
}

export default GetInTouchModal;
