import { useLanguage } from "@/contexts/AppContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer bg-gray-900 text-white py-12">
      <div className="footer__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer__content grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="footer__company col-span-1 md:col-span-2">
            <Link
              to="/"
              className="flex items-center mb-4 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-green-500 to-blue-600 rounded-full flex items-center justify-center mr-3 relative">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  <span className="text-white">VILA</span>
                  <span className="text-green-400">INFO</span>
                </span>
                <span className="text-xs text-gray-400 leading-tight">
                  soluções e corporativas
                </span>
              </div>
            </Link>
            <p className="footer__description text-gray-400 mb-6 max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Services */}
          <div className="footer__services">
            <h4 className="footer__title text-lg font-semibold text-white mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t("footer.development")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t("footer.cloud")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t("footer.security")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t("footer.support")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__title text-lg font-semibold text-white mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+5527999999999"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t("footer.phone")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@vilainfo.com.br"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li className="text-gray-400">{t("footer.location")}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 Vilainfo. {t("footer.rights")}
          </p>
          <div className="footer__social flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/contact"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
