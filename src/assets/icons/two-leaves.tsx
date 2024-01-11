import type { JSX } from "react/jsx-runtime";

const TwoLeavesIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (

  <svg
    width="58"
    height="57"
    viewBox="0 0 58 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 57V44.4121C28 29.2633 15.4553 17 2.02615e-05 17V29.5879C-0.0184008 44.7187 12.5263 57 28 57Z"
      fill="currentColor"
    />
    <path
      d="M58 0V12.2732C58 27.0433 45.9033 39 31 39V26.7268C30.9823 11.9743 43.079 0 58 0Z"
      fill="currentColor"
    />
  </svg>
);

export default TwoLeavesIcon;
