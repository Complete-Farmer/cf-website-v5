import { classNames } from "@utils/functions";

const SuccessText = ({ text, className = "text-grower-500" }: { text: string; className?: string }) => {
  return (
    <div className={classNames("flex items-center space-x-1", className)}>
      <svg className="w-5 h-5" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-38 312.38-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174z"></path></svg>
      <span className="">
        {text}
      </span>
    </div>
  );
};

export default SuccessText;
