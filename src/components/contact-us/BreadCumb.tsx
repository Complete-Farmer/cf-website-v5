
// const pages = [{ name: "Projects", href: "#", current: false }];

export default function Example() {
  const handleLinkClick = () => {
    // ReactGA.event({
    //   category: "Link Click",
    //   action: "Contact"
    // });

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "ContactUs"
    // });

    // ReactPixel.track("Contact Us", {});
  };

  return (
    <div className="w-full h-14 relative overflow-hidden bg-grower-400">
      <div className="max-w-7xl mx-auto">
        <div className="hidden sm:flex justify-start items-center absolute top-2 gap-2 py-2 rounded-[1900px] px-4 sm:py-18 md:px-6 xl:px-6">
          <a onClick={handleLinkClick} href="/contact-us" className="flex-grow-0 flex-shrink-0 text-base text-left text-white underline">
            Contact us
          </a>
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.64645 2.64645C4.84171 2.45118 5.15829 2.45118 5.35355 2.64645L8.35355 5.64645C8.54882 5.84171 8.54882 6.15829 8.35355 6.35355L5.35355 9.35355C5.15829 9.54882 4.84171 9.54882 4.64645 9.35355C4.45118 9.15829 4.45118 8.84171 4.64645 8.64645L7.29289 6L4.64645 3.35355C4.45118 3.15829 4.45118 2.84171 4.64645 2.64645Z"
              fill="white"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-white">Get started with Complete Farmer</p>
        </div>
        <div className="flex sm:hidden items-center h-14">
          <p className="flex pl-5 items-center text-grower-500 font-bold text-base">
            <span className="pr-3">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.995 6.00019H3.40501L6.70501 2.71019C6.89332 2.52188 6.9991 2.26649 6.9991 2.00019C6.9991 1.73388 6.89332 1.47849 6.70501 1.29019C6.51671 1.10188 6.26132 0.996094 5.99501 0.996094C5.72871 0.996094 5.47332 1.10188 5.28501 1.29019L0.285014 6.29019C0.193973 6.38529 0.122608 6.49743 0.0750135 6.62019C-0.0250045 6.86365 -0.0250045 7.13672 0.0750135 7.38019C0.122608 7.50294 0.193973 7.61508 0.285014 7.71019L5.28501 12.7102C5.37798 12.8039 5.48858 12.8783 5.61044 12.9291C5.7323 12.9798 5.863 13.006 5.99501 13.006C6.12703 13.006 6.25773 12.9798 6.37959 12.9291C6.50145 12.8783 6.61205 12.8039 6.70501 12.7102C6.79874 12.6172 6.87314 12.5066 6.9239 12.3848C6.97467 12.2629 7.00081 12.1322 7.00081 12.0002C7.00081 11.8682 6.97467 11.7375 6.9239 11.6156C6.87314 11.4937 6.79874 11.3831 6.70501 11.2902L3.40501 8.00019H14.995C15.2602 8.00019 15.5146 7.89483 15.7021 7.70729C15.8897 7.51976 15.995 7.2654 15.995 7.00019C15.995 6.73497 15.8897 6.48062 15.7021 6.29308C15.5146 6.10554 15.2602 6.00019 14.995 6.00019Z"
                  fill="#31BC2E"
                />
              </svg>
            </span>
            <a onClick={handleLinkClick} href={"/contact-us"}>
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
