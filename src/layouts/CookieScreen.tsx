import CookieConsent from "react-cookie-consent";

export default function CookieScreen() {
  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Privacy Policy"
    // });

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "PrivacyPolicy"
    // });

    // ReactPixel.track("Privacy Policy", {});
  };

  return (
    <CookieConsent
      flipButtons
      location="bottom"
      enableDeclineButton
      buttonText="Accept Cookies"
      declineButtonText="Learn More"
      contentStyle={{ padding: "1%" }}
      buttonWrapperClasses="flex lg:flex-none"
      style={{ background: "white", borderTop: "0.5vh solid #31bc2e" }}
      buttonStyle={{ backgroundColor: "#31bc2e", color: "white", borderRadius: "100px" }}
      declineButtonStyle={{
        backgroundColor: "white",
        color: "#31bc2e",
        borderRadius: "100px",
        border: "1px solid #31bc2e"
      }}
      declineButtonClasses="w-40 sm:w-48 xs:w-30 xl:w-48 h-12 gap-2 px-8 py-2"
      buttonClasses="w-40 sm:w-48 xs:w-10 xl:w-48 h-12 gap-2 px-8 py-2 bg-grower-500"
    >
      <p className="w-full max-w-5xl text-xs text-left text-[#1d1d1f]">
        <span>
          By clicking “Accept Cookies,” I agree to provide cookies for statistical and personalized preference purposes. To learn more about our
          cookies,
          <br className="hidden xl:block" />
          please read our{" "}
          <a onClick={handleLinkClick} href="/legal/privacy-policy" className="hover:cursor-pointer hover:underline">
            Privacy Policy.{" "}
          </a>
        </span>{" "}
      </p>
    </CookieConsent>
  );
}
