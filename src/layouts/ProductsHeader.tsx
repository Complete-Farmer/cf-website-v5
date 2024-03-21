import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useStore } from "@nanostores/react";

import { Wrapper } from "@components/utils";
import { BuyerGetInTouch, FullComparison } from "@components/products/buyer";
import { GrowerGetInTouch } from "@components/products/grower";

import { classNames } from "@utils/functions";
import {
  $authModal,
  $getInTouchModal,
  $fullComparisonDrawer,
} from "@utils/stores";

import {
  ArrowIcon,
  ChevronIcon,
  MenuCloseIcon,
  MenuOpenIcon,
} from "@assets/icons";
import BuyerLogo from "@assets/images/logos/cf/buyer.webp";
import GrowerLogo from "@assets/images/logos/cf/grower.webp";

import Drawer from "./Drawer";
import MobileMenu from "./MobileMenu";

const config = [
  {
    logo: GrowerLogo,
    name: "CF Grower",
    textcolor: "text-grower-400",
    activeBgColor: "bg-grower-500",
    activeTextColor: "text-grower-500",
    href: "/products/grower/new-farmer",
    activeBorderColor: "border-grower-500",
    description: "Speak directly to your customers",
    firstText: {
      name: "Existing farmer",
      href: "/products/grower/existing-farmer",
    },
    secondText: [
      { name: "Resources", href: "/products/grower/resources" },
      { name: "Customer stories", href: "/products/grower/customer-stories" },
      { name: "Grower Agents", href: "/products/grower/agent" },
      {
        name: "Farm Manager Academy",
        href: "/products/grower/farm-manager-academy",
      },
      { name: "Home", href: "/" },
      { name: "Buyer", href: "/products/buyer" },
    ],
    mobileTabs: [
      {
        name: "New Farmer",
        href: "/products/grower/new-farmer",
      },
      {
        name: "Existing Farmer",
        href: "/products/grower/existing-farmer",
      },
      {
        name: "Resources",
        href: "/products/grower/resources",
      },
      {
        name: "Customer stories",
        href: "/products/grower/customer-stories",
      },
    ],
  },
  {
    logo: BuyerLogo,
    name: "CF Buyer",
    href: "/products/buyer",
    popoverArrowIcon: ArrowIcon,
    textcolor: "text-buyuer-400",
    activeBgColor: "bg-buyer-500",
    activeTextColor: "text-buyer-500",
    activeBorderColor: "border-buyer-500",
    description: "Get a better understanding of your traffic",
    firstText: {
      name: "Customer stories",
      href: "/products/buyer/customer-stories",
    },
    secondText: [
      { name: "Resources", href: "/products/buyer/resources" },
      { name: "Sales affiliate", href: "/products/buyer/sales-affiliate" },
      { name: "Home", href: "/" },
      { name: "Grower", href: "/products/grower/new-farmer" },
    ],
    mobileTabs: [
      {
        name: "Customer stories",
        href: "/products/buyer/customer-stories",
      },
      {
        name: "Resources",
        href: "/products/buyer/resources",
      },
      {
        name: "Sales affiliate",
        href: "/products/buyer/sales-affiliate",
      },
    ],
  },
];

