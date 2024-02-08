import { useState } from "react";
import Fade from "react-reveal/Fade";
import ReactPlayer from "react-player";

import { Tab, Wrapper } from "@components/utils";
import { getYouTubeThumbnailUrl } from "@utils/functions";
import { PlayIcon } from "@assets/icons";

const mockTabs = [
  { id: 0, current: true, name: "All" },
  { id: 1, current: false, name: "Grower" },
  { id: 2, current: false, name: "Buyer" },
  { id: 3, current: false, name: "Corporate" },
];

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [tabs, setTabs] = useState(mockTabs);
  // const [activeTab, setActiveTab] = useState(mockTabs[0]);

  const toggleModal = () => setOpen(!open);

  const changeCategory = (i) => {
    const newCat = tabs.map((c) => {
      if (c.id === i) c.current = true;
      if (c.id !== i) c.current = false;
      return c;
    });
    // const activeCat = newCat.find((c) => c.current);
    // setActiveTab(activeCat);
    setTabs(newCat);
  };

  // Left
  const LeftComp = () => (
    <div className="max-[767px]:w-[100%] w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start sm:items-center justify-center space-y-10 text-white">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="flex flex-col justify-start items-start gap-11">
          <div className="flex flex-col justify-start items-start gap-8">
            <h3 className="text-3xl w-80 font-bold text-left md:text-[32px] md:leading-10 md:w-80 lg:text-[40px] lg:leading-[50px] lg:w-11/12">
              See how we’ve served others like you
            </h3>
            <p className="text-sm w-80 font-thin text-left md:text-base md:w-12/12 lg:text-lg xl:text-left lg:w-11/12">
              Browse through the inspiring success stories of customers
              empowered by our solutions
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );

  // Right
  const RightComp = () => (
    <div className="flex w-1/2 h-full ">
      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative h-full w-full">
          <div className="w-[320px] h-[280px] lg:w-[550px] lg:h-[450px] relative rounded-md">
            <div className="top-0 bottom-0 left-0 right-0 absolute flex items-center justify-center">
              <div
                role="button"
                onClick={toggleModal}
                className="p-4 hover:shadow-lg bg-white rounded-full group hover:bg-grower-500"
              >
                <PlayIcon
                  className="h-10 w-10 text-grower-500 group-hover:text-white"
                />
              </div>
            </div>
            <img
              src={getYouTubeThumbnailUrl(
                "https://youtu.be/_9HgDUGrjCQ?si=TOzS5mFOOCq4sLvs"
              )}
              alt="CEO"
              className="w-[320px] h-[280px] lg:w-[550px] lg:h-[450px] object-cover"
            />
          </div>
        </div>
      </Fade>
    </div>
  );

  return (
    <div className="mx-auto">
      <div className="max-w-7xl mx-auto">
        <Tab
          categories={tabs}
          normalBgColor="bg-white !py-0"
          changeCategory={changeCategory}
          inActiveTextColor="text-custom_black-900"
          className="!max-w-full lg:!max-w-full lg:!w-2/5 !pt-8 !pb-2"
          activeBgColor="bg-grower-500 !w-fit !py-2.5 md:!py-4 !px-5 sm:!px-10"
          inActiveBgColor="bg-custom_gray-200 !w-fit md:!py-4 !py-2.5 !px-5 sm:!px-10"
        />
      </div>

      <section className="w-full px-6 sm:px-10 pb-20 xl:pb-32 bg-cover bg-grower-400">
        <div className="w-full h-auto pt-14 xl:pt-32">
          <div className="max-w-7xl mx-auto px-4 items-center justify-between lg:flex-row flex-col h-full xl:gap-x-28 gap-y-8 lg:flex">
            <LeftComp />
            <RightComp />
          </div>
        </div>

        <Wrapper
          isOpen={open}
          onClose={toggleModal}
          className="!w-[350px] !h-[240px] md:!w-[640px] md:!h-[360px] xl:!w-[1280px] xl:!h-[720px] lg:max-w-7xl"
        >
          <ReactPlayer
            playing
            width="100%"
            height="100%"
            url="https://youtu.be/_9HgDUGrjCQ?si=TOzS5mFOOCq4sLvs"
          />
        </Wrapper>
      </section>
    </div>
  );
};

export default Hero;
