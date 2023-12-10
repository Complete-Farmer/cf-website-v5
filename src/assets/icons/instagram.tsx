import React from "react";

const InstagramIcon: React.FC<{
  width: string;
  height: string;
  className?: string;
}> = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M11.999 7.37695C10.7726 7.37695 9.59651 7.86412 8.72934 8.73129C7.86217 9.59846 7.375 10.7746 7.375 12.001C7.375 13.2273 7.86217 14.4034 8.72934 15.2706C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2706C16.1358 14.4034 16.623 13.2273 16.623 12.001C16.623 10.7746 16.1358 9.59846 15.2687 8.73129C14.4015 7.86412 13.2254 7.37695 11.999 7.37695ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5607 8.995 12.7967 8.995 12C8.995 11.2032 9.31149 10.4392 9.87485 9.8758C10.4382 9.31245 11.2023 8.99595 11.999 8.99595C12.7957 8.99595 13.5598 9.31245 14.1231 9.8758C14.6865 10.4392 15.003 11.2032 15.003 12C15.003 12.7967 14.6865 13.5607 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004Z"
      fill="white"
    />
    <path
      d="M16.806 8.28491C17.4014 8.28491 17.884 7.80227 17.884 7.20691C17.884 6.61154 17.4014 6.12891 16.806 6.12891C16.2106 6.12891 15.728 6.61154 15.728 7.20691C15.728 7.80227 16.2106 8.28491 16.806 8.28491Z"
      fill="white"
    />
    <path
      d="M20.533 6.11088C20.3015 5.51306 19.9477 4.97017 19.4943 4.51694C19.0409 4.06372 18.4979 3.71015 17.9 3.47888C17.2003 3.21624 16.4612 3.07422 15.714 3.05888C14.751 3.01688 14.446 3.00488 12.004 3.00488C9.562 3.00488 9.249 3.00488 8.294 3.05888C7.54739 3.07344 6.80876 3.21548 6.11 3.47888C5.51194 3.70988 4.96876 4.06335 4.51533 4.51661C4.0619 4.96987 3.70823 5.51291 3.477 6.11088C3.2143 6.8105 3.07261 7.54972 3.058 8.29688C3.015 9.25888 3.002 9.56388 3.002 12.0069C3.002 14.4489 3.002 14.7599 3.058 15.7169C3.073 16.4649 3.214 17.2029 3.477 17.9039C3.70888 18.5016 4.0629 19.0445 4.51644 19.4977C4.96998 19.9509 5.51306 20.3045 6.111 20.5359C6.80843 20.8091 7.54737 20.9613 8.296 20.9859C9.259 21.0279 9.564 21.0409 12.006 21.0409C14.448 21.0409 14.761 21.0409 15.716 20.9859C16.4631 20.9707 17.2022 20.829 17.902 20.5669C18.4998 20.3351 19.0426 19.9812 19.496 19.5279C19.9493 19.0745 20.3032 18.5316 20.535 17.9339C20.798 17.2339 20.939 16.4959 20.954 15.7479C20.997 14.7859 21.01 14.4809 21.01 12.0379C21.01 9.59488 21.01 9.28488 20.954 8.32788C20.9424 7.57016 20.7999 6.82013 20.533 6.11088ZM19.315 15.6429C19.3086 16.2192 19.2034 16.7901 19.004 17.3309C18.8538 17.7198 18.6239 18.0729 18.3291 18.3676C18.0342 18.6622 17.681 18.8919 17.292 19.0419C16.7572 19.2403 16.1924 19.3455 15.622 19.3529C14.672 19.3969 14.404 19.4079 11.968 19.4079C9.53 19.4079 9.281 19.4079 8.313 19.3529C7.74293 19.3459 7.17833 19.2407 6.644 19.0419C6.25369 18.8929 5.899 18.6636 5.60289 18.3688C5.30678 18.0741 5.07583 17.7205 4.925 17.3309C4.72845 16.7959 4.62331 16.2317 4.614 15.6619C4.571 14.7119 4.561 14.4439 4.561 12.0079C4.561 9.57088 4.561 9.32188 4.614 8.35288C4.62046 7.77691 4.72566 7.2063 4.925 6.66588C5.23 5.87688 5.855 5.25588 6.644 4.95388C7.17859 4.75602 7.74302 4.65085 8.313 4.64288C9.264 4.59988 9.531 4.58788 11.968 4.58788C14.405 4.58788 14.655 4.58788 15.622 4.64288C16.1924 4.64974 16.7574 4.75495 17.292 4.95388C17.6809 5.10416 18.0341 5.33408 18.329 5.62891C18.6238 5.92374 18.8537 6.27695 19.004 6.66588C19.2006 7.20083 19.3057 7.76504 19.315 8.33488C19.358 9.28588 19.369 9.55288 19.369 11.9899C19.369 14.4259 19.369 14.6879 19.326 15.6439H19.315V15.6429Z"
      fill="white"
    />
  </svg>
);

export default InstagramIcon;
