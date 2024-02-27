/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";

import Content from "./Content";
import { SpinnerLoader, Selector } from "@components/utils";

import { filterAt, getContactUsFaqs } from "@utils/prismic";

import type { IPrismicData, IPrismicDoc } from "types/app";

const maxRecordsPerPage = 5;

interface IProps {
  data: IPrismicData;
}

export default function Main({ data }: IProps) {
  const [selected, setSelected] = useState({
    id: "",
    name: "Select an option",
  });
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [faqs, setFAQs] = useState<Record<string, any>[]>([]);

  const faqsCategories = useMemo(() => {
    return data.results.map((item) => ({
      id: item.id,
      name: item.data.name as string,
    }));
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const filters = filterAt("my.faq_v3.category", `${selected.id}`);
        const contactUsApiData = await getContactUsFaqs({
          page: pageNo,
          pageSize: maxRecordsPerPage,
          filters,
        });
        const transformedData = transformApiData(contactUsApiData.results);
        setFAQs((prevData) =>
          selected.id === prevData[0]?.data?.category.id
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
        setTotalResults(contactUsApiData.total_results_size);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    selected.id && fetchData();
  }, [pageNo, selected]);

  const transformApiData = (apiResults: IPrismicDoc) => {
    return apiResults.map((item) => ({
      question: item.data.question[0].text,
      answer: item.data.answer[0].text,
      id: item.id,
    }));
  };

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const handleOnClickLoadMore = () => {
    setPageNo(pageNo + 1);
  };

  const handleOnSelectorChange = (e: { id: string; name: string }) => {
    setPageNo(1);
    setSelected(e);
  };

  const isLoadMore = () => {
    const isBool =
      faqs &&
      totalResults !== 0 &&
      totalResults !== faqs.length &&
      totalResults > maxRecordsPerPage;
    return isBool;
  };

  return (
    <div className="bg-white rounded-lg lg:rounded-none">
      <div className="px-6 sm:px-12 py-16 sm:py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div>
            <h2 className="text-[28px] sm:text-4xl md:text-[40px] font-bold text-center tracking-tight text-grower-400">
              Hi, how can we help?
            </h2>
            <p className="mx-auto text-base font-bold text-center mt-6 md:my-10 max-w-xl leading-8 text-grower-400">
              Let us know below!
            </p>
          </div>
          <Selector
            selected={selected}
            options={faqsCategories}
            setSelected={handleOnSelectorChange}
          />
          {loading ? (
            <div className="flex justify-center items-center pt-20">
              <SpinnerLoader loading={loading} color="#36d7b7" />
            </div>
          ) : (
            <>
              {selected.id && (
                <Content
                  faqs={faqs}
                  toggle={toggle}
                  loading={loading}
                  isLoadMore={isLoadMore}
                  subject={selected.name}
                  changeToggle={changeToggle}
                  onLoadMore={handleOnClickLoadMore}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
