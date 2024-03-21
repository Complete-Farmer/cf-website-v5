import type { IBlog } from "types/app";

interface IProps {
  isTags?: boolean
  blog: IBlog;
}

const BlogCard = ({ blog, isTags = false }: IProps) => {
  return (
    <a href={`/resources/blogs/${blog.uid}`}>
      <div className="aspect-h-3 aspect-w-3 sm:aspect-h-2 sm:aspect-w-3 overflow-hidden rounded-lg md:aspect-h-6 md:aspect-w-5">
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
    </a>
  );
};

export default BlogCard;
