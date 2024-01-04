import SectionList from "../../components/utils/SectionList";

import Career from "../../assets/logos/sections/Career.svg";
import NewsRoom from "../../assets/logos/sections/NewsRoom.svg";
import RightArrowIcon from "../../assets/logos/home/right-arrow.svg";
import InvestorRelation from "../../assets/logos/sections/InvestorRelation.svg";

const incentives = [
  {
    name: "About us",
    imageSrc: Career,
    description:
      "Find out how we started, what drives us and how we are reimagining how food is grown, sourced and consumed in Africa. ",
    linkText: "Learn more about CF",
    link: "/about-us",
  },
  {
    name: "Newsroom",
    imageSrc: NewsRoom,
    description:
      "Keep up with the latest about Complete Farmer. From announcements, to press coverage and company updates. ",
    linkText: "Go to Newsroom",
    link: "/resources/news-room",
  },
  {
    name: "Investor Relations",
    imageSrc: InvestorRelation,
    description:
      "Learn more about our mission, growth and impact and how you can be part of it.",
    linkText: "Go to Investor relations",
    link: "/investor-relation",
  },
];

const textColor = "text-green-500";
const bgColor = "bg-white";
const linkIcon = RightArrowIcon;

export default function Section() {
  return (
    <div className="py-4 sm:py-0 sm:pb-8">
      <SectionList
        bgColor={bgColor}
        linkIcon={linkIcon}
        textColor={textColor}
        incentives={incentives}
      />
    </div>
  );
}
