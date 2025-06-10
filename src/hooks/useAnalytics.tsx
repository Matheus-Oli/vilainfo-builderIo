import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import AnalyticsService from "@/lib/analytics";
import { useCookies } from "@/hooks/useCookies";

interface UseAnalyticsReturn {
  trackPageView: (path?: string, title?: string) => void;
  trackEvent: (
    action: string,
    category: string,
    label?: string,
    value?: number,
  ) => void;
  trackFormSubmission: (formName: string) => void;
  trackButtonClick: (buttonName: string, location: string) => void;
  trackFileDownload: (fileName: string, fileType: string) => void;
  trackScrollDepth: (percentage: number) => void;
  trackExternalLink: (url: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}

export const useAnalytics = (): UseAnalyticsReturn => {
  const location = useLocation();
  const { isCategoryEnabled, hasConsented } = useCookies();

  // Initialize analytics when consent changes
  useEffect(() => {
    if (hasConsented) {
      const analyticsEnabled = isCategoryEnabled("analytics");
      const marketingEnabled = isCategoryEnabled("marketing");

      AnalyticsService.initialize(analyticsEnabled);
      AnalyticsService.updateConsent(analyticsEnabled, marketingEnabled);
    }
  }, [hasConsented, isCategoryEnabled]);

  // Track page view on route change
  useEffect(() => {
    if (hasConsented && isCategoryEnabled("analytics")) {
      const title = document.title;
      AnalyticsService.trackPageView(
        location.pathname + location.search,
        title,
      );
    }
  }, [location, hasConsented, isCategoryEnabled]);

  // Listen for consent changes
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      const preferences = event.detail.preferences;
      const analyticsEnabled = preferences.categories.analytics || false;
      const marketingEnabled = preferences.categories.marketing || false;

      if (analyticsEnabled) {
        AnalyticsService.enable();
      } else {
        AnalyticsService.disable();
      }

      AnalyticsService.updateConsent(analyticsEnabled, marketingEnabled);
    };

    const handleConsentCleared = () => {
      AnalyticsService.disable();
    };

    window.addEventListener(
      "cookieConsentChanged",
      handleConsentChange as EventListener,
    );
    window.addEventListener(
      "cookieConsentCleared",
      handleConsentCleared as EventListener,
    );

    return () => {
      window.removeEventListener(
        "cookieConsentChanged",
        handleConsentChange as EventListener,
      );
      window.removeEventListener(
        "cookieConsentCleared",
        handleConsentCleared as EventListener,
      );
    };
  }, []);

  // Track page view manually
  const trackPageView = useCallback(
    (path?: string, title?: string) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackPageView(
          path || location.pathname + location.search,
          title || document.title,
        );
      }
    },
    [hasConsented, isCategoryEnabled, location],
  );

  // Track custom event
  const trackEvent = useCallback(
    (action: string, category: string, label?: string, value?: number) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackEvent(action, category, label, value);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  // Track form submission
  const trackFormSubmission = useCallback(
    (formName: string) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackFormSubmission(formName);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  // Track button click
  const trackButtonClick = useCallback(
    (buttonName: string, location: string) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackButtonClick(buttonName, location);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  // Track file download
  const trackFileDownload = useCallback(
    (fileName: string, fileType: string) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackFileDownload(fileName, fileType);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  // Track scroll depth
  const trackScrollDepth = useCallback(
    (percentage: number) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackScrollDepth(percentage);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  // Track external link
  const trackExternalLink = useCallback(
    (url: string) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackExternalLink(url);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  // Track conversion
  const trackConversion = useCallback(
    (conversionId: string, value?: number) => {
      if (hasConsented && isCategoryEnabled("analytics")) {
        AnalyticsService.trackConversion(conversionId, value);
      }
    },
    [hasConsented, isCategoryEnabled],
  );

  return {
    trackPageView,
    trackEvent,
    trackFormSubmission,
    trackButtonClick,
    trackFileDownload,
    trackScrollDepth,
    trackExternalLink,
    trackConversion,
  };
};

export default useAnalytics;
