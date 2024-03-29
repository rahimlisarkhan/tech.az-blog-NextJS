import { useEffect, useRef } from "react";
import { useUpdate } from "react-use";

export const useMounted = () => {
  const mounted = useRef(false);
  const update = useUpdate();
  
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      update();
    }
  }, [update]);
  return mounted.current;
};
