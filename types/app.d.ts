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
  images: {
    tablet?: string;
    desktop: string;
  };
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
  scientificName?: string;
}

export interface ICrop {
  _id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  scientificName: string;
  category: ICropCategory;
  cycle: { min: number; max: number };
  plantingDates: {
    [x: string]: string[];
  };
  websiteData?: {
    protocol: string;
    region: string;
    seasonality: string;
    variety: string;
  };
  seasonalInformation?: {
    weatherDependency: string;
    startPlanting: string;
    harvestDates: string;
  };
}

export interface ISpecification {
  variety: ICropVariety;
  condition: string;
  grade?: string;
  cultivationType: string;
  color?: string;
  package: {
    name: string;
    weight: number;
    price: number;
  };
  certifications: string[];
  tests: {
    name: string;
    price: number;
    description: string;
  }[];
  others: string;
}

export interface ICropOffer {
  _id: string;
  crop: ICrop;
  quantity: number;
  isPremium: boolean;
  origin: string;
  sizeRange: {
    min: number;
    max: number;
  };
  details: string[];
  marketAvailabilty: {
    region: string;
    months: string[];
  }[];
  processingStyle: string;
  specification: ISpecification;
  price: Record<string, number>;
}

export interface IAvailableCropOffers extends ICropOffer {
  link: string;
  features: string;
  specs: {
    key: string;
    value: string;
  }[];
  seasonality?: ISeasonality[];
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
  seasonality?: ISeasonality[];
  varieties: ICropVariety[];
}

export type IClickEvent<T = HTMLButtonElement | HTMLAnchorElement> =
  React.MouseEvent<T, MouseEvent>;

export type IChangeEvent = React.ChangeEvent<HTMLInputElement>;
