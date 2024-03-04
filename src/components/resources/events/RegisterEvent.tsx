import { useState } from "react";
import type { IEvent } from "types/app";
import { Tooltip } from "react-tooltip";
import * as pkg from "react-copy-to-clipboard";
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
import { Button } from "@components/utils";

const { CopyToClipboard } = pkg;

interface IProps {
  data: IEvent;
}

const RegisterEvent = ({ data }: IProps) => {
  const link = useWindow(() => window.location.href, "");
  const [isHidden, setIsHidden] = useState(false);

  const isTwitterEvent = data.platform.toLowerCase() === "twitter";

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

  const handleButtonClick = () => {
    window.fbq("track", "add_calender", {
      content_category: "Add Calendar",
    });
    window.gtag("event", "generate_lead", {
      event_category: "Add Calendar",
    });
  };

  return (
    <div
      className="w-full rounded-2xl pb-12 px-3"
      style={{ boxShadow: "0px 4px 16px 0 rgba(2,45,43,0.16)" }}
    >
      <div className="flex flex-col justify-start items-start px-5 pt-5 sm:mx-10 sm:mt-12 sm:mb-7 gap-12 mb-5 border-t-0 border-r-0 border-b border-l-0 border-[#e6e6e6]">
        {data.isPast ? (
          <div className="w-full flex flex-col justify-start items-center my-10 space-y-8">
            <h3 className="text-2xl">Event has ended</h3>
            <Button
              hasArrow
              title="View recording"
              onClick={handleButtonClick}
              className="py-4"
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="flex justify-start items-end gap-5">
                <CalendarIcon className="text-custom_gray-300" />
                <span className="flex-grow[x] text-base  sm:text-2xl text-left text-custom_black-900">
                  {data.date}
                </span>
              </div>
              <div className="flex justify-start items-end gap-5">
                <ClockIcon className="text-custom_gray-300" />
                <span className="flex-grow[x] text-base sm:text-2xl text-left text-custom_black-900">
                  {data.time}
                </span>
              </div>
              <div className="flex justify-start items-end gap-5">
                <LocationIcon className="h-6 w-6 text-custom_gray-300" />
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                  <span className="flex-grow-0 flex-shrink-0 text-base sm:text-2xl text-left text-custom_black-900">
                    {data.status}
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
                <MoneyIcon className="text-custom_gray-300" />
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                  <span className="flex-grow-0 flex-shrink-0 text-base sm:text-2xl text-left text-custom_black-900">
                    Free
                  </span>
                </div>
              </div>
            </div>

            <Button
              className="py-4"
              hasArrow={!isTwitterEvent}
              onClick={handleButtonClick}
              title={isTwitterEvent ? "+ Add to Calendar" : "Register"}
            />
          </>
        )}

        <div className="divide-x" />
      </div>
      <p className="text-base sm:text-2xl font-bold text-center text-custom_black-900 my-6">
        Share this event
      </p>
      <div className="flex w-full justify-center items-start gap-3 sm:gap-3 md:gap-6 px-">
        {icons?.map(({ name, Component }) => (
          <Component key={name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default RegisterEvent;
