import { classNames } from "@utils/functions";
import Marquee from "react-fast-marquee";

interface IProps {
  title: string;
  bgColor?: string;
  assets: ImageMetadata[];
}

export default function Partners({
  title,
  assets,
  bgColor = "bg-[#FAFAFA]",
}: IProps) {
  return (
    <div className={classNames(bgColor, "py-10 sm:py-14 lg:py-20")}>
      <div className="mx-auto max-w-7xl">
        <p className="text-xl sm:text-2xl font-bold text-center text-grower-400 leading-8 mb-6 sm:mb-10">
          {title}
        </p>
        <Marquee speed={50} autoFill>
          <div
            style={{
              gridTemplateColumns: `repeat(${assets.length}, minmax(0, 1fr))`,
            }}
            className="mt-4 grid items-center gap-y-8 mx-0 max-w-full"
          >
            {assets.map((asset, i) => {
              return (
                <img
                  key={i}
                  width={120}
                  height={48}
                  alt={title}
                  src={asset.src}
                  className="col-span-1 max-h-12 w-52 object-contain grayscale"
                />
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
