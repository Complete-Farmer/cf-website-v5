import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Cookies from "js-cookie";


export default function CookieScreen() {
  const handleAccept = () => {
    Cookies.set("cookie_consent", "true", { expires: 365 }); // Expires in 1 year
    window.location.reload();
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "false", { expires: 365 });
    window.location.reload();
  };

  return (
    <CookieConsent
      flipButtons
      location="bottom"
      enableDeclineButton
      visible={!JSON.parse(getCookieConsentValue() || "false") ? "show" : "byCookieValue"}
      buttonText="Accept Cookies"
      declineButtonText="Decline"
      contentStyle={{ padding: "1%" }}
      buttonWrapperClasses="flex lg:flex-none"
      style={{ background: "white", borderTop: "0.5vh solid #31bc2e" }}
      buttonStyle={{
        backgroundColor: "#31bc2e",
        color: "white",
        borderRadius: "100px",
      }}
      declineButtonStyle={{
        backgroundColor: "white",
        color: "#31bc2e",
        borderRadius: "100px",
        border: "1px solid #31bc2e",
      }}
      hideOnDecline={false}
      onAccept={handleAccept}
      onDecline={handleDecline}
      declineButtonClasses="w-40 sm:w-48 xs:w-30 xl:w-48 h-12 gap-2 px-8 py-2"
      buttonClasses="w-40 sm:w-48 xs:w-10 xl:w-48 h-12 gap-2 px-8 py-2 bg-grower-500"
    >
      <p className="w-full max-w-5xl text-xs text-left text-custom_black-900">
        <span>
          By clicking “Accept Cookies,” I agree to provide cookies for
          statistical and personalized preference purposes.<br />To learn more about
          our cookies, please read our{" "}
          <a
            target="_blank"
            href="/legal/privacy-policy"
            className="hover:cursor-pointer hover:underline text-[#31bc2e] font-semibold"
          >
            Privacy Policy.
          </a>
        </span>
      </p>
    </CookieConsent>
  );
}
