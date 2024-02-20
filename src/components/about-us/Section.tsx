import SectionList from "@components/utils/SectionList";

import { PeopleIcon, NewpaperIcon, RelationIcon } from "@assets/icons";

const incentives = [
  {
    name: "Careers",
    icon: <PeopleIcon />,
    description:
      "See what roles are open and learn more about the perks of working with Complete Farmer.",
    linkText: "Learn more",
    link: "/careers",
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
    name: "Investor Relations",
    icon: <RelationIcon />,
    description:
      "Learn more about our mission, growth and impact and how you can be part of it.",
    linkText: "Go to Investor relations",
    link: "/investor-relations",
  },
];

const Section = () => (
  <div className="py-4 sm:py-0 sm:px-4 2xl:px-0 sm:pb-8">
    <SectionList incentives={incentives} />
  </div>
);

export default Section;