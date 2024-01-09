import { Parallax } from "react-parallax";

import Image from "../../assets/bg/home-image.svg";

export default function HomeImage() {
  return (
    <Parallax bgImage={Image.src} bgImageStyle={{ objectFit: "cover" }} strength={500}>
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[500px]"/>
    </Parallax>
  );
}
