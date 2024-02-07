import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import MobileBackground from "@assets/images/home/newsletter-bg-mobile.webp";
import TabletBackground from "@assets/images/home/newsletter-bg-tablet.webp";
import DesktopBackground from "@assets/images/home/newsletter-bg-desktop.webp";

import useResolution from "@hooks/useResolution";
import { onMailChimpSubmit } from "@utils/functions";

import { Button, Input } from "@components/utils";

export default function NewsLetter() {
  const activeBgColor = "bg-grower-500";
  const { screenType } = useResolution();
  const [background, setBackground] = useState<string>();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    if (screenType === "mobile") {
      setBackground(MobileBackground.src);
      return;
    }

    if (screenType === "tablet") {
      setBackground(TabletBackground.src);
      return;
    }

    if (screenType === "desktop") {
      setBackground(DesktopBackground.src);
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
        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-1/3 gap-2 sm:gap-4">
          <Input
            required
            id="email"
            name="email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={handleEmailChange}
            placeholder="Enter email address"
          />

          <div className="">
            <Button
              title="Subscribe"
              // isLoading={isLoading}
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
              isDisabled={!isEmailValid}
              className={`!${activeBgColor} w-full h-14 sm:w-40[x] sm:w-[605px] sm:h-16 lg:w-[139px] lg:h-[56px] sm:text-base`}
            />
            <ToastContainer hideProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
