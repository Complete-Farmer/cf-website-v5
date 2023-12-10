import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyIntegration = () => {
  return (
    <div className="max-h-fit">
      <InlineWidget
        url="https://calendly.com/completefarmerbuyer/30min"
        styles={{
          height: "46vh"
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          primaryColor: "2463FF",
          textColor: "4d5055"
        }}
      />
    </div>
  );
};

export default CalendlyIntegration;
