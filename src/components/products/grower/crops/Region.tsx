interface IProps {
  aboutRegion: string;
}

const Region = ({ aboutRegion }: IProps) => {
  return (
    <div className="relative flex flex-col gap-8 justify-start items-start sm:mt-4 sm:px-6 pt-5 pb-3 rounded-lg bg-white sm:border sm:border-[#e6e6e6]">
      <div className="absolute left-[-15px] top-[0px] w-[100vw] h-[8px] bg-custom_gray-400 sm:hidden"></div>
      <div className="pb-6 sm:pb-0">
        <p className="text-base font-bold text-left text-custom_gray-300 py-1">
          REGION
        </p>
        <p className="text-base text-black py-1">{aboutRegion}</p>
      </div>
      <div className="absolute left-[-15px] bottom-[0px] w-[100vw] h-[8px] bg-custom_gray-400 sm:hidden"></div>
    </div>
  );
};

export default Region;
