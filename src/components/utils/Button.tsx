import { classNames } from "@utils/functions";
import type { IClickEvent } from "types/app";
interface IProps {
  id?: string;
  title: string;
  bgColor?: string;
  className?: string
  isDisabled?: boolean;
  onClick?: (e: IClickEvent) => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ id, type = "button", title, onClick, bgColor, className, isDisabled = false }: IProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={classNames(className, bgColor, "disabled:cursor-not-allowed w-full px-2 py-2.5 font-medium text-white rounded-lg")} 
    >
      {title}
    </button>
  );
};

export default Button;
