import { classNames } from "@utils/functions";
import type { IClickEvent } from "types/app";
import { ArrowIcon } from "@assets/icons";
interface IProps {
  id?: string;
  title: string;
  hasArrow?: boolean;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: (e: IClickEvent) => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  id,
  title,
  onClick,
  className,
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
        "flex flex-row justify-center items-center space-x-1 disabled:cursor-not-allowed bg-grower-500 disabled:bg-gray-200 w-full px-2 py-2.5 font-medium text-white rounded-lg"
      )}
    >
      {isLoading && <div>loading</div>}
      <span>{title}</span>
      {hasArrow && <ArrowIcon />}
    </button>
  );
};

export default Button;
