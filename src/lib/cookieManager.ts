// Cookie Manager Service - LGPD/GDPR Compliant
export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

export interface CookieConsent {
  timestamp: number;
  version: string;
  categories: Record<string, boolean>;
  ip?: string;
  userAgent?: string;
}

export interface CookiePreferences {
  hasConsented: boolean;
  consentId: string;
  lastUpdated: number;
  categories: Record<string, boolean>;
  bannerDismissed: boolean;
}

class CookieManager {
  private static instance: CookieManager;
  private consentKey = "vilainfo_cookie_consent";
  private version = "1.0.0";
  private expirationDays = 365;

  private defaultCategories: CookieCategory[] = [
    {
      id: "essential",
      name: "Cookies Essenciais",
      description:
        "Necessários para o funcionamento básico do site. Não podem ser desabilitados.",
      required: true,
      enabled: true,
    },
    {
      id: "analytics",
      name: "Cookies de Análise",
      description:
        "Ajudam a entender como os visitantes interagem com o site, coletando dados de forma anônima.",
      required: false,
      enabled: false,
    },
    {
      id: "marketing",
      name: "Cookies de Marketing",
      description:
        "Utilizados para personalizar anúncios e medir a eficácia de campanhas publicitárias.",
      required: false,
      enabled: false,
    },
    {
      id: "functional",
      name: "Cookies Funcionais",
      description:
        "Permitem funcionalidades avançadas como lembrar preferências e personalizar experiência.",
      required: false,
      enabled: false,
    },
  ];

