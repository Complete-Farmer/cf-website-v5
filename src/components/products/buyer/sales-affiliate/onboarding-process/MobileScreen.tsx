interface IProps {
  data: {
    no: string;
    name: string;
    image: string;
    description: string;
  }[];
}

const MobileScreen = ({ data }: IProps) => {
  return (
    <div className=" bg-neutral-50">
      <div className="flex flex-col justify-start items-start gap-8 p-6">
        <div className="flex flex-col justify-start items-start gap-4">
          <p className="text-2xl sm:text-[32px] font-bold text-left text-[#00194c]">
            What the onboarding process looks like
          </p>
          <p className="text-base text-left text-[#6c6c6c]">
            There are 4 stages to onboarding as a Complete Farmer sales
            affiliate
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-[54px]">
          {data.map(({ no, name, image, description }) => (
            <div key={no} className="flex">
              <div className="flex flex-col justify-start items-start w-full sm:w-2/3 gap-0">
                <p className=" text-[100px] font-bold text-left text-[#d6e2ff]">
                  {no}
                </p>
                <div className="flex flex-col justify-start items-start  gap-4">
                  <p className=" text-[28px] font-bold text-left text-[#00194c]">
                    {name}
                  </p>
                  <p className="text-base text-left text-[#1d1d1f]">
                    {description}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex w-1/3  justify-center items-center px-4">
                <img
                  src={image}
                  className="h-[300px]"
                  alt="completefarmer-onboarding"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
