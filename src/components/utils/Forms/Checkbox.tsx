import React, { forwardRef } from "react";

import { classNames } from "@utils/functions";
import useWindow from "@hooks/useWindow";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  labelClassName?: string;
}

const Checkbox = forwardRef(
  ({ title, className, labelClassName, ...rest }: IProps, ref) => {
    const isBuyer = useWindow<boolean>(
      () => window?.location?.pathname?.includes("buyer"),
      false
    );
    return (
      <div className="flex items-center space-x-4">
        <input
          ref={ref as React.LegacyRef<HTMLInputElement>}
          {...rest}
          type="checkbox"
          className={classNames(
            className,
            isBuyer ? "focus:ring-buyer-500" : "focus:ring-grower-500",
            "block w-5 h-5 text-base bg-[#EFEFEF] cursor-pointer rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          )}
        />

        <label
          htmlFor={rest.id || rest.name}
          className={classNames(
            labelClassName,
            "block text-base font-medium leading-6 text-left text-custom_gray-300 cursor-pointer"
          )}
        >
          {title}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
