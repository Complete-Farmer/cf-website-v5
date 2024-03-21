import * as yup from "yup";
import { toast } from "react-toastify";
import { useStore } from "@nanostores/react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { MenuCloseIcon } from "@assets/icons";

import { $joinSalesAffiliateModal } from "@utils/stores";
import useYupValidationResolver from "@hooks/useYupValidationResolver";

import {
  Input,
  Button,
  Wrapper,
  Uploader,
  PhoneNumber,
} from "@components/utils";
import { submitApplication } from "@utils/api";
import { fileToBase64 } from "@utils/functions";

type Inputs = {
  email: string;
  country: string;
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
        return value.size <= 2097152;
      }),
  })
  .required();

const RegistrationForm = () => {
  const resolver = useYupValidationResolver(schema);
  const joinSalesAffiliateModal = useStore($joinSalesAffiliateModal);

  const onClose = () => $joinSalesAffiliateModal.set(false);

  const {
    reset,
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
      country: "",
      fullName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await submitApplication({
        text: `
      Dear Complete Farmer,
      
      I am writing to express my interest to become a buyer sales affiliate at your company. 
    
      Here are my details:
      
      • Full Name: ${data.fullName}
      • Email: ${data.email}
      • Phone Number: ${data.phoneNumber}
      • Country: ${data.country}
      
      I have attached my resume for your consideration.
      
      Thank you for your time.
      
      Sincerely,
    ${data.fullName}
      `,
        to: "buyer@completefarmer.com",
        subject: "Application for sales affiliate",
        attachments: [
          {
            path: await fileToBase64(data.file),
            filename: data.file.name
          },
        ]
      });
  
      if(res.statusCode === 200) {
        reset({});
        onClose();
        toast(res.message, { type: "success" });
        window.gtag("event", "form_submit", {
          event_category: "Job Application Form",
          event_label: "Application for sales affiliate",
        });

        window.fbq("track", "SubmitApplication", {
          content_name: "Application for sales affiliate",
          content_category: "Job Application Form",
        });
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      toast(error.message || error?.data?.message || "Unknown server error", {
        type: "error",
      });
    }
  };
  

  const file = watch("file");
  const phoneNumber = watch("phoneNumber");

  return (
    <Wrapper
      isOpen={joinSalesAffiliateModal}
      onClose={onClose}
    >
      <div className="relative w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-md px-4 py-6 sm:p-8">
        <div className="flex flex-row-reverse">
          <div
            role="button"
            className="absolute top-4 right-3 sm:top-5 sm:right-6 text-custom_gray-300 hover:cursor-pointer"
            onClick={onClose}
          >
            <MenuCloseIcon className="sm:h-7 sm:w-7" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
              Become a sales affiliate
            </h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 max-w-xl sm:mt-6 space-y-8"
        >
          <div className="space-y-4">
            <Input
              required
              type="text"
              id="fullName"
              title="Full Name"
              placeholder="Eg. John Okeke"
              autoComplete="given-name family-name"
              {...register("fullName")}
            />

            <Input
              required
              id="email"
              type="email"
              autoComplete="email"
              title="Email"
              placeholder="john@company.com"
              {...register("email")}
            />

            <PhoneNumber
              value={phoneNumber}
              title="Phone Number"
              onChange={(number: string, country) => {
                setValue("country", country);
                setValue("phoneNumber", number);
              }}
            />

            <Uploader
              name="file"
              value={file}
              // @ts-expect-error any
              setValue={setValue}
              title="Upload Resume/CV"
              accept={{ "application/pdf": [".pdf"] }}
              description="Be it a rough draft or a detailed brief, as long as you find it relevant. Max size: <span class='font-bold'>2MB</span>"
            />
          </div>

          <Button
            title="Join us"
            type="submit"
            isLoading={isLoading}
            isDisabled={!isDirty || !isValid}
            className="!bg-buyer-500 h-14"
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default RegistrationForm;
