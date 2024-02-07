import { useEffect, useState } from "react";

const useWindow = <T>(func: () => T, def: T) => {
  const [data, setData] = useState<T>(def);

  useEffect(() => {
    const res = func();
    setData(res);
  }, []);

  return data;
};

export default useWindow;