const ProductsHeader: React.FC<{ pathname: string }> = ({ pathname }) => {
  const authModal = useStore($authModal);
  const getInTouchModal = useStore($getInTouchModal);
  const fullComparisonDrawer = useStore($fullComparisonDrawer);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("signup");

  const openMobileMenu = () => setMobileMenuOpen(true);

  const toggleModal = () => $getInTouchModal.set(!getInTouchModal);

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
    setAuthType("signup"); // Reset the drawer props to signup
  };

  const isBuyer = pathname.includes("buyer");
  const isNewFarmer = pathname.includes("new-farmer");
  const isExistingFarmer = pathname.includes("existing-farmer");
  const data = config[isBuyer ? 1 : 0];

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white lg:border-b lg:border-10 lg:border-gray-200">
        <div className="container flex flex-row items-center justify-between mx-auto max-w-7xl">
          <div className="relative flex flex-row mx-5">
            <div className="font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none ">
                <a href={data.href} className="-m-1.5 p-1.5">
                  <img
                    src={data.logo.src}
                    alt="Complete Farmer"
                    className="h-5 md:h-[30px]"
                  />
                </a>
              </span>
            </div>

            <nav
              className="hidden mx-auto sm:flex max-w-7xl items-center justify-between gap-1 px-6 lg:px-8 text-grower-400"
              aria-label="Global"
            >
              <Popover.Group className="hidden lg:flex space-x-6 items-baseline">
                {!isBuyer && (
                  <div
                    className={classNames(
                      mobileMenuOpen ? "hidden" : "flex",
                      isNewFarmer ? " bg-grower-500" : "",
                      "justify-start items-center relative gap-1 px-3 py-2 rounded-full"
                    )}
                  >
                    <a
                      href="/products/grower/new-farmer"
                      className={classNames(
                        isNewFarmer ? "text-white" : "",
                        "text-base font-bold text-center"
                      )}
                    >
                      New Farmer
                    </a>
                  </div>
                )}

                {isBuyer ? (
                  <a
                    href={data.firstText.href}
                    className={
                      pathname === data.firstText.href
                        ? "rounded-full bg-custom_gray-200 px-3 py-2"
                        : ""
                    }
                  >
                    <span className="text-base font-bold">
                      {data.firstText.name}
                    </span>
                  </a>
                ) : (
                  <div
                    className={classNames(
                      mobileMenuOpen ? "hidden" : "flex",
                      isExistingFarmer ? " bg-grower-500" : "",
                      "justify-start items-center relative gap-1 px-3 py-2 rounded-full"
                    )}
                  >
                    <a
                      href={"/products/grower/existing-farmer"}
                      className={classNames(
                        isExistingFarmer ? "text-white" : "",
                        "text-base font-bold text-center"
                      )}
                    >
                      Existing Farmer
                    </a>
                  </div>
                )}

                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button className="flex items-center space-x-1  focus:outline-none">
                        <span className="-mt-1 text-base font-bold h-6">
                          More
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
                          onMouseLeave={() => close()}
                          className="absolute left-40 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-0 sm:px-0 lg:max-w-xs"
                        >
                          <div className="overflow-hidden rounded-lg shadow-lg w-64">
                            <div className="relative grid  bg-white lg:grid-cols-1 ">
                              {data.secondText.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    isBuyer
                                      ? "hover:text-buyer-500"
                                      : "hover:text-grower-500",
                                    "block group/item rounded-lg p-4 hover:bg-gray-50 text-md font-normal leading-6 text-custom_black-900"
                                  )}
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
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </nav>
          </div>

          <div className="inline-flex items-center mx-5 space-x-2 md:space-x-4 lg:space-x-6 lg:justify-end">
            <div className="hidden sm:flex justify-start items-center relative gap-1 px-4 py-2 rounded-full bg-white">
              <button
                id="toggle-modal-get-in-touch"
                onClick={toggleModal}
                className={classNames(
                  "text-base font-bold text-center ",
                  data.textcolor
                )}
              >
                Get in touch
              </button>
            </div>

            <Wrapper
              isOpen={getInTouchModal}
              onClose={() => $getInTouchModal.set(false)}
              className={isBuyer ? "md:!max-w-2xl lg:!max-w-3xl": ""}
            >
              {isBuyer ? (
                <BuyerGetInTouch toggleModal={toggleModal} />
              ) : (
                <GrowerGetInTouch toggleModal={toggleModal} />
              )}
            </Wrapper>
            <div className="hidden sm:flex justify-start items-center relative gap-1 px-4 py-2 rounded-full bg-white">
              <button
                onClick={() => handleDrawer("Login")}
                className={classNames(
                  "text-base font-bold text-center ",
                  data.textcolor
                )}
              >
                Login
              </button>
            </div>
            <div
              className={`${
                mobileMenuOpen ? "hidden" : "flex"
              } justify-start items-center relative gap-1 px-3 py-2 rounded-full ${
                data.activeBgColor
              }`}
            >
              <button
                onClick={() => handleDrawer("SignUp")}
                className="text-sm md:text-base font-bold text-center text-white"
              >
                Sign up
              </button>
            </div>
            <div className="flex lg:hidden pl-2">
              <button
                type="button"
                className={`-m-2.5 ${
                  mobileMenuOpen ? "hidden" : "inline-flex"
                } items-center justify-center rounded-md p-2.5 text-gray-700`}
                onClick={openMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <MenuOpenIcon className="h-6 w-6"/>
              </button>
              <button
                type="button"
                className={`-m-2.5 ${
                  mobileMenuOpen ? "inline-flex" : "hidden"
                } items-center justify-center rounded-md p-2.5 text-gray-700`}
                onClick={openMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <MenuCloseIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isBuyer={isBuyer}
        isOpen={mobileMenuOpen}
        handleDrawer={handleDrawer}
        mobileTabs={data.mobileTabs}
        onClose={() => setMobileMenuOpen(false)}
      />

      <Drawer
        isBuyer={isBuyer}
        authType={authType}
        drawerOpen={authModal}
        handleCloseDrawer={handleCloseDrawer}
      />

      <FullComparison
        open={fullComparisonDrawer}
        onClose={() => $fullComparisonDrawer.set(false)}
      />
    </>
  );
};

export default ProductsHeader;
