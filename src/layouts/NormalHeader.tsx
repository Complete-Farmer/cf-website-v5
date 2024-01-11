import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";

import CFBuyerLogo from "@assets/images/logos/cf/buyer.png";
import CFGrowerLogo from "@assets/images/logos/cf/grower.png";
import CFMainLogo from "@assets/images/logos/cf/main.png";

import {
  ArrowIcon,
  ChevronIcon,
  MenuCloseIcon,
  MenuOpenIcon,
} from "@assets/icons";

import Drawer from "./Drawer";

import { companyLinks } from "@utils/constants";

const products = [
  {
    name: "CF Grower",
    description: "Speak directly to your customers",
    href: "/products/grower/new-farmer",
    logo: CFGrowerLogo,
    activeColor: "#31BC2E",
    defaultColor: "#6C6C6C",
  },
  {
    name: "CF Buyer",
    description: "Get a better understanding of your traffic",
    href: "/products/buyer",
    logo: CFBuyerLogo,
    activeColor: "#367AFE",
    defaultColor: "#6C6C6C",
  },
];

const drawerPropsData = {
  login: ["Login to CF Grower", "Login to CF Buyer"],
  signup: ["Create a CF Grower account", "Create a CF Buyer account"],
};

export default function NormalHeader({
  isContactUs,
}: {
  isContactUs: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerProps, setDrawerProps] = useState(drawerPropsData.login);

  const handleDrawer = (value: string) => {
    if (value === "Login") setDrawerProps(drawerPropsData.login);
    if (value === "SignUp") setDrawerProps(drawerPropsData.signup);

    // Blur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter =
      "blur(4px)";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =
      "blur(4px)";

    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    // Unblur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter = "none";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =
      "none";
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const navigateMobileLinks = () => setMobileMenuOpen(false);

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "SignedIn"
    // });
    // window.metapixelfunction("profile", "profile_signed", {});
    // window.dataLayer.push({
    //   event: "profile_signed"
    // });
  };

  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Logo Clicked"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "LogoClickEvent"
    // });
    // ReactPixel.track("Logo Clicked", {});
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white lg:border-b lg:border-10 lg:border-[#E6E6E6]">
        <div className="container flex flex-row flex-wrap items-center justify-between mx-auto max-w-7xl">
          <div className="relative flex flex-row mx-5">
            <div className="flex items-center font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                <a href="/" onClick={handleLinkClick} className="-m-1.5 p-1.5">
                  <img
                    src={CFMainLogo.src}
                    className="h-7 md:h-8"
                    alt="complete farmer logo"
                  />
                </a>
              </span>
            </div>

            <nav
              className="hidden mx-auto sm:flex max-w-7xl items-center justify-between gap-1 p-6 lg:px-8"
              aria-label="Global"
            >
              <Popover.Group className="hidden lg:flex lg:gap-x-9 items-center">
                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button className="flex items-center space-x-1 text-grower-400">
                        <span className="-mt-1 text-base font-bold text-left">
                          Products
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
                            <div className="relative grid gap-2 bg-white lg:grid-cols-1">
                              <div className="p-4">
                                {products.map((item) => (
                                  <div
                                    key={item.name}
                                    className="relative rounded-lg p-4 hover:bg-gray-50 group"
                                  >
                                    <a
                                      href={item.href}
                                      onClick={handleLinkClick}
                                      className="block text-sm font-semibold leading-6"
                                    >
                                      <div className="flex justify-start">
                                        <img
                                          src={item.logo.src}
                                          className="h-6 grayscale group-hover:grayscale-0"
                                        />
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button className="flex items-center space-x-1 text-grower-400">
                        <span className="-mt-1 text-base font-bold text-left h-6">
                          Company
                        </span>
                        <ChevronIcon className={open ? "rotate-180" : ""} />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-800"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          onMouseLeave={() => {
                            close();
                          }}
                          className="absolute left-40 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-0 sm:px-0 lg:max-w-xs"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg w-64">
                            <div className="relative grid  bg-white lg:grid-cols-1 ">
                              {companyLinks
                                .filter((l) => !l.isMobile)
                                .map((item) => (
                                  <a
                                    key={item.name}
                                    onClick={handleLinkClick}
                                    href={item.href}
                                    className="block group/item relative rounded-lg p-4 hover:bg-gray-50 text-md font-normal leading-6  text-custom_black-900 hover:text-grower-500"
                                  >
                                    <div className="flex justify-between">
                                      <span className="flex justify-start items-center">
                                        {item.name}
                                      </span>
                                      <span className="group/edit invisible group-hover/item:visible flex flex-col justify-center">
                                        <ArrowIcon className="group-hover/edit:translate-x-1 flex justify-end" />
                                        {/* rotate-180 transform */}
                                      </span>
                                    </div>
                                  </a>
                                ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="/contact-us"
                  onClick={handleLinkClick}
                  className={
                    isContactUs
                      ? "rounded-full bg-custom_gray-200 px-3 py-2"
                      : undefined
                  }
                >
                  <div className="flex items-center space-x-1 text-grower-400">
                    <span className="text-base font-bold text-left">
                      Contact us
                    </span>
                  </div>
                </a>
              </Popover.Group>
            </nav>
          </div>

          <div className="inline-flex items-center mx-5 space-x-6 lg:justify-end">
            <div className="hidden sm:flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-4 py-2 rounded-[1900px] bg-white">
              <button
                onClick={() => {
                  handleDrawer("Login");
                  handleButtonClick();
                }}
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
                onClick={() => {
                  handleDrawer("SignUp");
                  handleButtonClick();
                }}
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

      {/* Moblile Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[999] flex w-full flex-col justify-between[x] overflow-y-auto bg-white sm:max-w-sm[x]">
          <div className="p-5 sm:px-12">
            <div className="flex items-center justify-between">
              <a href="/">
                <img
                  src={CFMainLogo.src}
                  className="h-7"
                  alt="complete farmer logo"
                />
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <MenuCloseIcon />
              </button>
            </div>
            <div className="sm:mt-3 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <p className="-mx-3 block rounded-lg text-xs sm:text-sm px-3 pt-4 sm:pb-4 uppercase font-semibold leading-7 text-gray-600 hover:bg-gray-50">
                    Products
                  </p>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative rounded-lg py-4 sm:py-6 hover:bg-gray-50 "
                    >
                      <a
                        href={item.href}
                        onClick={() => navigateMobileLinks()}
                        className="block text-sm font-semibold leading-6"
                      >
                        <img
                          src={item.logo.src}
                          className="h-7"
                          alt={item.name}
                        />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 lg:py-6">
                  <p className="-mx-3 block rounded-lg text-xs sm:text-sm px-3 py-2 sm:pt-4 uppercase font-semibold leading-7 text-gray-600 hover:bg-gray-50">
                    Company
                  </p>

                  {companyLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => navigateMobileLinks()}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10 flex mx-5 sm:mx-12 mt-5 sm:pt-8 flex-col sm:flex-row gap-4 sm:gap-6 lg:divide-x lg:border border-t pt-6 divide-gray-900/5 bg-white text-center">
            <button
              onClick={() => {
                handleDrawer("Login");
                setMobileMenuOpen(false);
              }}
              className="block w-full order-2 sm:order-1 mx-auto rounded-md border border-grower-500 px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold text-grower-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Login
            </button>
            <button
              onClick={() => {
                handleDrawer("SignUp");
                setMobileMenuOpen(false);
              }}
              className="block w-full mx-auto order-1 sm:order-2 rounded-md bg-grower-500 px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign up
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Drawer
        drawerOpen={drawerOpen}
        drawerProps={drawerProps}
        handleCloseDrawer={handleCloseDrawer}
      />
    </>
  );
}
