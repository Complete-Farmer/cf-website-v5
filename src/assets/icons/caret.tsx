import React from "react";

const Caret: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893C0.488111 0.0976751 0.743962 4.40327e-05 0.999827 0H12.9998C13.2558 -4.40526e-05 13.5118 0.097587 13.7071 0.292893Z"
      fill="white"
    />
  </svg>
);

export default Caret;
