import { Tooltip } from "react-tooltip";

import {
  classNames,
  generateAvailabilityString,
  getMonthsFirstLetter,
} from "@utils/functions";
import type { ISeasonality } from "types/app";
import { Fragment } from "react";

interface IProps {
  data: ISeasonality[];
}

const Seasonality = ({ data }: IProps) => {
  return (
    <div className="flex flex-col justify-center sm:px-6 sm:pt-6 pb-8 lg:px-0 rounded-lg sm:border sm:border-gray-100 overflow-hidden">
      <div className="lg:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center w-full pb-4">
          <p className="text-base font-bold text-left text-custom_gray-300">
            SEASONALITY
          </p>
          <button className="bg-grower-500 text-white rounded-full px-4 py-2 mt-3 sm:mt-0 sm:ml-4 w-[100px] sm:w-[auto]">
            Ghana
          </button>
        </div>
        <div className="space-y-5  divide-y">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-start items-start space-y-4 pt-4"
            >
              <p className="text-base text-left text-custom_black-900">
                <span className="">Availability in the </span>
                <span className="font-bold">{item.plantingArea} region</span>
                <span className="">: </span>
                <span className="font-bold">
                  {generateAvailabilityString(item.availabilityData)}
                </span>
              </p>
              <div className="flex justify-between items-center gap-2 text-xs w-full text-left text-custom_gray-300">
                <p className="font-bold">JAN</p>
                <div className="flex justify-between items-start gap-1 w-full">
                  {item.availabilityData.map((d) => {
                    return (
                      <Fragment key={d.name}>
                        <span id={"tooltip" + d.name} className="w-full">
                          <div
                            className={classNames(
                              d.availability ? "bg-grower-500" : "bg-gray-100",
                              "overflow-auto h-1 w-full sm:h-1 rounded-lg"
                            )}
                          />
                        </span>
                        <Tooltip
                          place="top"
                          anchorSelect={"#tooltip" + d.name}
                          content={getMonthsFirstLetter(d.name)}
                          className="block sm:hidden"
                        />
                        <Tooltip
                          place="top"
                          anchorSelect={"#tooltip" + d.name}
                          content={d.name}
                          className="hidden sm:block"
                        />
                      </Fragment>
                    );
                  })}
                </div>
                <p className="font-bold">DEC</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seasonality;
