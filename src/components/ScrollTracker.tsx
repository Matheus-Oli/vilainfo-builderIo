import { useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

const ScrollTracker = () => {
  const { trackScrollDepth } = useAnalytics();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, and 100% intervals
      const depths = [25, 50, 75, 100];
      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth(depth);
        }
      });
    };

    const throttledHandleScroll = throttle(handleScroll, 250);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [trackScrollDepth]);

  // Reset tracked depths when component unmounts (page change)
  useEffect(() => {
    return () => {
      trackedDepths.current.clear();
    };
  }, []);

  return null;
};

// Throttle function to limit scroll event frequency
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastExecTime = 0;

  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(
        () => {
          func(...args);
          lastExecTime = Date.now();
        },
        delay - (currentTime - lastExecTime),
      );
    }
  };
}

export default ScrollTracker;
