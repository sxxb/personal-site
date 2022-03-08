import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  if (location.pathname !== "/Work") {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location])
  }
  return null;
}

export default ScrollToTop;
