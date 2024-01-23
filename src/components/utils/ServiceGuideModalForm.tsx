import { useState } from "react";
import Button from "./Button";
import type { IChangeEvent } from "types/app";

interface IProps {
  data: {
    title: string;
    buttonBg: string;
    buttonText: string;
    description: string;
  };
}

function ServiceGuideModalForm({ data }: IProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleInputChange = (e: IChangeEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return formData.email.trim() !== "" && isEmailValid(formData.email);
  };

  const isEmailValid = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleFormSubmit = () => {
    if (!isFormValid()) {
      console.error("Form is not valid. Please check your input.");
      return;
    }

    console.log("Form submitted successfully");

    setFormData({
      firstName: "",
      email: "",
    });
  };

  return (
    <div className="isolate bg-white rounded-2xl">
      <div
        className="relative z-10 h-auto p-8 py-10 overflow-hidden border-gray-300 rounded-lg shadow-2xl px-7 "
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <h3 className="mb-6 text-2xl font-medium text-center text-custom_black-900">
          {data.title}
        </h3>
        <h5 className="mb-6 text-md font-normal  text-center text-custom_black-900">
          {data.description}
        </h5>
        <form
          onSubmit={handleFormSubmit}
          action="#"
          method="POST"
          className="mx-auto mt-4 max-w-2xl w-2xl sm:mt-6"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-12">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="email"
                  placeholder="Eg. John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-12">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Work Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-12 mt-4">
              <Button
                type="submit"
                title={data.buttonText}
                bgColor={data.buttonBg}
                isDisabled={!isFormValid()}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceGuideModalForm;
