import Title from "./Title";

export default function Communications() {
  return (
    <div>
      <Title no="11." name="COMPLETE FARMER COMMUNICATIONS" />
      <div className="text-base text-custom_black-900-900 sm:text-xl text-left space-y-4">
        <p>
          You understand and agree that you may receive information and push notifications from Complete Farmer via email, our App, text message on
          your mobile device, or calls to your mobile number. You hereby consent to receive communications via email, our App, text message on your
          mobile device, or calls to your mobile number. You acknowledge that you may incur additional charges or fees from your wireless provider for
          these communications, including text message charges and data usage fees, and you acknowledge and agree that you are solely responsible for
          any such charges and fees and not Complete Farmer.
        </p>

        <ol className="list-[lower-alpha] space-y-2 ml-12">
          <li>
            <span className="underline">Email Contact</span>: We may send promotional messages about us and our products and services related to our
            Website and App to your email. When you send us a query email at support@completefarmer.com, you are providing us with consent to send
            emails to you for replying to your queries at your provided email address. By providing your email address, you agree with these Terms of
            Use and our Privacy Policy.
          </li>

          <li>
            <span className="underline">Push Notification</span>: You can opt out of receiving push notifications through your device settings.
            Please note that opting out of receiving push notifications may impact your use of our Website and App.{" "}
          </li>
        </ol>
      </div>
    </div>
  );
}
