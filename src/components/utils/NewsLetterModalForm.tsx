import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { onMailChimpSubmit } from "@utils/functions";
import Button from "./Button";

interface IProps {
  tag: string;
  data: {
    title: string;
    buttonBg: string;
    buttonText: string;
  };
}

function NewsLetterModalForm({ data, tag }: IProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      toast.error("Invalid email address");
      return;
    }

    onMailChimpSubmit({
      email: formData.email,
      firstname: formData.firstName,
      tags: tag,
    });

    setFormData({
      firstName: "",
      email: "",
    });

    toast("Successfully Subscribed", {
      type: "success",
    });
  };

  return (
    <div className="isolate bg-white rounded-2xl">
      <div
        className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white  border-gray-300 rounded-lg shadow-2xl px-7 "
        data-rounded="rounded-lg"
        data-rounded-max="rounded-full"
      >
        <h3 className="mb-6 text-2xl font-medium text-center text-custom_black-900">
          {data.title}
        </h3>
        <form
          onSubmit={handleSubmit}
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
                  placeholder="Eg. John"
                  autoComplete="email"
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
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@company.com"
                  autoComplete="email"
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
                isDisabled={!isValidEmail}
              />

              <ToastContainer hideProgressBar />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsLetterModalForm;
