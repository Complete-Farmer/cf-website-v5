import { useState } from "react";

const initialIcons = [
  {
    name: "NextIcon",
    isHover: false,
    icon: ({ color }: { color: string }) => (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289Z"
          fill={color}
        />
      </svg>
    ),
  },
];

function NextIcon() {
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
            className="p-5 flex rounded-full bg-[#efefef] hover:bg-grower-500"
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

export default NextIcon;
