import dayjs from "dayjs";
import jsonp from "jsonp";

import { ENV } from "./constants";
import type { ISeasonality } from "types/app";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getAppLink = (text: string, query?: string) => {
  let product = "grower";
  const pathname = text.includes("Login") ? "login" : "signup";

  if (text.includes("Buyer")) {
    product = "buyer";
  }

  if (text.includes("Vendor")) {
    product = "vendor";
  }

  const url = `https://${
    product + (ENV === "DEV" ? "-test" : "")
  }.completefarmer.com/`;

  return url + pathname + (query ? `?${query}` : "");
};

interface IFields {
  id?: string;
  email: string;
  firstname?: string;
  tags?: string | number;
}
export const onMailChimpSubmit = (fields: IFields) => {
  const { id= "062b1734e2", email, firstname, tags } = fields;

  const url = "https://completefarmer.us4.list-manage.com/subscribe/post?u=d9d1e9683abc0d8614a94ae3b&amp;id=" + id + "&amp;v_id=6858&amp;f_id=00f903ebf0";

  let _d = `${url}&EMAIL=${email}`;
  if (tags) {
    _d = _d.concat(`&tags=${tags}`);
  }
  if (firstname) {
    _d = _d.concat(`&FNAME=${firstname}`);
  }

  jsonp(_d, { param: "c" });
};

/**
 * @deprecated use formatDate
 * @param dateString 
 * @returns 
 */
export const formatDateWithCommas = (dateString?: string) => {
  if(!dateString) return "";
  return dayjs(new Date(dateString)).format("DD MMMM, YYYY");
};

export const formatDate = (format: string, dateString?: string | number) => {
  if(!dateString) return "";
  return dayjs(new Date(dateString)).format(format);
};

export function getYouTubeThumbnailUrl(url: string) {
  if (url) {
    // Extract video ID from YouTube URL
    const videoId = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );

    if (videoId && videoId[1]) {
      // If video ID is found, construct and return the thumbnail URL
      const thumbnailUrl =
        "https://img.youtube.com/vi/" + videoId[1] + "/maxresdefault.jpg";
      return thumbnailUrl;
    } else {
      // Invalid YouTube URL
      return "Invalid YouTube URL";
    }
  }
}

export function convertToKebabCase(inputString: string) {
  return inputString.toLowerCase().replace(/\s+/g, "-");
}

function convertToPascalCaseWithSpaces(inputString: string) {
  const words = inputString.split("_");
  const capitalizedWords = words.map(
    (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}

export function generateMarketAvailabilityDataDynamic(plantingDates: {
  [x: string]: string[];
}): ISeasonality[] {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const marketAvailabilityData = [];

  for (const key in plantingDates) {
    // eslint-disable-next-line no-prototype-builtins
    if (plantingDates.hasOwnProperty(key)) {
      const datesArray = plantingDates[key];
      const availabilityData = months.map((month) => {
        // Check if the month exists in the datesArray
        const isMonthAvailable = datesArray.some((dateString) => {
          const date = new Date(dateString);
          return date.getMonth() === months.indexOf(month) && date;
        });

        return {
          name: month,
          availability: isMonthAvailable,
        };
      });

      marketAvailabilityData.push({
        plantingArea: convertToPascalCaseWithSpaces(key),
        availabilityData,
      });
    }
  }

  return marketAvailabilityData;
}

export function generateAvailabilityString(
  availabilityData: {
    name: string;
    availability: boolean;
  }[]
) {
  let startMonth = "";
  let endMonth = "";

  for (const monthData of availabilityData) {
    if (monthData.availability) {
      if (startMonth === "") {
        startMonth = monthData.name;
      }
      endMonth = monthData.name;
    }
  }

  if (startMonth !== "" && endMonth !== "") {
    return `${startMonth}-${endMonth}`;
  }

  return "";
}

export const getMonthsFirstLetter = (month: string) => month.split("")[0];

export const isDatePast = (date: string) => dayjs().isAfter(dayjs(date));

export const getDayFromDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  return day.toString().padStart(2, "0"); // Ensure the day is always two digits
};

export const formatDateToMonthAbbreviation = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(undefined, { month: "short" });
  return formattedDate.toUpperCase();
};

const getInitials = (name) => {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials = nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const createImageFromInitials = (size, name) => {
  const color = getRandomColor();
  if (name == null) return;
  name = getInitials(name);

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = canvas.height = size;

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);

  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);

  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${size / 2}px Cera Pro`;
  context.fillText(name, size / 2, size / 2);

  return canvas.toDataURL();
};

export const fileToBase64 = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
  });
};
