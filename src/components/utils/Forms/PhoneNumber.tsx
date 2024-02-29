import "react-phone-number-input/style.css";

import { useState, useEffect } from "react";
import { getName } from "country-list";
import ReactPhoneNumberInput, { parsePhoneNumber } from "react-phone-number-input";

import useWindow from "@hooks/useWindow";
import { classNames } from "@utils/functions";

interface IProps {
  value?: string;
  title?: string;
  required?: boolean;
  outerClassName?: string;
  labelClassName?: string;
  onChange: (number: string, country: string) => void;
}

const PhoneNumber = ({
  title,
  value,
  onChange,
  outerClassName,
  labelClassName,
  required = false,
}: IProps) => {
  const [number, setNumber] = useState("");
  const isBuyer = useWindow<boolean>(() => window?.location?.pathname?.includes("buyer"), false);

  useEffect(() => {
    if(number){
      const phoneNumber = parsePhoneNumber(number);
      if(phoneNumber?.isValid){
        onChange(number, getName(phoneNumber.country));
      }
    }
  }, [number]);
  

  return (
    <div className={classNames(outerClassName, isBuyer ? "buyer": "grower", "w-full space-y-2")}>
      {title && (
        <label
          className={classNames(
            labelClassName,
            "text-sm font-semibold leading-6  w-2/3 text-left text-custom_gray-300"
          )}
        >
          {title} {required && <span className="text-[#EB2F2F]">*</span>}
        </label>
      )}

      <ReactPhoneNumberInput
        international
        value={value}
        onChange={setNumber}
        defaultCountry="GH"
        className="reactphone"
        style={{ outline: "none" }}
        countryCallingCodeEditable={false}
      />
    </div>
  );
};

export default PhoneNumber;
