// import { Parallax } from "react-parallax";
import * as pkg from "react-parallax";
const {Parallax} = pkg;

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
