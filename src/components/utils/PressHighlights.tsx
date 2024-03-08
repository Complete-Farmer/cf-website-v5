import { useMemo } from "react";

import type { IPrismicData } from "types/app";

import { NewsCard } from "@components/resources/news-room";

import { formatDateWithCommas } from "@utils/functions";
import { Fading } from ".";

interface IProps {
  data?: IPrismicData;
}

function PressHighlights({ data }: IProps) {
  const news = useMemo(() => {
    return data?.results.map((item) => ({
      ...item,
      // label: "TechCrunch",
      uid: item.uid,
      img: item?.data.image.url,
      title: item?.data.headline[0].text,
      tags: item.tags.length === 0 ? [] : item.tags,
      date: formatDateWithCommas(item.last_publication_date),
    }));
  }, [data]);

  return (
    <section className="flex items-center justify-center w-full px-4 pt-10 lg:pt-16 pb-11 sm:pt-20 bg-white lg:mt-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex-col items-center">
          <div className="text-center sm:pb-6">
            <h2 className="text-[28px] sm:text-5xl lg:font-[48px] leading-[60px] font-bold text-center text-grower-900">
              Press Highlights
            </h2>
          </div>

          <Fading bottom>
            <>
              <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-10[x] lg:gap-x-0[x] items-center justify-center mx-auto xl:flex-row">
                {news?.map((item, index) => (
                  <div
                    key={index}
                    className="investor-relation-news py-2 pt-6 border-b last:border-b-0 investor-element"
                  >
                    <NewsCard news={item} />
                  </div>
                ))}
              </div>
              <div className="hidden text-[20px] sm:flex items-center justify-center px-6 mb-10 lg:mb-5">
                <a
                  href="/resources/news-room"
                  className="w-full sm:w-[190px] sm:mt-10 lg:mt-0 flex items-center justify-center h-16 px-6 sm:mx-40 lg:mx-0 lg:w-44 lg:text-base font-medium lg:font-bold tracking-wide bg-grower-500 text-white transition duration-200 rounded-full focus:shadow-outline focus:outline-none"
                >
                  Show all news
                </a>
              </div>
            </>
          </Fading>

          {news?.length === 0 && (
            <div className="flex justify-center items-center h-full">
              <p className="mx-auto">
                <span className="">No data</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PressHighlights;