  static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  // Generate unique consent ID
  private generateConsentId(): string {
    return `consent_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Get current consent preferences
  getPreferences(): CookiePreferences | null {
    try {
      const stored = localStorage.getItem(this.consentKey);
      if (!stored) return null;
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error reading cookie preferences:", error);
      return null;
    }
  }

  // Check if user has consented
  hasConsented(): boolean {
    const preferences = this.getPreferences();
    return preferences?.hasConsented || false;
  }

  // Check if banner should be shown
  shouldShowBanner(): boolean {
    const preferences = this.getPreferences();
    return !preferences?.bannerDismissed;
  }

  // Check if consent is expired
  isConsentExpired(): boolean {
    const preferences = this.getPreferences();
    if (!preferences) return true;

    const expirationTime =
      preferences.lastUpdated + this.expirationDays * 24 * 60 * 60 * 1000;
    return Date.now() > expirationTime;
  }

  // Save consent preferences
  savePreferences(
    categories: Record<string, boolean>,
    dismissBanner = false,
  ): void {
    const preferences: CookiePreferences = {
      hasConsented: true,
      consentId: this.generateConsentId(),
      lastUpdated: Date.now(),
      categories,
      bannerDismissed: dismissBanner,
    };

    try {
      localStorage.setItem(this.consentKey, JSON.stringify(preferences));

      // Log consent for compliance
      this.logConsent(preferences);

      // Trigger analytics and other integrations based on consent
      this.handleConsentChange(categories);

      // Dispatch custom event for other components
      window.dispatchEvent(
        new CustomEvent("cookieConsentChanged", {
          detail: { preferences },
        }),
      );
    } catch (error) {
      console.error("Error saving cookie preferences:", error);
    }
  }

  // Accept all cookies
  acceptAll(): void {
    const categories: Record<string, boolean> = {};
    this.defaultCategories.forEach((category) => {
      categories[category.id] = true;
    });
    this.savePreferences(categories, true);
  }

  // Reject non-essential cookies
  rejectAll(): void {
    const categories: Record<string, boolean> = {};
    this.defaultCategories.forEach((category) => {
      categories[category.id] = category.required;
    });
    this.savePreferences(categories, true);
  }

  // Get default categories
  getCategories(): CookieCategory[] {
    const preferences = this.getPreferences();
    return this.defaultCategories.map((category) => ({
      ...category,
      enabled: preferences?.categories[category.id] ?? category.required,
    }));
  }

  // Check if specific category is enabled
  isCategoryEnabled(categoryId: string): boolean {
    const preferences = this.getPreferences();
    if (!preferences) return false;
    return preferences.categories[categoryId] || false;
  }

  // Clear all consent data
  clearConsent(): void {
    localStorage.removeItem(this.consentKey);

    // Clear analytics cookies if analytics is disabled
    if (!this.isCategoryEnabled("analytics")) {
      this.clearAnalyticsCookies();
    }

    // Clear marketing cookies if marketing is disabled
    if (!this.isCategoryEnabled("marketing")) {
      this.clearMarketingCookies();
    }

    window.dispatchEvent(new CustomEvent("cookieConsentCleared"));
  }

  // Handle consent changes for integrations
  private handleConsentChange(categories: Record<string, boolean>): void {
    // Analytics integration
    if (categories.analytics) {
      this.enableAnalytics();
    } else {
      this.disableAnalytics();
    }

    // Marketing integration
    if (categories.marketing) {
      this.enableMarketing();
    } else {
      this.disableMarketing();
    }
  }

  // Analytics integration methods
  private enableAnalytics(): void {
    // Enable Google Analytics or other analytics tools
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    console.log("Analytics cookies enabled");
  }

  private disableAnalytics(): void {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    this.clearAnalyticsCookies();
    console.log("Analytics cookies disabled");
  }

  private enableMarketing(): void {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }

    console.log("Marketing cookies enabled");
  }

  private disableMarketing(): void {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }

    this.clearMarketingCookies();
    console.log("Marketing cookies disabled");
  }

  // Clear specific cookie types
  private clearAnalyticsCookies(): void {
    const cookiesToClear = [
      "_ga",
      "_ga_",
      "_gid",
      "_gat",
      "__utma",
      "__utmb",
      "__utmc",
      "__utmt",
      "__utmz",
    ];
    this.clearCookiesByName(cookiesToClear);
  }

  private clearMarketingCookies(): void {
    const cookiesToClear = [
      "_fbp",
      "_fbc",
      "fr",
      "tr",
      "__Secure-3PSID",
      "__Secure-3PAPISID",
    ];
    this.clearCookiesByName(cookiesToClear);
  }

  private clearCookiesByName(cookieNames: string[]): void {
    cookieNames.forEach((name) => {
      // Clear for current domain
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      // Clear for parent domain
      const domain = window.location.hostname.split(".").slice(-2).join(".");
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${domain}`;
    });
  }

  // Log consent for compliance (LGPD requirement)
  private logConsent(preferences: CookiePreferences): void {
    const consentLog: CookieConsent = {
      timestamp: preferences.lastUpdated,
      version: this.version,
      categories: preferences.categories,
      ip: "masked", // In production, you might want to hash the IP
      userAgent: navigator.userAgent,
    };

    // In a real application, send this to your backend
    console.log("Cookie consent logged:", consentLog);

    // Store locally for demonstration (in production, send to server)
    try {
      const logs = JSON.parse(
        localStorage.getItem("vilainfo_consent_logs") || "[]",
      );
      logs.push(consentLog);
      // Keep only last 10 logs locally
      if (logs.length > 10) {
        logs.splice(0, logs.length - 10);
      }
      localStorage.setItem("vilainfo_consent_logs", JSON.stringify(logs));
    } catch (error) {
      console.error("Error logging consent:", error);
    }
  }

  // Get consent logs (for compliance purposes)
  getConsentLogs(): CookieConsent[] {
    try {
      return JSON.parse(localStorage.getItem("vilainfo_consent_logs") || "[]");
    } catch (error) {
      console.error("Error reading consent logs:", error);
      return [];
    }
  }

  // Dismiss banner without full consent
  dismissBanner(): void {
    const preferences = this.getPreferences();
    if (preferences) {
      preferences.bannerDismissed = true;
      localStorage.setItem(this.consentKey, JSON.stringify(preferences));
    } else {
      // If no preferences exist, create minimal consent
      const minimalPreferences: CookiePreferences = {
        hasConsented: false,
        consentId: this.generateConsentId(),
        lastUpdated: Date.now(),
        categories: { essential: true },
        bannerDismissed: true,
      };
      localStorage.setItem(this.consentKey, JSON.stringify(minimalPreferences));
    }
  }
}

export default CookieManager.getInstance();
