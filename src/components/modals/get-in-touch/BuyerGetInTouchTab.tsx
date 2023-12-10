/* eslint-disable react/prop-types */
import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BuyerGetInTouchTab(props: {
  categories: { name: string; current: boolean; slug: string }[];
  changeCategory: (i: number) => void;
  activeBgColor: string;
  inActiveBgColor: string;
  normalBgColor: string;
  inActiveTextColor: string;
  activeCategory: string // not been used
}) {
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
    <div className="w-full max-w-7xl py-8">
      <Tab.Group
        key={initialIndex}
        defaultIndex={initialIndex}
        onChange={(index) => {
          changeCategory(index);
        }}
      >
        <Tab.List
          className={classNames(
            "flex flex-row rounded-full w-full max-w-7xl",
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
