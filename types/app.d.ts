/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Query, PrismicDocument } from "@prismicio/client";

export type IPrismicData = Query<PrismicDocument<Record<string, any>, string, string>>;

export type IPrismicDoc = PrismicDocument<Record<string, any>, string, string>[]
