import { useEffect, useState } from "react";

import { classNames } from "@utils/functions";
import { HeadingOneLine } from "@components/utils";

import Image3 from "@assets/images/products/buyer/sales-affiliate/extensive-support.webp";
import Image4 from "@assets/images/products/buyer/sales-affiliate/easy-tracking-and-payment.webp";
import Image2 from "@assets/images/products/buyer/sales-affiliate/lucrative-commission-structure.webp";
import Image1 from "@assets/images/products/buyer/sales-affiliate/high-quality-agricultural-commodities.webp";

const data = [
  {
    title: "High-quality Agricultural Commodities",
    text: "Introduce your network to a range of high-quality agricultural commodities which are grown to meet strict industry standards.",
    img: Image1,
  },
  {
    title: "Lucrative commission structure",
    text: "Earn commissions as you successfully move prospects through the sales pipeline even before closing. You can earn up to $5000 a month in commissions.",
    img: Image2,
  },
  {
    title: "Extensive Support",
    text: "Enjoy comprehensive resources to help you excel in your role as a sales affiliate. You’ll have access to training, a dedicated support agent and sales materials.",
    img: Image3,
  },
  {
    title: "Easy tracking and payment",
    text: "Our affiliate platform ensures accurate referral tracking, performance monitoring and prompt payments.",
    img: Image4,
  },
];

const WhyChooseAffiliate = () => {
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

  const handleSetIndex = (ind: number) => {
    setCurrentIndex(ind);
    setCurrent(data[ind]);
    setFillingPercentage(0);
  };

  return (
    <section className="max-w-7xl mx-auto lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <HeadingOneLine
          titleTextColor="text-buyer-900"
          title="Why choose the Complete Farmer Affiliate Program?"
        />
      </div>

      <div className="flex flex-col sm:flex-row space-x-4 py-10 md:py-14 lg:py-20 mx-auto">
        <div className="lg:text-left sm:text-center lg:w-1/2 lg:pr-6 space-y-10">
          <div className="space-y-5">
            {data.map((item, index) => (
              <div
                role='button'
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

export default WhyChooseAffiliate;