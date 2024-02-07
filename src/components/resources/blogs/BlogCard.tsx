import type { IBlog } from "types/app";

interface IProps {
  isTags?: boolean
  blog: IBlog;
}

const BlogCard = ({ blog, isTags = false }: IProps) => {
  return (
    <a href={`/resources/blogs/${blog.uid}`}>
      <div aria-hidden="true" className="aspect-h-3 aspect-w-3 sm:aspect-h-2 sm:aspect-w-3 overflow-hidden rounded-lg md:aspect-h-6 md:aspect-w-5">
        <img
          alt={blog.title}
          src={blog.data.image.url}
          className="h-full w-full object-cover object-[top_0px_right_0px] sm:object-center md:mb-0 transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105 hover:cursor-pointer"
        />
      </div>
      <span className="relative flex text-xs font-bold text-custom_gray-300 mt-5">
        <span>{blog.date}</span>
      </span>
      <h3 className="mt-2 text-md mb-2 font-semibold text-gray-900 hover:cursor-pointer line-clamp-2 hover:underline">{blog.title}</h3>
      <div className="truncate">
        {isTags && blog?.tags?.map((tag) => (
          <span key={tag} className="mr-2 mb-2 inline-flex items-center rounded-full bg-[#efefef] px-1.5 py-0.5 text-xs font-normal text-gray-800">
            {tag}
          </span>
        ))}
      </div>
      {/* <div className="investor-blog flex sm:flex-col-reverse sm:mb-10 items-center justify-between w-full col-span-1 sm:p-4 my-1 md:p-2[x] lg:p-10 text-center transition-all duration-200 md:flex-row md:text-left ease hover:cursor-pointer hover:bg-custom_gray-400 overflow-hidden rounded-lg sm:px-5">
        <div className="flex flex-col pr-2 w-4/5">
          <div className="flex justify-start items-start relative">
            <p className="text-xs font-bold text-left text-custom_gray-300">
              {blog?.date}
            </p>
            {blog?.label && (
              <>
                <p className="text-xs font-bold text-left text-custom_gray-300 px-2">
                  &#x2022;
                </p>
                <p className="text-xs font-bold text-left text-custom_gray-300">
                  {blog.label}
                </p>
              </>
            )}
          </div>
          <h4 className="mt-2 text-base md:text-xl md:leading-6 font-bold text-gray-600 line-clamp-2 text-left hover:underline">
            {blog.title}
          </h4>
          {blog?.tags?.length > 1 && (
            <div className="hidden lg:flex mt-3 text-base gap-2 justify-start items-start">
              {blog.tags.map((tag) => {
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
            src={blog.data.image.url}
            alt={blog.title}
          />
        </div>
      </div> */}
    </a>
  );
};

export default BlogCard;
