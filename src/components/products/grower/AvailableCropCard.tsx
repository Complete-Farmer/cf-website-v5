import type { IAvailableDemands } from "types/app";

interface IProps {
  data: IAvailableDemands;
}

function AvailableCropCard({ data }: IProps) {
  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Product Link"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "ProductLink"
    // });
    // ReactPixel.track("Product Link", {});
  };

  const varieties = data.varieties.map((v) => v.name).join(", ");

  return (
    <div className="group">
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            alt={data.name}
            src={data.imageUrl}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-start items-start self-stretch relative gap-2 pt-4">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-1 w-full sm:w-2/3 md:w-full">
            <a
              href={data.link}
              onClick={handleLinkClick}
              className="self-stretch w-full text-base font-bold text-left text-custom_black-900 group-hover:underline underline-offset-1 decoration-2 decoration-custom_black-900"
            >
              {data.name}
            </a>
          </div>
          <div className="w-full sm:w-2/3 md:w-full cursor-default truncate" title={varieties}>
            <span className="text-base text-left lg:leading-6 text-custom_gray-300">
              Varieties: {varieties}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <a
          href={data.link}
          onClick={handleLinkClick}
          className="relative flex items-center bg-white justify-center rounded-3xl border border-1 border-buyer-100 px-8 py-2 text-sm font-medium hover:text-white text-grower-500 hover:bg-grower-500"
        >
          See details
        </a>
      </div>
    </div>
  );
}

export default AvailableCropCard;
