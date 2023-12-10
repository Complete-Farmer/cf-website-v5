import React, { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BuyerLogo from "../assets/logos/header/cf-buyer";
import GrowerLogo from "../assets/logos/header/cf-grower";
import Drawer from "./Drawer";
import Logo from "../assets/logos/header/cf-main";
import { ArrowRightGreenIcon, ChevronDownIcon } from "../assets/icons";
import { companyLinks } from "../utils/constants";
// import ReactGA from "react-ga4";
// import ReactPixel from "react-facebook-pixel";

const initialProducts = [
  {
    name: "CF Grower",
    description: "Speak directly to your customers",
    href: "/product/grower/new-farmer",
    logo: GrowerLogo,
    activeColor: "#31BC2E",
    defaultColor: "#6C6C6C",
    isHover: false,
  },
  {
    name: "CF Buyer",
    description: "Get a better understanding of your traffic",
    href: "/product/buyer",
    logo: BuyerLogo,
    activeColor: "#367AFE",
    defaultColor: "#6C6C6C",
    isHover: false,
  },
];

const drawerPropsData = {
  login: {
    textOneFirst: "Login to CF Grower",
    textTwoFirst: "Login to CF Buyer",
  },
  signup: {
    textOneFirst: "Create a CF Grower",
    textOneLast: "account",
    textTwoFirst: "Create a CF Buyer",
    textTwoLast: "account",
  },
};

export default function NormalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [drawerProps, setDrawerProps] = useState(drawerPropsData.login);

  const handleDrawer = (value: string) => {
    if (value === "Login") setDrawerProps(drawerPropsData.login);
    if (value === "SignUp") setDrawerProps(drawerPropsData.signup);

    // Blur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter =  "blur(4px)";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =  "blur(4px)";

    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    // Unblur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter =  "none";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =  "none";
  };

  const handleOnHover = (selectedProduct: { name: string }) => {
    const newTabs = products.map((item) => {
      if (item.name === selectedProduct.name) item.isHover = true;
      if (item.name !== selectedProduct.name) item.isHover = false;
      return item;
    });
    setProducts(newTabs);
  };

  const clearProducts = () => {
    const pr = products.map((item) => {
      item.isHover = false;
      return item;
    });
    setProducts(pr);
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
                  <Logo color="#004C46" />
                </a>
              </span>
            </div>

            <nav
              className="hidden mx-auto sm:flex max-w-7xl items-center justify-between gap-1 p-6 lg:px-8"
              aria-label="Global"
            >
              <Popover.Group className="hidden lg:flex lg:gap-x-9">
                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button className="flex items-center gap-x-0 text-sm font-bold leading-6 text-custom_green-900  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 rounded-[1900px]">
                          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-custom_green-900">
                            Products
                          </p>
                        </div>
                        <ChevronDownIcon
                          className={`w-4 h-4 ${
                            open ? "rotate-180 transform" : ""
                          }`}
                        />
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
                          onMouseLeave={() => {
                            clearProducts();
                            close();
                          }}
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg w-64 ">
                            <div className="relative grid gap-2 bg-white lg:grid-cols-1">
                              <div className="p-4">
                                {products.map((item) => (
                                  <div
                                    key={item.name}
                                    className="relative rounded-lg p-4 hover:bg-gray-50 "
                                    onMouseEnter={() => handleOnHover(item)}
                                  >
                                    <a
                                      onClick={handleLinkClick}
                                      href={item.href}
                                      className="block text-sm font-semibold leading-6"
                                    >
                                      <div className="flex justify-start">
                                        <item.logo
                                          color={
                                            item.isHover
                                              ? item.activeColor
                                              : item.defaultColor
                                          }
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
                      <Popover.Button className="flex items-center gap-x-0 text-sm font-bold leading-6 text-custom_green-900  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 rounded-xl bg-white">
                          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-custom_green-900">
                            Company
                          </p>
                        </div>
                        <ChevronDownIcon
                          className={`w-4 h-4 ${
                            open ? "rotate-180 transform" : ""
                          }`}
                        />
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
                              {companyLinks.filter((l) => !l.isMobile).map((item) => (
                                <a
                                  key={item.name}
                                  onClick={handleLinkClick}
                                  href={item.href}
                                  className="block group/item relative rounded-lg p-4 hover:bg-gray-50 text-md font-normal leading-6  text-custom_black-900 hover:text-custom_lightgreen-500"
                                >
                                  <div className="flex justify-between">
                                    <span className="flex justify-start items-center">
                                      {item.name}
                                    </span>
                                    <span className="group/edit invisible group-hover/item:visible flex flex-col justify-center">
                                      <ArrowRightGreenIcon className="group-hover/edit:translate-x-1 flex justify-end" />
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
                  className="text-sm font-bold leading-6 text-custom_green-900"
                >
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-x-0 rounded-[1900px] bg-white">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-custom_green-900">
                      Contact us
                    </p>
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
                className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-custom_green-900"
              >
                Login
              </button>
            </div>
            <div
              className={`${
                mobileMenuOpen ? "hidden" : "flex"
              } justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1 px-3 py-2 rounded-[1900px] bg-custom_lightgreen-500`}
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
                className={`-m-2.5 ${
                  mobileMenuOpen ? "hidden" : "inline-flex"
                } items-center justify-center rounded-md p-2.5 text-gray-700`}
                onClick={openMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`-m-2.5 ${
                  mobileMenuOpen ? "inline-flex" : "hidden"
                } items-center justify-center rounded-md p-2.5 text-gray-700`}
                onClick={openMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
          <div className="p-6 sm:px-12">
            <div className="flex items-center justify-between">
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Logo color="#004C46" />
              </a>
              <button
                type="button"
                className="lg:-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 sm:h-10" aria-hidden="true" />
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
                        <div className="flex justify-start">
                          <item.logo color={item.activeColor} />
                        </div>
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
              className="block w-full order-2 sm:order-1 mx-auto rounded-md border border-custom_green-500 px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold text-custom_green-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Login
            </button>
            <button
              onClick={() => {
                handleDrawer("SignUp");
                setMobileMenuOpen(false);
              }}
              className="block w-full mx-auto order-1 sm:order-2 rounded-md bg-custom_green-500 px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
