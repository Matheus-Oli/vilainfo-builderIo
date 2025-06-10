import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  BarChart3,
  Target,
  Zap,
  Clock,
  Eye,
  Settings,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CookiePreferences from "../components/CookiePreferences";
import { useCookies } from "@/hooks/useCookies";

const CookiesPolicy = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";
  const [showPreferences, setShowPreferences] = useState(false);
  const { categories } = useCookies();

  const lastUpdated = "15 de dezembro de 2024";
  const lastUpdatedEn = "December 15, 2024";

  const cookieTypes = [
    {
      icon: Shield,
      name: isEnglish ? "Essential Cookies" : "Cookies Essenciais",
      description: isEnglish
        ? "Necessary for the website to function properly. Cannot be disabled."
        : "Necessários para o funcionamento adequado do site. Não podem ser desabilitados.",
      examples: ["Session cookies", "Security tokens", "Load balancing"],
      examplesTranslated: [
        "Cookies de sessão",
        "Tokens de segurança",
        "Balanceamento de carga",
      ],
      retention: isEnglish ? "Session or up to 1 year" : "Sessão ou até 1 ano",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      name: isEnglish ? "Analytics Cookies" : "Cookies de Análise",
      description: isEnglish
        ? "Help us understand how visitors interact with our website."
        : "Nos ajudam a entender como os visitantes interagem com nosso site.",
      examples: ["Google Analytics", "Page views", "User behavior"],
      examplesTranslated: [
        "Google Analytics",
        "Visualizações de página",
        "Comportamento do usuário",
      ],
      retention: isEnglish ? "Up to 2 years" : "Até 2 anos",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      name: isEnglish ? "Marketing Cookies" : "Cookies de Marketing",
      description: isEnglish
        ? "Used to personalize ads and measure advertising campaign effectiveness."
        : "Utilizados para personalizar anúncios e medir a eficácia de campanhas publicitárias.",
      examples: ["Ad targeting", "Conversion tracking", "Retargeting"],
      examplesTranslated: [
        "Segmentação de anúncios",
        "Rastreamento de conversão",
        "Retargeting",
      ],
      retention: isEnglish ? "Up to 1 year" : "Até 1 ano",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      name: isEnglish ? "Functional Cookies" : "Cookies Funcionais",
      description: isEnglish
        ? "Enable advanced functionality and personalization."
        : "Habilitam funcionalidades avançadas e personalização.",
      examples: ["Language preferences", "Theme settings", "Form data"],
      examplesTranslated: [
        "Preferências de idioma",
        "Configurações de tema",
        "Dados de formulário",
      ],
      retention: isEnglish ? "Up to 1 year" : "Até 1 ano",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-green-900/90 z-10"></div>
          <div className="absolute inset-0 bg-gray-900"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            {isEnglish ? "Cookie Policy" : "Política de Cookies"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed"
          >
            {isEnglish
              ? "Learn how we use cookies to improve your experience and protect your privacy"
              : "Saiba como utilizamos cookies para melhorar sua experiência e proteger sua privacidade"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm opacity-75"
          >
            {isEnglish
              ? `Last updated: ${lastUpdatedEn}`
              : `Última atualização: ${lastUpdated}`}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Actions */}
          <div className="mb-12">
            <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {isEnglish
                        ? "Manage Your Cookie Preferences"
                        : "Gerencie suas Preferências de Cookies"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {isEnglish
                        ? "You can change your cookie settings at any time."
                        : "Você pode alterar suas configurações de cookies a qualquer momento."}
                    </p>
                  </div>
                  <Button
                    onClick={() => setShowPreferences(true)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {isEnglish ? "Cookie Settings" : "Configurações de Cookies"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {isEnglish ? "What are Cookies?" : "O que são Cookies?"}
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {isEnglish
                  ? "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help websites remember your preferences and improve your browsing experience."
                  : "Cookies são pequenos arquivos de texto que são armazenados em seu computador ou dispositivo móvel quando você visita um site. Eles ajudam os sites a lembrar suas preferências e melhorar sua experiência de navegação."}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {isEnglish
                  ? "At Vilainfo, we use cookies to provide you with the best possible experience on our website, analyze how our site is used, and ensure its security and functionality."
                  : "Na Vilainfo, utilizamos cookies para fornecer a melhor experiência possível em nosso site, analisar como nosso site é usado e garantir sua segurança e funcionalidade."}
              </p>
            </div>
          </div>

          {/* Cookie Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {isEnglish
                ? "Types of Cookies We Use"
                : "Tipos de Cookies que Utilizamos"}
            </h2>
            <div className="grid gap-6">
              {cookieTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="text-xl text-gray-900 dark:text-white">
                            {type.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {type.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                              {isEnglish ? "Examples:" : "Exemplos:"}
                            </h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                              {(isEnglish
                                ? type.examples
                                : type.examplesTranslated
                              ).map((example, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {isEnglish ? "Retention:" : "Retenção:"}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {type.retention}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Legal Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  LGPD {isEnglish ? "Compliance" : "Conformidade"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {isEnglish
                    ? "We comply with Brazil's General Data Protection Law (LGPD). Your personal data is processed lawfully, transparently, and for specific purposes. You have the right to access, correct, delete, and port your data."
                    : "Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil. Seus dados pessoais são processados de forma legal, transparente e para fins específicos. Você tem o direito de acessar, corrigir, excluir e portar seus dados."}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  {isEnglish ? "Your Rights" : "Seus Direitos"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                    {isEnglish
                      ? "Access your personal data"
                      : "Acessar seus dados pessoais"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                    {isEnglish
                      ? "Rectify inaccurate data"
                      : "Retificar dados incorretos"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                    {isEnglish ? "Delete your data" : "Excluir seus dados"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                    {isEnglish ? "Data portability" : "Portabilidade dos dados"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>
                    {isEnglish
                      ? "Object to processing"
                      : "Opor-se ao processamento"}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">
                {isEnglish ? "Contact Us" : "Entre em Contato"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {isEnglish
                  ? "If you have any questions about this Cookie Policy or wish to exercise your rights, please contact us:"
                  : "Se você tiver alguma dúvida sobre esta Política de Cookies ou desejar exercer seus direitos, entre em contato conosco:"}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Email:
                    </p>
                    <a
                      href="mailto:privacidade@vilainfo.com.br"
                      className="text-green-600 hover:underline"
                    >
                      privacidade@vilainfo.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {isEnglish ? "Phone:" : "Telefone:"}
                    </p>
                    <a
                      href="tel:+5527999999999"
                      className="text-green-600 hover:underline"
                    >
                      (27) 99999-9999
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Cookie Preferences Modal */}
      <CookiePreferences
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
      />
    </div>
  );
};

export default CookiesPolicy;
