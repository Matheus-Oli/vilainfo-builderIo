import { useLanguage } from "@/contexts/AppContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieManagerComponent from "../components/CookieManager";

const CookieSettings = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="pt-20 pb-16">
        {/* Header */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {isEnglish ? "Cookie Settings" : "Configurações de Cookies"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isEnglish
                ? "Manage your cookie preferences and view your consent history"
                : "Gerencie suas preferências de cookies e visualize seu histórico de consentimento"}
            </p>
          </div>
        </section>

        {/* Cookie Manager */}
        <section className="py-8">
          <CookieManagerComponent showDetails={true} />
        </section>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CookieSettings;
