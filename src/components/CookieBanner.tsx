import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Settings, Shield, Info } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { useCookies } from "@/hooks/useCookies";
import CookiePreferences from "./CookiePreferences";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";
  const [showPreferences, setShowPreferences] = useState(false);
  const { shouldShowBanner, acceptAll, rejectAll, dismissBanner } =
    useCookies();

  if (!shouldShowBanner) return null;

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleRejectAll = () => {
    rejectAll();
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  const handleDismiss = () => {
    dismissBanner();
  };

  return (
    <>
      <AnimatePresence>
        {shouldShowBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                    {/* Icon and Content */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Shield className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {isEnglish
                            ? "Cookie Consent"
                            : "Consentimento de Cookies"}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {isEnglish
                            ? 'We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our '
                            : 'Utilizamos cookies para melhorar sua experiência de navegação, fornecer conteúdo personalizado e analisar nosso tráfego. Ao clicar em "Aceitar Todos", você consente com o uso de cookies. Você pode personalizar suas preferências ou saber mais em nossa '}
                          <Link
                            to="/politica-cookies"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          >
                            {isEnglish
                              ? "Cookie Policy"
                              : "Política de Cookies"}
                          </Link>
                          .
                        </p>

                        {/* LGPD Compliance Notice */}
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-blue-800 dark:text-blue-200">
                              {isEnglish
                                ? "This site complies with LGPD (Brazilian General Data Protection Law) and GDPR. Your data is processed lawfully and your rights are protected."
                                : "Este site está em conformidade com a LGPD (Lei Geral de Proteção de Dados) e GDPR. Seus dados são processados legalmente e seus direitos estão protegidos."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCustomize}
                        className="flex items-center gap-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <Settings className="w-4 h-4" />
                        {isEnglish ? "Customize" : "Personalizar"}
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleRejectAll}
                        className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {isEnglish ? "Reject All" : "Rejeitar Todos"}
                      </Button>

                      <Button
                        size="sm"
                        onClick={handleAcceptAll}
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0"
                      >
                        {isEnglish ? "Accept All" : "Aceitar Todos"}
                      </Button>
                    </div>

                    {/* Close Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleDismiss}
                      className="lg:ml-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 self-start lg:self-center"
                      aria-label={
                        isEnglish ? "Dismiss banner" : "Dispensar banner"
                      }
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Preferences Modal */}
      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
      />
    </>
  );
};

export default CookieBanner;
