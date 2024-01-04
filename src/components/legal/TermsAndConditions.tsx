import ServiceLicense from "./terms-conditions/ServiceLicense";
import ReservationRights from "./terms-conditions/ReservationRights";
import Payment from "./terms-conditions/Payment";
import Conducts from "./terms-conditions/Conducts";
import GeneralTerms from "./terms-conditions/GeneralTerms";
import Intro from "./terms-conditions/Intro";
import TerritorialRestriction from "./terms-conditions/TerritorialRestriction";
import EligiblityRestriction from "./terms-conditions/EligiblityRestriction";
import ServiceRestrictions from "./terms-conditions/ServiceRestrictions";
import UseByMinors from "./terms-conditions/UseByMinors";
import PrivacyPolicy from "./terms-conditions/PrivacyPolicy";
import Communications from "./terms-conditions/Communications";
import Indemnification from "./terms-conditions/Indemnification";
import Disclaimers from "./terms-conditions/Disclaimers";
import Liability from "./terms-conditions/Liability";
import Termination from "./terms-conditions/Termination";
import CopyRight from "./terms-conditions/CopyRight";
import Assignment from "./terms-conditions/Assignment";
import AnitBribery from "./terms-conditions/AnitBribery";
import Modifications from "./terms-conditions/Modifications";
import RelationshipParties from "./terms-conditions/RelationshipParties";
import Governinglaw from "./terms-conditions/Governinglaw";
import DisputeResolution from "./terms-conditions/DisputeResolution";
import Miscellaneous from "./terms-conditions/Miscellaneous";

export default function TermsAndConditions() {
  return (
    <div className="bg-white py-8 sm:py-14 sm:px-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <GeneralTerms />
        <Intro />
        <TerritorialRestriction />
        <UseByMinors />
        <PrivacyPolicy />
        <EligiblityRestriction />
        <Payment />
        <ServiceLicense />
        <ServiceRestrictions />
        <ReservationRights />
        <Conducts />
        <Communications />
        <Indemnification />
        <Disclaimers />
        <Liability />
        <Termination />
        <CopyRight />
        <Assignment />
        <AnitBribery />
        <Modifications />
        <RelationshipParties />
        <Governinglaw />
        <DisputeResolution />
        <Miscellaneous />
      </div>
    </div>
  );
}


