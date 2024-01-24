import { classNames } from "@utils/functions";
import React, { forwardRef } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  outerClassName?: string;
  labelClassName?: string;
}

const Input = forwardRef(({ title, className, labelClassName, outerClassName, ...rest }: IProps, ref) => {
  return (
    <div className={classNames(outerClassName, "w-full space-y-2")}>
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
      <input
        ref={ref as React.LegacyRef<HTMLInputElement>}
        {...rest}
        className={classNames(
          className,
          "block w-full h-10 sm:h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        )}
      />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
