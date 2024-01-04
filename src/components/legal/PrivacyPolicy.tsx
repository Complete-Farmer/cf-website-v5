import CollectionPrivacyInfo from "./privacy-policy/CollectionPrivacyInfo";
import DisclosureOfPersonalInfo from "./privacy-policy/DisclosureOfPersonalInfo";
import InformationAboutTransaction from "./privacy-policy/InformationAboutTransaction";
import InformationWeCollect from "./privacy-policy/InformationWeCollect";
import InformationWithOthers from "./privacy-policy/InformationWithOthers";
import InformationYouProvide from "./privacy-policy/InformationYouProvide";
import Intro from "./privacy-policy/Intro";
import ProtectionOfPersonalInfo from "./privacy-policy/ProtectionOfPersonalInfo";
import SocialSharing from "./privacy-policy/SocialSharing";
import UpdatesToPrivacy from "./privacy-policy/UpdatesToPrivacy";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-8 sm:py-14 sm:px-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Intro />
        <CollectionPrivacyInfo />
        <InformationYouProvide />
        <InformationAboutTransaction />
        <InformationWithOthers />
        <SocialSharing />
        <InformationWeCollect />
        <ProtectionOfPersonalInfo />
        <DisclosureOfPersonalInfo />
        <UpdatesToPrivacy />
      </div>
    </div>
  );
}


