import "react-modern-drawer/dist/index.css";

import ReactDrawer from "react-modern-drawer";
import useResolution from "@hooks/useResolution";

import Image1 from "@assets/images/products/buyer/full-comparison.webp";
import Image2 from "@assets/images/products/buyer/full-comparison-with-cf.webp";
import Image3 from "@assets/images/products/buyer/full-comparison-without-cf.webp";

import { MenuCloseIcon } from "@assets/icons";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const Drawer = ({ open, onClose }: IProps) => {
  const { screenType } = useResolution();
  return (
    <ReactDrawer
      open={open}
      onClose={onClose}
      customIdSuffix="full-comparison"
      lockBackgroundScroll={
        screenType === "mobile" || screenType === "tablet" ? true : false
      }
      size="100vh"
      enableOverlay
      direction="top"
      overlayOpacity={0.7}
      className="z-20 flex justify-center"
      zIndex={screenType === "mobile" || screenType === "tablet" ? 99 : 2}
    >
      <div className="bg-buyer-900 lg:max-w-screen border-buyer-900 w-screen h-full lg:mt-20">
        <div className="flex justify-end p-5 lg:pt-6 lg:px-8">
          <button
            type="button"
            className="px-4 pt-4 sm:mr-4 lg:p-2 text-buyer-500"
            onClick={onClose}
          >
            <span className="sr-only">Close panel</span>
            <MenuCloseIcon className="h-8 w-8" />
          </button>
        </div>
        <div className="hidden md:flex flex-col lg:flex-row justify-center lg:mx-auto w-full">
          <img
            src={Image1.src}
            alt="comparison"
            className="mx-auto w-[656px] lg:w-[80vw] xl:w-[40vw]"
          />
        </div>
        <div className="flex md:hidden flex-col w-full my-0 max-h-screen overflow-y-scroll">
          <div className="flex justify-between items-center relative w-full">
            <div className="text-2xl font-bold text-left text-custom_black-900 py-0 pb-32 w-full">
              <img
                src={Image2.src}
                alt="comparison"
                className="w-96 mx-auto h-100 cursor-default px-4 sm:px-8"
              />
              <div className="bg-buyer-500 h-3 my-12" />
              <img
                src={Image3.src}
                alt="comparison"
                className="w-96 mx-auto h-100 cursor-default mt-12 px-4 sm:px-8"
              />
            </div>
          </div>
        </div>
      </div>
    </ReactDrawer>
  );
};

export default Drawer;
