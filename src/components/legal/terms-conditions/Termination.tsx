import Title from "./Title";

export default function Termination() {
  return (
    <div>
      <Title no="15." name="TERMINATION" />
      <div className=" text-base text-custom_black-900-900 sm:text-xl text-left space-y-4">
        <p>
          We reserve the right to suspend or terminate your account or cease providing you with access to all or part of our Website or App at any
          time for any or no reason, including, but not limited to, if we reasonably believe: (i) you have violated this Agreement or our{" "}
          <a href="/legal/privacy-policy" className="hover:underline text-blue-600 dark:text-blue-500">
            Privacy Policy
          </a>
          , (ii) you create risk or possible legal exposure for Complete Farmer; or (iii) our provision of our Website or App to you is no longer
          commercially viable. We will make reasonable efforts to notify you of such termination by the email address associated with your account or
          the next time you attempt to access your account, depending on the circumstances. In all such cases, this Agreement shall terminate,
          including, without limitation, your license to use our Website or App.
        </p>

        <p>All sections, which by their nature and context are intended to survive the termination of this Agreement, will survive.</p>
      </div>
    </div>
  );
}
