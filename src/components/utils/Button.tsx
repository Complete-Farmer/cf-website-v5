interface IProps {
  title: string;
  bgColor: string;
  isDisabled: boolean;
  type?: "submit" | "reset" | "button";
}

const Button = ({ type, title, bgColor, isDisabled }: IProps) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`disabled:cursor-not-allowed w-full px-2 py-2.5 font-medium text-white ${bgColor} rounded-lg `}
    >
      {title}
    </button>
  );
};

export default Button;
