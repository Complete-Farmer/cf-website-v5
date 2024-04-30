import { useState } from "react";
import ReactPlayer from "react-player";
import { Tooltip } from "react-tooltip";
import * as pkg from "react-copy-to-clipboard";
import {
  AddToCalendarButton,
  AddToCalendarButtonType,
} from "add-to-calendar-button-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  LinkIcon,
  ClockIcon,
  CalendarIcon,
  LocationIcon,
  MoneyIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@assets/icons";
import useWindow from "@hooks/useWindow";
import { Button, Wrapper } from "@components/utils";

import type { IEvent } from "types/app";
import { formatDate } from "@utils/functions";

const { CopyToClipboard } = pkg;

interface IProps {
  data: IEvent;
}

const RegisterEvent = ({ data }: IProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const link = useWindow(() => window.location.href, "");

  const icons = [
    {
      name: "Facebook",
      Component: ({ link }: { link: string }) => (
        <FacebookShareButton url={link}>
          <div className="flex justify-start items-start gap-2.5 p-3 rounded-full bg-[#efefef] text-grower-400 hover:text-white hover:bg-grower-500 hover:cursor-pointer">
            <FacebookIcon className="text-inherit" />
          </div>
        </FacebookShareButton>
      ),
    },
    {
      name: "LinkedIn",
      Component: ({ link }: { link: string }) => (
        <LinkedinShareButton url={link}>
          <div className="flex justify-start items-start gap-2.5 p-3 rounded-full bg-[#efefef] text-grower-400 hover:text-white hover:bg-grower-500 hover:cursor-pointer">
            <LinkedInIcon className="text-inherit" />
          </div>
        </LinkedinShareButton>
      ),
    },
    {
      name: "Twitter",
      Component: ({ link }: { link: string }) => (
        <TwitterShareButton url={link}>
          <div className="flex justify-start items-start gap-2.5 p-3 rounded-full bg-[#efefef] text-grower-400 hover:text-white hover:bg-grower-500 hover:cursor-pointer">
            <TwitterIcon className="text-inherit" />
          </div>
        </TwitterShareButton>
      ),
    },
    {
      name: "Link",
      Component: ({ link }: { link: string }) => (
        <>
          <CopyToClipboard text={link}>
            <div
              data-tooltip-content="Copied"
              data-tooltip-id="my-tooltip-news"
              onClick={() => setIsHidden(false)}
              onMouseLeave={() => setTimeout(() => setIsHidden(true), 1000)}
              className="flex justify-start items-start gap-2.5 p-3 rounded-full bg-[#efefef] text-grower-400 hover:text-white hover:bg-grower-500 hover:cursor-pointer"
            >
              <LinkIcon className="text-inherit" />
            </div>
          </CopyToClipboard>
          <Tooltip
            id="my-tooltip-news"
            openOnClick
            globalCloseEvents={{ escape: true }}
            delayShow={100}
            hidden={isHidden}
          />
        </>
      ),
    },
  ];

  const handleButtonClick = (text: string) => {
    window.fbq("track", "click", {
      content_category: text,
      content_name: "Clicked on event page button" + text,
    });
    window.gtag("event", "Affiliate", {
      event_category: text,
      event_label: "Clicked on event page button" + text,
    });
  };

  const calenderProps: AddToCalendarButtonType = {
    name: data.title,
    options: [
      "Apple",
      "Google",
      "Microsoft365",
      "MicrosoftTeams",
      "Outlook.com",
    ],
    description: data.description[0]?.text,
    location: [data.type, " • ", data.platform].join(""),
    startDate: formatDate("YYYY-MM-DD", data.data?.start_date_time),
    endDate: formatDate("YYYY-MM-DD", data.data?.end_date_time),
    startTime: formatDate("HH:mm", data.data?.start_date_time),
    endTime: formatDate("HH:mm", data.data?.end_date_time),
  };

  return (
    <>
      <div
        className="w-full rounded-2xl pb-12 px-3"
        style={{ boxShadow: "0px 4px 16px 0 rgba(2,45,43,0.16)" }}
      >
        <div className="flex flex-col justify-start items-start px-5 pt-5 sm:mx-10 sm:mt-12 sm:mb-7 lg:mb-4 gap-12 border-t-0 border-r-0 border-b border-l-0 border-[#e6e6e6]">
          {data.isPast ? (
            <div className="w-full flex flex-col justify-start items-center my-10 space-y-8">
              <h3 className="text-2xl">Event has ended</h3>
              <Button
                hasArrow
                title="View recording"
                onClick={() => {
                  handleButtonClick("View recording");
                  if (data.video) {
                    setVideoUrl(data.video);
                  }
                }}
                className="py-4"
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="flex justify-start items-end gap-5">
                  <CalendarIcon className="text-custom_gray-300 w-7 h-7" />
                  <span className="flex-grow[x] text-base  sm:text-2xl text-left text-custom_black-900">
                    {data.startDate}
                    {data.endDate && data.endDate !== data.startDate
                      ? ` - ${data.endDate}`
                      : ""}
                  </span>
                </div>
                <div className="flex justify-start items-end gap-5">
                  <ClockIcon className="text-custom_gray-300 w-7 h-7" />
                  <span className="flex-grow[x] text-base sm:text-2xl text-left text-custom_black-900">
                    {data.startTime} - {data.endTime}
                  </span>
                </div>
                <div className="flex justify-start items-end gap-5">
                  <LocationIcon className="w-7 h-7 text-custom_gray-300" />
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                    <span className="flex-grow-0 flex-shrink-0 text-base sm:text-2xl text-left text-custom_black-900">
                      {data.type}
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-base sm:text-2xl text-left text-custom_black-900 px-4">
                      &#x2022;
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-base sm:text-2xl text-left text-custom_black-900">
                      {data.platform}
                    </span>
                  </div>
                </div>
                <div className="flex justify-start items-end gap-5">
                  <MoneyIcon className="text-custom_gray-300 w-7 h-7" />
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                    <span className="flex-grow-0 flex-shrink-0 text-base sm:text-2xl text-left text-custom_black-900">
                      Free
                    </span>
                  </div>
                </div>
              </div>
              {!data.register_link ? (
                <div className="space-y-2 w-full flex flex-col items-center">
                  <p className="text-base sm:text-2xl font-bold text-center text-custom_black-900">
                  Add to you calendar
                  </p>
                  <div>
                    <AddToCalendarButton
                      buttonsList
                      {...calenderProps}
                      hideTextLabelButton
                      buttonStyle="round"
                    />
                  </div>
                </div>
              ) : (
                <Button
                  className="py-4"
                  hasArrow
                  onClick={() => {
                    window.open(data.register_link, "_blank").focus();
                    handleButtonClick("Register");
                  }}
                  title="Register"
                />
              )}
            </>
          )}

          <div className="divide-x" />
        </div>
        <p className="text-base sm:text-2xl font-bold text-center text-custom_black-900 my-4">
          Share this event
        </p>
        <div className="flex w-full justify-center items-start gap-3 sm:gap-3 md:gap-6 px-">
          {icons?.map(({ name, Component }) => (
            <Component key={name} link={link} />
          ))}
        </div>
      </div>
      <Wrapper
        isOpen={!!videoUrl}
        onClose={() => setVideoUrl(null)}
        className="flex overflow-hidden rounded-md transition mx-auto lg:max-w-7xl w-[426px] h-[240px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px]"
      >
        <ReactPlayer url={videoUrl} playing width="100%" height="100%" />
      </Wrapper>
    </>
  );
};

export default RegisterEvent;
