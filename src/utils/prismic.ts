/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Prismic from "@prismicio/client";

const Client = Prismic.createClient("completefarmer", {
  // If your repository is private, add an access token
  accessToken: import.meta.env.PRISM_ACCESS_TOKEN,
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

// const fetchItemById = async (type: string, params: { id: string }) => {
//   const item = await Client.getByUID(type, params.id);
//   return item;
// };

export const renderPrismicDesc = (description: any) => {
  const firstPageDescriptionAsHTML = Prismic.asHTML(description);
  return firstPageDescriptionAsHTML;
};

export const getCxStories = async () => {
  return fetchItems("customer_stories_v3", {});
};

export const getFAQsCategories = async () => {
  return fetchItems("categories", {
    filters: filterAt("my.categories.type", "faqs"),
  });
};

export const getContactUsFaqs = async (params: IPramas) => {
  return fetchItems("faq_v3", params);
};
