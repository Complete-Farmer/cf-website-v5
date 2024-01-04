import ContactForm from "./ContactForm";

import ChevronRight from "../../assets/icons/chevron-right.svg";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faqs: any[];
  toggle: boolean;
  loading: boolean;
  onLoadMore: () => void;
  changeToggle: () => void;
  isLoadMore: () => boolean;
}
export default function Content({
  faqs,
  toggle,
  loading,
  onLoadMore,
  isLoadMore,
  changeToggle,
}: IProps) {
  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Question"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "QuestionLink"
    // });
    // ReactPixel.track("Questions", {});
  };

  return (
    <div>
      <div>
        <p className="mt-6 text-sm sm:text-xl font-bold text-left text-custom_black-900">
          We think these might help:
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-start items-start relative gap-4">
        {faqs.map((item) => {
          return (
            <a
              key={item.id}
              onClick={handleLinkClick}
              href="/contact-us/get-started"
              className="underline text-sm sm:text-base text-left text-custom_lightgreen-500 hover:font-bold"
            >
              {item.question}
            </a>
          );
        })}

        {isLoadMore() && (
          <div className="flex justify-end w-full mt-4">
            <button
              onClick={onLoadMore}
              disabled={loading}
              className="flex justify-start items-start relative gap-2"
            >
              <p className="text-sm font-bold text-left text-custom_lightgreen-500 hover:underline">
                {loading ? "Loading" : "Load more"}
              </p>
            </button>
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-sm sm:text-xl font-bold text-left text-custom_black-900">
          Didn&apos;t find what you&apos;re looking for?
        </p>
      </div>
      <div className="mt-12">
        {!toggle && (
          <button
            onClick={changeToggle}
            className="flex justify-start items-start relative gap-2"
          >
            <p className="text-base font-bold text-left text-custom_lightgreen-500">
              Contact our team
            </p>
            <img src={ChevronRight.src} />
          </button>
        )}
        {toggle && <ContactForm changeToggle={changeToggle} />}
      </div>
    </div>
  );
}
