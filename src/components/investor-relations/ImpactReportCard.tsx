import { DownloadIcon } from "@assets/icons";
import { getSignedAwsDownloadableFileUrl } from "@utils/aws";
import { classNames } from "@utils/functions";

interface IProps {
  name: string;
}

function ImpactReportCard({ name }: IProps) {
  const handleDownload = async () => {
    let bucket = "";
    if (name.includes("hite")) bucket = "cf-white-papers";
    if (name.includes("mpact")) bucket = "cf-impact-reports";
    if (name.includes("vision")) bucket = "cf-vivid-vision-reports";

    if (bucket !== "") {
      const url = await getSignedAwsDownloadableFileUrl(name + ".pdf", bucket);
      window.open(url, "_blank");
    } else {
      console.log("Couldn't download files, please contact support");
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
            name.toLowerCase().includes("grower")
              ? "text-grower-500"
              : "text-buyer-500",
            "flex justify-start items-center gap-2 text-sm font-bold"
          )}
        >
          <span className="text-sm font-bold text-left">Download PDF</span>
          <DownloadIcon />
        </button>
      </div>
    </div>
  );
}

export default ImpactReportCard;
