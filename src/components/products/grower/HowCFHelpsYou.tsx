import { Tab } from "@headlessui/react";

import { classNames, getAppLink } from "@utils/functions";
import HeadingOneLine from "@components/utils/HeadingOneLine";
import { Button } from "@components/utils";

interface IProps {
  title: string;
  showBtn?: boolean;
  description: string;
  data: {
    id: number;
    img: string;
    title: string;
    description: string;
  }[];
}

const HowCFHelpsYou = ({
  data,
  title,
  description,
  showBtn = false,
}: IProps) => {
  return (
    <div className="space-y-3 lg:space-y-10">
      <div className="p-4 sm:py-2 lg:px-20">
        <HeadingOneLine
          title={title}
          desc={description}
          titleFontSize="text-2xl md:text-[40px] 2xl:px-28"
        />
      </div>

      <div className="flex justify-center">
        <div className="overflow-auto">
          <Tab.Group>
            <div className="flex justify-center px-4 lg:px-0">
              <Tab.List className="flex space-x-1 rounded-full p-0.5 bg-[#EFEFEF] overflow-auto no-scrollbar">
                {data.map((d) => (
                  <Tab
                    key={d.id}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-full py-4 px-6 text-base leading-5 whitespace-nowrap ",
                        " focus:outline-none ",
                        selected
                          ? "bg-grower-500 shadow text-white"
                          : "bg-[#EFEFEF] text-custom_black-900"
                      )
                    }
                  >
                    {d.title}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="mt-2">
              {data.map((d) => (
                <Tab.Panel key={d.id}>
                  <section className="max-w-7xl mx-auto px-4 py-10 lg:py-28">
                    <div
                      className={classNames(
                        showBtn ? "items-start" : "items-center",
                        "w-full flex flex-col lg:flex-row justify-center"
                      )}
                    >
                      <div className="flex flex-col justify-center w-full px-5">
                        <h1 className="text-2xl md:text-[32px] lg:text-5xl leading-7 md:leading-10 md:text-left lg:leading-[60px] font-bold py-4">
                          {d.title}
                        </h1>
                        <p className="text-xs text-custom_gray-300 mb-8 md:text-xl lg:text-xl lg:leading-7 lg:text-custom_black-900">
                          {d.description}
                        </p>

                        {showBtn && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="contents"
                            href={getAppLink("Signup Grower")}
                          >
                            <Button
                              title="Get started"
                              className="md:!w-fit px-8 py-4 !rounded-full"
                            />
                          </a>
                        )}
                      </div>
                      <div className="w-full rounded-lg px-8 pb-12">
                        <img
                          src={d.img}
                          className="z-10 object-cover mx-auto"
                        />
                      </div>
                    </div>
                  </section>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default HowCFHelpsYou;
