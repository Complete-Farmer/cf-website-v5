import { useState } from "react";
import { Tooltip } from "react-tooltip";
import * as pkg from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  LinkIcon,
  TwitterIcon,
  LinkedInIcon,
  FacebookIcon,
} from "@assets/icons";
import useWindow from "@hooks/useWindow";

import type { INews, IBlog } from "types/app";

const { CopyToClipboard } = pkg;

const NewsBlogDetailHeader = ({ data }: { data: INews | IBlog }) => {
  const link = useWindow(() => window.location.href, "");
  const [isHidden, setIsHidden] = useState(false);

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

  return (
    <section className="max-w-5xl mx-auto lg:px-36 space-y-10">
      <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 text-custom_black-900">
        <div className="space-y-5">
          <div className="flex justify-start items-center text-md font-bold text-left space-x-4">
            <p>{data.date}</p>
            {data?.label && (
              <>
                <span>•</span>
                <p>{data.label}</p>
              </>
            )}
          </div>
          <h3 className="leading-6 lg:leading-10 lg:w-[700px] text-xl lg:text-[32px] sm:text-xl md:text-[28px] sm:leading-6 md:leading-[34px] font-bold text-left">
            {data.title}.
          </h3>
        </div>

        {data?.tags?.length > 0 && (
          <div className="flex justify-start items-start flex-wrap gap-1 sm:gap-2">
            {data.tags?.map((tag) => (
              <div
                key={tag}
                className="overflow-hidden gap-2.5 px-2 py-1 rounded-full bg-[#efefef]"
              >
                <p className="text-[10px] sm:text-sm text-left">{tag}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex w-full justify-start items-start gap-x-4">
          {icons?.map(({ name, Component }) => (
            <Component key={name} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlogDetailHeader;
