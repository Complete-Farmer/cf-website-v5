import { useState } from "react";

import { NewpaperIcon, ContentIcon, ServiceGuideIcon } from "@assets/icons";

import {
  Wrapper,
  SectionList,
  NewsletterForm,
  ServiceGuideForm,
} from "@components/utils";

export default function Section() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Newsletter");

  const toggleModal = () => {
    setOpen(!open);
  };

  const openModal = (name: string) => {
    toggleModal();
    setActive(name);
  };

  const incentives = [
    {
      name: "Newsletter",
      icon: <NewpaperIcon />,
      description:
        "Make smarter business decisions backed by data and stay ahead of food production trends with useful insights that cuts through the noise.",
      linkText: "Join the newsletter",
      action: (i: string) => openModal(i),
    },
    {
      name: "Service guide",
      icon: <ServiceGuideIcon />,
      description:
        "See how we help you maximise your yield, connect you to new markets and increase your profitability. With CF Grower.",
      linkText: "Send me the service guide!",
      action: (i: string) => openModal(i),
    },
    {
      name: "Customer stories",
      icon: <ContentIcon />,
      description:
        "Discover the latest tips and insights on food and agricultural production on our blog.",
      linkText: "Go to customer stories",
      link: "/products/grower/customer-stories",
    },
  ];

  return (
    <div>
      <SectionList incentives={incentives} />
      <Wrapper isOpen={open} onClose={() => toggleModal()}>
        {active === "Newsletter" ? (
          <NewsletterForm
            tag="7931902"
            buttonBg="bg-grower-500"
            onClose={() => toggleModal()}
          />
        ) : (
          <ServiceGuideForm
            product="Buyer"
            buttonBg="bg-grower-500"
            onClose={() => toggleModal()}
          />
        )}
      </Wrapper>
    </div>
  );
}
