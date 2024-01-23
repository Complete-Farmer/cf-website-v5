import { atom } from "nanostores";
import type { IAvailableDemands } from "types/app";

export const $authModal = atom<boolean>(false);

export const $getInTouchModal = atom<boolean>(false);

export const $availableDemands = atom<IAvailableDemands[]>([]);
