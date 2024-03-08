import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useStore } from "@nanostores/react";

import {
  $authModal,
} from "@utils/stores";

import CFBuyerLogo from "@assets/images/logos/cf/buyer.webp";
import CFGrowerLogo from "@assets/images/logos/cf/grower.webp";
import CFMainLogo from "@assets/images/logos/cf/main.webp";

import { ArrowIcon, ChevronIcon, MenuOpenIcon } from "@assets/icons";

import Drawer from "./Drawer";
import MobileMenu from "./MobileMenu";

import { companyLinks } from "@utils/constants";

const products = [
  {
    name: "CF Grower",
    href: "/products/grower/new-farmer",
    logo: CFGrowerLogo,
  },
  {
    name: "CF Buyer",
    href: "/products/buyer",
    logo: CFBuyerLogo,
  },
];

const menus = {
  Products: products,
  Company: companyLinks,
};

export default function NormalHeader({ pathname }: { pathname: string }) {
  const authModal = useStore($authModal);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("signup");
  

  const isBuyer = pathname.includes("buyer");

  const handleDrawer = (value: string) => {
    setMobileMenuOpen(false);
    setAuthType(value.toLowerCase() as "login" | "signup");

    // Blur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter =
      "blur(4px)";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =
      "blur(4px)";
    $authModal.set(true);
  };

  const handleCloseDrawer = () => {
    $authModal.set(false);
    // Unblur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter = "none";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =
      "none";
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white lg:border-b lg:border-10 lg:border-gray-200">
        <div className="container flex flex-row flex-wrap items-center justify-between mx-auto max-w-7xl">
          <div className="relative flex flex-row mx-5">
            <div className="font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    src={CFMainLogo.src}
                    className="h-7 md:h-8"
                    alt="complete farmer logo"
                  />
                </a>
              </span>
            </div>

            <nav
              className="hidden mx-auto sm:flex max-w-7xl items-center justify-between gap-1 p-6 lg:px-8 text-grower-400"
              aria-label="Global"
            >
              <Popover.Group className="hidden lg:flex space-x-6 items-baseline">
                {Object.keys(menus).map((key) => (
                  <Popover key={key} className="relative">
                    {({ open, close }) => (
                      <>
                        <Popover.Button className="flex items-center space-x-1 focus:outline-none">
                          <span className="-mt-1 text-base font-bold">
                            {key}
                          </span>
                          <ChevronIcon className={open ? "rotate-180" : ""} />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            className="absolute left-40 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-0 sm:px-0 lg:max-w-xs"
                            onMouseLeave={() => close()}
                          >
                            <div className="overflow-hidden rounded-lg shadow-lg w-64 ">
                              <div className="relative bg-white">
                                {menus[key]
                                  .filter((item) => !item.isMobile)
                                  .map((item) => (
                                    <div
                                      key={item.name}
                                      className="relative rounded-lg p-4 hover:bg-gray-50 group"
                                    >
                                      {item.logo ? (
                                        <a
                                          href={item.href}
                                          className="block text-sm font-semibold leading-6"
                                        >
                                          <div className="flex justify-start">
                                            <img
                                              alt={item.name}
                                              src={item.logo.src}
                                              className="h-6 grayscale group-hover:grayscale-0"
                                            />
                                          </div>
                                        </a>
                                      ) : (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          className="block group/item rounded-lg hover:bg-gray-50 text-md font-normal leading-6 text-custom_black-900 hover:text-grower-500"
                                        >
                                          <div className="flex justify-between">
                                            <span className="flex justify-start items-center">
                                              {item.name}
                                            </span>
                                            <span className="group/edit invisible group-hover/item:visible flex flex-col justify-center">
                                              <ArrowIcon className="group-hover/edit:translate-x-1 flex justify-end" />
                                            </span>
                                          </div>
                                        </a>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                <a
                  href="/contact-us"
                  className={
                    pathname === "/contact-us"
                      ? "rounded-full bg-custom_gray-200 px-3 py-2"
                      : ""
                  }
                >
                  <span className="text-base font-bold text-grower-400">
                    Contact us
                  </span>
                </a>
              </Popover.Group>
            </nav>
          </div>

          <div className="inline-flex items-center mx-5 space-x-6 lg:justify-end">
            <div className="hidden sm:flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-4 py-2 rounded-[1900px] bg-white">
              <button
                onClick={() => handleDrawer("Login")}
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-grower-400"
              >
                Login
              </button>
            </div>
            <div
              className={`${
                mobileMenuOpen ? "hidden" : "flex"
              } justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[1900px] bg-grower-500`}
            >
              <button
                onClick={() => handleDrawer("SignUp")}
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-white"
              >
                Sign up
              </button>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={openMobileMenu}
                className="text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <MenuOpenIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isBuyer={isBuyer}
        isOpen={mobileMenuOpen}
        handleDrawer={handleDrawer}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Drawer
        isBuyer={isBuyer}
        authType={authType}
        drawerOpen={authModal}
        handleCloseDrawer={handleCloseDrawer}
      />
    </>
  );
}
