import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    // Using instant scroll for better performance on route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Changed to instant for better UX on page transitions
    });

    // Alternative: Smooth scroll with a small delay
    // setTimeout(() => {
    //   window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
