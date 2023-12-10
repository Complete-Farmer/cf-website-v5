import React, { useCallback, useMemo } from "react";
import { Disclosure } from "@headlessui/react";

import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  CaretIcon,
} from "../assets/icons";
import { CFFooterLogo, CFFooterMobileLogo } from "../assets/logos/header";

import {
  companyLinks,
  productsLinks,
  supportLinks,
  legalLinks,
} from "../utils/constants";
// import ReactGA from "react-ga4";
// import ReactPixel from "react-facebook-pixel";

const navigation = {
  products: productsLinks,
  company: companyLinks.filter((l) => !l.isMobile),
  support: supportLinks,
  terms: {
    privacyPolicy: legalLinks[0],
    termsAndConditions: legalLinks[1],
  },
};

const mobileNavigationDisclouserTabs = {
  company: companyLinks.filter((l) => !l.isMobile),
  products: productsLinks,
  support: supportLinks,
  legal: legalLinks,
};

export default function Footer({ pathname }: { pathname: string }) {
  const isBuyer = pathname.includes("buyer");

  const refs: React.RefObject<HTMLButtonElement>[] = useMemo(() => {
    return (
      Object.keys(mobileNavigationDisclouserTabs).map(() => {
        return React.createRef();
      }) ?? []
    );
  }, []);

  const closeOtherDisclouser = useCallback(
    (ref: React.RefObject<HTMLButtonElement>) => {
      if (ref?.current?.getAttribute("data-open") === "true")
        ref?.current?.click();
      refs.forEach((ref: React.RefObject<HTMLButtonElement>) => {
        const isOpen = ref?.current?.getAttribute("data-open") === "true";
        if (isOpen) {
          ref?.current?.click();
        }
      });
    },
    [refs]
  );

  const config = {
    bgPattern: !isBuyer ? "bg-footer-pattern" : "bg-footer-pattern",
    bgColor: !isBuyer ? "bg-custom_lightgreen-900" : "bg-[#00194C]",
    borderColor: !isBuyer ? "border-custom_green-900" : "border-[#253A66]",
    hiringColor: !isBuyer ? "text-custom_lightgreen-500" : "text-[#367AFE]",
    bgHiringColor: !isBuyer ? "bg-custom_lightgreen-500/20" : "bg-[#367AFE]/20",
    hoverNavItemColor: !isBuyer
      ? "hover:text-custom_lightgreen-500"
      : "hover:text-[#367AFE]",
    bgColorSocial: !isBuyer ? "bg-custom_green-900" : "bg-[#253A66]",
    hoverNavItemColorSocial: !isBuyer
      ? "hover:bg-custom_lightgreen-500"
      : "hover:bg-[#367AFE]",
  };

  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Footer Item Clicked"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "FooterItemClick"
    // });
    // ReactPixel.track("Footer Item", {});
  };

  return (
    <footer
      className={`${config.bgColor} ${config.bgPattern} bg-cover`}
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-14 sm:px-12 lg:px-8 lg:pt-32 hidden sm:block">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="sm:flex lg:block lg:space-y-8 sm:justify-between lg:justify-start">
            <div className="flex ">
              {isBuyer ? (
                <CFFooterLogo secondColor={"#ffffff"} firstColor={"#ffffff"} />
              ) : (
                <CFFooterLogo secondColor={"#ffffff"} firstColor={"#31BC2E"} />
              )}
            </div>
            <div className="flex lg:hidden gap-x-4">
              <div
                className={`rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer p-2 flex my-auto`}
              >
                <LinkedInIcon width="26" height="26" />
              </div>
              <div
                className={`rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer p-2 flex my-auto`}
              >
                <FacebookIcon width="26" height="26" />
              </div>
              <div
                className={`rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer p-2 flex my-auto`}
              >
                <InstagramIcon width="26" height="26" />
              </div>
              <div
                className={`rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer p-2 flex my-auto`}
              >
                <TwitterIcon width="26" height="26" />
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-left text-white mb-6">
                  PRODUCTS
                </p>

                <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
                  {navigation.products.map((productItem) => {
                    return (
                      <a
                        key={productItem.name}
                        onClick={handleLinkClick}
                        href={productItem.href}
                        className={`sm:text-sm lg:text-base text-left text-white ${config.hoverNavItemColor}`}
                      >
                        {productItem.name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <p className="text-sm sm:text-base lg:text-xl font-bold text-left text-white mb-6">
                  COMPANY
                </p>
                <div className="flex flex-col justify-start items-start gap-3 sm:gap-4">
                  {navigation.company.map((companyItem) => {
                    return (
                      <div className="flex" key={companyItem.name}>
                        <a
                          onClick={handleLinkClick}
                          href={companyItem.href}
                          className={`sm:text-sm lg:text-base text-left text-white ${config.hoverNavItemColor}`}
                        >
                          {companyItem.name}
                        </a>
                        {companyItem.name === "Careers" && (
                          <div
                            className={`flex sm:hidden lg:flex justify-start items-start gap-2.5 ml-2 px-1.5 py-1 rounded-m ${config.bgHiringColor} rounded-lg`}
                          >
                            <p
                              className={`text-xs font-bold text-left ${config.hiringColor}`}
                            >
                              We’re hiring
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <p className="text-sm sm:text-base lg:text-xl font-bold text-left text-white mb-6">
                  SUPPORT
                </p>

                <div className="flex flex-col justify-start items-start gap-3">
                  {navigation.support.map((supportItem) => {
                    return (
                      <a
                        key={supportItem.name}
                        onClick={handleLinkClick}
                        href={supportItem.href}
                        className={`sm:text-sm lg:text-base text-left text-white ${config.hoverNavItemColor}`}
                      >
                        {supportItem.name}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-rows-2 h-[10vh] sm:hidden lg:grid">
                <p className=" text-xl font-bold text-left text-white mb-6">
                  Follow us
                </p>
                <div className="flex flex-col sm:flex-row justify-start items-start gap-2">
                  <div
                    className={`flex justify-start items-start gap-2.5 p-2 rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer`}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-6 h-6 "
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    className={`flex justify-start items-start gap-2.5 p-2 rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer`}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-6 h-6 "
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    className={`flex justify-start items-start gap-2.5 p-2 rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer`}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-6 h-6 "
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M11.999 7.37695C10.7726 7.37695 9.59651 7.86412 8.72934 8.73129C7.86217 9.59846 7.375 10.7746 7.375 12.001C7.375 13.2273 7.86217 14.4034 8.72934 15.2706C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2706C16.1358 14.4034 16.623 13.2273 16.623 12.001C16.623 10.7746 16.1358 9.59846 15.2687 8.73129C14.4015 7.86412 13.2254 7.37695 11.999 7.37695ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5607 8.995 12.7967 8.995 12C8.995 11.2032 9.31149 10.4392 9.87485 9.8758C10.4382 9.31245 11.2023 8.99595 11.999 8.99595C12.7957 8.99595 13.5598 9.31245 14.1231 9.8758C14.6865 10.4392 15.003 11.2032 15.003 12C15.003 12.7967 14.6865 13.5607 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004Z"
                        fill="white"
                      />
                      <path
                        d="M16.806 8.28491C17.4014 8.28491 17.884 7.80227 17.884 7.20691C17.884 6.61154 17.4014 6.12891 16.806 6.12891C16.2106 6.12891 15.728 6.61154 15.728 7.20691C15.728 7.80227 16.2106 8.28491 16.806 8.28491Z"
                        fill="white"
                      />
                      <path
                        d="M20.533 6.11088C20.3015 5.51306 19.9477 4.97017 19.4943 4.51694C19.0409 4.06372 18.4979 3.71015 17.9 3.47888C17.2003 3.21624 16.4612 3.07422 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.562 3.00488 9.249 3.00488 8.294 3.05888C7.54739 3.07344 6.80876 3.21548 6.11 3.47888C5.51194 3.70988 4.96876 4.06335 4.51533 4.51661C4.0619 4.96987 3.70823 5.51291 3.477 6.11088C3.2143 6.8105 3.07261 7.54972 3.058 8.29688C3.015 9.25888 3.002 9.56388 3.002 12.0069C3.002 14.4489 3.002 14.7599 3.058 15.7169C3.073 16.4649 3.214 17.2029 3.477 17.9039C3.70888 18.5016 4.0629 19.0445 4.51644 19.4977C4.96998 19.9509 5.51306 20.3045 6.111 20.5359C6.80843 20.8091 7.54737 20.9613 8.296 20.9859C9.259 21.0279 9.564 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.4631 20.9707 17.2022 20.829 17.902 20.5669C18.4998 20.3351 19.0426 19.9812 19.496 19.5279C19.9493 19.0745 20.3032 18.5316 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.9424 7.57016 20.7999 6.82013 20.533 6.11088ZM19.315 15.6429C19.3086 16.2192 19.2034 16.7901 19.004 17.3309C18.8538 17.7198 18.6239 18.0729 18.3291 18.3676C18.0342 18.6622 17.681 18.8919 17.292 19.0419C16.7572 19.2403 16.1924 19.3455 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.53 19.4079 9.281 19.4079 8.313 19.3529C7.74293 19.3459 7.17833 19.2407 6.644 19.0419C6.25369 18.8929 5.899 18.6636 5.60289 18.3688C5.30678 18.0741 5.07583 17.7205 4.925 17.3309C4.72845 16.7959 4.62331 16.2317 4.614 15.6619C4.571 14.7119 4.561 14.4439 4.561 12.0079C4.561 9.57088 4.561 9.32188 4.614 8.35288C4.62046 7.77691 4.72566 7.2063 4.925 6.66588C5.23 5.87688 5.855 5.25588 6.644 4.95388C7.17859 4.75602 7.74302 4.65085 8.313 4.64288C9.264 4.59988 9.531 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.1924 4.64974 16.7574 4.75495 17.292 4.95388C17.6809 5.10416 18.0341 5.33408 18.329 5.62891C18.6238 5.92374 18.8537 6.27695 19.004 6.66588C19.2006 7.20083 19.3057 7.76504 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    className={`flex justify-start items-start gap-2.5 p-2 rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial} hover:cursor-pointer`}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-6 h-6 "
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19073 14.4122 4.5301 14.4362 3.89 14.31C4.16161 15.1625 4.69354 15.9084 5.41102 16.4429C6.1285 16.9775 6.99545 17.2737 7.89 17.29C6.37363 18.4904 4.494 19.1393 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="hidden sm:grid lg:hidden grid-rows-2 h-[10vh] text-white">
                <p className="text-sm sm:text-base lg:text-xl font-bold text-left text-white mb-6">
                  LEGAL
                </p>
                <div className="flex flex-col text-sm lg:text-xl justify-start items-start gap-2 sm:gap-4">
                  <a
                    onClick={handleLinkClick}
                    href={navigation?.terms?.termsAndConditions?.href}
                  >
                    {navigation?.terms?.termsAndConditions?.name}
                  </a>
                  <a
                    onClick={handleLinkClick}
                    href={navigation?.terms?.privacyPolicy?.href}
                  >
                    {navigation?.terms?.privacyPolicy?.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-900/10 md:flex-row md:items-center">
          <p className="text-base leading-5 text-white mx-auto lg:mx-0">
            &copy; 2023 Complete Farmer Limited. All rights reserved
          </p>
          <div className="flex sm:hidden lg:flex items-start text-base justify-start space-x-6 md:items-center md:justify-center">
            <a
              onClick={handleLinkClick}
              href={navigation.terms.termsAndConditions.href}
              className={`text-white transition hover:text-primary pr-6 border-r ${config.borderColor} ${config.hoverNavItemColor}`}
            >
              {navigation.terms.termsAndConditions.name}
            </a>
            <a
              onClick={handleLinkClick}
              href={navigation.terms.privacyPolicy.href}
              className={`transition hover:text-primary text-left text-white ${config.hoverNavItemColor}`}
            >
              {navigation.terms.privacyPolicy.name}
            </a>
          </div>
        </div>
      </div>

      {/*Footer for mobile devices*/}

      <div className="block sm:hidden px-5 divide-y divide-gray-200 divide-opacity-3">
        <div className="flex justify-between items-center pt-[26px] pb-5">
          <div>
            {isBuyer ? (
              <CFFooterMobileLogo
                secondColor={"#ffffff"}
                firstColor={"#ffffff"}
              />
            ) : (
              <CFFooterMobileLogo
                secondColor={"#ffffff"}
                firstColor={"#31BC2E"}
              />
            )}
          </div>
          <div className="flex">
            <div className="p-2 flex my-auto">
              <LinkedInIcon width="26" height="26" />
            </div>
            <div className="p-2 flex my-auto">
              <FacebookIcon width="26" height="26" />
            </div>
            <div className="p-2 flex my-auto">
              <InstagramIcon width="26" height="26" />
            </div>
            <div className="p-2 flex my-auto">
              <TwitterIcon width="26" height="26" />
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white divide-y divide-gray-200 divide-opacity-3">
          {Object.keys(mobileNavigationDisclouserTabs).map((each, index) => {
            return (
              <div key={each} className="w-full">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={
                          "flex w-full justify-between items-center py-[18px]"
                        }
                        ref={refs[index]}
                        data-id={each}
                        data-open={open}
                        onClick={() => closeOtherDisclouser(refs[index])}
                      >
                        <p className="uppercase font-bold text-sm">{each}</p>
                        <p>
                          {open ? (
                            <CaretIcon className="rotate-180" />
                          ) : (
                            <CaretIcon />
                          )}
                        </p>
                      </Disclosure.Button>
                      {open && (
                        <Disclosure.Panel
                          as="div"
                          className={"flex flex-col gap-y-4 pb-4"}
                        >
                          {mobileNavigationDisclouserTabs[
                            each as keyof typeof mobileNavigationDisclouserTabs
                          ]?.map((e) => (
                            <a href={e.href} key={e.name}>
                              {e.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      )}
                    </>
                  )}
                </Disclosure>
              </div>
            );
          })}
        </div>
        <div className="text-white text-xs text-center py-6">
          <p>@2023 Complete Farmer Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
