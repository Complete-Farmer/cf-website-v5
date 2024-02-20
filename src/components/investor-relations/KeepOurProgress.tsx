import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Input, Textarea } from "@components/utils";

const KeepOurProgress = () => {
  return (
    <section className="bg-custom_gray-400 py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-14 xl:px-0 space-y-14">
        <h2 className="text-[24px] md:text-[40px] lg:text-5xl md:leading-[50px] lg:leading-[60px] font-bold text-left text-grower-400">
          Keep up with our progress
        </h2>
        <div className="flex flex-col xl:flex-row space-y-10 xl:space-y-0 justify-between items-start">
          <div className="w-full xl:w-1/2">
            <div className="flex flex-col justify-start items-start w-full xl:w-[400px] gap-6">
              <Input
                name="email"
                title="Email"
                className="!bg-white"
                placeholder="Enter email address"
              />
              <div className="flex flex-col justify-start items-start gap-10 w-full xl:w-auto">
                <div className="flex flex-col justify-start items-start gap-4">
                  <Checkbox
                    name="existing_investor"
                    className="!bg-white"
                    title="Existing Investor"
                  />
                  <Checkbox
                    name="prospective_investor"
                    className="!bg-white"
                    title="Prospective Investor"
                  />
                </div>

                <Button
                  type="submit"
                  title="Submit"
                  className="xl:!w-fit px-8 py-4 !rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2 flex flex-col items-end">
            <div className="w-full xl:w-[400px] p-6 rounded-lg bg-white space-y-14">
              <div className="flex flex-col justify-start items-start space-y-4">
                <Input
                  title="Email"
                  name="email"
                  className="bg-white"
                  placeholder="Enter email address"
                />

                <Input
                  title="Subject"
                  name="subject"
                  className="bg-white"
                  placeholder="Enter subject"
                />

                <Textarea
                  title="Message"
                  name="message"
                  className="bg-white"
                  placeholder="500 maximum characters"
                />
              </div>

              <Button
                type="submit"
                title="Submit"
                className="xl:!w-fit px-8 py-4 !rounded-xl"
              />
              {/* <ToastContainer hideProgressBar /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepOurProgress;
