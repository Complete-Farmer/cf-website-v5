import Image from "@assets/images/products/buyer/specification.webp";

interface IProps {
  data: {
    key: string;
    value: string;
  }[];
}

const AvailableSpecification = ({ data }: IProps) => {
  return (
    <div className="w-full max-w-7xl">
      <div className="flex flex-row  px-4">
        <div className="w-full lg:w-3/5">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl font-bold text-custom_black-900 py-8">
              Available Specifications
            </h2>
          </div>
          <div className="flex gap-3">
            <div>
              {data.map((detail) => (
                <div
                  key={detail.key}
                  className="flex justify-start items-start gap-4 font-small text-custom_black-900 text-md text-base leading-8 text-left mt-1"
                >
                  <span>{detail.key}:</span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden sm:flex w-full lg:w-1/3  justify-end items-center">
          <div className="lg:mt-20 mt-4">
            <img src={Image.src} alt="" className="w-64 h-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSpecification;
