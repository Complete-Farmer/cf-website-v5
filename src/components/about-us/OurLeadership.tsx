import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useMemo } from "react";

import type { IPrismicData } from "types/app";
import { LinkedInIcon } from "@assets/icons";

interface IProps {
  data: IPrismicData;
}

const OurLeadership = ({ data }: IProps) => {
  const leaders = useMemo(() => {
    return data.results.map((item) => ({
      ...item,
      uid: item?.uid,
      slug: item?.uid,
      name: item?.data?.fullname[0]?.text,
      role: item?.data?.position[0]?.text,
      linkedIn: item?.data?.linkedin?.url,
      imageUrl: item?.data?.image?.url.replace("?auto=compress,format", ""),
    }));
  }, [data]);

  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "LinkedIn"
    // });
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "LinkedIn"
    // });
    // ReactPixel.track("LinkedIn", {});
  };

  const settings = {
    dots: false,
    infinite: leaders.length >= 3,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15px",
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1.02,
          centerMode: true,
          centerPadding: "28px",
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.02,
          centerMode: true,
          centerPadding: "11px",
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.07,
          centerMode: true,
          centerPadding: "19px",
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.06,
          centerMode: true,
          centerPadding: "20px",
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white sm:pb-10">
      <div className="mx-auto max-w-7xl px-0 overflow-hidden text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[28px] sm:text-5xl font-bold tracking-tight text-custom_green-900 ">
            Our leadership
          </h2>
        </div>
        <div className="mt-16">
          {leaders?.length > 0 && (
            <Slider {...settings}>
              {leaders.map((person) => (
                <div key={person.id}>
                  <a href={`/about-us/staffs/${person.slug}`}>
                    <div
                      aria-hidden="true"
                      className="aspect-h-3 aspect-w-3 mx-1 md:mx-2 overflow-hidden rounded-lg "
                    >
                      <div className="">
                        <img
                          src={person.imageUrl}
                          alt=""
                          className="w-12/12 md:mb-0 border rounded-lg hover:cursor-pointer"
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 mx-2 text-lg sm:text-xl text-left font-bold leading-8 tracking-tight text-custom_green-900 hover:underline">
                      {person.name}
                    </h3>
                    <p className="text-sm text-left mx-2 leading-7 text-gray-800">
                      {person.role}
                    </p>
                  </a>
                  <div className="flex justify-start items-center self-stretch[x] flex-grow-0[x] flex-shrink-[x]0 relative[x] gap-2 mx-2">
                    <LinkedInIcon className="text-[#0A66C2]" />

                    <p className="text-sm font-bold text-left leading-7 text-[#0A66C2] hover:underline">
                      <a
                        onClick={handleLinkClick}
                        href={person.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn profile
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurLeadership;
