import { useState } from "react";

import { NewpaperIcon, ContentIcon, ServiceGuideIcon } from "@assets/icons";

import { Wrapper, SectionList, NewsletterForm, ServiceGuideForm } from ".";
import { mailChimpTags } from "@utils/constants";

export default function Section({
  product = "Grower",
}: {
  product?: "Buyer" | "Grower";
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Newsletter");

  const toggleModal = () => {
    setOpen(!open);
  };

  const openModal = (name: string) => {
    toggleModal();
    setActive(name);
  };

  const isBuyer = product == "Buyer";

  const fillTwo = isBuyer ? "#367AFE" : undefined;

  const incentives = [
    {
      name: "Newsletter",
      icon: <NewpaperIcon fillTwo={fillTwo} />,
      description: !isBuyer
        ? "Discover the latest tips and insights on food and agricultural production on our blog."
        : "Make smarter business decisions backed by data and stay ahead of food production trends with useful insights that cuts through the noise.",
      linkText: "Join the newsletter",
      action: (i: string) => openModal(i),
    },
    {
      name: "Service guide",
      icon: <ServiceGuideIcon fillTwo={fillTwo} />,
      description: !isBuyer
        ? "See how we help you maximise your yield, connect you to new markets and increase your profitability. With CF Grower."
        : "See how we make crop procurement easier for you and help you crush your targets with confidence. With CF Buyer.",
      linkText: "Send me the service guide!",
      action: (i: string) => openModal(i),
    },
    {
      name: "Blogs",
      icon: <ContentIcon fillTwo={fillTwo} />,
      description:
        "Discover the latest tips and insights on food and agricultural production on our blog.",
      linkText: "Go to Blogs",
      link: "/resources/blogs",
    },
  ];

  return (
    <div className="px-6 bg-[#FAFAFA]">
      <SectionList
        incentives={incentives}
        textColor={product == "Buyer" ? "text-buyer-500" : undefined}
      />
      <Wrapper isOpen={open} onClose={() => toggleModal()}>
        {active === "Newsletter" ? (
          <NewsletterForm
            tag={mailChimpTags[isBuyer ? "Buyer": "Grower"]}
            buttonBg="bg-grower-500"
            onClose={() => toggleModal()}
          />
        ) : (
          <ServiceGuideForm
            product={product}
            buttonBg="bg-grower-500"
            onClose={() => toggleModal()}
          />
        )}
      </Wrapper>
    </div>
  );
}
