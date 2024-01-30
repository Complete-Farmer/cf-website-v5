import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { PlayIcon } from "@assets/icons";
import { classNames } from "@utils/functions";
import BookDemo from "@components/home/BookDemo";
import { Tab, Button, Wrapper } from "@components/utils";

const cateogries = [
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

const data = {
  grower: {
    mainTitle: "Complete Farmer Grower Product",
    titleFirst: "Complete Farmer Grower Product",
    titleLast: "",
    descriptionFirst:
      "Our Grower platform helps farmers see growth on their fields and in their bank accounts.",
    descriptionLast:
      "Your farm should be delivering continuous revenue. Watch our demo to see how we’ll help you maximize your yield and profitability and connect you to new markets",
    demoUrl: "https://youtu.be/V_DyJWBjZkw?si=cX8exRMxYhq0v0J9",
    demoImg: "https://img.youtube.com/vi/V_DyJWBjZkw/maxresdefault.jpg",
  },
  buyer: {
    mainTitle:
      "Everything you need for seamless crop procurement all in one place.",
    titleFirst: "Everything you need for seamless crop",
    titleLast: "procurement all in one place.",
    descriptionFirst:
      "Our Grower platform helps farmers see growth on their fields and in their bank accounts.",
    decriptionMiddle: "",
    descriptionLast:
      "Your farm should be delivering continuous revenue. Watch our demo to see how we’ll help you maximize your yield and profitability and connect you to new markets ",
    descriptionLastDesktop:
      "CF Buyer makes dealing with let-downs from suppliers a thing of the past for you and your team. See how we make your job easier and help you crush your targets with confidence.",
    demoUrl: "https://youtu.be/v_zMJzScAqk?si=0PFN6e3iEdZd2xvw",
    demoImg: "https://img.youtube.com/vi/v_zMJzScAqk/mqdefault.jpg",
  },
};

function Main() {
  const [open, setOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [categories, setCategories] = useState(cateogries);
  const [activeCategory, setActiveCategory] = useState("Grower");

  useEffect(() => {
    const search = window.location.search;
    const queryParameters = new URLSearchParams(search);
    const tab = queryParameters.get("tab");
    const catIndex = tab === "buyer" ? "Buyer" : "Grower";
    setActiveCategory(catIndex);
    cateogries.filter((c) => {
      if (c.name === catIndex) c.current = true;
      if (c.name !== catIndex) c.current = false;
      return c;
    });
    setCategories(cateogries);
  }, []);

  const changeCategory = (i: number) => {
    const tab = i === 0 ? "grower" : "buyer";
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("tab", tab);
    window.location.search = searchParams.toString();
  };

  const toggleModal = () => setOpen(!open);

  const handleButtonClick = () => {};

  const activeBgColor =
    activeCategory === "Grower" ? "bg-grower-500" : "bg-buyer-500";
  const playSymbolColor =
    activeCategory === "Grower" ? "text-grower-500" : "text-buyer-500";
  const dUrl =
    activeCategory === "Grower" ? data.grower.demoUrl : data.buyer.demoUrl;
  const dImgUrl =
    activeCategory === "Grower" ? data.grower.demoImg : data.buyer.demoImg;

  return (
    <div className="flex flex-col justify-between pb-12">
      <section className="bg-cover bg-no-repeat bg-products space-y-10 h-[70vh]">
        <div className="z-40 px-4 sm:px-6 pb-32 pt-5 sm:pt-6 mx-auto text-center text-white max-w-7xl lg:pb-0 lg:pt-12">
          <div className="w-full px-4 mx-auto text-center">
            <div className="flex items-center justify-center">
              <Tab
                categories={categories}
                normalBgColor="bg-[#F1E8DD]"
                activeBgColor={activeBgColor}
                inActiveBgColor="bg-[#F1E8DD]"
                changeCategory={changeCategory}
                inActiveTextColor="text-custom_black-900"
              />
            </div>
            <h1 className="mt-8 sm:mt-0 mb-4 font-sans text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-black lg:text-5xl tracking-tighter lg:hidden">
              {activeCategory === "Grower"
                ? data.grower.titleFirst
                : data.buyer.titleFirst}
              <br className="hidden sm:block" />{" "}
              {activeCategory === "Grower"
                ? data.grower.titleLast
                : data.buyer.titleLast}
            </h1>

            <h1 className="hidden lg:block mt-8 sm:mt-0 mb-4 font-sans font-semibold text-black lg:text-[40px] tracking-tighter px-48 leading-[50px]">
              {activeCategory === "Grower"
                ? data.grower.descriptionFirst
                : `${data.buyer.titleFirst}`}
              <br className="hidden sm:block" />{" "}
              {activeCategory === "Grower"
                ? data.grower.titleLast
                : data.buyer.titleLast}
            </h1>

            <p className="mt-0 text-base text-custom_black-900 sm:text-sm lg:text-2xl lg:hidden">
              {activeCategory === "Grower"
                ? data.grower.descriptionFirst
                : data.buyer.descriptionFirst}
              <br className="hidden sm:block" />
            </p>

            <p className="mt-0 text-custom_black-900 lg:text-[24px] hidden lg:block px-48 leading-[36px]">
              {activeCategory === "Grower"
                ? data.grower.descriptionLast
                : data.buyer.descriptionLastDesktop}
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:w-full w-full max-w-7xl lg:max-w-7xl mr-4 sm:mr-0 lg:mx-auto">
          <div className="absolute w-full -top-0">
            <div className="mx-auto w-full lg:w-5/6 overflow-hidden rounded-lg shadow-2xl">
              <div className="top-0 bottom-0 left-0 right-0 absolute flex items-center justify-center">
                <div
                  role="button"
                  onClick={() => setVideoOpen(true)}
                  className="p-4 shadow-md bg-white rounded-full"
                >
                  <PlayIcon
                    className={classNames(playSymbolColor, "h-12 w-12")}
                  />
                </div>
              </div>
              <img
                src={dImgUrl}
                className="z-10 object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <Wrapper
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          className="flex overflow-hidden rounded-md transition mx-auto lg:max-w-7xl w-[426px] h-[240px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px]"
        >
          <ReactPlayer url={dUrl} playing width="100%" height="100%" />
        </Wrapper>
      </section>

      <div className="lg:hidden mt-24 sm:mt-72 text-custom_black-900 px-4 text-xs sm:text-base sm:px-28 sm:text-center">
        <p>
          {activeCategory === "Grower"
            ? data.grower.descriptionLast
            : data.buyer.descriptionLast}
        </p>
      </div>

      <Button
        title="Book a custom demo"
        onClick={() => {
          toggleModal();
          handleButtonClick();
        }}
        className={classNames(
          "w-full lg:w-1/4 py-4 mx-auto mt-96",
          `!${activeBgColor}`
        )}
      />

      <Wrapper
        isOpen={open}
        onClose={() => setOpen(false)}
        className="flex w-full h-full transform text-left text-base transition md:my-4 md:max-w-3xl md:px-4 lg:max-w-xl"
      >
        <BookDemo toggleModal={toggleModal} activeCategory={activeCategory} />
      </Wrapper>
    </div>
  );
}

export default Main;
