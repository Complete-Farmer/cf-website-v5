interface IProps {
  titleFirstName: string;
  titleLastName?: string;
  titleTextColor: string;
}

function SubHeading({ titleFirstName, titleLastName, titleTextColor }: IProps) {
  return (
    <div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-4 sm:mt-4 md:mt-6 text-center text-[28px] sm:py-2 lg:px-0 sm:mb-10">
        <h1
          className={`text-base sm:text-[24px] lg:text-[28px] lg:leading-[48px] sm:leading-8 tracking-tight ${titleTextColor}`}
        >
          {titleFirstName}
          <br className="hidden sm:block" /> {titleLastName}
        </h1>
      </div>
    </div>
  );
}

export default SubHeading;
