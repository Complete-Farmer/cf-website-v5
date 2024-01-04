import CustomerStoriesLeafBlueIcon from "../../assets/logos/home/customer-stories-leaf-blue.svg";
import SubHeadingShort from "./SubHeadingShort";

interface IProps {
  data: {
    name: string;
    imageUrl: string;
    titleFirstName: string;
    titleLastName?: string;
    titleTextColor: string;
  }
}

function CustomerStoryBuyerCard({ data }: IProps) {
  return (
    <div className="py-8 px-0 sm:py-8 sm:px-8 lg:py-12 lg:px-20 bg-[#102352] w-full max-w-7xl[x] flex-col items-center rounded-2xl">
      <div className="mx-auto max-w-7xl  w-full">
        <div className="flex flex-col items-center md:justify-between">
          <div className="flex items-center flex-col">
            <img className="w-8 h-8 sm:w-12 sm:h-12 object-contain mr-4" src={CustomerStoriesLeafBlueIcon.src} alt="" />
            <SubHeadingShort {...data} />
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <img className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mr-4" src={data?.imageUrl} alt="" />
            <div className="flex items-start flex-col">
              <h3 className="text-base lg:text-[28px] md:text-xl font-semibold text-white">{data.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStoryBuyerCard;
