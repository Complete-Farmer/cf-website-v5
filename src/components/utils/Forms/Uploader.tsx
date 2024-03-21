import { useCallback } from "react";
import type { IChangeEvent } from "types/app";
import { type Accept, useDropzone } from "react-dropzone-esm";
import type { FieldValues, UseFormSetValue } from "react-hook-form";

import useWindow from "@hooks/useWindow";
import { classNames } from "@utils/functions";
import { FileIcon, MenuCloseIcon, UploadIcon } from "@assets/icons";

interface IProps {
  name: string;
  title?: string;
  accept: Accept;
  isMulti?: boolean;
  required?: boolean;
  description: string;
  value?: File | File[] | null;
  onChange: (e: IChangeEvent) => void;
  setValue: UseFormSetValue<FieldValues>;
}

const View = ({
  file,
  isBuyer,
  onRemove,
}: {
  file: File;
  isBuyer: boolean;
  onRemove: () => void;
}) => (
  <div className="bg-zinc-100 rounded w-full h-9 flex justify-between items-center p-2">
    <div className="flex items-center gap-2">
      <FileIcon className="h-5 w-5 text-custom_gray-300" />
      <div className="text-neutral-500 text-xs md:text-sm font-normal leading-tight">{`${file.name}`}</div>
      <div className="text-neutral-500 text-xs md:text-sm font-normal leading-tight">{`${Math.round(
        file.size / 1024
      )}kb`}</div>
    </div>
    <div className="flex items-end justify-end cursor-pointer">
      <MenuCloseIcon
        onClick={onRemove}
        className={isBuyer ? "text-buyer-500" : "text-grower-500"}
      />
    </div>
  </div>
);

const Uploader = ({
  name,
  value,
  title,
  accept,
  setValue,
  description,
  isMulti = false,
  required = false,
}: IProps) => {
  const isBuyer = useWindow<boolean>(
    () => window?.location?.pathname?.includes("buyer"),
    false
  );

  const onChange = (val: File | File[] | null) =>
    setValue(name, val, {
      shouldValidate: true,
    });

  const onDrop = useCallback(
    (droppedFiles: File[]) => {
      onChange(isMulti ? droppedFiles : droppedFiles[0]);
    } ,
    [setValue, name]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <div className="w-full text-left space-y-2">
      {title && (
        <label
          htmlFor={name}
          className="block text-sm font-bold leading-6 text-custom_gray-300"
        >
          {title}
          {required && <span className="ms-1 text-red-500 mr-1">*</span>}
        </label>
      )}

      {value ? (
        <div
          className={classNames(
            isBuyer ? "border-dash-long-buyer" : "border-dash-long-grower",
            "rounded-lg px-3 py-2"
          )}
        >
          {Array.isArray(value) ? (
            value.map((v, i) => (
              <View
                key={v.name + i}
                file={v}
                onRemove={() => onChange(null)}
                isBuyer={isBuyer}
              />
            ))
          ) : (
            <View
              file={value}
              onRemove={() => onChange(null)}
              isBuyer={isBuyer}
            />
          )}
        </div>
      ) : (
        <div
          {...getRootProps({
            className: classNames(
              isBuyer ? "border-dash-long-buyer" : "border-dash-long-grower",
              "text-center w-full rounded-lg py-6 dropzone bg-white"
            ),
          })}
          onClick={e => e.stopPropagation()}
        >
          <label
            htmlFor={name}
            className={classNames(
              isBuyer
                ? "text-buyer-500 focus-within:ring-buyer-500 hover:text-buyer-500"
                : "text-grower-500 focus-within:ring-grower-500 hover:text-grower-500",
              "relative cursor-pointer rounded-md font-semibold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
            )}
          >
            <div className="flex items-end justify-center space-x-2">
              <UploadIcon />
              <span className="text-center font-bold text-sm sm:text-sm">
                Browse or drag & drop
              </span>
            </div>
            <input {...getInputProps({ id: name, className: "h-full" })} />
          </label>
          <p
            className="text-xs sm:text-xs py-2 px-4 text-center leading-5 text-custom_gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  );
};

export default Uploader;
