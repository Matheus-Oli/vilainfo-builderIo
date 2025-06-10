import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { X, Shield, BarChart3, Target, Zap, Info, Save } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { useCookies } from "@/hooks/useCookies";
import { Link } from "react-router-dom";

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePreferences = ({ isOpen, onClose }: CookiePreferencesProps) => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";
  const { categories, savePreferences, acceptAll, rejectAll } = useCookies();
  const [preferences, setPreferences] = useState<Record<string, boolean>>({});

  // Initialize preferences from current categories
  useEffect(() => {
    if (categories.length > 0) {
      const initialPrefs: Record<string, boolean> = {};
      categories.forEach((category) => {
        initialPrefs[category.id] = category.enabled;
      });
      setPreferences(initialPrefs);
    }
  }, [categories]);

  const handlePreferenceChange = (categoryId: string, enabled: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [categoryId]: enabled,
    }));
  };

  const handleSave = () => {
    savePreferences(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    acceptAll();
    onClose();
  };

  const handleRejectAll = () => {
    rejectAll();
    onClose();
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "essential":
        return Shield;
      case "analytics":
        return BarChart3;
      case "marketing":
        return Target;
      case "functional":
        return Zap;
      default:
        return Info;
    }
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case "essential":
        return "from-green-500 to-emerald-500";
      case "analytics":
        return "from-blue-500 to-cyan-500";
      case "marketing":
        return "from-purple-500 to-indigo-500";
      case "functional":
        return "from-orange-500 to-amber-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-4xl h-[90vh] sm:h-[85vh] overflow-hidden mx-auto my-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-0 shadow-2xl bg-white dark:bg-gray-900 flex flex-col h-full overflow-hidden">
              <CardHeader className="relative border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-6 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 z-10"
                  aria-label={isEnglish ? "Close" : "Fechar"}
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                <CardTitle className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white pr-10 sm:pr-12">
                  {isEnglish ? "Cookie Preferences" : "Preferências de Cookies"}
                </CardTitle>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2 leading-tight">
                  {isEnglish
                    ? "Manage your cookie preferences below."
                    : "Gerencie suas preferências de cookies abaixo."}
                </p>
              </CardHeader>

              <CardContent className="p-0 flex-1 overflow-y-auto">
                <div className="p-3 sm:p-6 space-y-3 sm:space-y-6">
                  {/* Cookie Categories */}
                  {categories.map((category) => {
                    const Icon = getCategoryIcon(category.id);
                    const colorClass = getCategoryColor(category.id);

                    return (
                      <div
                        key={category.id}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl p-3 sm:p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start sm:items-center justify-between mb-3 gap-2">
                              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                                {category.name}
                              </h3>
                              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
                                  {category.required && (
                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                                      {isEnglish ? "Required" : "Obrigatório"}
                                    </span>
                                  )}
                                  <Switch
                                    checked={preferences[category.id] || false}
                                    onCheckedChange={(checked) =>
                                      handlePreferenceChange(
                                        category.id,
                                        checked,
                                      )
                                    }
                                    disabled={category.required}
                                    className="data-[state=checked]:bg-green-600"
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed">
                              {category.description}
                            </p>

                            {/* Additional Info for Each Category */}
                            {category.id === "analytics" && (
                              <div className="mt-3 p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                                  {isEnglish
                                    ? "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
                                    : "Estes cookies nos ajudam a entender como os visitantes interagem com nosso site coletando e relatando informações de forma anônima."}
                                </p>
                              </div>
                            )}

                            {category.id === "marketing" && (
                              <div className="mt-3 p-2 sm:p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                <p className="text-xs text-purple-800 dark:text-purple-200 leading-relaxed">
                                  {isEnglish
                                    ? "These cookies may be set through our site by our advertising partners to build a profile of your interests."
                                    : "Estes cookies podem ser definidos através do nosso site por nossos parceiros de publicidade para construir um perfil de seus interesses."}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Legal Information */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-3 sm:p-6">
                      <h4 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                        {isEnglish ? "Your Rights" : "Seus Direitos"}
                      </h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        <p>
                          {isEnglish
                            ? "• You can change your preferences at any time"
                            : "• Você pode alterar suas preferências a qualquer momento"}
                        </p>
                        <p>
                          {isEnglish
                            ? "• You have the right to access, rectify, or delete your personal data"
                            : "• Você tem o direito de acessar, retificar ou excluir seus dados pessoais"}
                        </p>
                        <p>
                          {isEnglish
                            ? "• You can object to the processing of your personal data"
                            : "• Você pode se opor ao processamento de seus dados pessoais"}
                        </p>
                        <p>
                          {isEnglish
                            ? "• You can request data portability"
                            : "• Você pode solicitar a portabilidade dos dados"}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                        {isEnglish
                          ? "For more information, read our "
                          : "Para mais informações, leia nossa "}
                        <Link
                          to="/politica-cookies"
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          onClick={onClose}
                        >
                          {isEnglish ? "Cookie Policy" : "Política de Cookies"}
                        </Link>
                        {isEnglish ? " and " : " e "}
                        <Link
                          to="/politica-privacidade"
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                          onClick={onClose}
                        >
                          {isEnglish
                            ? "Privacy Policy"
                            : "Política de Privacidade"}
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Footer Actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-3 sm:p-6 bg-gray-50/50 dark:bg-gray-800/50 flex-shrink-0">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
                  <Button
                    variant="outline"
                    onClick={handleRejectAll}
                    className="border-gray-300 dark:border-gray-600 text-sm h-9 sm:h-10"
                    size="sm"
                  >
                    {isEnglish ? "Reject All" : "Rejeitar Todos"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleAcceptAll}
                    className="border-green-300 dark:border-green-600 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 text-sm h-9 sm:h-10"
                    size="sm"
                  >
                    {isEnglish ? "Accept All" : "Aceitar Todos"}
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 text-sm h-9 sm:h-10"
                    size="sm"
                  >
                    <Save className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {isEnglish ? "Save Preferences" : "Salvar Preferências"}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferences;
