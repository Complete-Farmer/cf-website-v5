import { useEffect, useState } from "react";

import { classNames, getAppLink } from "@utils/functions";
import { Button, HeadingOneLine } from "@components/utils";

import Image1 from "@assets/images/products/buyer/everything-crop/image-1.webp";
import Image2 from "@assets/images/products/buyer/everything-crop/image-2.webp";
import Image3 from "@assets/images/products/buyer/everything-crop/image-3.webp";
import Image4 from "@assets/images/products/buyer/everything-crop/image-4.webp";

const data = [
  {
    text: "Easy online ordering: Choose to either source readily available crops or customize your order to fit your specific needs",
    img: Image1,
  },
  {
    text: "Fast grower matching: Get matched with a pre-assessed farmer who will use our data-driven cultivation protocols to grow quality crops",
    img: Image2,
  },
  {
    text: "Transparent monitoring: Track and monitor each stage of production on your personal dashboard",
    img: Image3,
  },
  {
    text: "Reliable delivery: Produce is shipped to your desired destination in safe and secure packages",
    img: Image4,
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
  }, [data, currentIndex]);

  useEffect(() => {
    const fillInterval = setInterval(() => {
      if (fillingPercentage + 3 <= 93) {
        setFillingPercentage(fillingPercentage + 3);
      }
    }, 50);

    return () => {
      clearInterval(fillInterval);
    };
  }, [currentIndex, fillingPercentage]);

  const handleSetIndex = (ind: number) => {
    setCurrentIndex(ind);
    setCurrent(data[ind]);
    setFillingPercentage(0);
  };

  const handleButtonClick = () => {
    window.fbq("track", "click", {
      content_category: "Affiliate Button Clicked",
      content_name: "Affiliate Program"
    });
    window.gtag("event", "Affiliate", {
      event_category: "Affiliate Button Clicked",
      event_label: "Affiliate Program"
    });
  };

  return (
    <section className="max-w-7xl mx-auto lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <HeadingOneLine
          titleTextColor="text-buyer-900"
          title="Experience crop sourcing on autopilot from order to fulfilment"
          desc="We take care of every step from production to shipment so you can confidently crush your procurement targets. Repeatedly."
        />
      </div>

      <div className="flex flex-col sm:flex-row space-x-4 py-10 md:py-14 lg:py-20 mx-auto">
        <div className="lg:text-left sm:text-center lg:w-1/2 lg:pr-6">
          <div className="space-y-5 mb-10">
            {data.map((item, index) => (
              <div
                key={index + "div"}
                onClick={() => handleSetIndex(index)}
                className="flex justify-start items-center text-custom_black-900 space-x-4 group"
              >
                <div>
                  <svg
                    key={index}
                    height={94}
                    fill="none"
                    viewBox="0 0 6 94"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="6" height={94} fill="#EFEFEF" />
                    <rect
                      width="6"
                      height={currentIndex === index ? fillingPercentage : 0}
                      fill="#367AFE"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-start items-start space-y-2">
                  <p
                    className={classNames(
                      currentIndex === index ? "!text-buyer-500" : "",
                      "text-base lg:text-xl leading-[30px] text-left group-hover:text-buyer-500"
                    )}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a target="_blank" href={getAppLink("Signup Buyer")} className="contents relative" rel="noreferrer">
            <Button
              title="Start sourcing from qualified farmers"
              className="!bg-buyer-500 text-xl h-14 px-8 !rounded-full !w-auto"
              onClick={() => {
              // toggleModal();
                handleButtonClick();
              }}
            />
          </a>
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
