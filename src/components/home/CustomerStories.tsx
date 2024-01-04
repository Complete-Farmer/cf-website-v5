import "swiper/css";
import "swiper/css/navigation";
import "../../assets/styles/swiper.css";

import { useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Tab from "../../components/utils/Tab";
import CustomerStoryGrowerCard from "../../components/utils/CustomerStoryGrowerCard";
import CustomerStoryBuyerCard from "../../components/utils/CustomerStoryBuyerCard";
import type { Query, PrismicDocument } from "@prismicio/client";

const mockCateogries = [
  {
    name: "Grower",
    slug: "grower",
    current: true,
  },
  {
    name: "Buyer",
    slug: "buyer",
    current: false,
  },
];

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Query<PrismicDocument<Record<string, any>, string, string>>;
}

interface IItem {
  id: string;
  name: string;
  imageUrl: string;
  titleFirstName: string;
  titleLastName?: string | undefined;
  titleTextColor: string;
}

export default function CustomerStories({ data }: IProps) {
  const [categories, setCategories] = useState(mockCateogries);
  const [activeCategory, setActiveCategory] = useState("Grower");
  const activeBgColor =
    activeCategory === "Grower" ? "bg-custom_lightgreen-500" : "bg-[#367afe]";
  const activeBgPattern =
    activeCategory === "Grower"
      ? "bg-customer-stories-pattern"
      : "bg-customer-stories-pattern-blue";
  const inActiveBgColor =
    activeCategory === "Grower" ? "bg-custom_green-900" : "bg-[#18274C]";
  const normalBgColor =
    activeCategory === "Grower" ? "bg-custom_green-900" : "bg-[#18274C]";

  const [buyerData, growerData] = useMemo(() => {
    const buyerData: IItem[] = [];
    const growerData: IItem[] = [];

    data.results
      .filter((item) => item?.data?.description.length > 0)
      .forEach((item) => {
        const transformedItem: IItem = {
          id: item.uid || item.id,
          titleTextColor: "text-white",
          imageUrl: item.data.image.url,
          name: item?.data?.name[0]?.text,
          titleFirstName: item?.data?.description[0]?.text,
        };
        if (item.data.category === "Grower") {
          growerData.push(transformedItem);
        } else {
          buyerData.push(transformedItem);
        }
      });

    return [buyerData, growerData];
  }, [data]);

  const changeCategory = (i: number) => {
    const catIndex = i === 0 ? "Grower" : "Buyer";
    mockCateogries.filter((c) => {
      if (c.name === catIndex) c.current = true;
      if (c.name !== catIndex) c.current = false;
      return c;
    });
    const activeCat = mockCateogries.find((i) => i.name === catIndex);
    setCategories(mockCateogries);
    setActiveCategory(activeCat?.name as string);
  };

  const handleNavigate = () => {
    // navigate("/customer-stories");
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Customer Stories"
    // });
    // window.metapixelfunction("stories", "customer_stories", {});
    // window.dataLayer.push({
    //   event: "customer_stories"
    // });
  };

  return (
    <section
      className={`relative bg-custom_lightgreen-900 h-full py-14 pb-16 sm:py-20 xl:py-32 sm:pb-40 ${activeBgPattern}`}
    >
      <div className="flex relative py-4 mb-5 flex-col z-20 px-10 justify-center items-center text-center tracking-normal leading-6 sm:text-center text-white box-border">
        <h2 className="text-center mb-4 font-sans text-white text-[28px] sm:text-5xl font-bold sm:font-semibold tracking-normal leading-none md:mb-12 lg:mb-4">
          Customer Stories
        </h2>
        <Tab
          categories={categories}
          changeCategory={changeCategory}
          activeBgColor={activeBgColor}
          inActiveBgColor={inActiveBgColor}
          normalBgColor={normalBgColor}
        />
      </div>
      <>
        {activeCategory === "Grower" ? (
          <Swiper
            rewind
            navigation
            centeredSlides
            initialSlide={0}
            spaceBetween={20}
            className="mySwiper"
            slidesPerView={1.2}
            modules={[Navigation]}
          >
            {growerData.map((item) => (
              <SwiperSlide key={item.id}>
                <CustomerStoryGrowerCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            rewind
            navigation
            centeredSlides
            initialSlide={0}
            spaceBetween={20}
            slidesPerView={1.2}
            className="mySwiper"
            modules={[Navigation]}
          >
            {buyerData.map((item) => (
              <SwiperSlide key={item.id}>
                <CustomerStoryBuyerCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </>
      <div
        onClick={() => {
          handleButtonClick();
        }}
        className="text-[20px] flex items-center justify-center px-6 mt-14 sm:mt-16"
      >
        <button
          type="submit"
          onClick={handleNavigate}
          className={`${activeBgColor} w-full flex items-center justify-center h-16 px-6 sm:mx-40 lg:mx-0 lg:w-[250px] lg:text-[20px] font-medium lg:font-bold tracking-wide text-white transition duration-200 rounded-full  focus:shadow-outline focus:outline-none`}
        >
          See all stories
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative mx-2"
            preserveAspectRatio="none"
          >
            <path
              d="M4.99997 10.9999H16.59L13.29 7.70994C13.1017 7.52164 12.9959 7.26624 12.9959 6.99994C12.9959 6.73364 13.1017 6.47825 13.29 6.28994C13.4783 6.10164 13.7337 5.99585 14 5.99585C14.2663 5.99585 14.5217 6.10164 14.71 6.28994L19.71 11.2899C19.801 11.385 19.8724 11.4972 19.92 11.6199C20.02 11.8634 20.02 12.1365 19.92 12.3799C19.8724 12.5027 19.801 12.6148 19.71 12.7099L14.71 17.7099C14.617 17.8037 14.5064 17.8781 14.3845 17.9288C14.2627 17.9796 14.132 18.0057 14 18.0057C13.868 18.0057 13.7373 17.9796 13.6154 17.9288C13.4935 17.8781 13.3829 17.8037 13.29 17.7099C13.1962 17.617 13.1218 17.5064 13.0711 17.3845C13.0203 17.2627 12.9942 17.132 12.9942 16.9999C12.9942 16.8679 13.0203 16.7372 13.0711 16.6154C13.1218 16.4935 13.1962 16.3829 13.29 16.2899L16.59 12.9999H4.99997C4.73475 12.9999 4.4804 12.8946 4.29286 12.707C4.10533 12.5195 3.99997 12.2652 3.99997 11.9999C3.99997 11.7347 4.10533 11.4804 4.29286 11.2928C4.4804 11.1053 4.73475 10.9999 4.99997 10.9999Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
