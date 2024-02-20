import { atom } from "nanostores";

export const $authModal = atom<boolean>(false);

export const $selectedVideoUrl = atom<string>();

export const $getInTouchModal = atom<boolean>(false);

export const $applicationFormModal = atom<boolean>(false);

export const $fullComparisonDrawer = atom<boolean>(false);

export const $joinSalesAffiliateModal = atom<boolean>(false);

export const $homeCustomerStoriesActiveTab = atom<"grower" | "buyer">("grower");

export const $customerStoriesActiveTab = atom<"All" | "Grower" | "Buyer" | "Corporate">("All");


