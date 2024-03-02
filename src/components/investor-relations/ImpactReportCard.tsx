import { useState } from "react";
import { toast } from "react-toastify";
import MoonLoader from "react-spinners/MoonLoader";

import { DownloadIcon } from "@assets/icons";
import { classNames } from "@utils/functions";
import { getSignedAwsDownloadableFileUrl } from "@utils/aws";

interface IProps {
  name: string;
}

function ImpactReportCard({ name }: IProps) {
  const [isLoading, setisLoading] = useState(false);

  const handleDownload = async () => {
    setisLoading(true);
    try {
      let bucket = "";
      if (name.includes("hite")) bucket = "cf-white-papers";
      if (name.includes("mpact")) bucket = "cf-impact-reports";
      if (name.includes("vision")) bucket = "cf-vivid-vision-reports";

      if (bucket !== "") {
        const url = await getSignedAwsDownloadableFileUrl(
          name + ".pdf",
          bucket
        );
        window.gtag("event", `${bucket.replaceAll("-", "_")}_file_download`, {
          "event_category": "downloads",
          "event_label": url
        });
        window.open(url, "_blank");
      } else {
        console.log("Couldn't download files, please contact support");
      }
    } catch (error) {
      toast(error.message || "Unknow error occured, try again.", {
        type: "error",
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="w-full sm:w-auto sm:p-4 p-5 lg:p-8 text-center md:flex-row md:text-left bg-white overflow-hidden rounded-lg">
      <div className="flex flex-col items-start sm:items-center xl:flex-row space-y-3 xl:space-y-0 justify-between w-full">
        <p className="text-base font-normal text-black-700 line-clamp-2 text-left">
          {name}
        </p>
        <button
          onClick={handleDownload}
          className={classNames(
            name.toLowerCase().includes("buyer")
              ? "text-buyer-500"
              : "text-grower-500",
            "flex justify-start items-center gap-2 text-sm font-bold"
          )}
        >
          {isLoading ? (
            <>
              <MoonLoader
                size={20}
                loading={isLoading}
                color={
                  name.toLowerCase().includes("buyer") ? "#367AFE" : "#31BC2E"
                }
              />
              <span className="text-sm font-bold text-left loading-text loading-text-b">
                Please wait
              </span>
            </>
          ) : (
            <>
              <span className="text-sm font-bold text-left">Download PDF</span>
              <DownloadIcon />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ImpactReportCard;
