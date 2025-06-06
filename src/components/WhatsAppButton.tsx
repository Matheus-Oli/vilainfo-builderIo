import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";

  const whatsappNumber = "5527999999999"; // Replace with actual WhatsApp number
  const message = isEnglish
    ? "Hello! I would like to know more about Vilainfo services."
    : "Olá! Gostaria de saber mais sobre os serviços da Vilainfo.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button fixed bottom-6 right-6 z-50 group"
      aria-label={
        isEnglish ? "Contact via WhatsApp" : "Entrar em contato via WhatsApp"
      }
    >
      <div className="whatsapp-button__container bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 ease-out">
        <MessageCircle className="w-6 h-6" />

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30"></div>
      </div>

      {/* Tooltip */}
      <div className="whatsapp-button__tooltip absolute right-full top-1/2 transform -translate-y-1/2 mr-4 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {isEnglish ? "Chat on WhatsApp" : "Conversar no WhatsApp"}

        {/* Arrow */}
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900 dark:border-l-gray-700"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
