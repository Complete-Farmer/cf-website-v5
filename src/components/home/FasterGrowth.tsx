
import FasterGrowthContent from "./FasterGrowthContent";
import Farmer from "../../assets/images/home/farmer.svg";
import Buyer from "../../assets/images/home/buyer.svg";

const farmerData = {
  title: "For Farmers",
  descriptionFirst: "",
  descriptionLast:
    "Earn more by growing cash crops to meet market demand and our buyer specifications. Get expert agronomic and managerial support, access inputs and farm services and receive reliable data to help you farm better.",
  buttonText: "Farm the better way!",
  buttonBgColor: "bg-custom_lightgreen-500",
  titleBgColor: "text-custom_lightgreen-500",
  img: Farmer,
  color: "#D8F5D7"
};

const buyerData = {
  title: "For Buyers",
  descriptionFirst: "",
  descriptionLast:
    "Get everything you need for seamless crop procurement from order to fulfilment all in one place. Gain access to a network of qualified farmers, uncovering new business opportunities.",
  buttonText: "Source quality crops - easily!",
  buttonBgColor: "bg-[#367AFE]",
  titleBgColor: "text-[#367AFE]",
  img: Buyer,
  color: "#EBF0FF"
};

export default function FasterGrowth() {
  return (
    <div className="sm:pb-16 overflow-hidden ">
      <div className="flex relative mt-6 mb-10 sm:mt-20 pb-0 pt-10 flex-col z-20 px-5 sm:px-10 justify-center items-center tracking-normal leading-6 text-white box-border">
        <h2 className="text-[28px] sm:text-[40px] lg:text-5xl font-bold px-1 sm:px-20 text-center mb-0 font-sans text-green-900 tracking-normal leading-[34px] sm:leading-[50px] max-w-60">
          Faster growth starts with Complete Farmer
        </h2>
      </div>

      {/* Farmers */}
      <FasterGrowthContent {...farmerData} />

      {/* Buyers */}
      <FasterGrowthContent {...buyerData} />
    </div>
  );
}
