import { LinkIcon, LinkedInIcon, TwitterIcon } from "@assets/icons";
import { Button, PrismicText } from "@components/utils";
import type { RichTextBlock } from "prismic-reactjs";

interface IProps {
  career: {
    uid: string;
    role: string;
    department: string;
    requirements: RichTextBlock[];
    description: RichTextBlock[];
    preferred_skills: RichTextBlock[];
    responsibilities: RichTextBlock[];
  };
}

const icons = [
  {
    name: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    name: "Twitter",
    href: "#",
    icon: TwitterIcon,
  },
  {
    name: "Link",
    href: "#",
    isHover: false,
    icon: LinkIcon,
  },
];

const JobDetails = ({ career }: IProps) => {
  const handleClickScroll = () => {
    const element = document.getElementById("form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (
    <section className="max-w-7xl mx-auto pt-20 lg:pt-32 lg:pb-24 lg:px-36 space-y-10">
      <div className="space-y-6">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-3xl font-bold text-custom_green-900">
            {career.role}
          </h2>
        </div>
        <div className="flex justify-start items-center text-md font-bold text-left text-custom_black-900 space-x-4">
          <p>{career.department}</p>
          <span>•</span>
          <p>Full-time</p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <Button
            title="Apply Now"
            className="!w-fit px-6"
            onClick={() => handleClickScroll()}
          />
          <div className="flex justify-start items-start gap-2 gap-x-4">
            {icons?.map((item) => {
              return (
                <div
                  key={item.name}
                  className="flex justify-start items-start gap-2.5 p-3 rounded-[38px] bg-[#efefef] text-grower-400 hover:text-white hover:bg-grower-500 hover:cursor-pointer"
                >
                  <item.icon className="text-inherit" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <h4 className="text-base font-bold text-left text-custom_black-900">
            About the Role
          </h4>
          {career.description?.length > 0 && (
            <PrismicText render={career.description} />
          )}
        </div>

        <div>
          <h4 className="text-base font-bold text-left text-custom_black-900">
            Requirements
          </h4>
          {career.requirements?.length > 0 && (
            <PrismicText render={career.requirements} />
          )}
        </div>

        <div>
          <h4 className="text-base font-bold text-left text-custom_black-900">
            Responsibilities
          </h4>
          {career.responsibilities?.length > 0 && (
            <PrismicText render={career.responsibilities} />
          )}
        </div>

        <div>
          <h4 className="text-base font-bold text-left text-custom_black-900">
            Preferred skills
          </h4>
          {career.preferred_skills?.length > 0 && (
            <PrismicText render={career.preferred_skills} />
          )}
        </div>

        <p>Only shortlisted applicants will be contacted.</p>
      </div>

      <div className="w-full pt-4">
        <Button
          title="Apply Now"
          className="lg:!w-2/5 mx-auto"
          onClick={() => handleClickScroll()}
        />
      </div>
    </section>
  );
};

export default JobDetails;
