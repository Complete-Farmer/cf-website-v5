import type { INews } from "types/app";

interface IProps {
  news: INews;
}

const NewsCard = ({ news }: IProps) => {
  return (
    <a href={`/resources/news-room/${news.uid}`}>
      <div className="investor-news flex sm:flex-col-reverse sm:mb-10 items-center justify-between w-full col-span-1 sm:p-4 my-1 md:p-2[x] lg:p-10 text-center transition-all duration-200 md:flex-row md:text-left ease hover:cursor-pointer hover:bg-custom_gray-400 overflow-hidden rounded-lg sm:px-5">
        <div className="flex flex-col pr-2 w-4/5">
          <div className="flex justify-start items-start relative">
            <p className="text-xs font-bold text-left text-custom_gray-300">
              {news?.date}
            </p>
            {news?.label && (
              <>
                <p className="text-xs font-bold text-left text-custom_gray-300 px-2">
                  &#x2022;
                </p>
                <p className="text-xs font-bold text-left text-custom_gray-300">
                  {news.label}
                </p>
              </>
            )}
          </div>
          <h4 className="mt-2 text-base md:text-xl md:leading-6 font-bold text-gray-600 line-clamp-2 text-left hover:underline">
            {news.title}
          </h4>
          {news?.tags?.length > 1 && (
            <div className="hidden lg:flex mt-3 text-base gap-2 justify-start items-start">
              {news.tags.map((tag) => {
                return (
                  <div
                    key={tag}
                    className="flex justify-start items-start relative overflow-hidden gap-2.5 px-2 py-1 rounded-full bg-[#efefef]"
                  >
                    <p className="text-xs text-left text-custom_black-900">
                      {tag}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center overflow-hidden rounded-lg">
          <img
            className="h-20 w-20 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-32 lg:h-28 mb-5 rounded-md bg-gray-300 object-cover md:mb-0 transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105"
            src={news.data.image.url}
            alt={news.title}
          />
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
