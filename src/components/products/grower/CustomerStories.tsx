import { useMemo } from "react";

import type { IPrismicData } from "types/app";

import HeadingOneLine from "@components/utils/HeadingOneLine";
import { getYouTubeThumbnailUrl } from "@utils/functions";

import CustomerStoriesBody from "./CustomerStoriesBody";

const CustomerStories = ({ data }: { data: IPrismicData }) => {
  const stories = useMemo(() => {
    return data.results
      .filter((item) => item.data.video_uri && item.data.video_uri.url) // Filter out items without video URI
      .map((item) => {
        const transformedItem = {
          id: item.uid,
          duration: item.data.duration,
          video: item.data.video_uri.url,
          name: item?.data?.name[0]?.text,
          imageSrc: getYouTubeThumbnailUrl(item.data.video_uri.url),
        };
        return transformedItem;
      });
  }, [data]);


  return stories?.length > 0 && (
    <div className="md:py-10 lg:pt-20">
      <HeadingOneLine
        title="Enabling shared prosperity one farmer at a time"
        desc="CF Grower helps farmers experience growth in their fields and bank accounts by helping them build lasting wealth for themselves and their communities. See how we’ve helped other farmers like you."
      />
      <CustomerStoriesBody stories={stories} />
      <div className="flex items-center justify-center h-full py-12 mb-16 mt-4">
        <a
          href="/products/grower/customer-stories"
          className="w-80 h-14 md:w-2/4 lg:w-56 rounded-full flex items-center justify-center text-xl font-bold leading-6 bg-grower-500 text-white"
        >
              See all stories
        </a>
      </div>
    </div>
  );
};

export default CustomerStories;
