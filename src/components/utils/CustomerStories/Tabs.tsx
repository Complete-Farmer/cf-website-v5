import { classNames } from "@utils/functions";

const tabs = ["Videos", "Articles"];

const Tabs = ({
  isBuyer,
  activeTab,
  changeActiveTab,
}: {
  isBuyer: boolean;
  activeTab: string;
  changeActiveTab: (tab: string) => void;
}) => {


  return (
    <div className="mb-6 sm:mb-12 flex justify-between sm:justify-start gap-4">
      {tabs.map((tab) => (
        <a
          key={tab}
          onClick={() => changeActiveTab(tab)}
          className={classNames(
            activeTab === tab
              ? (isBuyer ? "bg-buyer-500" : "bg-grower-500") + " text-white"
              : "bg-custom_gray-200 text-custom_black-900-900",
            "w-full sm:w-[inherit] inline-flex items-center justify-center px-6 sm:px-8 py-2 text-base font-medium leading-6 whitespace-no-wrap border border-transparent shadow-sm rounded-3xl hover:cursor-pointer"
          )}
        >
          {tab}
        </a>
      ))}
    </div>
  );
};

export default Tabs;
