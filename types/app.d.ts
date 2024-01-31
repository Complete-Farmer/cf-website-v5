/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Query, PrismicDocument } from "@prismicio/client";

export type AsObject<T> = Record<string, T>;

export type IPrismicData = Query<
  PrismicDocument<Record<string, any>, string, string>
>;

export type IPrismicDoc = PrismicDocument<
  Record<string, any>,
  string,
  string
>[];

export interface ITab {
  href: string;
  name: string;
  current: boolean;
  data: AsObject<string | AsObject<string>>;
  rightImage: ImageMetadata;
}

export interface IPlainProps {
  tabs: ITab[];
  color: string;
  borderColor: string;
  changeTab?: (e: IClickEvent, t: ITab) => void;
}

export interface ICropCategory {
  _id: string;
  title: string;
  imageUrl: string;
}

export interface ICropVariety {
  _id: string;
  name: string;
  imageUrl: string;
}

export interface ICrop {
  _id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  category: ICropCategory;
  cycle: { min: number; max: number };
  plantingDates: {
    [x: string]: string[];
  };
  websiteData: {
    protocol: string;
    region: string;
    seasonality: string;
    variety: string;
  };
}

export interface IAvailableCrops extends ICrop {
  link: string;
  varieties: ICropVariety[];
}

export interface ISeasonality {
  plantingArea: string;
  availabilityData: {
    name: string;
    availability: boolean;
  }[];
}
export interface IAvailableDemands extends ICrop {
  link: string;
  seasonality: ISeasonality[];
  varieties: ICropVariety[];
}

export type IClickEvent<T = HTMLButtonElement | HTMLAnchorElement> =
  React.MouseEvent<T, MouseEvent>;

export type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type ISubmitEvent = React.FormEvent<HTMLFormElement>;
