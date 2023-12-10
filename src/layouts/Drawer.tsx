import React, { useEffect, useState } from "react";
import ReactDrawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import LogoSmall from "../assets/icons/main-logo.svg";

import { useResolution } from "../hooks/useResolution";

const Drawer: React.FC<{
  drawerOpen: boolean;
  handleCloseDrawer: () => void;
  drawerProps: {
    textOneFirst?: string;
    textOneLast?: string;
    textTwoFirst?: string;
    textTwoLast?: string;
  };
}> = ({ drawerOpen, handleCloseDrawer, drawerProps }) => {
  const { screenType } = useResolution();
  const [drawerSize, setDrawerSize] = useState<string>();

  useEffect(() => {
    if (screenType === "mobile" || screenType === "tablet") {
      setDrawerSize("100vh");
    } else {
      setDrawerSize("36rem");
    }
  }, [screenType]);

  return (
    <>
      <ReactDrawer
        enableOverlay
        direction="top"
        open={drawerOpen}
        size={drawerSize}
        overlayOpacity={0.7}
        customIdSuffix="mobile-menu-drawer"
        onClose={() => handleCloseDrawer()}
        className="z-20 flex justify-center"
        zIndex={screenType === "mobile" || screenType === "tablet" ? 99 : 2}
        lockBackgroundScroll={
          screenType === "mobile" || screenType === "tablet" ? true : false
        }
      >
        <div className="lg:flex[x] lg:justify-between[x] bg-white lg:max-w-7xl border-[#E6E6E6] px-4 sm:px-8 w-screen lg:px-0">
          <div className="flex justify-between mt-5 lg:mt-0">
            <div>
              <img src={LogoSmall.src} className="lg:hidden" />
            </div>
            <button
              type="button"
              className="lg:mt-24 lg:bg-[#EFEFEF] text-[#004C46] lg:text-custom_lightgreen-500 lg:p-1 rounded-full"
              onClick={() => handleCloseDrawer()}
            >
              <span className="sr-only">Close panel</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:space-x-80 lg:mt-52[x] w-full px-2 my-10 sm:px-6 lg:mx-8">
            <div className="flex flex-col justify-start items-start gap-2.5 mt-10">
              <a
                href="/"
                className="flex justify-between lg:justify-start items-center relative gap-4 border-b border-10 border-[#E6E6E6] w-full"
              >
                <div className="text-2xl font-bold text-left text-custom_black-900 py-0 pb-12 lg:py-12 w-full">
                  {drawerProps.textOneFirst}
                  <br className="hidden lg:block" /> {drawerProps.textOneLast}
                </div>
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-10 h-10 relative mr-2"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M8.33366 18.3333H27.6503L22.1503 12.85C21.8365 12.5361 21.6602 12.1105 21.6602 11.6667C21.6602 11.2228 21.8365 10.7972 22.1503 10.4833C22.4642 10.1695 22.8898 9.99316 23.3337 9.99316C23.7775 9.99316 24.2032 10.1695 24.517 10.4833L32.8503 18.8167C33.0021 18.9752 33.121 19.1621 33.2003 19.3667C33.367 19.7724 33.367 20.2275 33.2003 20.6333C33.121 20.8379 33.0021 21.0248 32.8503 21.1833L24.517 29.5166C24.3621 29.6729 24.1777 29.7969 23.9746 29.8815C23.7715 29.9661 23.5537 30.0096 23.3337 30.0096C23.1136 30.0096 22.8958 29.9661 22.6927 29.8815C22.4896 29.7969 22.3053 29.6729 22.1503 29.5166C21.9941 29.3617 21.8701 29.1774 21.7855 28.9743C21.7009 28.7712 21.6573 28.5533 21.6573 28.3333C21.6573 28.1133 21.7009 27.8955 21.7855 27.6924C21.8701 27.4893 21.9941 27.3049 22.1503 27.15L27.6503 21.6667H8.33366C7.89163 21.6667 7.46771 21.4911 7.15515 21.1785C6.84259 20.8659 6.66699 20.442 6.66699 20C6.66699 19.558 6.84259 19.134 7.15515 18.8215C7.46771 18.5089 7.89163 18.3333 8.33366 18.3333Z"
                    fill="#31BC2E"
                  />
                </svg>
              </a>
            </div>
            <div className="flex flex-col justify-start items-start gap-2.5 mt-8 sm:mt-16 lg:mt-10">
              <a
                href="/"
                className="flex justify-between lg:justify-start items-center relative gap-4 border-b border-10 border-[#E6E6E6] w-full"
              >
                <div className="text-2xl font-bold text-left text-custom_black-900 pb-10 sm:py-8 sm:pb-12 lg:py-12">
                  {drawerProps.textTwoFirst}
                  <br className="hidden lg:block" /> {drawerProps.textTwoLast}
                </div>
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-10 h-10 relative mr-2"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M8.33366 18.3333H27.6503L22.1503 12.85C21.8365 12.5361 21.6602 12.1105 21.6602 11.6667C21.6602 11.2228 21.8365 10.7972 22.1503 10.4833C22.4642 10.1695 22.8898 9.99316 23.3337 9.99316C23.7775 9.99316 24.2032 10.1695 24.517 10.4833L32.8503 18.8167C33.0021 18.9752 33.121 19.1621 33.2003 19.3667C33.367 19.7724 33.367 20.2275 33.2003 20.6333C33.121 20.8379 33.0021 21.0248 32.8503 21.1833L24.517 29.5166C24.3621 29.6729 24.1777 29.7969 23.9746 29.8815C23.7715 29.9661 23.5537 30.0096 23.3337 30.0096C23.1136 30.0096 22.8958 29.9661 22.6927 29.8815C22.4896 29.7969 22.3053 29.6729 22.1503 29.5166C21.9941 29.3617 21.8701 29.1774 21.7855 28.9743C21.7009 28.7712 21.6573 28.5533 21.6573 28.3333C21.6573 28.1133 21.7009 27.8955 21.7855 27.6924C21.8701 27.4893 21.9941 27.3049 22.1503 27.15L27.6503 21.6667H8.33366C7.89163 21.6667 7.46771 21.4911 7.15515 21.1785C6.84259 20.8659 6.66699 20.442 6.66699 20C6.66699 19.558 6.84259 19.134 7.15515 18.8215C7.46771 18.5089 7.89163 18.3333 8.33366 18.3333Z"
                    fill="#367AFE"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </ReactDrawer>
    </>
  );
};

export default Drawer;
