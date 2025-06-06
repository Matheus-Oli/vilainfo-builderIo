import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/AppContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.about"), href: "#quem-somos" },
    { label: t("nav.services"), href: "#servicos" },
    { label: t("nav.clients"), href: "#depoimentos" },
    { label: t("nav.contact"), href: "#contato" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="header__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header__content flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="header__logo flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold">
              <span className="text-gray-900 dark:text-white">VILA</span>
              <span className="text-green-600 dark:text-green-400">INFO</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="header__nav-link text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200 py-2 px-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="header__controls hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <LanguageToggle />
            <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-2 rounded-full ml-4">
              {t("header.cta")}
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="header__mobile-controls flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="header__menu-toggle p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ml-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "header__mobile-nav lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white dark:bg-gray-900",
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="header__mobile-link block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 px-4">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-3 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("header.cta")}
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
