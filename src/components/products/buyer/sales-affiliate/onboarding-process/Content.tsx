import MobileScreen from "./MobileScreen";

interface IProps {
  activeIndex: number;
  data: {
    no: string;
    name: string;
    image: string;
    description: string;
  }[];
}
const Content = ({ data, activeIndex }: IProps) => {
  const { no, name, image, description } = data[activeIndex];
  return (
    <>
      <div className="hidden lg:block bg-neutral-50 h-[400vh] w-full relative mx-auto">
        <div className="sticky top-[150px] flex flex-col flex-nowrap w-full h-[100vh] mx-auto">
          {no && (
            <div className="max-w-7xl mx-auto w-full mt-16">
              <div className="flex flex-col justify-center items-center mx-auto gap-4">
                <p className="px-4 text-5xl font-bold text-center text-buyer-400">
                  What the onboarding process looks like
                </p>
                <p className="px-4 text-xl text-left text-custom_gray-300">
                  There are 4 stages to onboarding as a Complete Farmer sales
                  affiliate
                </p>
                <div className="flex w-full gap-4">
                  <div className="w-1/2 flex flex-col justify-start items-start gap-8 px-4">
                    <p className="text-[150px] font-bold text-left text-[#d6e2ff]">
                      {no}
                    </p>
                    <div className="flex flex-col justify-start items-start gap-8">
                      <p className=" text-5xl font-bold text-left text-buyer-400">
                        {name}
                      </p>
                      <p className="text-2xl text-left text-[#1d1d1f]">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-center items-center px-4">
                    <img
                      src={image}
                      className="h-[300px]"
                      alt="completefarmer-onboarding"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        <MobileScreen data={data} />
      </div>
    </>
  );
};

export default Content;
