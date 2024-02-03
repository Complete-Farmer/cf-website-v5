import FasterGrowthContent from "./FasterGrowthContent";
import ForFarmers from "@assets/images/home/for-farmers.webp";
import ForBuyers from "@assets/images/home/for-buyers.webp";

const data = [
  {
    img: ForFarmers,
    title: "For Farmers",
    text1: "text-grower-100",
    text2: "text-grower-500",
    buttonBgColor: "!bg-grower-500",
    buttonText: "Farm the better way!",
    description:
      "Earn more by growing cash crops to meet market demand and our buyer specifications. Get expert agronomic and managerial support, access inputs and farm services and receive reliable data to help you farm better.",
  },
  {
    img: ForBuyers,
    title: "For Buyers",
    text1: "text-buyer-100",
    text2: "text-buyer-500",
    buttonBgColor: "!bg-buyer-500",
    buttonText: "Source quality crops - easily!",
    description:
      "Get everything you need for seamless crop procurement from order to fulfilment all in one place. Gain access to a network of qualified farmers, uncovering new business opportunities.",
  },
];

export default function FasterGrowth() {
  return (
    <div className="sm:pb-16 overflow-hidden">
      <div className="flex relative mt-6 mb-10 sm:mt-20 pb-0 pt-10 flex-col z-20 px-5 sm:px-10 justify-center items-center tracking-normal leading-6 text-white box-border">
        <h2 className="text-[28px] sm:text-[40px] lg:text-5xl font-bold px-1 sm:px-20 text-center mb-0 font-sans text-green-900 tracking-normal leading-[34px] sm:leading-[50px] max-w-60">
          Faster growth starts with Complete Farmer
        </h2>
      </div>

      <div className="space-y-10 lg:space-y-20">
        {data.map((item) => (
          <FasterGrowthContent key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
