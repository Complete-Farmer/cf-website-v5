import { useState } from "react";

import { NewpaperIcon, ContentIcon, ServiceGuideIcon } from "@assets/icons";

import ModalWrapper from "@components/modals/Wrapper";

import SectionList from "@components/utils/SectionList";
import NewsLetterModalForm from "@components/utils/NewsLetterModalForm";
import ServiceGuideModalForm from "@components/utils/ServiceGuideModalForm";

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

  const propsData = {
    newsLetter: {
      title: "Join our newsletter",
      description: "",
      buttonText: "Subscribe",
      buttonBg: "bg-grower-500",
    },
    serviceGuide: {
      title: "CF Grower Service Guide",
      description:
        "Provide just a couple of details and you’ll get the CF Grower Guide PDF delivered straight to your inbox",
      buttonText: "Send me a service guide",
      buttonBg: "bg-grower-500",
    },
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
      <ModalWrapper isOpen={open} onClose={() => toggleModal()}>
        {active === "Newsletter" ? (
          <NewsLetterModalForm
            data={propsData.newsLetter}
            tag="7931902"
          />
        ) : (
          <ServiceGuideModalForm data={propsData.serviceGuide} />
        )}
      </ModalWrapper>
    </div>
  );
}
