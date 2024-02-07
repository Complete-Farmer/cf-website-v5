import { useEffect, useState } from "react";

const useResolution = () => {
  const [screenType, setScreenType] = useState<string>();

  const getScreenType = () => {
    if (window.innerWidth < 768) {
      setScreenType("mobile");
      return;
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setScreenType("tablet");
      return;
    }

    if (window.innerWidth >= 1024) {
      setScreenType("desktop");
      return;
    }
  };

  useEffect(() => {
    getScreenType();
    window.addEventListener("resize", () => getScreenType());
  }, []);

  return { screenType };
};

export default useResolution;
