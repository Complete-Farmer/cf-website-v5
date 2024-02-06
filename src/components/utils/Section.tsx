import { useState } from "react";

import { NewpaperIcon, ContentIcon, ServiceGuideIcon } from "@assets/icons";

import { Wrapper, SectionList, NewsletterForm, ServiceGuideForm } from ".";

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

  const fillTwo= product == "Buyer" ? "#367AFE" : undefined;

  const incentives = [
    {
      name: "Newsletter",
      icon: <NewpaperIcon fillTwo={fillTwo} />,
      description:
        "Make smarter business decisions backed by data and stay ahead of food production trends with useful insights that cuts through the noise.",
      linkText: "Join the newsletter",
      action: (i: string) => openModal(i),
    },
    {
      name: "Service guide",
      icon: <ServiceGuideIcon fillTwo={fillTwo} />,
      description:
        "See how we help you maximise your yield, connect you to new markets and increase your profitability. With CF Grower.",
      linkText: "Send me the service guide!",
      action: (i: string) => openModal(i),
    },
    {
      name: "Customer stories",
      icon: <ContentIcon fillTwo={fillTwo} />,
      description:
        "Discover the latest tips and insights on food and agricultural production on our blog.",
      linkText: "Go to customer stories",
      link: "/products/grower/customer-stories",
    },
  ];

  return (
    <div className="px-6 bg-[#FAFAFA]">
      <SectionList
        incentives={incentives}
        textColor={product == "Buyer" ? "text-buyer-500": undefined}
      />
      <Wrapper isOpen={open} onClose={() => toggleModal()}>
        {active === "Newsletter" ? (
          <NewsletterForm
            tag="7931902"
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