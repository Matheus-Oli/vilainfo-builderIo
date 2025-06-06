import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

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

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white py-12">
        <div className="footer__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer__content text-center">
            <h3 className="footer__title text-2xl font-bold mb-4">Vilainfo</h3>
            <p className="footer__description text-gray-400 mb-6">
              Transformando negócios através da tecnologia há mais de 30 anos
            </p>
            <div className="footer__contact space-y-2 text-gray-400">
              <p>contato@vilainfo.com.br</p>
              <p>(11) 9999-9999</p>
            </div>
          </div>
          <div className="footer__bottom border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vilainfo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
