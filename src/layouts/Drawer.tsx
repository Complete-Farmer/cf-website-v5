import "react-modern-drawer/dist/index.css";
import React, { useEffect, useState } from "react";
import ReactDrawer from "react-modern-drawer";

import CFMainLogo from "@assets/images/logos/cf/main.webp";
import { ArrowIcon, MenuCloseIcon } from "@assets/icons";
import useResolution from "@hooks/useResolution";
import { classNames, getAppLink } from "@utils/functions";
import { gtmVirtualPageView } from "@utils/gtm";

const drawerProps = {
  login: ["Login to CF Grower", "Login to CF Buyer"],
  signup: ["Create a CF Grower account", "Create a CF Buyer account"],
};

const Drawer: React.FC<{
  isBuyer: boolean;
  drawerOpen: boolean;
  handleCloseDrawer: () => void;
  authType: "login" | "signup";
}> = ({ isBuyer, drawerOpen, handleCloseDrawer, authType }) => {
  const { screenType } = useResolution();
  const [drawerSize, setDrawerSize] = useState<string>();

  useEffect(() => {
    if (screenType === "mobile" || screenType === "tablet") {
      setDrawerSize("100vh");
    } else {
      setDrawerSize("36rem");
    }
  }, [screenType]);

  const registerAnalytics = (item: string) => {
    window.gtag("event", "generate_lead", {
      event_category: "Accessing product app",
      event_label: item,
    });
    window.fbq("track", "Lead", {
      content_category: "Accessing product app",
      content_name: item,
    });

    gtmVirtualPageView({
      event: "gtm.click",
      page: {
        title: item,
        url: window.location.pathname,
      },
      user: {
        isLoggedIn: false,
      },
      ecommerce: {
        currencyCode: "USD",
        products: [],
      },
    });
  };

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
            className={classNames(
              isBuyer ? "text-buyer-500" : "text-grower-500",
              "flex place-content-center items-center lg:bg-[#EFEFEF] lg:w-[52px] lg:h-[52px] rounded-full",
            )}
          >
            <span className="sr-only">Close panel</span>
            <MenuCloseIcon className="h-8 w-8" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:space-x-24 w-full px-2 sm:px-6">
          {drawerProps[authType].map((item) => (
            <div
              key={item}
              className="pb-7 mt-7 border-b-2 border-gray-200 2xl:border-none"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={getAppLink(item)}
                onClick={() => registerAnalytics(item)}
                className="flex justify-between lg:justify-start items-center relative gap-4  w-full"
              >
                <p className="text-2xl font-bold py-0 lg:py-12 w-full 2xl:w-72">
                  {item}
                </p>
                <ArrowIcon
                  className={`${item.includes("Buyer")
                      ? "text-buyer-500"
                      : item.includes("Grower")
                        ? "text-grower-500"
                        : "text-storefront-500"
                    } w-10 h-10`}
                />
              </a>
            </div>
          ))}

          <div className="pb-7 mt-7 border-b-2 border-gray-200 2xl:border-none">
            <a
              target="_blank"
              rel="noreferrer"
              href={
                authType === "login"
                  ? "https://vendor.completefarmer.com/login"
                  : "https://vendor.completefarmer.com/register"
              }
              onClick={
                authType === "login"
                  ? () => registerAnalytics("Login to CF Storefront")
                  : () => registerAnalytics("Create a CF Storefront account")
              }
              className="flex justify-between lg:justify-start items-center relative gap-4  w-full"
            >
              <p className="text-2xl font-bold py-0 lg:py-12 w-full 2xl:w-72">
                {authType === "login"
                  ? "Login to CF Storefront"
                  : "Create a CF Storefront account"}
              </p>
              <ArrowIcon className="text-storefront-500 w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </ReactDrawer>
  );
};

export default Drawer;
