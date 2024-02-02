import "react-modern-drawer/dist/index.css";
import React, { useEffect, useState } from "react";
import ReactDrawer from "react-modern-drawer";

import CFMainLogo from "@assets/images/logos/cf/main.png";
import { ArrowIcon, MenuCloseIcon } from "@assets/icons";
import { useResolution } from "@utils/useResolution";
import { getLink } from "@utils/functions";

const Drawer: React.FC<{
  drawerOpen: boolean;
  handleCloseDrawer: () => void;
  drawerProps: string[];
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
    <ReactDrawer
      enableOverlay
      direction="top"
      open={drawerOpen}
      size={drawerSize}
      overlayOpacity={0.7}
      customIdSuffix="mobile-menu-drawer"
      onClose={() => handleCloseDrawer()}
      className="z-20 flex justify-center pt-5 lg:pt-24"
      zIndex={screenType === "mobile" || screenType === "tablet" ? 99 : 2}
      lockBackgroundScroll={
        screenType === "mobile" || screenType === "tablet" ? true : false
      }
    >
      <div className="lg:flex lg:flex-col bg-white lg:max-w-7xl border-gray-200 px-4 sm:px-8 w-screen lg:px-0">
        <div className="flex justify-between lg:justify-end">
          <img src={CFMainLogo.src} className="lg:hidden h-7" />
          <button
            type="button"
            onClick={() => handleCloseDrawer()}
            className="flex place-content-center items-center lg:bg-[#EFEFEF] text-grower-400 lg:text-grower-500 lg:w-[52px] lg:h-[52px] rounded-full"
          >
            <span className="sr-only">Close panel</span>
            <MenuCloseIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:space-x-80 w-full px-2 sm:px-6">
          {drawerProps.map((item) => (
            <div
              key={item}
              className="pb-7 mt-7 border-b-2 border-gray-200 2xl:border-none"
            >
              <a
                href={getLink(item)}
                className="flex justify-between lg:justify-start items-center relative gap-4  w-full"
              >
                <p className="text-2xl font-bold py-0 lg:py-12 w-full 2xl:w-72">
                  {item}
                </p>
                <ArrowIcon
                  className={`${
                    item.includes("Buyer")
                      ? "text-buyer-500"
                      : "text-grower-500"
                  } w-10 h-10`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </ReactDrawer>
  );
};

export default Drawer;
