import Marquee from "react-fast-marquee";

interface IProps {
  bgColor: string;
  assets: ImageMetadata[];
}

export default function Partners({ bgColor, assets }: IProps) {
  return (
    <div className={`${bgColor} py-10 sm:py-14 lg:py-20`}>
      <div className="mx-auto max-w-7xl">
        <p className="text-xl sm:text-2xl font-bold text-center text-grower-400 leading-8 mb-6 sm:mb-10">
          Trusted by global brands
        </p>
        <Marquee speed={50} autoFill>
          <div className="mt-4 grid grid-cols-4 items-center gap-y-8 mx-0 max-w-full">
            {assets.map((asset, i) => {
              return (
                <img
                  key={i}
                  width={120}
                  height={48}
                  src={asset.src}
                  alt="Trusted Brands"
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
