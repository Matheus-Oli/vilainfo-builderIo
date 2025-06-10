import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Trash2,
  Download,
  Eye,
  Calendar,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { useCookies } from "@/hooks/useCookies";
import CookieManager from "@/lib/cookieManager";
import CookiePreferences from "./CookiePreferences";

interface CookieManagerComponentProps {
  showDetails?: boolean;
}

const CookieManagerComponent = ({
  showDetails = false,
}: CookieManagerComponentProps) => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";
  const [showPreferences, setShowPreferences] = useState(false);
  const [showLogs, setShowLogs] = useState(false);
  const {
    hasConsented,
    preferences,
    categories,
    clearConsent,
    isConsentExpired,
  } = useCookies();

  const consentLogs = CookieManager.getConsentLogs();

  const handleExportData = () => {
    const data = {
      preferences,
      categories,
      logs: consentLogs,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vilainfo-cookie-data-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getConsentStatus = () => {
    if (!hasConsented) {
      return {
        status: isEnglish ? "Not Consented" : "Não Consentido",
        color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
        icon: AlertTriangle,
      };
    }
    if (isConsentExpired) {
      return {
        status: isEnglish ? "Expired" : "Expirado",
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        icon: Calendar,
      };
    }
    return {
      status: isEnglish ? "Active" : "Ativo",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      icon: Shield,
    };
  };

  const statusInfo = getConsentStatus();
  const StatusIcon = statusInfo.icon;

  if (!showDetails) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          onClick={() => setShowPreferences(true)}
          variant="outline"
          size="sm"
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Settings className="w-4 h-4 mr-2" />
          {isEnglish ? "Cookie Settings" : "Configurações"}
        </Button>
        <CookiePreferences
          isOpen={showPreferences}
          onClose={() => setShowPreferences(false)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Consent Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StatusIcon className="w-5 h-5" />
            {isEnglish ? "Consent Status" : "Status do Consentimento"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Badge className={statusInfo.color}>{statusInfo.status}</Badge>
              {preferences && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {isEnglish ? "Last updated: " : "Última atualização: "}
                  {new Date(preferences.lastUpdated).toLocaleString()}
                </p>
              )}
              {preferences && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {isEnglish ? "Consent ID: " : "ID do Consentimento: "}
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                    {preferences.consentId}
                  </code>
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowPreferences(true)}
                variant="outline"
                size="sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                {isEnglish ? "Manage" : "Gerenciar"}
              </Button>
              <Button onClick={clearConsent} variant="outline" size="sm">
                <Trash2 className="w-4 h-4 mr-2" />
                {isEnglish ? "Clear" : "Limpar"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories Status */}
      <Card>
        <CardHeader>
          <CardTitle>
            {isEnglish ? "Cookie Categories" : "Categorias de Cookies"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {category.required
                      ? isEnglish
                        ? "Required"
                        : "Obrigatório"
                      : isEnglish
                        ? "Optional"
                        : "Opcional"}
                  </p>
                </div>
                <Badge
                  className={
                    category.enabled
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                  }
                >
                  {category.enabled
                    ? isEnglish
                      ? "Enabled"
                      : "Habilitado"
                    : isEnglish
                      ? "Disabled"
                      : "Desabilitado"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Consent Logs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>
              {isEnglish ? "Consent History" : "Histórico de Consentimento"}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowLogs(!showLogs)}
                variant="outline"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showLogs
                  ? isEnglish
                    ? "Hide"
                    : "Ocultar"
                  : isEnglish
                    ? "Show"
                    : "Mostrar"}
              </Button>
              <Button onClick={handleExportData} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                {isEnglish ? "Export" : "Exportar"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        {showLogs && (
          <CardContent>
            {consentLogs.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300 text-center py-4">
                {isEnglish
                  ? "No consent logs found"
                  : "Nenhum log de consentimento encontrado"}
              </p>
            ) : (
              <div className="space-y-3">
                {consentLogs.slice(-5).map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {new Date(log.timestamp).toLocaleString()}
                      </span>
                      <Badge variant="outline">v{log.version}</Badge>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      <p>
                        {isEnglish ? "Categories: " : "Categorias: "}
                        {Object.entries(log.categories)
                          .filter(([, enabled]) => enabled)
                          .map(([category]) => category)
                          .join(", ")}
                      </p>
                      <p>User Agent: {log.userAgent?.substring(0, 50)}...</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Cookie Preferences Modal */}
      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
      />
    </div>
  );
};

export default CookieManagerComponent;
