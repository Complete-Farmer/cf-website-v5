import { useMemo, useState } from "react";

import { IPrismicData } from "types/app";

import { Tab } from "@components/utils";
import { CustomerStoriesBody } from "@components/products/grower";

import Image4 from "@assets/images/products/story-list-empty.png";

import { getYouTubeThumbnailUrl } from "@utils/functions";

interface IProps {
  data: IPrismicData;
}

const mockTabs = [
  { id: 0, current: true, name: "Videos" },
  { id: 1, current: false, name: "Articles" },
];

const StoriesSlider = ({ data }: IProps) => {
  const [tabs, setTabs] = useState(mockTabs);
  const [activeTab, setActiveTab] = useState(mockTabs[0]);

  const changeCategory = (i: number) => {
    const newCat = tabs.map((c) => {
      if (c.id === i) c.current = true;
      if (c.id !== i) c.current = false;
      return c;
    });
    const activeCat = newCat.find((c) => c.current);
    setActiveTab(activeCat);
    setTabs(newCat);
  };

  const stories = useMemo(() => {
    return data.results.map((item) => {
      const transformedItem = {
        ...item,
        type: item.data.type,
        duration: item.data.duration,
        video: item.data.video_uri.url,
        name: item?.data?.name[0]?.text,
        imageSrc: getYouTubeThumbnailUrl(item.data.video_uri.url),
      };
      return transformedItem;
    });
  }, [activeTab, data]);

  const article = [];

  return (
    <div>
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

      <div className="md:pb-10 lg:pb-20">
        {stories?.length > 0 && activeTab.name === "Videos" && (
          <CustomerStoriesBody stories={stories} />
        )}

        {article.length > 0 && activeTab.name === "Articles" && (
          <div className="text-center">
            <p>Here is for Articles</p>
          </div>
        )}

        {(activeTab.name === "Videos" && stories?.length === 0) ||
          (activeTab.name === "Articles" && article.length === 0 && (
            <div className="mx-auto flex max-w-7xl flex-col items-center py-10 px-auto">
              <img src={Image4.src} alt="" className="py-6 md:py-5 lg:py-2" />
              <div className="flex-col justify-start items-center gap-10 inline-flex">
                <div className="text-center text-zinc-900 text-base md:text-xl md:leading-6 font-normal">
                  There are no {activeTab.name.toLowerCase()} available at the
                  moment
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoriesSlider;
