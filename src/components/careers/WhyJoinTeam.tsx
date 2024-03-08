import { Fading, HeadingOneLine } from "@components/utils";

import {
  BooksIcon,
  ChartIcon,
  PlaneIcon,
  StockIcon,
  GlobeIcon,
  HealthIcon,
} from "@assets/icons";

const incentives = [
  {
    name: "Health Insurance",
    icon: HealthIcon,
    description:
      "Complete Farmer Limited health insurance plan provides employees access to medical insurance benefits.",
  },
  {
    name: "Training and development",
    icon: BooksIcon,
    description:
      "Employees may be able to attend conferences, courses, seminars, and meetings to enhance their skills and knowledge in their role.",
  },
  {
    name: "Annual Paid leave",
    icon: PlaneIcon,
    description:
      "We prioritize your happiness and promote a healthy work-life balance by offering ample vacation time to ensure you thrive both personally and professionally.",
  },
  {
    name: "Stock Options",
    icon: StockIcon,
    description:
      "We provide eligible employees with the opportunity to own a stake in our company and share in its success through our stock options program.",
  },
  {
    name: "Performance Incentives",
    icon: ChartIcon,
    description:
      "We strive to empower our employees to reach new heights by celebrating hard work and dedication through competitive bonuses and commission structures.",
  },
  {
    name: "Relocation Support",
    icon: GlobeIcon,
    description:
      "We offer comprehensive relocation support to eligible employees from assisting with finding housing and navigating the moving process to covering relocation expenses.",
  },
];

export default function WhyJoinTeam() {
  return (
    <div className="bg-white px-4 pt-4 sm:pt-10 lg:pt-16 pb-8 sm:pb-16 lg:pb-24 space-y-10">
      <div className="flex relative mb-0 pb-0 lg:pt-10 justify-center items-center tracking-normal leading-6 sm:text-center">
        <HeadingOneLine
          descClass="!w-full"
          titleTextColor="text-grower-400"
          title="Why join the team?"
          desc="Learn more about the benefits and perks of working with Complete Farmer"
        />
      </div>
      <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
        <div className="px-4 lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 bordedr sm:px-6 gap-x-8 gap-y-10 sm:gap-x-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <Fading bottom key={incentive.name}>
                <div className="sm:flex md:block">
                  <div className="sm:flex-shrink-0">
                    <incentive.icon />
                  </div>
                  <div className="mt-4 sm:mt-6 lg:mt-10">
                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-gray-900">
                      {incentive.name}
                    </h3>
                    <p className="mt-2 text-xs lg:text-base text-custom_black-900 lg:mt-6">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              </Fading>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
