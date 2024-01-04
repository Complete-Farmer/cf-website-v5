import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import SubscribeLogo from "../../assets/logos/home/subscribe-news.svg";
import SubscribeMedium from "../../assets/logos/home/subscribe-news-medium.svg";
import SubscribeLogoSmall from "../../assets/logos/home/subscribe-news-small.svg";

import { useResolution } from "../../hooks/useResolution";
import { onMailChimpSubmit } from "../../utils/functions";

export default function NewsLetter() {
  const activeBgColor = "bg-custom_lightgreen-500";
  const { screenType } = useResolution();
  const [background, setBackground] = useState<string>();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    if (screenType === "mobile") {
      setBackground(SubscribeLogoSmall.src);
      return;
    }

    if (screenType === "tablet") {
      setBackground(SubscribeMedium.src);
      return;
    }

    if (screenType === "desktop") {
      setBackground(SubscribeLogo.src);
      return;
    }
  }, [screenType]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);
    setIsEmailValid(isValidEmail);
  };

  const handleButtonClick = () => {

    const elem = document.getElementById("mce-EMAIL") as HTMLInputElement;
    if (elem?.value) {
      onMailChimpSubmit({
        email: elem.value,
        tags: "7931890", // Home Tag
      });

      // Reset the input field
      setEmail("");
      toast("Successfully Subscribed", {
        type: "success"
      });

      // ReactGA.event({
      //   category: "Button Click",
      //   action: "News Letter"
      // });

      // try {
      //   window.metapixelfunction("news", "news_letter", {});

      //   window.dataLayer.push({
      //     event: "news_letter"
      //   });
      // } catch (error) {
      //   console.log("error: ", error);
      // }
    }
  };

  return (
    <div className="box-border block leading-6 text-center text-indigo-900 w-full max-w-full sm:max-w-full relative overflow-hidden bg-[#ade4ab] h-[400px] sm:h-[520px] lg:h-[400px]">
      <img
        src={background}
        className="w-full h-full 2xl:object-contain"
        alt="Subscribe Logo"
      />
      <div className="flex flex-col justify-start items-center absolute left-1/2 sm:left-0 top-1/2 sm:w-full transform -translate-x-1/2 sm:-translate-x-0 -translate-y-1/2 gap-6 sm:gap-8 md:gap-14">
        <p className="text-xl font-bold text-center text-custom_black-900 sm:text-[32px] lg:text-5xl">
          Subscribe to our newsletters.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center relative gap-3 md:gap-4">
          <div className="sm:col-span-2">
            <div className="">
              <input
                required
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                value={email}
                autoComplete="email"
                onChange={handleEmailChange}
                placeholder="Enter email address"
                className="block w-80 sm:w-[608px] rounded-md border-0 px-3.5 sm:h-[56px] lg:w-[500px] py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <button
              disabled={!isEmailValid}
              onChange={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
              className={`${activeBgColor} disabled:cursor-not-allowed w-full h-14 sm:w-40[x] sm:w-[605px] sm:h-16 lg:w-[139px] lg:h-[56px] sm:text-base sm:font-bold sm:mr-0 inline-flex items-center justify-center px-6 mt-4 lg:mt-0 sm:mr-6[x] font-medium tracking-wide text-white transition duration-200 rounded-lg focus:shadow-outline focus:outline-none`}
            >
              Subscribe
            </button>
            <ToastContainer hideProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
