import { TwoLeavesIcon } from "@assets/icons";
import SubHeadingShort from "./SubHeadingShort";
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
      className={`py-8 px-0 sm:py-8 sm:px-8 lg:py-12 lg:px-20 w-full max-w-7xl[x] flex-col items-center rounded-2xl ${bg}`}
    >
      <div className="mx-auto max-w-7xl  w-full">
        <div className="flex flex-col items-center md:justify-between">
          <div className="flex items-center flex-col">
            <TwoLeavesIcon className={`w-6 h-6 lg:w-auto lg:h-auto ${text}`} />
            <SubHeadingShort {...data} />
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
