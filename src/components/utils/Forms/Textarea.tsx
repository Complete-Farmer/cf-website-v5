import React from "react";

import useWindow from "@utils/useWindow";
import { classNames } from "@utils/functions";

interface IProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  title?: string;
  labelClassName?: string;
}

const Textarea = ({ title, className, labelClassName, ...rest }: IProps) => {
  const isBuyer = useWindow<boolean>(() => window?.location?.pathname?.includes("buyer"), false);

  return (
    <div className="space-y-2">
      {title && (
        <label
          htmlFor={rest.id}
          className={classNames(
            labelClassName,
            "self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6  w-2/3 text-left text-custom_gray-300"
          )}
        >
          {title} {rest.required && <span className="text-[#EB2F2F]">*</span>}
        </label>
      )}
      <textarea
        {...rest}
        className={classNames(
          className,
          isBuyer ? "focus:ring-buyer-500": "focus:ring-grower-500",
          "block w-full h-10 sm:h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        )}
      />
    </div>
  );
};

export default Textarea;
