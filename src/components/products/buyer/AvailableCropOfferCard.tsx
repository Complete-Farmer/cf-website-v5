import type { IAvailableCropOffers } from "types/app";

interface IProps {
  data: IAvailableCropOffers;
}

function AvailableCropOfferCard({ data }: IProps) {
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

  const crop = data.crop;
  const variety = data.specification.variety;

  const varietyTitle = `${variety.name} ${variety.scientificName ? `(${variety.scientificName})` : ""}`;

  return (
    <div className="group">
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            alt={crop.name}
            src={crop.imageUrl}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-start items-start self-stretch relative space-y-4 pt-4">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-1 w-full sm:w-2/3 md:w-full">
            <a
              href={data.link}
              onClick={handleLinkClick}
              className="self-stretch w-full text-base font-bold text-left text-custom_black-900 group-hover:underline underline-offset-1 decoration-2 decoration-custom_black-900"
            >
              {crop.name}
            </a>

            <div className="w-full flex flex-col sm:w-2/3 md:w-full cursor-default truncate" title={varietyTitle}>
              <span className="text-base text-left lg:leading-6 text-custom_gray-300">
                {varietyTitle}
              </span>
              <span className="text-base text-left lg:leading-6 text-custom_gray-300">{data.quantity} MT Total quantity</span>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start relative gap-1 w-full sm:w-2/3 md:w-full">
            <p className="w-full text-sm font-bold text-left text-custom_black-900">AVAILABLE SPECS:</p>
            <p className="w-full text-base text-left lg:w-96 lg:h-6 lg:leading-6 text-[#6c6c6c]">{data.specs.join(", ")}</p>
          </div>

          <p className="text-xl leading-6 font-bold text-left text-custom_black-900">USD{data.price?.["USD"]}/MT</p>
        </div>
      </div>
      <div className="mt-6">
        <a
          href={data.link}
          onClick={handleLinkClick}
          className="relative flex items-center bg-white justify-center rounded-3xl border border-1 border-buyer-100 px-8 py-2 text-sm font-medium hover:text-white text-buyer-500 hover:bg-buyer-500"
        >
          See details
        </a>
      </div>
    </div>
  );
}

export default AvailableCropOfferCard;
