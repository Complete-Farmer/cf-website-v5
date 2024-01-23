import jsonp from "jsonp";
import { PUBLIC_ENV } from "./constants";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getLink = (text: string) => {
  let product = "grower";
  const pathname = text.includes("Login") ? "login" : "signup";
  
  if (text.includes("Buyer")) {
    product = "buyer";
  }

  if (text.includes("Vendor")) {
    product = "vendor";
  }

  const url = `https://${
    product + (PUBLIC_ENV === "DEV" ? ".test" : "")
  }.completefarmer.com/`;

  return url + pathname;
};

interface IFields {
  email: string;
  firstname?: string;
  tags: string;
}
export const onMailChimpSubmit = (fields: IFields) => {
  const { email, firstname, tags } = fields;

  const url =
    "https://completefarmer.us4.list-manage.com/subscribe/post?u=d9d1e9683abc0d8614a94ae3b&amp;id=062b1734e2&amp;v_id=6858&amp;f_id=00f903ebf0";

  let _d = `${url}&EMAIL=${email}&tags=${tags}`;
  if (firstname) {
    _d = _d.concat(`&FNAME=${firstname}`);
  }

  jsonp(_d, { param: "c" }, () => {
    console.log("Data Added in the Mailchimp");
  });
};

export const formatDateWithCommas = (dateString: string) => {
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return formattedDate;
};

export function getYouTubeThumbnailUrl(url: string) {
  if (url) {
    // Extract video ID from YouTube URL
    const videoId = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );

    if (videoId && videoId[1]) {
      // If video ID is found, construct and return the thumbnail URL
      const thumbnailUrl = "https://img.youtube.com/vi/" + videoId[1] + "/maxresdefault.jpg";
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