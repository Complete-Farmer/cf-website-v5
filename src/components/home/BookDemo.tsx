/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "assets/styles/phonenumberinput.css";
import ReactGA from "react-ga4";

export default function BookDemo({ toggleModal, activeCategory }) {
  const [value, setValue] = useState();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.error("Form is not valid. Please check your input.");
      return;
    }

    handleButtonClick();

    const emailTo = activeCategory === "Buyer" ? "buyer@completefarmer.com" : "grower@completefarmer.com";
    const subject = `Request for ${activeCategory} Demo`;
    const { firstName, lastName, email, phoneNumber } = formData;

    const body = `
  Dear Complete Farmer,
  
  Here are my details:
  
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone Number: ${phoneNumber}
  
  
  Sincerely,
  [Your Name]
  `;
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
    setFormData({ ...formData, phoneNumber: newValue });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.email.trim() !== "" && emailRegex.test(formData.email.trim());
  };

  const handleButtonClick = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Submit"
    });

    // window.metapixelfunction("submit", "book_demo", {});

    window.dataLayer.push({
      event: "book_demo"
    });
  };

  return (
    <div className="w-2xl max-w-5xl isolate sm:w-full bg-white px-5 sm:px-6 py-8 sm:py-18 lg:px-12 sm:rounded-2xl">
      <div className="flex mx-auto text-center justify-end">
        <p className="text-xl font-bold text-right text-custom_black-900 mt-1 hover:cursor-pointer" onClick={toggleModal}>
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
              d="M13.4099 12.0002L19.7099 5.71019C19.8982 5.52188 20.004 5.26649 20.004 5.00019C20.004 4.73388 19.8982 4.47849 19.7099 4.29019C19.5216 4.10188 19.2662 3.99609 18.9999 3.99609C18.7336 3.99609 18.4782 4.10188 18.2899 4.29019L11.9999 10.5902L5.70994 4.29019C5.52164 4.10188 5.26624 3.99609 4.99994 3.99609C4.73364 3.99609 4.47824 4.10188 4.28994 4.29019C4.10164 4.47849 3.99585 4.73388 3.99585 5.00019C3.99585 5.26649 4.10164 5.52188 4.28994 5.71019L10.5899 12.0002L4.28994 18.2902C4.19621 18.3831 4.12182 18.4937 4.07105 18.6156C4.02028 18.7375 3.99414 18.8682 3.99414 19.0002C3.99414 19.1322 4.02028 19.2629 4.07105 19.3848C4.12182 19.5066 4.19621 19.6172 4.28994 19.7102C4.3829 19.8039 4.4935 19.8783 4.61536 19.9291C4.73722 19.9798 4.86793 20.006 4.99994 20.006C5.13195 20.006 5.26266 19.9798 5.38452 19.9291C5.50638 19.8783 5.61698 19.8039 5.70994 19.7102L11.9999 13.4102L18.2899 19.7102C18.3829 19.8039 18.4935 19.8783 18.6154 19.9291C18.7372 19.9798 18.8679 20.006 18.9999 20.006C19.132 20.006 19.2627 19.9798 19.3845 19.9291C19.5064 19.8783 19.617 19.8039 19.7099 19.7102C19.8037 19.6172 19.8781 19.5066 19.9288 19.3848C19.9796 19.2629 20.0057 19.1322 20.0057 19.0002C20.0057 18.8682 19.9796 18.7375 19.9288 18.6156C19.8781 18.4937 19.8037 18.3831 19.7099 18.2902L13.4099 12.0002Z"
              fill="#6C6C6C"
            />
          </svg>
        </p>
      </div>
      <div className="mx-auto max-w-2xl mt-5 text-center">
        <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
          Your demo will begin shortly
        </h2>
        <p className="mt-2 text-xs leading-4 md:text-sm md:leading-5 text-gray-600 px-6 sm:px-2">
          But first, we need some info. Share a few details in the form
          <br className="hidden lg:block" /> below so we can help you better.
        </p>
      </div>
      <form onSubmit={handleSendEmail} className="mx-auto mt-6 max-w-xl sm:mt-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="text-[#6c6c6c] block text-sm font-semibold leading-5">
              First Name <span className="text-[#EB2F2F]">*</span>
            </label>
            <div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Eg. John"
                autoComplete="given-name"
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="block w-full h-14  bg-[#EFEFEF]  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6C6C6C] focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="text-[#6c6c6c] block text-sm font-semibold leading-5 ">
              Last Name <span className="text-[#EB2F2F]">*</span>
            </label>
            <div>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Eg. Doe"
                autoComplete="family-name"
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="block w-full h-14 bg-[#EFEFEF]  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6C6C6C] focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="email" className="text-[#6c6c6c] block text-sm font-semibold leading-5">
              Email <span className="text-[#EB2F2F]">*</span>
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@company.com"
                autoComplete="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6C6C6C] focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="phoneNumber" className="text-[#6c6c6c] block text-sm font-semibold leading-5">
              Phone Number <span className="text-[#EB2F2F]">*</span>
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
              </div>
              <PhoneInput
                className="reactphone text-base leading-6"
                international
                countryCallingCodeEditable={false}
                defaultCountry="GH"
                value={value}
                onChange={handleValueChange}
                style={{ outline: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!isFormValid()}
            className="disabled:cursor-not-allowed block w-full rounded-md bg-grower-500 py-4 sm:px-3.5 py-2.5 text-center text-base leading-6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="lg:hidden">Submit</span>
            <span className="hidden lg:block">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
