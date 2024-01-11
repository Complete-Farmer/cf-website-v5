import { Tab } from "@headlessui/react";
import { classNames } from "@utils/functions";

interface IProps {
  categories: {
    name: string;
    current: boolean;
  }[];
  changeCategory: (i: number) => void;
  activeBgColor: string;
  inActiveBgColor: string;
  normalBgColor: string;
  inActiveTextColor?: string;
}

export default function TabComp(props: IProps) {
  const {
    categories,
    changeCategory,
    activeBgColor,
    inActiveBgColor,
    normalBgColor,
    inActiveTextColor,
  } = props;
  const initialIndex = categories.findIndex((category) => category.current);

  return (
    <div className="lg:max-w-xl w-full sm:mb-12 lg:mb-6 lg:w-3/12 lg:py-6 sm:px-0">
      <Tab.Group
        key={initialIndex}
        defaultIndex={initialIndex}
        onChange={(index) => {
          changeCategory(index);
        }}
      >
        <Tab.List
          className={classNames(
            "flex space-x-1 rounded-full  p-1",
            normalBgColor
          )}
        >
          {categories.map((category) => (
            <Tab
              key={category.name}
              className={classNames(
                "w-full rounded-full py-4 text-base leading-5 ",
                " focus:outline-none ",
                category.current
                  ? `${activeBgColor} shadow text-white`
                  : ` ${inActiveBgColor} ${inActiveTextColor}`
              )}
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
