import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";

import { PlayIcon } from "@assets/icons";
import { Wrapper } from "@components/utils";

interface IProps {
  stories: {
    id: string;
    name: string;
    video: string;
    imageSrc: string;
    duration?: number;
  }[];
}

const CustomerStoriesBody = ({ stories }: IProps) => {
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(false);
  const settings = {
    dots: false,
    infinite: stories.length > 2,
    speed: 1000,
    slidesToShow: 2.55,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5px",
    initialSlide: 2,
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
          slidesToShow: 2.55,
          centerMode: true,
          centerPadding: "60px",
          initialSlide: 1,
        },
      },
    ],
  };

  const toggleModal = (id: string) => {
    const selectedId = stories.find((item) => item.id === id).video;
    setSelectedData(selectedId);
    setOpen(!open);
  };

  return (
    <div className="bg-white mt-8">
      <div className="mx-auto max-w-7xl md:px-0 sm:pt-10  px-0 overflow-hidden text-center lg:px-8">
        <Slider {...settings}>
          {stories.map((story, i) => (
            <div key={story.name}>
              <div className="mx-1.5">
                <div
                  className="cursor-pointer"
                  key={i}
                  onClick={() => toggleModal(story.id)}
                >
                  <div className="relative w-full ">
                    <div className="block overflow-hidden group rounded-xl relative">
                      <img
                        alt={story.name}
                        src={story.imageSrc}
                        className="w-full h-80 object-cover transition-all duration-300 ease-out sm:h-80 lg:h-96 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex justify-start items-center absolute left-4 bottom-[20%] gap-1.5 px-3 py-2 rounded-lg bg-white text-grower-500">
                      <PlayIcon />
                      <span className="text-sm font-bold">
                        {story.duration?.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-start items-start relative gap-4 mt-5">
                        <div className="flex flex-col h-full w-full justify-start items-start relative gap-2 ">
                          <a
                            href=""
                            className="text-base lg:text-2xl lg:leading-9  font-bold text-left text-custom_black-900 hover:underline"
                          >
                            {story.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Wrapper
        isOpen={open}
        onClose={() => setOpen(false)}
        className="flex w-[426px] h-[240px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px] relative transform overflow-hidden text-left text-base transition-all mx-auto lg:max-w-7xl"
      >
        <ReactPlayer playing url={selectedData} width="100%" height="100%" />
      </Wrapper>
    </div>
  );
};

export default CustomerStoriesBody;
