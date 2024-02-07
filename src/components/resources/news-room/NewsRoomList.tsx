import { formatDateWithCommas } from "@utils/functions";
import { getNews } from "@utils/prismic";
import { useEffect, useState } from "react";
import type { IPrismicData, IPrismicDoc } from "types/app";
import { NewsCard } from ".";
import { SpinnerLoader } from "@components/utils";
import { maxRecordsPerPage } from "@utils/constants";

const transformApiData = (doc: IPrismicDoc) => {
  return doc.map((item) => ({
    ...item,
    uid: item.uid,
    img: item.data.image.url,
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
        const _newsApiData = await getNews({ page: pageNo, pageSize: maxRecordsPerPage });
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

  const handleOnClickOpenPositions = () => {
    setPageNo(pageNo + 1);
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Load More"
    // });
    // window.metapixelfunction("load", "load_more", {});
    // window.dataLayer.push({
    //   event: "load_more"
    // });
  };

  const isLoadMore = () => {
    const isBool =
      data &&
      totalResults !== 0 &&
      totalResults !== data.length &&
      totalResults > maxRecordsPerPage &&
      nextPage;
    return isBool;
  };

  return (
    <>
      <div className="bg-white flex justify-center pt-6">
        <section className="relative w-full py-2 bg-white bg-opacity-95">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex flex-col sm:grid sm:grid-cols-2 items-center justify-center py-8[x] mx-auto xl:flex-row xl:max-w-full">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-2 pt-6"
                >
                  <NewsCard news={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {data?.length === 0 && (
        <div className="flex justify-center items-center h-full">
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
        <div className="w-full text-center">
          <div className="my-12">
            <button
              onClick={() => {
                handleOnClickOpenPositions();
                handleButtonClick();
              }}
              disabled={loading}
              className="h-14 w-36 rounded-full inline-flex items-center justify-center text-base font-bold leading-6 text-custom_green-500 bg-custom_gray-200 hover:bg-custom_green-500 hover:text-white"
            >
              {loading ? "Loading" : "Load more"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
