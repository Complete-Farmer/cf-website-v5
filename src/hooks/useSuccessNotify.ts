import { useState, useEffect } from "react";

const useSuccessNotify = (isSubmitSuccessful) => {
  const [isSuccess, setSuccessful] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      setSuccessful(true);
      setTimeout(() => {
        setSuccessful(false);
      }, 5000);
    }
  }, [isSubmitSuccessful]);

  return isSuccess;
};

export default useSuccessNotify;
