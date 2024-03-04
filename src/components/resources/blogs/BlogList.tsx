import { useEffect, useState } from "react";

import { getBlogs } from "@utils/prismic";
import { blogsConfig } from "@utils/constants";
import { formatDateWithCommas } from "@utils/functions";

import type { IPrismicData, IPrismicDoc } from "types/app";

import { BlogCard } from ".";
import { Button, SpinnerLoader } from "@components/utils";

const maxRecordsPerPage = blogsConfig.maxRecordsPerPage;

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
  blogsApiData: IPrismicData;
}

export default function BlogList({ blogsApiData }: IProps) {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(blogsApiData.next_page);
  const [data, setData] = useState(transformApiData(blogsApiData.results));
  const [totalResults, setTotalResults] = useState(
    blogsApiData.total_results_size
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const _blogsApiData = await getBlogs({
          page: pageNo,
          pageSize: maxRecordsPerPage,
        });
        const transformedData = transformApiData(_blogsApiData.results);
        setData((prevData) => [...prevData, ...transformedData]);
        setNextPage(_blogsApiData.next_page);
        setTotalResults(_blogsApiData.total_results_size);
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
      totalResults > maxRecordsPerPage &&
      nextPage;
    return isBool;
  };

  return (
    <section
      aria-labelledby="collection-heading"
      className="mx-auto max-w-xl p-4 pb-6 sm:max-w-7xl sm:px-8 lg:py-10"
    >
      <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 md:gap-4 md:mx-0 md:max-w-none md:grid-cols-3 border-0 border-black">
        {data?.map((item) => <BlogCard key={item.title} blog={item} isTags />)}
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
            className="mx-auto sm:!w-60 md:!w-[200px] !bg-custom_gray-200 !text-grower-500 font-semibold lg:!text-lg py-4 !rounded-full"
          />
        </div>
      )}
    </section>
  );
}
