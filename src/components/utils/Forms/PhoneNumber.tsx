import "react-phone-number-input/style.css";
import "@assets/styles/phonenumberinput.css";

import ReactPhoneNumberInput from "react-phone-number-input";

import useWindow from "@utils/useWindow";
import { classNames } from "@utils/functions";

interface IProps {
  value?: string;
  title?: string;
  required?: boolean;
  outerClassName?: string;
  labelClassName?: string;
  onChange: (val: string) => void;
}

const PhoneNumber = ({
  title,
  value,
  onChange,
  outerClassName,
  labelClassName,
  required = false,
}: IProps) => {
  const isBuyer = useWindow<boolean>(() => window?.location?.pathname?.includes("buyer"), false);

  return (
    <div className={classNames(outerClassName, isBuyer ? "buyer": "grower", "w-full space-y-2")}>
      {title && (
        <label
          className={classNames(
            labelClassName,
            "self-stretch flex-grow-0 flex-shrink-0 block text-sm font-semibold leading-6  w-2/3 text-left text-custom_gray-300"
          )}
        >
          {title} {required && <span className="text-[#EB2F2F]">*</span>}
        </label>
      )}

      <ReactPhoneNumberInput
        international
        value={value}
        onChange={onChange}
        defaultCountry="GH"
        className="reactphone"
        style={{ outline: "none" }}
        countryCallingCodeEditable={false}
      />
    </div>
  );
};

export default PhoneNumber;
