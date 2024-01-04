import "react-phone-number-input/style.css";
import "../../assets/styles/phonenumberinput.css";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";

export default function ContactForm({ changeToggle }: { changeToggle: () => void;}) {
  const [value, setValue] = useState<string>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.email.trim() !== "" && emailRegex.test(formData.email.trim());
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "News Letter"
    // });

    // window.metapixelfunction("news", "news_letter", {});

    // window.dataLayer.push({
    //   event: "news_letter"
    // });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
    setValue("");
  };

  return (
    <div className="bg-white max-w-7xl relative mx-auto xl:px-0 items-center h-full">
      <div className="flex mx-auto text-center justify-between">
        <p className=" my-auto text-sm sm:text-xl font-bold text-left text-custom_black-900">Contact our team</p>
        <p className="text-xl font-bold text-right text-custom_black-900 rounded-full bg-[#efefef] p-1 hover:cursor-pointer" onClick={changeToggle}>
          <svg
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
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
      <form action="#" method="POST" className="mx-auto mt-3 sm:mt-5">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6  w-2/3 text-left text-[#6c6c6c]"
            >
              First Name <span className="text-[#EB2F2F]">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                placeholder="Eg. John"
                autoComplete="given-name"
                className="block w-full h-10 sm:h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6  w-2/3 text-left text-[#6c6c6c]"
            >
              Last Name <span className="text-[#EB2F2F]">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Eg. Doe"
                autoComplete="family-name"
                className="block w-full h-10 sm:h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="email"
              className="self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6  w-2/3 text-left text-[#6c6c6c]"
            >
              Email <span className="text-[#EB2F2F]">*</span>
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@company.com"
                autoComplete="email"
                onChange={handleInputChange}
                className="block w-full h-10 sm:h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="phone-number"
              className="self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6 w-2/3 text-left text-[#6c6c6c]"
            >
              Phone Number <span className="text-[#EB2F2F]">*</span>
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
              </div>
              <PhoneInput
                className="reactphone"
                international
                countryCallingCodeEditable={false}
                defaultCountry="GH"
                value={value}
                onChange={handleValueChange}
                style={{ outline: "none" }}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="message"
              className="self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6  w-2/3 text-left text-[#6c6c6c]"
            >
              Leave a message <span className="text-[#EB2F2F]">*</span>
            </label>
            <div className="mt-1">
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows={4}
                className="block w-full h-8rem bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-12">
          <button
            type="submit"
            disabled={!isValidEmail()}
            onClick={handleButtonClick}
            className="disabled:cursor-not-allowed block w-full h-10 sm:h-14 rounded-md bg-[#31BC2E] px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
