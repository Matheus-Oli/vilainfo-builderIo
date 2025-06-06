import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import CtaSection from "../components/CtaSection";

const Index = () => {
  return (
    <main className="vilainfo-homepage">
      {/* SEO Meta Information */}
      <div className="sr-only">
        <h1>Vilainfo - Soluções Tecnológicas Completas</h1>
        <p>
          Especializada em desenvolvimento, cloud, infraestrutura, segurança da
          informação e suporte técnico. Mais de 30 anos de experiência, 200+
          projetos entregues e 50+ clientes satisfeitos.
        </p>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white py-12">
        <div className="footer__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer__content grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="footer__company col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
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
              </div>
              <p className="footer__description text-gray-400 mb-6 max-w-md">
                Transformando negócios através da tecnologia há mais de 30 anos.
                Especialistas em desenvolvimento, cloud, segurança e suporte
                técnico.
              </p>
            </div>

            {/* Services */}
            <div className="footer__services">
              <h4 className="footer__title text-lg font-semibold text-white mb-4">
                Serviços
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Desenvolvimento
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Cloud & Infraestrutura
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Segurança
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Suporte 24/7
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__contact">
              <h4 className="footer__title text-lg font-semibold text-white mb-4">
                Contato
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-400">(27) 99999-9999</li>
                <li className="text-gray-400">contato@vilainfo.com.br</li>
                <li className="text-gray-400">Vila Velha, ES</li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2024 Vilainfo. Todos os direitos reservados.
            </p>
            <div className="footer__social flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
