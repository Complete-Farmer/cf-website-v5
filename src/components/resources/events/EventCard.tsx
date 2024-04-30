import type { IEvent } from "types/app";

import { CalendarIcon, ClockIcon, LocationIcon, MoneyIcon } from "@assets/icons";
import {
  classNames,
  getDayFromDate,
  formatDateToMonthAbbreviation,
} from "@utils/functions";

interface IProps {
  event: IEvent;
  isSlider?: boolean;
}

const EventCard = ({ event, isSlider = false }: IProps) => (
  <a href={`/resources/events/${event.uid}`}>
    <div className="relative w-full">
      <div className="block overflow-hidden group rounded-xl relative">
        <img
          alt={event.title}
          src={event.image.url}
          width={event.image.dimensions.width}
          height={event.image.dimensions.height}
          className="w-full h-80 object-cover transition-all duration-300 ease-out sm:h-80 lg:h-96 group-hover:scale-110"
        />
      </div>
      <div className="flex justify-start items-center absolute left-6 top-6 gap-1.5 px-3 py-2 rounded-lg bg-white">
        <p
          className={`text-sm font-bold text-left ${
            event.isPast ? "text-red-400" : "text-grower-500"
          }`}
        >
          {!event.isPast ? "Upcoming" : "Past"}
        </p>
      </div>

      <div
        className={classNames(
          isSlider ? "hidden" : "flex",
          "event_card_details justify-start items-start self-stretch relative gap-4 mt-5"
        )}
      >
        <div
          className={classNames(
            isSlider
              ? "text-white border-2 border-white !bg-transparent"
              : event.isPast
                ? "text-red-400"
                : "text-grower-500",
            "w-[60px] h-[70px] font-bold text-left relative overflow-hidden rounded bg-white border border-[#e6e6e6]"
          )}
        >
          <div className="w-12 h-8 absolute left-1.5 top-0 border-t-0 border-r-0 border-b border-l-0 border-[#e6e6e6]">
            <span className="absolute left-[11px] top-2 text-xs">
              {formatDateToMonthAbbreviation(event.startDate)}
            </span>
          </div>
          <span className="absolute left-4 top-[34px] text-2xl">
            {getDayFromDate(event.startDate)}
          </span>
        </div>
        <div className="flex flex-col h-full w-[100px] justify-start items-start flex-grow relative gap-3">
          <span
            className={classNames(
              isSlider ? "text-white lg:text-2xl" : "text-custom_black-900",
              "self-stretch lg:w-4/5 text-base font-bold text-left hover:underline"
            )}
          >
            {event.title}
          </span>
          <div
            className={classNames(
              isSlider ? "text-white/90" : "text-custom_gray-300",
              "flex flex-col justify-start items-start self-stretch gap-1"
            )}
          >
            <div className="flex justify-start items-center self-stretch overflow-hidden group rounded-xl gap-4 font-bold lg:font-normal">
              <CalendarIcon />
              <span className="flex-grow w-[304px] text-sm lg:text-base text-left">
                {event.startDate}
                {/* {event.endDate ? ` - ${event.endDate}` : ""} */}
                {event.endDate && (event.endDate !== event.startDate) ? ` - ${event.endDate}` : ""}
              </span>
            </div>
            <div className="flex justify-start items-center self-stretch overflow-hidden group rounded-xl gap-4 font-bold lg:font-normal">
              <ClockIcon className="w-5 h-5" />
              <span className="flex-grow w-[304px] text-sm lg:text-base text-left">
                {event.startTime} - {event.endTime}
              </span>
            </div>
            <div className="flex justify-start items-center self-stretch relative gap-4">
              <LocationIcon />
              <div className="flex justify-start items-start text-sm lg:text-base text-left relative font-bold lg:font-normal">
                <span>{event.type}</span>
                <span className="ml-2 mr-2"> •</span>
                <span>{event.platform}</span>
              </div>
            </div>
            <div className="flex justify-start items-center self-stretch relative gap-4 font-bold lg:font-normal">
              <MoneyIcon />
              <div className="flex justify-start items-start relative">
                <span className="text-sm lg:text-base text-left">Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
);

export default EventCard;
