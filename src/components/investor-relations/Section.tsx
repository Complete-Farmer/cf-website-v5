import SectionList from "@components/utils/SectionList";

import { PeopleIcon, NewpaperIcon, ContentIcon } from "@assets/icons";

const incentives = [
  {
    name: "About us",
    icon: <PeopleIcon />,
    description:
      "Find out how we started, what drives us and how we are reimagining how food is grown, sourced and consumed in Africa. ",
    linkText: "Learn more about CF",
    link: "/about-us",
  },
  {
    name: "Newsroom",
    icon: <NewpaperIcon />,
    description:
      "Keep up with the latest about Complete Farmer. From announcements, to press coverage and company updates. ",
    linkText: "Go to Newsroom",
    link: "/resources/news-room",
  },
  {
    name: "Blogs",
    icon: <ContentIcon />,
    description:
      "Discover the latest tips and insights on food from production to procurement on our blog. ",
    linkText: "Go to Blogs",
    link: "/resources/blogs",
  },
];

const Section = () => (
  <div className="py-4 sm:py-0 sm:px-4 2xl:px-0 sm:pb-8">
    <SectionList incentives={incentives} />
  </div>
);

export default Section;