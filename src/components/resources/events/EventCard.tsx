import type { IEvent } from "types/app";

import { CalendarIcon, LocationIcon, MoneyIcon } from "@assets/icons";
import {
  getDayFromDate,
  formatDateToMonthAbbreviation,
  classNames,
} from "@utils/functions";

interface IProps {
  event: IEvent;
  isSlider?: boolean;
  showDetails?: boolean;
}

const EventCard = ({ event, isSlider = false, showDetails = true }: IProps) => {
  return (
    <a href={`/resources/events/${event.uid}`}>
      <div className="relative w-full">
        <div className="block overflow-hidden group rounded-xl relative">
          <img
            alt={event.title}
            src={event.data.webinar_image.url}
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
            showDetails ? "flex" : "hidden",
            "justify-start items-start self-stretch relative gap-4 mt-5"
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
                {formatDateToMonthAbbreviation(event.date)}
              </span>
            </div>
            <span className="absolute left-4 top-[34px] text-2xl">
              {getDayFromDate(event.date)}
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
                  {event.date} • {event.time}
                </span>
              </div>
              <div className="flex justify-start items-center self-stretch relative gap-4">
                <LocationIcon />
                <div className="flex justify-start items-start text-sm lg:text-base text-left relative font-bold lg:font-normal">
                  <span>{event.status}</span>
                  <span className="ml-2 mr-2"> • </span>
                  <span>{event.platform}</span>
                </div>
              </div>
              <div className="flex justify-start items-center self-stretch relative gap-4 font-bold lg:font-normal">
                <MoneyIcon />
                <div className="flex justify-start items-start relative">
                  <span className="text-sm lg:text-base text-left">
                    {event.entry}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
