import { useEffect, useState } from "react";

import { classNames } from "@utils/functions";
import { $joinSalesAffiliateModal } from "@utils/stores";
import { Button, HeadingOneLine } from "@components/utils";

import Image3 from "@assets/images/products/buyer/sales-affiliate/earn.webp";
import Image1 from "@assets/images/products/buyer/sales-affiliate/signup.webp";
import Image2 from "@assets/images/products/buyer/sales-affiliate/promote.webp";
import Image5 from "@assets/images/products/buyer/sales-affiliate/get-paid.webp";
import Image4 from "@assets/images/products/buyer/sales-affiliate/track-and-optimize.webp";

const data = [
  {
    title: "1. Sign up",
    text: "Get started by simply filling out the registration form. Upon a successful onboarding, you’ll gain access to your personalized affiliate dashboard.",
    img: Image1,
  },
  {
    title: "2. Promote",
    text: "Once you have access, start promoting Complete Farmer’s commodity offerings within your network",
    img: Image2,
  },
  {
    title: "3. Earn",
    text: "Earn commission as you move a buyer through the various stages of the sales pipeline. The more sales you generate, the more income you’ll generate.",
    img: Image3,
  },
  {
    title: "4. Track and optimize",
    text: "Monitor your performance through your affiliate dashboard and track detailed updates on each buyer engagement",
    img: Image4,
  },
  {
    title: "5. Get paid",
    text: "Easily withdraw your earnings once you reach the minimum payment threshold. We provide timely payments to our affiliates.",
    img: Image5,
  },
];

const HowAffiliateWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(data[0]);
  const [fillingPercentage, setFillingPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrent(data[nextIndex]);
      setCurrentIndex(nextIndex);
      setFillingPercentage(0);
    }, 4500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  useEffect(() => {
    const fillInterval = setInterval(() => {
      if (fillingPercentage < 100) {
        setFillingPercentage(fillingPercentage + 1.2);
      }
    }, 50);

    return () => {
      clearInterval(fillInterval);
    };
  }, [currentIndex, fillingPercentage]);

  const handleSetIndex = (ind) => {
    setCurrentIndex(ind);
    setCurrent(data[ind]);
    setFillingPercentage(0);
  };

  return (
    <section className="max-w-7xl mx-auto lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <HeadingOneLine
          titleTextColor="text-buyer-900"
          title="How the affiliate program works"
        />
      </div>

      <div className="flex flex-col sm:flex-row space-x-4 py-10 md:py-14 lg:py-20 mx-auto">
        <div className="lg:text-left sm:text-center lg:w-1/2 lg:pr-6 space-y-10">
          <div className="space-y-5">
            {data.map((item, index) => (
              <div
                role="button"
                key={index + "div"}
                onClick={() => handleSetIndex(index)}
                className="flex justify-start items-center text-custom_black-900 space-x-4 group"
              >
                <div>
                  <svg
                    height={94}
                    fill="none"
                    viewBox="0 0 6 94"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="6" height={100} fill="#EFEFEF" />
                    <rect
                      width="6"
                      height={currentIndex === index ? fillingPercentage : 0}
                      fill="#367AFE"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start space-y-2">
                  <h4
                    className={classNames(
                      currentIndex === index ? "!text-buyer-500" : "",
                      "text-xl lg:text-2xl leading-6 lg:leading-[30px] font-semibold text-left group-hover:text-buyer-500"
                    )}
                  >
                    {item.title}
                  </h4>
                  <p className="text-base leading-[30px] text-left">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 lg:px-0">
            <Button
              title="Join the affiliate program"
              onClick={() => {
                $joinSalesAffiliateModal.set(true);
              }}
              className="!rounded-full !bg-buyer-500 py-5 text-xl xl:!w-fit !px-12 xl:ml-4"
            />
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center max-h-fit max-w-5xl py-0 rounded-lg lg:w-1/2">
          <img
            src={current.img.src}
            alt={current.text}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HowAffiliateWorks;
