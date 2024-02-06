import React, { useEffect, useState } from "react";
import NewsCard from "components/utils/NewsCard";
import { newsConfig } from "constants/config";
import { getNews } from "api/news";
import SpinnerLoader from "components/utils/SpinnerLoader";
import { formatDateWithCommas } from "helpers/dateFunctions";

const maxRecordsPerPage = newsConfig.maxRecordsPerPage;

interface IProps {
  data: IPrismicData
}
export default function Example({ data }: IProps) {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);

  //       const newsApiData = await getNews({ page: pageNo, pageSize: maxRecordsPerPage });
  //       const transformedData = transformApiData(newsApiData.results);

  //       setData((prevData) => [...prevData, ...transformedData]);
  //       setTotalResults(newsApiData.total_results_size);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [pageNo]);

  // const transformApiData = (apiResults) => {
  //   return apiResults.map((item) => ({
  //     ...item,
  //     // label: "TechCrunch",
  //     date: formatDateWithCommas(item.last_publication_date),
  //     img: item.data.image.url,
  //     title: item.data.headline[0].text,
  //     uid: item.uid,
  //     tags: item.tags.length === 0 ? [] : item.tags
  //   }));
  // };

  const handleOnClickOpenPositions = () => {
    setPageNo(pageNo + 1);
  };

  const isLoadMore = () => {
    const isBool = data && totalResults !== 0 && totalResults !== data.length && totalResults > maxRecordsPerPage;
    return isBool;
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

  return (
    <>
      <div className="bg-white flex justify-center pt-6">
        <section className="relative w-full py-2 bg-white bg-opacity-95">
          <div className="max-w-7xl px-4 mx-auto">
            <div className="flex flex-col sm:grid sm:grid-cols-2 items-center justify-center py-8[x] mx-auto xl:flex-row xl:max-w-full">
              {data &&
                data.length > 0 &&
                data.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 py-2 pt-6">
                    <NewsCard news={item} />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>

      {data?.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <p className="mx-auto">
            {loading ? (
              <span className="">
                <SpinnerLoader loading={loading} color="#36d7b7" />
              </span>
            ) : (
              <span className="">No data</span>
            )}
          </p>
        </div>
      )}
      {/* Pagination */}
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
