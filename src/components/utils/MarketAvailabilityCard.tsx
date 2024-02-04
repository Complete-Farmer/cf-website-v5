import { Fragment } from "react";
import { Tooltip } from "react-tooltip";

import { classNames, generateAvailabilityString, getMonthsFirstLetter } from "@utils/functions";
import type { ISeasonality } from "types/app";

const MarketAvailabilityCard = ({ plantingArea, availabilityData }: ISeasonality) => {
  return (
    <div className="flex flex-col justify-start items-start space-y-4 pt-4">
      <p className="text-base text-left text-custom_black-900">
        <span className="">Availability in the </span>
        <span className="font-bold">{plantingArea} region</span>
        <span className="">: </span>
        <span className="font-bold">
          {generateAvailabilityString(availabilityData)}
        </span>
      </p>
      <div className="flex justify-between items-center gap-2 text-xs w-full text-left text-custom_gray-300">
        <p className="font-bold">JAN</p>
        <div className="flex justify-between items-start gap-1 w-full">
          {availabilityData.map((d) => (
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
          ))}
        </div>
        <p className="font-bold">DEC</p>
      </div>
    </div>
  );
};

export default MarketAvailabilityCard;
