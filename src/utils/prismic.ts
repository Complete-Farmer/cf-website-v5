/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Prismic from "@prismicio/client";
import { PRISM_ACCESS_TOKEN } from "./constants";

const Client = Prismic.createClient("completefarmer", {
  // If your repository is private, add an access token
  accessToken: PRISM_ACCESS_TOKEN,
});

export const filterAt = (...args: [path: string, value: string]) => [
  Prismic.filter.at(...args),
];

interface IPramas {
  page?: number;
  pageSize?: number;
  filters?: any;
  fetchLinks?: any;
}

const fetchItems = async (type: string, params: IPramas) => {
  const { page, pageSize, filters, fetchLinks } = params;

  const items = await Client.getByType(type, {
    page,
    pageSize,
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
    filters,
    fetchLinks,
  });

  return items;
};

const fetchItemById = async (type: string, params: { id: string }) => {
  const item = await Client.getByUID(type, params.id);
  return item;
};

export const getCategories = async (type: string) => {
  return fetchItems("categories", {
    filters: filterAt("my.categories.type", type),
  });
};

export const renderPrismicDesc = (description: any) => {
  const firstPageDescriptionAsHTML = Prismic.asHTML(description);
  return firstPageDescriptionAsHTML;
};

export const getCxStories = async (params: IPramas = {}) => {
  return fetchItems("customer_stories_v3", params);
};

export const getContactUsFaqs = async (params: IPramas) => {
  return fetchItems("faq_v3", params);
};

export const getNews = async (params: IPramas) => {
  return fetchItems("news-items", params);
};

export const getNewsById = async (id: string) => {
  return fetchItemById("news-items", { id });
};

export const getInvestorRelationSlider = async (params: IPramas) => {
  return fetchItems("investor_relations_slider", params);
};

export const getLeaderShip = async (params: IPramas) => {
  return fetchItems("leaders_team", params);
};

export const getDepartment = async () => {
  return fetchItems("categories", { filters: filterAt("my.categories.type", "departments") });
};

export const getJobVacancies = async (params: IPramas) => {
  return fetchItems("job_vacancies", params);
};

export const getBlogs = async (params: IPramas) => {
  return fetchItems("blogs", params);
};

export const getEvents = async (options) => {
  return fetchItems("webinars", options);
};