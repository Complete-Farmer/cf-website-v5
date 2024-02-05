import { Parallax } from "react-parallax";

export default function ParallaxImage({ imgSrc }: { imgSrc: string }) {
  return (
    <Parallax
      bgImage={imgSrc}
      strength={500}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[500px]" />
    </Parallax>
  );
}
