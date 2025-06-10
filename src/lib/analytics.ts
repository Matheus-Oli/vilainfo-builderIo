// Analytics Integration Service - GDPR/LGPD Compliant
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private isInitialized = false;
  private trackingId = "G-XXXXXXXXXX"; // Replace with your actual Google Analytics ID

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  // Initialize Google Analytics with consent management
  initialize(hasAnalyticsConsent: boolean = false): void {
    if (this.isInitialized || typeof window === "undefined") return;

    try {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      // Configure default consent state
      window.gtag("consent", "default", {
        analytics_storage: hasAnalyticsConsent ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        wait_for_update: 500,
      });

      // Load Google Analytics script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
      document.head.appendChild(script);

      // Configure Google Analytics
      window.gtag("js", new Date());
      window.gtag("config", this.trackingId, {
        anonymize_ip: true, // GDPR compliance
        allow_google_signals: hasAnalyticsConsent,
        allow_ad_personalization_signals: false,
      });

      this.isInitialized = true;
      console.log("Analytics initialized with consent:", hasAnalyticsConsent);
    } catch (error) {
      console.error("Error initializing analytics:", error);
    }
  }

  // Update consent settings
  updateConsent(
    analyticsConsent: boolean,
    marketingConsent: boolean = false,
  ): void {
    if (typeof window === "undefined" || !window.gtag) return;

    try {
      window.gtag("consent", "update", {
        analytics_storage: analyticsConsent ? "granted" : "denied",
        ad_storage: marketingConsent ? "granted" : "denied",
        ad_user_data: marketingConsent ? "granted" : "denied",
        ad_personalization: marketingConsent ? "granted" : "denied",
      });

      console.log("Analytics consent updated:", {
        analytics: analyticsConsent,
        marketing: marketingConsent,
      });
    } catch (error) {
      console.error("Error updating analytics consent:", error);
    }
  }

  // Track page view
  trackPageView(path: string, title?: string): void {
    if (!this.isInitialized || typeof window === "undefined" || !window.gtag)
      return;

    try {
      window.gtag("config", this.trackingId, {
        page_path: path,
        page_title: title,
      });
    } catch (error) {
      console.error("Error tracking page view:", error);
    }
  }

  // Track custom event
  trackEvent(
    action: string,
    category: string,
    label?: string,
    value?: number,
  ): void {
    if (!this.isInitialized || typeof window === "undefined" || !window.gtag)
      return;

    try {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    } catch (error) {
      console.error("Error tracking event:", error);
    }
  }

  // Track conversion
  trackConversion(conversionId: string, value?: number): void {
    if (!this.isInitialized || typeof window === "undefined" || !window.gtag)
      return;

    try {
      window.gtag("event", "conversion", {
        send_to: conversionId,
        value: value,
      });
    } catch (error) {
      console.error("Error tracking conversion:", error);
    }
  }

  // Track form submission
  trackFormSubmission(formName: string): void {
    this.trackEvent("form_submit", "engagement", formName);
  }

  // Track button click
  trackButtonClick(buttonName: string, location: string): void {
    this.trackEvent("click", "engagement", `${buttonName}_${location}`);
  }

  // Track file download
  trackFileDownload(fileName: string, fileType: string): void {
    this.trackEvent("file_download", "engagement", `${fileName}.${fileType}`);
  }

  // Track scroll depth
  trackScrollDepth(percentage: number): void {
    this.trackEvent("scroll", "engagement", `${percentage}%`);
  }

  // Track external link click
  trackExternalLink(url: string): void {
    this.trackEvent("click", "external_link", url);
  }

  // Disable analytics
  disable(): void {
    if (typeof window === "undefined") return;

    try {
      // Set opt-out flag
      window[`ga-disable-${this.trackingId}`] = true;

      // Update consent to denied
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }

      console.log("Analytics disabled");
    } catch (error) {
      console.error("Error disabling analytics:", error);
    }
  }

  // Enable analytics
  enable(): void {
    if (typeof window === "undefined") return;

    try {
      // Remove opt-out flag
      window[`ga-disable-${this.trackingId}`] = false;

      // Update consent to granted
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }

      console.log("Analytics enabled");
    } catch (error) {
      console.error("Error enabling analytics:", error);
    }
  }
}

export default AnalyticsService.getInstance();
