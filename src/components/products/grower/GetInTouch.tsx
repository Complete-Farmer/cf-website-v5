import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MenuCloseIcon } from "@assets/icons";
import { Button, Input, PhoneNumber, Uploader } from "@components/utils";

type Inputs = {
  email: string;
  fullName: string;
  file: File | null;
  phoneNumber: string;
};

const schema = yup
  .object().shape({
    phoneNumber: yup.string(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    file: yup.mixed().test("fileSize", "The file is too large", (value: File) => {
      if (!value) return true;
      return value.size <= 10485760;
    }),
  })
  .required();

const GetInTouchForm = ({
  toggleModal,
}: {
  toggleModal: () => void;
}) => {
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
      file: null,
      email: "",
      fullName: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const file = watch("file");
  const phoneNumber = watch("phoneNumber");

  return (
    <div className="relative w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-md px-4 py-6 sm:p-8">
      <div className="flex flex-row-reverse">
        <div
          role="button"
          className="absolute top-4 right-3 sm:top-5 sm:right-6 text-custom_gray-300 hover:cursor-pointer"
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-6 max-w-xl space-y-8"
      >
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
    </div>
  );
};

export default GetInTouchForm;