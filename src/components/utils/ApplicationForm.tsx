import { useStore } from "@nanostores/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input, PhoneNumber, Uploader } from "@components/utils/Forms";
import { Wrapper } from "@components/utils";

import { $applicationFormModal } from "@utils/stores";

type Inputs = {
  town: string;
  email: string;
  region: string;
  lastName: string;
  firstName: string;
  file: File | null;
  phoneNumber: string;
};

const schema = yup
  .object()
  .shape({
    town: yup.string().required(),
    region: yup.string().required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    file: yup
      .mixed()
      .test("fileSize", "The file is too large", (value: File) => {
        if (!value) return false;
        return value.size <= 10485760;
      }),
  })
  .required();

interface Props {
  title: string;
}

const ApplicationForm = ({ title }: Props) => {
  const applicationFormModal = useStore($applicationFormModal);

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { isDirty, isValid, isLoading },
  } = useForm<Inputs>({
    // @ts-expect-error ts(2322)
    resolver: yupResolver(schema),
    defaultValues: {
      town: "",
      email: "",
      region: "",
      file: null,
      lastName: "",
      firstName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleButtonClick();
    const emailTo = "careers@completefarmer.com";
    const subject = "Application for Grower Agent";
    const { firstName, lastName, email, phoneNumber, region, town, file } =
      data;

    const body = `
  Dear Complete Farmer,
  
  I am writing to express my interest to become Agent at your company. 

  Here are my details:
  
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone Number: ${phoneNumber}
  Region: ${region}
  Town: ${town}
  
  I have attached my resume for your consideration.
  
  Thank you for your time.
  
  Sincerely,
  [Your Name]
  `;

    let mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    const resumeFileName = encodeURIComponent(file.name);
    mailtoLink += `&attachment1=${resumeFileName}`;

    window.open(mailtoLink, "_blank");
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Submit"
    // });
    // // window.metapixelfunction("submit", "agent_grower_agent", {});
    // window.dataLayer.push({
    //   event: "agent_grower_agent"
    // });
    //   window.metapixelfunction("submit", "join_academy", {});
    //   window.dataLayer.push({
    //     event: "join_academy"
    //   });
  };

  const file = watch("file");
  const phoneNumber = watch("phoneNumber");

  const onClose = () => $applicationFormModal.set(false);

  return (
    <Wrapper
      onClose={onClose}
      isOpen={applicationFormModal}
      className="flex w-full h-55vh transform text-base transition md:my-20 md:max-w-2xl md:px-4 lg:max-w-2xl"
    >
      <div className="w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-2xl px-10 py-12">
        <div className="relative flex flex-row-reverse">
          <div className="absolute flex flex-row text-center justify-end -top-8 -right-4">
            <div
              className="text-custom_gray-300 hover:cursor-pointer"
              onClick={onClose}
            >
              <MenuCloseIcon className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
              {title}
            </h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 sm:mt-10 space-y-8"
        >
          <div className="grid grid-cols-2 gap-4">
            <Input
              required
              type="text"
              id="firstName"
              title="First Name"
              placeholder="Eg. John"
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

            <div className="col-span-2">
              <Input
                required
                id="email"
                type="email"
                autoComplete="email"
                title="Email"
                placeholder="example@company.com"
                {...register("email")}
              />
            </div>

            <div className="col-span-2">
              <PhoneNumber
                required
                value={phoneNumber}
                title="Phone Number"
                onChange={(val: string) => setValue("phoneNumber", val)}
              />
            </div>

            <Input
              required
              type="text"
              id="region"
              title="Region"
              placeholder="Enter your region"
              {...register("region")}
            />

            <Input
              required
              id="town"
              type="text"
              title="Town"
              placeholder="Enter your town"
              {...register("town")}
            />

            <div className="col-span-2">
              <Uploader
                required
                name="file"
                value={file}
                // @ts-expect-error any
                setValue={setValue}
                title="Upload Resume/CV"
                accept={{ "application/pdf": [".pdf"] }}
                description="Please upload a formatted copy of your resume below. Max size: <span class='font-bold'>2MB</span>"
              />
            </div>
          </div>

          <Button
            title="Submit"
            type="submit"
            className="h-14"
            isLoading={isLoading}
            isDisabled={!isDirty || !isValid}
          />
        </form>
      </div>
    </Wrapper>
  );
};

export default ApplicationForm;
