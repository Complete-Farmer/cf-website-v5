import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Input, Textarea } from "@components/utils";

const KeepOurProgress = () => {
  return (
    <div className="bg-custom_gray-400 py-24">
      <div className="max-w-7xl mx-auto space-y-14">
        <h2 className="text-[24px] md:text-[40px] lg:text-5xl md:leading-[50px] lg:leading-[60px] font-bold text-left text-grower-400">
          Keep up with our progress
        </h2>
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <div className="flex flex-col justify-start items-start w-full lg:w-[400px] gap-6">
              <Input
                name="email"
                title="Email"
                className="!bg-white"
                placeholder="Enter email address"
              />
              <div className="flex flex-col justify-start items-start gap-10 w-full lg:w-auto">
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
                  className="!w-fit px-8 py-4 !rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-end">
            <div className="w-full lg:w-[400px] p-6 rounded-lg bg-white space-y-14">
              <div className="flex flex-col justify-start items-start space-y-4">
                <Input
                  title="Email"
                  name="email"
                  placeholder="Enter email address"
                />

                <Textarea
                  title="Subject"
                  name="subject"
                  placeholder="Enter email address"
                />
              </div>

              <Button
                type="submit"
                title="Submit"
                className="!w-fit px-8 py-4 !rounded-xl"
              />
              {/* <ToastContainer hideProgressBar /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepOurProgress;
