import { useEffect, useMemo, useState } from "react";

import { EventCard } from "./";
import { Tab, Button, SpinnerLoader } from "@components/utils";

import { getEvents } from "@utils/prismic";
import { eventsConfig } from "@utils/constants";
import { formatDate, isDatePast } from "@utils/functions";

import type { IPrismicData, IPrismicDoc } from "types/app";

const _cateogries = [
  { id: 0, name: "All", current: true },
  { id: 1, name: "Upcoming", current: false },
  { id: 2, name: "Past", current: false },
];

const transformApiData = (doc: IPrismicDoc) => {
  return doc.map((item) => ({
    id: item.id,
    uid: item.uid,
    type: item?.data?.type,
    platform: item?.data?.platform,
    image: item?.data?.webinar_image,
    description: item.data?.description,
    speakers: item?.data?.speakers || [],
    video: item?.data?.webinar_video?.url,
    title: item?.data?.webinar_title?.[0].text,
    register_link: item?.data?.register_link?.url,
    isPast: isDatePast(item?.data?.start_date_time),
    endDate: formatDate("DD MMMM, YYYY", item?.data?.end_date_time),
    startDate: formatDate("DD MMMM, YYYY", item?.data?.start_date_time),
    startTime: formatDate(
      "h:mm A",
      new Date(item?.data?.start_date_time).getTime()
    ),
    endTime: formatDate(
      "h:mm A",
      new Date(item?.data?.end_date_time).getTime()
    ),
  }));
};

interface IProps {
  eventsApiData: IPrismicData;
}

const EventsList = ({ eventsApiData }: IProps) => {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [categories, setCategories] = useState(_cateogries);
  const [nextPage, setNextPage] = useState(eventsApiData.next_page);
  const [data, setData] = useState(transformApiData(eventsApiData.results));
  const [totalResults, setTotalResults] = useState(
    eventsApiData.total_results_size
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const _newsApiData = await getEvents({
          page: pageNo,
          pageSize: eventsConfig.maxRecordsPerPage,
        });
        const transformedData = transformApiData(_newsApiData.results);
        setData((prevData) => [...prevData, ...transformedData]);
        setNextPage(_newsApiData.next_page);
        setTotalResults(_newsApiData.total_results_size);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    pageNo > 1 && fetchData();
  }, [pageNo]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      if (activeTab === "Upcoming" && !item.isPast) return true;
      if (activeTab === "Past" && item.isPast) return true;
      if (activeTab === "All") return true;
      return false;
    });
  }, [activeTab, data]);

  const changeCategory = (i: number) => {
    _cateogries.filter((c) => {
      if (c.id === i) c.current = true;
      if (c.id !== i) c.current = false;
      return c;
    });
    const activeCat = _cateogries.find(({ id }) => id === i);
    setCategories(_cateogries);
    activeCat && setActiveTab(activeCat.name);
  };

  const isLoadMore = () => {
    const isBool =
      data &&
      totalResults !== 0 &&
      totalResults !== data.length &&
      totalResults > eventsConfig.maxRecordsPerPage &&
      nextPage;
    return isBool;
  };

  return (
    <div className="px-6 sm:px-12 pb-8 sm:pb-12 lg:px-4 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full">
      <Tab
        categories={categories}
        normalBgColor="bg-white"
        changeCategory={changeCategory}
        inActiveTextColor="text-custom_black-900"
        className="!max-w-full lg:!max-w-full lg:!w-2/5 pt-4 pb-3"
        activeBgColor="bg-grower-500 !w-fit !py-2.5 md:!py-4 !px-5 sm:!px-10"
        inActiveBgColor="bg-custom_gray-200 !w-fit md:!py-4 !py-2.5 !px-5 sm:!px-10"
      />
      <section className="mx-auto w-full bg-opacity-95">
        <div className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>

        {(filteredData?.length === 0 || loading) && (
          <div className="flex justify-center items-center pt-10 h-full">
            <div className="mx-auto">
              {loading ? (
                <SpinnerLoader loading={loading} color="#36d7b7" />
              ) : (
                <span className="">
                  There are currently no {activeTab.toLowerCase()} events.
                </span>
              )}
            </div>
          </div>
        )}

        {isLoadMore() && (
          <div className="w-full mt-12 sm:mt-7 lg:mt-20 mx-auto">
            <Button
              onClick={() => setPageNo(pageNo + 1)}
              title={loading ? "Loading" : "Load more"}
              className="mx-auto sm:!w-60 md:!w-[200px] !bg-custom_gray-200 !text-grower-500 font-semibold lg:!text-lg py-4 !rounded-full"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default EventsList;
