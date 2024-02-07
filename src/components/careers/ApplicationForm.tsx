import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";

import { Input, Button, Uploader, PhoneNumber } from "@components/utils";
import useYupValidationResolver from "@hooks/useYupValidationResolver";

type Inputs = {
  email: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  currentCompany: string;
  previousCompany: string;
  resumeFile: File | null;
  coverLetterFile: File | null;
};

const schema = yup
  .object()
  .shape({
    lastName: yup.string().required(),
    firstName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    currentCompany: yup.string().required(),
    previousCompany: yup.string().required(),
    resumeFile: yup
      .mixed()
      .test("fileSize", "The file is too large", (value: File) => {
        if (!value) return false;
        return value.size <= 2097152;
      }),
    coverLetterFile: yup
      .mixed()
      .test("fileSize", "The file is too large", (value: File) => {
        if (!value) return false;
        return value.size <= 2097152;
      }),
  })
  .required();

const ApplicationForm = ({ role }: { role: string }) => {
  const resolver = useYupValidationResolver(schema);

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
      resumeFile: null,
      currentCompany: "",
      previousCompany: "",
      coverLetterFile: null,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const emailTo = "careers@completefarmer.com";
    const subject = `Application for ${role}`;

    const body = `
  Dear Hiring Manager,
  
  I am writing to express my interest in the position at your company. 
  Here are my details:
  
  Email: ${data.email}
  Last Name: ${data.lastName}
  First Name: ${data.firstName}
  Phone Number: ${data.phoneNumber}
  Current Company: ${data.currentCompany}
  Previous Company: ${data.previousCompany}
  
  I have attached my resume and cover letter for your consideration.
  
  Thank you for your time.
  
  Sincerely,
  [Your Name]
  `;
    let mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (resumeFile) {
      const resumeFileName = encodeURIComponent(resumeFile.name);
      mailtoLink += `&attachment1=${resumeFileName}`;
    }

    if (coverLetterFile) {
      const coverLetterFileName = encodeURIComponent(coverLetterFile.name);
      mailtoLink += `&attachment2=${coverLetterFileName}`;
    }

    window.open(mailtoLink, "_blank");
  };

  const phoneNumber = watch("phoneNumber");
  const resumeFile = watch("resumeFile");
  const coverLetterFile = watch("coverLetterFile");

  return (
    <section
      id="form"
      className="bg-custom_gray-400 mx-auto sm:max-w-full md:max-w-full px-8 pt-16 sm:pt-20 pb-11 sm:pb-20 sm:px-12 lg:px-16 md:px-8 lg:py-24 sm:py-12 scroll-mt-20"
    >
      <div className="lg:max-w-5xl max-w-7xl relative mx-auto sm:px-4 xl:px-0">
        <h2 className="font-bold text-left text-[28px] sm:text-[32px] text-grower-900">
          Apply for this job
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 sm:mt-10 space-y-10"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <Input
              required
              type="text"
              id="firstName"
              title="First Name"
              placeholder="Eg. Kofi"
              className="!bg-white"
              autoComplete="given-name"
              {...register("firstName")}
            />

            <Input
              required
              type="text"
              id="lastName"
              title="Last Name"
              className="!bg-white"
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
              className="!bg-white"
              outerClassName="col-span-2"
              placeholder="example@company.com"
              {...register("email")}
            />

            <PhoneNumber
              required
              value={phoneNumber}
              title="Phone Number"
              outerClassName="col-span-2 phone-input-white"
              onChange={(val: string) => setValue("phoneNumber", val)}
            />

            <Input
              required
              type="text"
              id="lastName"
              title="Last Name"
              placeholder="Eg. Okeke"
              className="!bg-white"
              outerClassName="col-span-2"
              autoComplete="family-name"
              {...register("lastName")}
            />

            <Input
              required
              type="text"
              id="currentCompany"
              title="Current Company"
              placeholder="Eg. X.com"
              className="!bg-white"
              outerClassName="col-span-2"
              autoComplete="currentCompany"
              {...register("currentCompany")}
            />

            <Input
              required
              type="text"
              id="previousCompany"
              title="Previous Company"
              placeholder="Eg. X.com"
              className="!bg-white"
              outerClassName="col-span-2"
              autoComplete="previousCompany"
              {...register("previousCompany")}
            />

            <div className="col-span-2 sm:col-span-1">
              <Uploader
                required
                name="resumeFile"
                value={resumeFile}
                // @ts-expect-error any
                setValue={setValue}
                title="Upload Resume"
                accept={{ "application/pdf": [".pdf"] }}
                description="File size should not exceed <span class='font-bold'>2MB</span>"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <Uploader
                required
                name="coverLetterFile"
                value={coverLetterFile}
                // @ts-expect-error any
                setValue={setValue}
                title="Upload Cover letter"
                accept={{ "application/pdf": [".pdf"] }}
                description="File size should not exceed <span class='font-bold'>2MB</span>"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="h-16"
            isLoading={isLoading}
            title="Submit application"
            isDisabled={!isDirty || !isValid}
          />
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
