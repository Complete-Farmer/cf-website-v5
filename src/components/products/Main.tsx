import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { PlayIcon } from "@assets/icons";
import { classNames } from "@utils/functions";
import BookDemo from "@components/home/BookDemo";
import { Tab, Button, Wrapper, LoadingPage } from "@components/utils";

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
  const [activeCategory, setActiveCategory] = useState(null);

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


  if(!activeCategory) {
    return <LoadingPage />;
  }

  return (
    <div className="flex flex-col md:justify-between pb-6 md:pb-12 space-y-6 md:space-y-0">
      <section className="bg-cover bg-no-repeat bg-products px-4 space-y-5 md:space-y-10 md:h-[40vh] 2xl:h-[70vh]">
        <div className="z-40 pt-5 sm:pt-6 mx-auto text-center text-white max-w-7xl lg:pb-0 lg:pt-12">
          <div className="w-full mx-auto text-center">
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

            <h1 className="mt-8 sm:mt-0 mb-4 text-[24px] font-sans font-semibold text-black lg:text-[40px] tracking-tighter xl:px-48 xl:leading-[50px]">
              {activeCategory === "Grower"
                ? data.grower.descriptionFirst
                : `${data.buyer.titleFirst}`}
              <br className="hidden sm:block" />{" "}
              {activeCategory === "Grower"
                ? data.grower.titleLast
                : data.buyer.titleLast}
            </h1>

            <p className="mt-0 text-base text-custom_black-900 lg:text-[24px] 2xl:px-48 2xl:leading-[36px]">
              {activeCategory === "Grower"
                ? data.grower.descriptionLast
                : data.buyer.descriptionLastDesktop}
            </p>
          </div>
        </div>

        <div className="relative 2xl:min-h-2 flex items-center justify-center lg:w-full w-full max-w-7xl lg:max-w-7xl mr-4 sm:mr-0 lg:mx-auto">
          <div className="md:absolute w-full -top-0">
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

      <div className="px-4">
        <Button
          title="Book a custom demo"
          onClick={() => {
            toggleModal();
            handleButtonClick();
          }}
          className={classNames(
            "w-full md:w-1/4 py-4 mx-auto md:mt-80 lg:mt-96",
            `!${activeBgColor}`
          )}
        />
      </div>

      <Wrapper
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <BookDemo toggleModal={toggleModal} activeCategory={activeCategory} />
      </Wrapper>
    </div>
  );
}

export default Main;
