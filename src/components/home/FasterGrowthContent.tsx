import Leaves from "@assets/images/home/leaves";
import { Button, Fading } from "@components/utils";
import { classNames, getAppLink } from "@utils/functions";

interface IProps {
  title: string;
  text1: string;
  text2: string;
  buttonText: string;
  img: ImageMetadata;
  description: string;
  buttonBgColor: string;
}

export default function FasterGrowthContent({
  img,
  title,
  text1,
  text2,
  buttonText,
  description,
  buttonBgColor,
}: IProps) {
  const handleButtonClick = () => {
    window.fbq("track", "click", {
      content_category: "Auth Button Clicked",
      content_name: "Redirect to " + title,
    });
    window.gtag("event", "generate_lead", {
      event_category: "Auth Button Clicked",
      event_label: "Redirect to " + title,
    });
  };

  return (
    <div className="mx-auto max-w-7xl flex flex-col-reverse gap-x-4 sm:flex-row p-6 md:py-10 lg:py-16 ">
      <div className="relative sm:flex sm:flex-col w-full sm:w-1/2 text-left py-6">
        <Fading left>
          <h2
            className={`flex items-center mb-3 sm:mb-4 lg:mb-12 text-[28px] lg:text-5xl font-bold ${text2}`}
          >
            {title}
          </h2>

          <p className="text-base sm:text-base md:text-base lg:text-2xl leading-6 sm:leading-6 md:leading-6 lg:leading-9">
            {description}
          </p>

          <div className="py-6">
            <a
              target="_blank"
              href={getAppLink("Signup " + title)}
              className="contents"
              rel="noreferrer"
            >
              <Button
                hasArrow
                title={buttonText}
                arrowClass="hidden lg:block ml-3"
                onClick={handleButtonClick}
                className={classNames(buttonBgColor, "!w-fit px-7 py-5 !rounded-full text-base lg:!text-xl")}
              />
            </a>
          </div>
        </Fading>
      </div>

      <div className="relative sm:w-1/2 m-auto sm:rounded-none">
        <Fading right>
          <img
            src={img.src}
            alt="farmer"
            className="m-auto w-[327px] h-[225px] lg:w-auto lg:h-auto"
          />

          <div className="-z-10 absolute -top-7 -right-1/3 lg:-top-14 lg:-right-1/4">
            <Leaves
              className={`${text1} w-[274px] h-[280px] lg:w-auto lg:h-auto`}
            />
          </div>
        </Fading>
      </div>
    </div>
  );
}
