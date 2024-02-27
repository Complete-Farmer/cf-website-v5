import { classNames } from "@utils/functions";
import type { IClickEvent } from "types/app";
import { ArrowIcon } from "@assets/icons";
import MoonLoader from "react-spinners/MoonLoader";


interface IProps {
  id?: string;
  title: string;
  hasArrow?: boolean;
  className?: string;
  isLoading?: boolean;
  arrowClass?: string;
  isDisabled?: boolean;
  onClick?: (e: IClickEvent) => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  id,
  title,
  onClick,
  className,
  arrowClass,
  type = "button",
  hasArrow = false,
  isLoading = false,
  isDisabled = false,
}: IProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={classNames(
        className,
        "flex flex-row justify-center items-center space-x-1 disabled:cursor-not-allowed bg-grower-500 disabled:text-gray-300 disabled:!bg-gray-200 w-full px-2 py-2.5 font-medium text-white rounded-lg"
      )}
    >
      {isLoading ? (
        <>
          <MoonLoader size={18} loading={isLoading} color="#ffffff" />
          <span className="text-base xl:text-lg loading-text loading-text-b">Please wait</span>
        </>
      ) : (
        <>
          <span className="text-base xl:text-lg">{title}</span>
          {hasArrow && !isLoading && <ArrowIcon className={arrowClass} />}
        </>
      )}
    </button>
  );
};

export default Button;
