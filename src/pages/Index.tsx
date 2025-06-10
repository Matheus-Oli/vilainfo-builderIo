import { useLanguage } from "../contexts/AppContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import CtaSection from "../components/CtaSection";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  const { t } = useLanguage();

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
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;
