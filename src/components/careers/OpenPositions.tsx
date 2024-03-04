import { useState, useEffect } from "react";

import type { IPrismicData, IPrismicDoc } from "types/app";

import { ArrowIcon } from "@assets/icons";

import { classNames } from "@utils/functions";
import { maxRecordsPerPage } from "@utils/constants";
import { filterAt, getJobVacancies } from "@utils/prismic";
import { Button, Selector, SpinnerLoader } from "@components/utils";

const transformApiData = (doc: IPrismicDoc) => {
  return doc.map((item) => ({
    ...item,
    role: item?.data?.title[0]?.text,
    department: item?.data?.department?.data?.name,
  }));
};

interface IProps {
  departments: {
    id: string;
    name: string;
  }[];
  careerApiData: IPrismicData;
}

export default function OpenPositions({ departments, careerApiData }: IProps) {
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(careerApiData.next_page);
  const [data, setData] = useState(transformApiData(careerApiData.results));
  const [totalResults, setTotalResults] = useState(
    careerApiData.total_results_size
  );
  const [selectedDepartment, setSelectedDepartment] = useState<
    (typeof departments)[0]
      >(departments[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const filters = selectedDepartment.id
          ? filterAt("my.job_vacancies.department", `${selectedDepartment.id}`)
          : undefined;
        const _careerApiData = await getJobVacancies({
          page: pageNo,
          pageSize: maxRecordsPerPage,
          filters,
          fetchLinks: ["categories.name"],
        });
        const transformedData = transformApiData(_careerApiData.results);
        setData((prevData) => {
          // add new data to previous data but no duplicates
          if (selectedDepartment?.id) {
            return transformedData;
          } else {
            return [
              ...new Map(
                [...prevData, ...transformedData].map((item) => [
                  item["id"],
                  item,
                ])
              ).values(),
            ];
          }
        });
        setNextPage(_careerApiData.next_page);
        setTotalResults(_careerApiData.total_results_size);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    if (selectedDepartment.id || pageNo > 1) {
      fetchData();
    } else {
      setNextPage(careerApiData.next_page);
      setData(transformApiData(careerApiData.results));
      setTotalResults(careerApiData.total_results_size);
    }
  }, [pageNo, selectedDepartment]);

  const handleOnDepartmentChange = (value: (typeof departments)[0]) => {
    setPageNo(1);
    setSelectedDepartment(value);
  };

  const handleButtonClick = () => {
    window.fbq("track", "click", {
      content_category: "Load Button Clicked",
    });
    window.gtag("event", "position_load_more", {
      event_category: "Load Button Clicked",
    });
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
    <section
      id="vacancies"
      className="pt-16 pb-12 sm:pb-0 lg:pb-0 lg:pt-32 mx-6 sm:mx-12 bg-white"
    >
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
          <div className="divide-x sm:hidden" />
        </ul>

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
              onClick={() => {
                handleButtonClick();
                setPageNo(pageNo + 1);
              }}
              title={loading ? "Loading" : "Load more"}
              className="mx-auto sm:!w-60 md:!w-[240px] lg:!text-lg py-4 !rounded-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
