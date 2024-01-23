interface IProps {
  title: string;
  desc?: string;
  titleTextColor?: string;
  titleFontSize?: string;
}

function HeadingOneLine({
  desc,
  title,
  titleTextColor = "text-grower-400",
  titleFontSize = "text-2xl md:text-[40px] lg:text-5xl",
}: IProps) {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-4 text-center sm:py-2 lg:px-0">
      <h1
        className={`md:px-16 lg:px-10 leading-[30px] md:leading-[50px] lg:leading-[60px] font-bold tracking-tight ${titleTextColor} ${titleFontSize}`}
      >
        {title}
      </h1>
      {desc && (
        <p className="text-xs h-16 w-[345px] md:text-base md:h-[72px] md:w-10/12 lg:text-xl lg:leading-8 lg:w-10/12 lg:h-16 py-5">
          {desc}
        </p>
      )}
    </div>
  );
}

export default HeadingOneLine;
