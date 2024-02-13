import { Dialog } from "@headlessui/react";

import { companyLinks } from "@utils/constants";
import { classNames } from "@utils/functions";

import { MenuCloseIcon } from "@assets/icons";

import BuyerLogo from "@assets/images/logos/cf/buyer.webp";
import GrowerLogo from "@assets/images/logos/cf/grower.webp";
import MainLogo from "@assets/images/logos/cf/main.webp";

const products = [
  {
    name: "CF Grower",
    href: "/products/grower/new-farmer",
    logo: GrowerLogo,
  },
  {
    name: "CF Buyer",
    href: "/products/buyer",
    logo: BuyerLogo,
  },
];

const menus = {
  Products: products,
  Company: companyLinks,
};

interface IProps {
  isOpen: boolean;
  isBuyer: boolean;
  onClose: () => void;
  handleDrawer: (v: "Login" | "SignUp") => void;
  mobileTabs?: { name: string; href: string }[];
}

const MobileMenu = ({
  isOpen,
  onClose,
  isBuyer,
  mobileTabs,
  handleDrawer,
}: IProps) => {
  return (
    <Dialog as="div" open={isOpen} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-[999] flex w-full flex-col justify-between[x] overflow-y-auto bg-white sm:max-w-sm[x]">
        <div className="p-5 sm:px-12">
          <div className="flex items-center justify-between">
            <a href="/">
              <img
                src={MainLogo.src}
                className="h-7"
                alt="complete farmer logo"
              />
            </a>
            <button type="button" onClick={onClose}>
              <span className="sr-only">Close menu</span>
              <MenuCloseIcon />
            </button>
          </div>
          <div className="sm:mt-3 flow-root">
            <div className="divide-y divide-gray-300">
              {Object.keys(menus).map((key) => (
                <div key={key} className="space-y-2 py-4">
                  <p className="block rounded-lg text-xs sm:text-sm pt-4 sm:pb-4 uppercase font-semibold leading-7 text-gray-600">
                    {key}
                  </p>
                  <div className="space-y-4">
                    {menus[key].map(
                      (item: {
                        name: string;
                        href: string;
                        logo?: { src: string };
                      }) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={onClose}
                          className={classNames(
                            item.logo &&
                              "text-base font-normal leading-7 text-gray-900",
                            "block py-2"
                          )}
                        >
                          {item.logo ? (
                            <img
                              src={item.logo.src}
                              className="h-7"
                              alt={item.name}
                            />
                          ) : (
                            item.name
                          )}
                        </a>
                      )
                    )}
                  </div>
                </div>
              ))}

              {mobileTabs && (
                <div className="w-full flex-col justify-start items-start py-2">
                  {mobileTabs.map((item) => (
                    <div
                      key={item.name}
                      className=" py-2 bg-white justify-start items-center "
                    >
                      <a href={item.href}>
                        <div className="text-zinc-900 text-base  font-bold leading-loose">
                          {item.name}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-10 flex mx-5 sm:mx-12 mt-5 sm:pt-8 flex-col sm:flex-row gap-4 sm:gap-6 lg:divide-x lg:border pt-6 divide-gray-900/5 bg-white text-center">
          <button
            onClick={() => handleDrawer("Login")}
            className={classNames(
              !isBuyer
                ? "text-grower-500 border-grower-500"
                : "text-buyer-500 border-buyer-500",
              "block w-full order-2 sm:order-1 mx-auto rounded-md border px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            )}
          >
            Login
          </button>
          <button
            onClick={() => handleDrawer("SignUp")}
            className={classNames(
              !isBuyer ? "bg-grower-500" : "bg-buyer-500",
              "block w-full mx-auto order-1 sm:order-2 rounded-md px-3.5 py-3.5 sm:py-5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            )}
          >
            Sign up
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
