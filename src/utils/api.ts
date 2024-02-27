import type { ICrop, ICropOffer, ICropVariety } from "types/app";
import { FMS_API, AUTH_API, BOT_EMAIL, BOT_PASS } from "./constants";

const getAuthorization = () => {
  if(typeof window === "undefined"){
    const buff = Buffer.from(BOT_EMAIL + ":" + BOT_PASS);
    return "x-bot-auth " + buff.toString("base64");
  }

  return undefined;
};

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: getAuthorization(),
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
  const response = await fetch(
    `${FMS_API}/crop-varieties?status=ACTIVE&crop=${id}`,
    options
  );
  return response.json();
};

export const getCropOffers = async (): Promise<{
  statusCode: number;
  data?: ICropOffer[];
}> => {
  const response = await fetch(`${FMS_API}/crop-offers?status=ACTIVE`, options);
  return response.json();
};

export const contactForm = async (payload): Promise<{
  statusCode: number;
  message: string
}> => {
  const response = await fetch(`${AUTH_API}/contact-us`, {
    ...options,
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const submitApplication = async (payload): Promise<{
  statusCode: number;
  message: string
}> => {
  const response = await fetch(`${AUTH_API}/submit-application`, {
    ...options,
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response.json();
};

export const getInTouch = async (payload): Promise<{
  statusCode: number;
  message: string
}> => {
  const response = await fetch(`${AUTH_API}/get-in-touch`, {
    ...options,
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response.json();
};

