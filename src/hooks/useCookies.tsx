import { useState, useEffect, useCallback } from "react";
import CookieManager, {
  CookieCategory,
  CookiePreferences,
} from "@/lib/cookieManager";

interface UseCookiesReturn {
  hasConsented: boolean;
  shouldShowBanner: boolean;
  categories: CookieCategory[];
  preferences: CookiePreferences | null;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (categories: Record<string, boolean>) => void;
  dismissBanner: () => void;
  clearConsent: () => void;
  isCategoryEnabled: (categoryId: string) => boolean;
  isConsentExpired: boolean;
}

export const useCookies = (): UseCookiesReturn => {
  const [hasConsented, setHasConsented] = useState(false);
  const [shouldShowBanner, setShouldShowBanner] = useState(false);
  const [categories, setCategories] = useState<CookieCategory[]>([]);
  const [preferences, setPreferences] = useState<CookiePreferences | null>(
    null,
  );
  const [isConsentExpired, setIsConsentExpired] = useState(false);

  // Update state from cookie manager
  const updateState = useCallback(() => {
    setHasConsented(CookieManager.hasConsented());
    setShouldShowBanner(CookieManager.shouldShowBanner());
    setCategories(CookieManager.getCategories());
    setPreferences(CookieManager.getPreferences());
    setIsConsentExpired(CookieManager.isConsentExpired());
  }, []);

  // Initialize state
  useEffect(() => {
    updateState();
  }, [updateState]);

  // Listen for consent changes
  useEffect(() => {
    const handleConsentChange = () => {
      updateState();
    };

    const handleConsentCleared = () => {
      updateState();
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange);
    window.addEventListener("cookieConsentCleared", handleConsentCleared);

    return () => {
      window.removeEventListener("cookieConsentChanged", handleConsentChange);
      window.removeEventListener("cookieConsentCleared", handleConsentCleared);
    };
  }, [updateState]);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    CookieManager.acceptAll();
  }, []);

  // Reject non-essential cookies
  const rejectAll = useCallback(() => {
    CookieManager.rejectAll();
  }, []);

  // Save custom preferences
  const savePreferences = useCallback(
    (categoryPreferences: Record<string, boolean>) => {
      CookieManager.savePreferences(categoryPreferences, true);
    },
    [],
  );

  // Dismiss banner
  const dismissBanner = useCallback(() => {
    CookieManager.dismissBanner();
    setShouldShowBanner(false);
  }, []);

  // Clear all consent
  const clearConsent = useCallback(() => {
    CookieManager.clearConsent();
  }, []);

  // Check if category is enabled
  const isCategoryEnabled = useCallback((categoryId: string) => {
    return CookieManager.isCategoryEnabled(categoryId);
  }, []);

  return {
    hasConsented,
    shouldShowBanner,
    categories,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    dismissBanner,
    clearConsent,
    isCategoryEnabled,
    isConsentExpired,
  };
};

export default useCookies;
