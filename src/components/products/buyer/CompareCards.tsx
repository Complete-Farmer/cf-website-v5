import {
  DirectAccessIcon,
  EasyDigitizedProcess,
  HighQualityCrop,
  InconsistentSupplyIcon,
  LackOfTransparencyIcon,
  LongAndFragmentedIcon,
  LowQualityCropIcon,
  MiddlemenInterferenceIcon,
  RealTimeVisibilityIcon,
  TransparentMonitoringIcon,
} from "@assets/icons";
import { classNames } from "@utils/functions";
import { Fragment } from "react";

const CompareCards = () => {
  const comparedData = [
    {
      class: "with-cf flex text-buyer-900 border-[#ADC5FF]",
      data: [
        {
          title: "High Quality Crops",
          icon: <HighQualityCrop />,
        },
        {
          title: "Easy Digitized Process",
          icon: <EasyDigitizedProcess />,
        },
        {
          title: "Direct Access to Farmers",
          icon: <DirectAccessIcon />,
        },
        {
          title: "Transparent Monitoring",
          icon: <TransparentMonitoringIcon />,
        },
        {
          title: "Real Time Visibility Into Available Supply",
          icon: <RealTimeVisibilityIcon />,
        },
      ],
    },
    {
      class: "without-cf hidden text-custom_gray-300 border-[#ADC5FF]",
      data: [
        {
          title: "Low Quality Crops",
          icon: <LowQualityCropIcon />,
        },
        {
          title: "Inconsistent Supply  of Crops",
          icon: <InconsistentSupplyIcon />,
        },
        {
          title: "Middlemen Interference",
          icon: <MiddlemenInterferenceIcon />,
        },
        {
          title: "Lack of Transparency",
          icon: <LackOfTransparencyIcon />,
        },
        {
          title: "Long And Fragmented Procurement Process",
          icon: <LongAndFragmentedIcon />,
        },
      ],
    },
  ];

  return (
    <>
      {comparedData.map((data, idx) => (
        <Fragment key={idx}>
          {data.data.map((item, index) => (
            <div
              key={item.title}
              className={classNames(
                index < 4 && "col-span-4",
                index == 4 && "col-span-8 md:col-span-4",
                data.class,
                "relative flex-col px-4 py-6 lg:px-8 sm:mt-0 lg:py-6 overflow-hidden min-h-[162px] sm:min-h-[212px] lg:min-w-[320px] lg:min-h-[312px] border rounded-xl",
              )}
            >
              <div className="space-y-[24px] sm:space-y-[32px] lg:space-y-[48px] items-start justify-start">
                {item.icon}
                <h4 className="text-base sm:text-xl sm:pr-4 lg:pr-0 lg:text-[32px] lg:leading-10 font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default CompareCards;
