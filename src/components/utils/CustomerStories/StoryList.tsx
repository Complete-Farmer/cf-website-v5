import ReactPlayer from "react-player";
import { useStore } from "@nanostores/react";
import { useEffect, useMemo, useState } from "react";

import { CaretIcon, PlayIcon } from "@assets/icons";
import EmptyImage from "@assets/images/products/story-list-empty.png";

import { $customerStoriesActiveTab } from "@utils/stores";
import { getCxStories } from "@utils/prismic";
import { classNames, getYouTubeThumbnailUrl } from "@utils/functions";

import Tabs from "./Tabs";
import type { IPrismicData } from "types/app";

import { Wrapper } from "..";

interface IProps {
  filters?: string[];
  isBuyer?: boolean;
  data: IPrismicData;
  totalResults: number;
}

const StoryList = ({
  data,
  isBuyer,
  filters,
  totalResults: _totalResults,
}: IProps) => {
  const [open, setOpen] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Videos");
  const [filteredData, setFilteredData] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [totalResults, setTotalResults] = useState(_totalResults);
  const customerStoriesActiveTab = useStore($customerStoriesActiveTab);

  const transformData = (data: IPrismicData) => {
    const buildData = (item) => ({
      id: item.uid,
      duration: item.data.duration,
      video: item.data.video_uri.url,
      name: item?.data?.name[0]?.text,
      type: item.data.type === "Videos" ? "video" : "article",
      imageSrc: getYouTubeThumbnailUrl(item.data.video_uri.url),
    });
    if (customerStoriesActiveTab === "All") {
      return data.results.map((item) => buildData(item));
    } else {
      return data.results
        .filter(
          (item) => item.data.category?.data.name === customerStoriesActiveTab
        )
        .map((item) => buildData(item));
    }
  };

  const _data = useMemo(
    () => transformData(data),
    [data, customerStoriesActiveTab]
  );

  useEffect(() => {
    // set initials data
    if (_data) {
      setStories(_data);
    }
  }, [_data]);

  useEffect(() => {
    const newData = stories.filter((c) => {
      if (activeTab === "Videos" && c.type === "video") return c;
      if (activeTab === "Articles" && c.type === "article") return c;
    });
    setFilteredData(newData);
  }, [activeTab, stories]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const customerStories = await getCxStories({
          page: pageNo,
          pageSize: 10,
          filters,
          fetchLinks: ["categories.name"],
        });
        setLoading(false);

        const data = transformData(customerStories);
        setStories((prevData) => [...prevData, ...data]);
        setTotalResults(customerStories.total_results_size);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (pageNo > 1) {
      fetch();
    }
  }, [pageNo]);

  const changeActiveTab = (value: string) => setActiveTab(value);

  const toggleModal = (id: string) => {
    const selectedId = stories.find((item) => item.id === id).video;
    setVideoUrl(selectedId);
    setOpen(!open);
  };

  const isLoadMore = () => {
    const isBool =
      stories &&
      totalResults !== 0 &&
      totalResults !== stories.length &&
      totalResults > 10;
    return isBool;
  };

  return (
    <div className="bg-white">
      <div className="px-6 py-8 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 lg:px-4 sm:py-12">
        <Tabs
          isBuyer={isBuyer}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />

        <div className="grid gap-x-4 gap-y-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((story, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() => toggleModal(story.id)}
            >
              <div className="relative w-full group space-y-2">
                <div className="block overflow-hidden group rounded-xl relative">
                  <img
                    src={story.imageSrc}
                    className="w-full h-40 sm:h-64 lg:h-[350px] object-cover transition-all duration-300 ease-out group-hover:scale-110"
                    alt="Story Image"
                  />
                </div>

                <div
                  className={classNames(
                    isBuyer ? "text-buyer-500" : "text-grower-500",
                    "absolute flex space-x-1 sm:space-x-2 p-1 sm:p-1.5 items-center bg-white rounded-sm sm:rounded-md left-2 sm:left-4 bottom-9 lg:bottom-14"
                  )}
                >
                  <PlayIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-[10px] md:text-xs font-bold">
                    {story.duration?.toFixed(2)}
                  </span>
                </div>

                <h3 className="text-sm md:text-base lg:text-2xl lg:leading-9 lg:w-full font-bold text-left text-custom_black-900">
                  {story.name}
                </h3>
              </div>
            </div>
          ))}

          <Wrapper
            isOpen={open}
            onClose={() => setOpen(false)}
            className="flex overflow-hidden rounded-md transition mx-auto lg:max-w-7xl w-[426px] h-[240px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px]"
          >
            <ReactPlayer url={videoUrl} playing width="100%" height="100%" />
          </Wrapper>
        </div>

        {filteredData.length === 0 && (
          <div className="mx-auto flex max-w-7xl flex-col items-center py-10 pb-16 px-auto">
            <img
              src={EmptyImage.src}
              alt="Empty"
              className="py-6 md:py-5 lg:py-2 w-[100px]"
            />
            <div className="flex-col justify-start items-center gap-10 inline-flex">
              <div className="hidden sm:block " />
              <div className="text-center px-5 text-zinc-900 text-base md:text-xl md:leading-6 font-normal">
                There are no {activeTab.toLowerCase()} available at the moment
              </div>
            </div>
          </div>
        )}

        {filteredData.length !== 0 && isLoadMore() && (
          <div className="w-full text-center">
            <div className="my-12">
              <button
                onClick={() => setPageNo(pageNo + 1)}
                className={classNames(
                  isBuyer
                    ? "text-buyer-500 hover:bg-buyer-500"
                    : "text-grower-500 hover:bg-grower-500",
                  "h-14 w-36 rounded-full inline-flex items-center justify-center text-base font-bold leading-6 bg-custom_gray-200 hover:text-white"
                )}
              >
                {loading ? "Loading" : "Load more"}
                <CaretIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryList;
