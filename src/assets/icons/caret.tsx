import type { JSX } from "react/jsx-runtime";

const CaretIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.48811 8.09768 5.74396 8.00004 5.99983 8H17.9998C18.2558 7.99996 18.5118 8.09759 18.7071 8.29289Z"
      fill="currentColor"
    />
  </svg>
);

export default CaretIcon;


