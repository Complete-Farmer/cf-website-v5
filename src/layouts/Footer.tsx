import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import React, { useCallback, useMemo } from "react";
import { Disclosure } from "@headlessui/react";

import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  CaretIcon,
} from "@assets/icons";

import CFFooterLogo from "@assets/images/logos/cf/footer.webp";

import {
  companyLinks,
  productsLinks,
  supportLinks,
  legalLinks,
} from "@utils/constants";

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

const socials = [
  {
    icon: LinkedInIcon,
    name: "linkedin",
    link: "https://www.linkedin.com/company/completefarmer/",
  },
  {
    icon: FacebookIcon,
    name: "facebook",
    link: "https://www.facebook.com/completefarmer",
  },
  {
    icon: InstagramIcon,
    name: "instagram",
    link: "https://www.instagram.com/completefarmer",
  },
  {
    icon: TwitterIcon,
    name: "twitter",
    link: "https://www.twitter.com/completefarmer",
  },
];

export default function Footer({
  pathname,
  isHiring,
}: {
  pathname: string;
  isHiring: boolean;
}) {
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
    bgPattern: "bg-footer-pattern",
    bgColor: !isBuyer ? "bg-grower-900" : "bg-buyer-900",
    borderColor: !isBuyer ? "border-grower-400" : "border-buyer-400",
    hiringColor: !isBuyer ? "text-grower-500" : "text-buyer-500",
    bgHiringColor: !isBuyer ? "bg-grower-500/20" : "bg-buyer-500/20",
    hoverNavItemColor: !isBuyer
      ? "hover:text-grower-500"
      : "hover:text-buyer-500",
    bgColorSocial: !isBuyer ? "bg-grower-400" : "bg-buyer-400",
    hoverNavItemColorSocial: !isBuyer
      ? "hover:bg-grower-500"
      : "hover:bg-buyer-500",
  };

  return (
    <footer
      className={`bg-footer-pattern bg-cover ${config.bgColor}`}
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-14 sm:px-12 lg:px-8 lg:pt-32 hidden sm:block">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="sm:flex lg:block lg:space-y-8 sm:justify-between lg:justify-start">
            <a href="/" className="flex ">
              <img
                src={CFFooterLogo.src}
                alt="complete Farmer"
                className={`h-14 ${isBuyer ? "brightness-0 invert" : ""}`}
              />
            </a>

            <div className="flex lg:hidden justify-start items-start gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial}`}
                >
                  <s.icon />
                </a>
              ))}
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
                          href={companyItem.href}
                          className={`sm:text-sm lg:text-base text-left text-white ${config.hoverNavItemColor}`}
                        >
                          {companyItem.name}
                        </a>
                        {companyItem.name === "Careers" && isHiring && (
                          <div
                            className={`flex sm:hidden lg:flex justify-start items-start gap-2.5 ml-2 px-1.5 py-1 rounded-m ${config.bgHiringColor} rounded-lg`}
                          >
                            <span
                              className={`text-xs font-bold text-left ${config.hiringColor}`}
                            >
                              We’re hiring
                            </span>
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
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-full ${config.bgColorSocial} ${config.hoverNavItemColorSocial}`}
                    >
                      <s.icon />
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:grid lg:hidden grid-rows-2 h-[10vh] text-white">
                <p className="text-sm sm:text-base lg:text-xl font-bold text-left text-white mb-6">
                  LEGAL
                </p>
                <div className="flex flex-col text-sm lg:text-xl justify-start items-start gap-2 sm:gap-4">
                  <a href={navigation?.terms?.termsAndConditions?.href}>
                    {navigation?.terms?.termsAndConditions?.name}
                  </a>
                  <a href={navigation?.terms?.privacyPolicy?.href}>
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
              href={navigation.terms.termsAndConditions.href}
              className={`text-white transition hover:text-primary pr-6 border-r ${config.borderColor} ${config.hoverNavItemColor}`}
            >
              {navigation.terms.termsAndConditions.name}
            </a>
            <a
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
            <img
              src={CFFooterLogo.src}
              alt="complete Farmer"
              className={`h-6 ${isBuyer ? "brightness-0 invert" : ""}`}
            />
          </div>
          <div className="flex space-x-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                className="p-1"
                rel="noreferrer"
              >
                <s.icon />
              </a>
            ))}
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
                          className="flex flex-col gap-y-4 pb-4"
                        >
                          {mobileNavigationDisclouserTabs[
                            each as keyof typeof mobileNavigationDisclouserTabs
                          ]?.map((e: { href: string; name: string }) => (
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

      <ToastContainer />
    </footer>
  );
}
