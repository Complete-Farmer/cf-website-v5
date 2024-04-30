/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    dataLayer: {
      event: string;
      [x: string]: string;
    }[];
  }
}

import type { Query, PrismicDocument } from "@prismicio/client";

export type AsObject<T> = Record<string, T>;

export type IPrismicSingleDoc = PrismicDocument<
  Record<string, any>,
  string,
  string
>;

export type IPrismicData = Query<IPrismicSingleDoc>;

export type IPrismicDoc = IPrismicSingleDoc[];

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
  features?: string;
  details2?: {
    key: string;
    value: string;
  }[];
  specs?: string;
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

export interface INews extends IPrismicSingleDoc {
  date: string;
  label?: string;
  title: string;
  tags?: string[];
}

export interface IBlog extends IPrismicSingleDoc {
  date: string;
  label?: string;
  title: string;
  tags?: string[];
}

export interface IEvent extends Partial<IPrismicSingleDoc> {
  type: string;
  image: {
    dimensions: {
      width: number;
      height: number;
    },
    alt: string | null,
    url: string
  };
  video: string;
  title: string;
  isPast: boolean;
  endTime: string;
  endDate: string;
  platform: string;
  startDate: string;
  startTime: string;
  speakers: string[];
  register_link: string;
  description: {
    text: string;
  }[]
}

export interface IFaQ extends IPrismicSingleDoc {
  date: string;
  question: string;
  answer: string;
}
