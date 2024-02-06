import { TwoLeavesIcon } from "@assets/icons";
import { useMemo } from "react";

interface IProps {
  type?: "grower" | "buyer";
  data: {
    name: string;
    imageUrl: string;
    titleFirstName: string;
    titleLastName?: string;
    titleTextColor: string;
  };
}

const CustomerStoryCard = ({ type = "grower", data }: IProps) => {
  const colors = {
    buyer: {
      bg: "bg-buyer-800",
      text: "text-buyer-500",
    },
    grower: {
      bg: "bg-grower-800",
      text: "text-grower-500",
    },
  };
  const { bg, text } = useMemo(() => colors[type], [type]);

  return (
    <div
      className={`py-8 px-0 sm:py-8 sm:px-8 lg:py-20 lg:px-20 w-full max-w-7xl[x] flex-col items-center rounded-2xl ${bg}`}
    >
      <div className="mx-auto max-w-7xl  w-full">
        <div className="flex flex-col items-center md:justify-between">
          <div className="flex items-center flex-col">
            <TwoLeavesIcon className={`w-6 h-6 lg:w-auto lg:h-auto ${text}`} />
            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-4 sm:mt-4 md:mt-6 text-center text-[28px] sm:py-2 lg:px-0 sm:mb-10">
              <h1
                className={`text-base sm:text-[24px] lg:text-[28px] lg:leading-[48px] sm:leading-8 tracking-tight ${data.titleTextColor}`}
              >
                {data.titleFirstName}
                <br className="hidden sm:block" /> {data.titleLastName}
              </h1>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mr-4"
              src={data?.imageUrl}
              alt=""
            />
            <div className="flex items-start flex-col">
              <h3 className="text-base lg:text-[28px] md:text-xl font-semibold text-white">
                {data.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStoryCard;
