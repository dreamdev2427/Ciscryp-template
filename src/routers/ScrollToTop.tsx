import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const locationPathname = useLocation().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationPathname]);
  return null;
};

export default ScrollToTop;
