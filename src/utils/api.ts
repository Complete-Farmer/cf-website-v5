import type { ICrop, ICropVariety } from "types/app";
import { FMS_API, BOT_EMAIL, BOT_PASS } from "./constants";

const buff = Buffer.from(BOT_EMAIL + ":" + BOT_PASS);
const authorization = "x-bot-auth " + buff.toString("base64");

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: authorization,
    "Content-Type": "application/json",
  },
};

export const getAvaiableCrops = async (): Promise<{
  statusCode: number;
  data?: ICrop[];
}> => {
  const response = await fetch(`${FMS_API}/crops?status=ACTIVE`, options);
  return response.json();
};

export const getCropVarieties = async (
  id: string
): Promise<{
  statusCode: number;
  data?: ICropVariety[];
}> => {
  const response = await fetch(`${FMS_API}/crop-varieties?status=ACTIVE&crop=${id}`, options);
  return response.json();
};
