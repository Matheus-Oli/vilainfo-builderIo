import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Clientes", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="header__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header__content flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="header__logo flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl lg:text-2xl font-bold">
              <span className="text-gray-900">VILA</span>
              <span className="text-green-600">INFO</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="header__nav-link text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 px-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="header__cta hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5527999999999"
              className="header__phone flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(27) 99999-9999</span>
            </a>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="header__menu-toggle lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "header__mobile-nav lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="border-t border-gray-200 pt-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="header__mobile-link block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-4 px-4 space-y-3">
              <a
                href="tel:+5527999999999"
                className="header__mobile-phone flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">(27) 99999-9999</span>
              </a>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
