import { useCallback } from "react";
import type { IChangeEvent } from "types/app";
import { type Accept, useDropzone } from "react-dropzone";
import type { FieldValues, UseFormSetValue } from "react-hook-form";

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

const View = ({ file, onRemove }: { file: File; onRemove: () => void }) => (
  <div className="bg-zinc-100 rounded w-full h-9 flex justify-between items-center p-2">
    <div className="flex items-center gap-2">
      <FileIcon className="h-5 w-5 text-[#6C6C6C]" />
      <div className="text-neutral-500 text-xs md:text-sm font-normal leading-tight">{`${file.name}`}</div>
      <div className="text-neutral-500 text-xs md:text-sm font-normal leading-tight">{`${Math.round(
        file.size / 1024
      )}kb`}</div>
    </div>
    <div className="flex items-end justify-end cursor-pointer">
      <MenuCloseIcon
        className="text-grower-500"
        aria-hidden="true"
        onClick={onRemove}
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
  const onChange = (val: File | File[] | null) =>
    setValue(name, val, {
      shouldValidate: true,
    });

  const onDrop = useCallback(
    (droppedFiles: File[]) =>
      onChange(isMulti ? droppedFiles : droppedFiles[0]),
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
          className="block text-sm font-bold leading-6 text-[#6C6C6C]"
        >
          {title}
          {required && <span className="ms-1 text-red-500 mr-1">*</span>}
        </label>
      )}

      {value ? (
        <div className="rounded-lg border border-spacing-10 border-dashed border-grower-500 px-3 py-2">
          {Array.isArray(value) ? (
            value.map((v, i) => (
              <View key={v.name + i} file={v} onRemove={() => onChange(null)} />
            ))
          ) : (
            <View file={value} onRemove={() => onChange(null)} />
          )}
        </div>
      ) : (
        <div
          {...getRootProps({
            className:
              "text-center w-full rounded-lg border border-spacing-10 border-dashed border-grower-500 py-6 dropzone",
          })}
        >
          <label
            htmlFor={name}
            className="relative cursor-pointer rounded-md bg-white font-semibold text-grower-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-grower-500 focus-within:ring-offset-2 hover:text-grower-500"
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
            className="text-xs sm:text-xs py-2 text-center leading-5 text-custom_gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      )}
    </div>
  );
};

export default Uploader;
