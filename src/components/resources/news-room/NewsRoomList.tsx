import { useEffect, useState } from "react";

import { NewsCard } from ".";
import { Button, SpinnerLoader } from "@components/utils";

import { getNews } from "@utils/prismic";
import { newsConfig } from "@utils/constants";
import { formatDateWithCommas } from "@utils/functions";

import type { IPrismicData, IPrismicDoc } from "types/app";


const transformApiData = (doc: IPrismicDoc) => {
  return doc.map((item) => ({
    ...item,
    uid: item.uid,
    title: item.data.headline[0].text,
    tags: item.tags.length === 0 ? [] : item.tags,
    date: formatDateWithCommas(item.last_publication_date),
  }));
};
interface IProps {
  newsApiData: IPrismicData;
}

export default function NewsRoomList({ newsApiData }: IProps) {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(newsApiData.next_page);
  const [data, setData] = useState(transformApiData(newsApiData.results));
  const [totalResults, setTotalResults] = useState(
    newsApiData.total_results_size
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const _newsApiData = await getNews({
          page: pageNo,
          pageSize: newsConfig.maxRecordsPerPage,
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


  const isLoadMore = () => {
    const isBool =
      data &&
      totalResults !== 0 &&
      totalResults !== data.length &&
      totalResults > newsConfig.maxRecordsPerPage &&
      nextPage;
    return isBool;
  };

  return (
    <section className="relative w-full p-2 pb-6 lg:py-10 bg-white bg-opacity-95">
      <div className="max-w-7xl px-4  mx-auto">
        <div className="flex flex-col sm:grid sm:grid-cols-2 items-center justify-center mx-auto xl:flex-row xl:max-w-full">
          {data?.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-2 pt-6">
              <NewsCard news={item} />
            </div>
          ))}
        </div>
      </div>

      {(data?.length === 0 || loading) && (
        <div className="flex justify-center items-center pt-10 h-full">
          <div className="mx-auto">
            {loading ? (
              <SpinnerLoader loading={loading} color="#36d7b7" />
            ) : (
              <span className="">No job vacancies found</span>
            )}
          </div>
        </div>
      )}

      {isLoadMore() && (
        <div className="w-full mt-12 sm:mt-7 lg:mt-20 mx-auto">
          <Button
            onClick={() => setPageNo(pageNo + 1)}
            title={loading ? "Loading" : "Load more"}
            className="mx-auto sm:!w-60 md:!w-[240px] lg:!text-lg py-4 !rounded-full"
          />
        </div>
      )}
    </section>
  );
}
