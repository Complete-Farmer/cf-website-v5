import {  useSwiper } from "swiper/react";

const Button = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#6C6C6C"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const SwiperButton = ({ direction }: { direction: string }) => {
  const swiper = useSwiper();

  if (direction === "left") {
    return (
      <button
        className="absolute top-[48%] left-5 z-[99999] bg-white rounded-full p-5  "
        onClick={() => swiper.slidePrev()}
      >
        <Button />
      </button>
    );
  } else {
    return (
      <button
        className="absolute top-[48%] right-5 z-[99999]  rotate-180 bg-white rounded-full p-5  "
        onClick={() => swiper.slideNext()}
      >
        <Button />
      </button>
    );
  }
};

export default SwiperButton;
