/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import type { Query, PrismicDocument } from "@prismicio/client";

import Title from "./Title";
import Content from "./Content";
import SelectInput from "./SelectInput";
import SpinnerLoader from "../../components/utils/SpinnerLoader";

import { filterAt, getContactUsFaqs } from "../../utils/prismic";

const maxRecordsPerPage = 5;

interface IProps{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Query<PrismicDocument<Record<string, any>, string, string>>;
}

export default function Main({
  data
}: IProps) {
  const [selected, setSelected] = useState({ id: "", name: "Select an option" });
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [faqs, setFAQs] = useState<Record<string, any>[]>([]);

  const faqsCategories = useMemo(() => {
    return data.results.map((item) => ({
      id: item.id,
      name: item.data.name
    }));
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const filters = filterAt("my.faq_v3.category", `${selected.id}`);
        const contactUsApiData = await getContactUsFaqs({ page: pageNo, pageSize: maxRecordsPerPage, filters });
        const transformedData = transformApiData(contactUsApiData.results);
        setFAQs((prevData) =>
          selected.id === prevData[0]?.data?.category.id
            ? [...new Map([...prevData, ...transformedData].map((item) => [item["id"], item])).values()]
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

  const transformApiData = (apiResults: PrismicDocument<Record<string, any>, string, string>[]) => {
    return apiResults.map((item) => ({
      question: item.data.question[0].text,
      answer: item.data.answer[0].text,
      id: item.id
    }));
  };

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const handleOnClickLoadMore = () => {
    setPageNo(pageNo + 1);
  };

  const handleOnSelectorChange = (e: { id: string; name: string;}) => {
    setPageNo(1);
    setSelected(e);
  };

  const isLoadMore = () => {
    const isBool = faqs && totalResults !== 0 && totalResults !== faqs.length && totalResults > maxRecordsPerPage;
    return isBool;
  };

  return (
    <div className="bg-white rounded-lg lg:rounded-none">
      <div className="px-6 sm:px-12 py-16 sm:py-24 md:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Title />
          <SelectInput people={faqsCategories} selected={selected} setSelected={handleOnSelectorChange} />
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
