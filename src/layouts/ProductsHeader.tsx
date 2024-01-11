import React, { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Drawer from "./Drawer";
import { ArrowIcon, ChevronIcon } from "../assets/icons";

// import { useGlobalContext } from "context/GlobalContext";
import classNames from "classnames";
import {BuyerGetInTouchModal, GrowerGetInTouchModal} from "../components/modals/get-in-touch";
import { companyLinks } from "../utils/constants";

import BuyerLogo from "@assets/images/logos/cf/buyer.png";
import GrowerLogo  from "@assets/images/logos/cf/grower.png";
import MainLogo  from "@assets/images/logos/cf/main.png";

const config = [
  {
    name: "CF Grower",
    description: "Speak directly to your customers",
    href: "/products/grower/new-farmer",
    logo: GrowerLogo,
    popoverArrowIcon: ArrowIcon, //ArrowRightGreenIcon,
    activeColor: "#31BC2E",
    defaultColor: "#6C6C6C",
    firstText: {
      name: "Existing farmer",
      href: "/products/grower/existing-farmer"
    },
    secondText: [
      { name: "Resources", href: "/products/grower/resources" },
      { name: "Customer stories", href: "/products/grower/customer-stories" },
      { name: "Grower agents", href: "/products/grower/agent" },
      { name: "Farm manager academy", href: "/products/grower/farm-manager-academy" }
    ],
    isHover: false,
    textcolor: "text-[#004C46]",

    mobileTabs: [
      {
        name: "New Farmer",
        href: "/products/grower/new-farmer"
      },
      {
        name: "Existing Farmer",
        href: "/products/grower/existing-farmer"
      },
      {
        name: "Resources",
        href: "/products/grower/resources"
      },
      {
        name: "Customer stories",
        href: "/products/grower/customer-stories"
      }
    ]
  },
  {
    name: "CF Buyer",
    description: "Get a better understanding of your traffic",
    href: "/products/buyer",
    logo: BuyerLogo,
    popoverArrowIcon: ArrowIcon, // ArrowRightBlueIcon,
    firstText: {
      name: "Customer stories",
      href: "/products/buyer/customer-stories"
    },
    secondText: [
      { name: "Resources", href: "/products/buyer/resources" },
      { name: "Sales affiliate", href: "/products/buyer/sales" }
    ],
    activeColor: "#367AFE",
    defaultColor: "#6C6C6C",
    isHover: false,
    textcolor: "text-[#00194C]",
    mobileTabs: [
      {
        name: "Customer stories",
        href: "/products/buyer/customer-stories"
      },
      {
        name: "Resources",
        href: "/products/buyer/resources"
      },
      {
        name: "Sales affiliate",
        href: "/products/buyer/sales"
      }
    ]
  }
];

const initialProducts = [
  {
    name: "CF Grower",
    description: "Speak directly to your customers",
    href: "/products/grower/new-farmer",
    logo: GrowerLogo,
    activeColor: "#31BC2E",
    defaultColor: "#6C6C6C",
    isHover: false
  },
  {
    name: "CF Buyer",
    description: "Get a better understanding of your traffic",
    href: "/products/buyer",
    logo: BuyerLogo,
    activeColor: "#367AFE",
    defaultColor: "#6C6C6C",
    isHover: false
  }
];

const drawerPropsData = {
  login:["Login to CF Grower", "Login to CF Buyer"],
  signup:["Create a CF Grower account", "Create a CF Buyer account"],
};


const ProductsHeader: React.FC<{ isBuyer: boolean; pathname: string }> = ({ isBuyer, pathname }) => {
  const [isSignUpModalOpen, setSignUpModal] = useState(false);

  const data = config[isBuyer ? 1 : 0];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [drawerProps, setDrawerProps] = useState<string[]>(drawerPropsData.signup);
  const [open, setOpen] = useState(false);

  const handleDrawer = (value: string) => {
    if (value === "Login") setDrawerProps(drawerPropsData.login);
    if (value === "SignUp") setDrawerProps(drawerPropsData.signup);

    // Blur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter =  "blur(4px)";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =  "blur(4px)";
    setSignUpModal(true);
  };

  const handleCloseDrawer = () => {
    setSignUpModal(false);
    // Unblur the background
    (document.querySelector(".app-body") as HTMLElement).style.filter =  "none";
    (document.querySelector(".app-footer") as HTMLElement).style.filter =  "none";
    setDrawerProps(drawerPropsData.signup); // Reset the drawer props to signup
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const navigateMobiles = () => {
    setMobileMenuOpen(false);
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  const isNewFarmer = pathname.includes("new-farmer");
  const isExistingFarmer = pathname.includes("existing-farmer");

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Signed"
    // });

    // window.metapixelfunction("profile", "profile_signed", {});

    // window.dataLayer.push({
    //   event: "profile_signed"
    // });
  };

  const handleaClick = () => {
    // ReactGA.event({
    //   category: "a Click",
    //   action: "Page a"
    // });

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "PageaClick"
    // });

    // ReactPixel.track("Page a", {});
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white lg:border-b lg:border-10 lg:border-[#E6E6E6]">
        <div className="container flex flex-row items-center justify-between mx-auto max-w-7xl">
          <div className="relative flex flex-row mx-5">
            <div className="flex items-center font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none ">
                <a href="/" className="-m-1.5 p-1.5">
                  {/* <data.logo color={data.activeColor} /> */}
                  <img src={data.logo.src} />
                </a>
              </span>
            </div>

            <nav className="hidden mx-auto sm:flex max-w-7xl items-center justify-between gap-1 px-6 lg:px-8" aria-label="Global">
              <Popover.Group className="hidden lg:flex lg:gap-x-9 lg:items-center">
                {isBuyer ? (
                  <></>
                ) : (
                  <div
                    className={classNames(
                      mobileMenuOpen ? "hidden" : "flex",
                      isNewFarmer ? " bg-grower-500" : "",
                      "justify-start items-center relative gap-1 px-3 py-2 rounded-full"
                    )}
                  >
                    <a
                      href={"/products/grower/new-farmer"}
                      onClick={handleaClick}
                      className={classNames(isNewFarmer ? "text-white" : "text-grower-400", "text-base font-bold text-center")}
                    >
                      New Farmer
                    </a>
                  </div>
                )}

                {isBuyer ? (
                  <a href={data.firstText.href} onClick={handleaClick} className="text-sm font-bold leading-6 text-grower-400">
                    <div className="flex justify-start items-center relative gap-x-0 rounded-full bg-white">
                      <p className={classNames("text-base font-bold text-left ", data.textcolor)}>{data.firstText.name}</p>
                    </div>
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
                      onClick={handleaClick}
                      className={classNames(isExistingFarmer ? "text-white" : "text-grower-400", "text-base font-bold text-center")}
                    >
                      Existing Farmer
                    </a>
                  </div>
                )}

                <Popover className="relative">
                  {({ open, close }) => (
                    <>
                      <Popover.Button className="flex items-center gap-x-0 text-sm font-bold leading-6 text-grower-400  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <div className="flex justify-start items-center relative gap-1 rounded-xl bg-white">
                          <p className={classNames("text-base font-bold text-left ", data.textcolor)}>More</p>
                        </div>
                        <ChevronIcon className={open ? "rotate-180 transform" : ""} />
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
                              {data.secondText.map((item) => (
                                <div key={item.name} className="group/item relative rounded-lg p-4 hover:bg-gray-50">
                                  <a
                                    onClick={handleaClick}
                                    href={item.href}
                                    className="block text-md font-normal leading-6  text-custom_black-900"
                                  >
                                    <div className="flex justify-between">
                                      <span className="flex justify-start items-center">{item.name}</span>
                                      <span className="group/edit invisible group-hover/item:visible flex flex-col justify-center">
                                        <data.popoverArrowIcon className="group-hover/edit:translate-x-1 flex justify-end" />
                                      </span>
                                    </div>
                                  </a>
                                </div>
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

          <div className="inline-flex items-center mx-5 sm:space-x-2 md:space-x-4 lg:space-x-6 lg:justify-end">
            <div className="hidden sm:flex justify-start items-center relative gap-1 px-4 py-2 rounded-full bg-white">
              <button onClick={toggleModal} className={classNames("text-base font-bold text-center ", data.textcolor)}>
                Get in touch
              </button>
            </div>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={toggleModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full w-xl items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="flex w-full h-55vh transform text-left text-base transition md:my-20 md:max-w-2xl md:px-4 lg:max-w-3xl">
                        {isBuyer ? <BuyerGetInTouchModal toggleModal={toggleModal} /> : <GrowerGetInTouchModal toggleModal={toggleModal} />}
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
            <div className="hidden sm:flex justify-start items-center relative gap-1 px-4 py-2 rounded-full bg-white">
              <button
                onClick={() => {
                  handleDrawer("Login");
                  handleButtonClick();
                }}
                className={classNames("text-base font-bold text-center ", data.textcolor)}
              >
                Login
              </button>
            </div>
            <div
              className={`${mobileMenuOpen ? "hidden" : "flex"} justify-start items-center relative gap-1 px-3 py-2 rounded-full bg-[${
                data.activeColor
              }]`}
            >
              <button
                onClick={() => {
                  handleDrawer("SignUp");
                  handleButtonClick();
                }}
                className="text-base font-bold text-center text-white"
              >
                Sign up
              </button>
            </div>
            <div className="flex lg:hidden pl-2">
              <button
                type="button"
                className={`-m-2.5 ${mobileMenuOpen ? "hidden" : "inline-flex"} items-center justify-center rounded-md p-2.5 text-gray-700`}
                onClick={openMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`-m-2.5 ${mobileMenuOpen ? "inline-flex" : "hidden"} items-center justify-center rounded-md p-2.5 text-gray-700`}
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
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[999] flex w-full flex-col justify-between[x] overflow-y-auto bg-white sm:max-w-sm[x]">
          <div className="p-6 sm:px-12">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                {/* <Logo color={"#004C46"} /> */}
                <img src={MainLogo.src} />

              </a>
              <button type="button" className="lg:-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
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
                  {initialProducts.map((item) => (
                    <div key={item.name} className="relative rounded-lg py-4 sm:py-6 hover:bg-gray-50 ">
                      <a href={item.href} onClick={() => navigateMobiles()} className="block text-sm font-semibold leading-6">
                        <div className="flex justify-start">
                          {/* <item.logo color={item.activeColor} /> */}
                          <img src={item.logo.src} />
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <p className="-mx-3 block rounded-lg text-xs sm:text-sm px-3 py-2 sm:pt-4 uppercase font-semibold leading-7 text-gray-600 hover:bg-gray-50">
                    Company
                  </p>

                  {companyLinks.map((item) => (
                    <a
                      href={item.href} onClick={() => navigateMobiles()}
                      key={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="w-full flex-col justify-start items-start py-2">
                  {data.mobileTabs.map((item) => (
                    <div key={item.name} className=" py-2 bg-white justify-start items-center ">
                      <a href={item.href}>
                        <div className="text-zinc-900 text-base  font-bold leading-loose">{item.name}</div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 flex mx-5 sm:mx-12 mt-5 sm:pt-8 flex-col sm:flex-row gap-4 sm:gap-6 lg:divide-x lg:border pt-6 divide-gray-900/5 bg-white text-center">
            <button
              onClick={() => {
                handleDrawer("Login");
                setMobileMenuOpen(false);
              }}
              className={classNames(
                `text-[${data.activeColor}] border-[${data.activeColor}]`,
                "block w-full order-2 sm:order-1 mx-auto rounded-md border px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              )}
            >
              Login
            </button>
            <button
              onClick={() => {
                handleDrawer("SignUp");
                setMobileMenuOpen(false);
              }}
              className={classNames(
                `bg-[${data.activeColor}]`,
                "block w-full mx-auto order-1 sm:order-2 rounded-md px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              )}
            >
              Sign up
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      <Drawer drawerOpen={isSignUpModalOpen} handleCloseDrawer={handleCloseDrawer} drawerProps={drawerProps} />
    </>
  );
};

export default ProductsHeader;