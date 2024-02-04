import type { ISeasonality } from "types/app";

import { MarketAvailabilityCard } from "@components/utils";

interface IProps {
  content: string;
  data: ISeasonality[];
}

const Seasonality = ({ data, content }: IProps) => {
  return (
    <div className="flex flex-col justify-center sm:px-6 sm:pt-6 pb-8 lg:px-0 rounded-lg  overflow-hidden">
      <div className="lg:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center w-full pb-4">
          <h2 className="text-base lg:text-[28px] font-bold text-left text-custom_gray-300">
            Seasonality
          </h2>
          <button className="bg-buyer-500 text-white rounded-full px-4 py-2 mt-3 sm:mt-0 sm:ml-4 w-[100px] sm:w-[auto]">
            Ghana
          </button>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-x-12">
          {content && <p className="w-full lg:w-3/6 h-16 mt-7">{content}</p>}
          <div className="space-y-5 rounded-lg p-5 divide-y sm:border sm:border-gray-200">
            <h2 className="text-base font-bold text-left text-custom_gray-300">
              MARKET AVAILABILITY
            </h2>
            {data.map((item, i) => (
              <MarketAvailabilityCard key={item.plantingArea + i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seasonality;
