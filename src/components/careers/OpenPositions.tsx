import { useState, useEffect } from "react";

import type { IPrismicDoc } from "types/app";

import { filterAt, getJobVacancies } from "@utils/prismic";

import { ArrowIcon } from "@assets/icons";
import { classNames } from "@utils/functions";
import { Selector, SpinnerLoader } from "@components/utils";

const maxRecordsPerPage = 10;

interface IProps {
  departments: {
    id: string;
    name: string;
  }[];
}

export default function OpenPositions({ departments }: IProps) {
  const [selectedDepartment, setSelectedDepartment] =
    useState<(typeof departments)[0]>(departments[0]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const filters = selectedDepartment
          ? filterAt("my.job_vacancies.department", `${selectedDepartment}`)
          : undefined;
        const careerApiData = await getJobVacancies({
          page: pageNo,
          pageSize: maxRecordsPerPage,
          filters,
          fetchLinks: ["categories.name"],
        });
        const transformedData = transformApiData(careerApiData.results);
        setData((prevData) =>
          selectedDepartment?.id === prevData[0]?.data?.department?.id
            ? [
              ...new Map(
                [...prevData, ...transformedData].map((item) => [
                  item["id"],
                  item,
                ])
              ).values(),
            ]
            : transformedData
        );
        setTotalResults(careerApiData.total_results_size);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNo, selectedDepartment]);

  const transformApiData = (apiResults: IPrismicDoc) => {
    return apiResults.map((item) => ({
      ...item,
      role: item?.data?.title[0]?.text,
      department: item?.data?.department?.data?.name,
    }));
  };

  const handleOnClickOpenPositions = () => {
    setPageNo(pageNo + 1);
  };

  const handleOnDepartmentChange = (value) => {
    setPageNo(1);
    setSelectedDepartment(value);
  };

  const isLoadMore = () => {
    const isBool =
      data &&
      totalResults !== 0 &&
      totalResults !== data.length &&
      totalResults > maxRecordsPerPage;
    return isBool;
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Load More"
    // });
    // window.metapixelfunction("load more", "position_load_more", {});
    // window.dataLayer.push({
    //   event: "position_load_more"
    // });
  };

  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Load More"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "PositionLoadMore"
    // });
    // ReactPixel.track("Load more", {});
  };

  return (
    <section id="vacancies" className="pt-16 pb-12 sm:pb-0 lg:pb-20 lg:pt-32 mx-6 sm:mx-12 bg-white">
      <div
        className={classNames(
          isLoadMore() ? "pb-20" : "pb-28",
          "max-w-7xl px-0 md:px-0 mx-auto xl:px-5 border-b"
        )}
      >
        <div className="flex flex-col sm:flex-row mx-auto justify-between mb-5 sm:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-custom_green-900 sm:text-4xl">
              Open positions
          </h2>
          <div className="flex items-center sm:w-72">
            <label htmlFor="departments" className="sr-only">
                Departments
            </label>

            <Selector
              options={departments}
              selected={selectedDepartment}
              setSelected={handleOnDepartmentChange}
            />
          </div>
        </div>

        <ul role="list" className="">
          {data?.map((application, i) => (
            <li key={i}>
              <a
                onClick={handleLinkClick}
                href={`/careers/${application.uid}`}
                className={`block hover:bg-gray-50 ${
                  i === 9 ? "border-b-0" : "border-b"
                } ${i === 29 ? "border-b-0" : "border-b"}`}
              >
                <div className="flex items-center px-0 py-4">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="min-w-0 flex-1 px-1 sm:px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-xs sm:text-sm font-normal text-green-600">
                          {application.department}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate font-bold text-base sm:text-xl text-custom_green-900">
                            {application.role}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pr-2">
                    <ArrowIcon className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </a>
            </li>
          ))}
          {/* <div className="divide-x sm:hidden" /> */}
        </ul>

        {data?.length === 0 && (
          <div className="flex justify-center items-center h-full">
            <p className="mx-auto">
              {loading ? (
                <SpinnerLoader loading={loading} color="#36d7b7" />
              ) : (
                <span className="">No job vacancies found</span>
              )}
            </p>
          </div>
        )}

        {isLoadMore() && (
          <div className="w-full mt-12 sm:mt-7 mb-2[x] text-center">
            <button
              onClick={() => {
                handleOnClickOpenPositions();
                handleButtonClick();
              }}
              disabled={loading}
              className="block sm:w-60 md:w-[255px] h-[64px] w-full py-5 mx-auto rounded-full lg:rounded-full lg:mb-10 bg-custom_lightgreen-500 px-3.5 text-center text-xl font-bold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              {loading ? "Loading" : "Load more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
