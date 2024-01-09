import { useState } from "react";

const initialIcons = [
  {
    name: "PreviousIcon",
    isHover: false,
    icon: ({ color }: { color: string }) => (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
          fill={color}
        />
      </svg>
    ),
  },
];

function PreviousIcon() {
  const [icons, setIcons] = useState(initialIcons);

  const handleOnHover = (selectedProduct: (typeof initialIcons)[0]) => {
    const newTabs = icons.map((item) => {
      if (item.name === selectedProduct.name) item.isHover = true;
      if (item.name !== selectedProduct.name) item.isHover = false;
      return item;
    });
    setIcons(newTabs);
  };

  const clearProducts = () => {
    const pr = icons.map((item) => {
      item.isHover = false;
      return item;
    });
    setIcons(pr);
  };

  return (
    <>
      {icons?.map((iconItem) => {
        return (
          <div
            key={iconItem.name}
            className="p-5 flex rounded-full bg-[#efefef] hover:bg-custom_lightgreen-500"
            onMouseEnter={() => handleOnHover(iconItem)}
            onMouseLeave={() => {
              clearProducts();
            }}
          >
            <iconItem.icon color={iconItem.isHover ? "white" : "#1D1D1F"} />
          </div>
        );
      })}
    </>
  );
}

export default PreviousIcon;
