import React, { createContext, useContext, useState, useEffect } from "react";

// Language Context
interface LanguageContextType {
  language: "pt" | "en";
  setLanguage: (lang: "pt" | "en") => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translations
const translations = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.about": "Quem Somos",
    "nav.services": "Serviços",
    "nav.clients": "Clientes",
    "nav.contact": "Contato",
    "header.cta": "Fale Conosco",

    // Hero
    "hero.title.solutions": "Soluções",
    "hero.title.for": "para o seu negócio",
    "hero.subtitle":
      "Transformamos ideias em soluções digitais eficientes com mais de 30 anos de experiência em tecnologia",
    "hero.cta.primary": "Solicitar Orçamento",
    "hero.cta.secondary": "Nossos Serviços",
    "hero.stats.years": "anos de experiência",
    "hero.stats.projects": "projetos entregues",
    "hero.stats.clients": "clientes satisfeitos",

    // Rotating words
    "words.technological": "tecnológicas",
    "words.personalized": "personalizadas",
    "words.intelligent": "inteligentes",
    "words.modern": "modernas",

    // About
    "about.title": "Quem somos",
    "about.description1":
      "A Vilainfo é uma empresa especializada em soluções tecnológicas, com mais de 30 anos de experiência no mercado. Nossa missão é transformar ideias em realidade digital oferecendo serviços de desenvolvimento, segurança e infraestrutura de TI com excelência e inovação.",
    "about.description2":
      "Trabalhamos com as mais modernas tecnologias e metodologias ágeis, garantindo entregas de qualidade no prazo estabelecido.",
    "about.cta": "Saiba Mais",

    // Services
    "services.title": "Nossos Serviços",
    "services.subtitle":
      "Oferecemos soluções completas em tecnologia para impulsionar o crescimento do seu negócio",
    "services.development.title": "Desenvolvimento",
    "services.development.description":
      "Criamos soluções sob medida para o seu negócio",
    "services.cloud.title": "Cloud & Infraestrutura",
    "services.cloud.description": "Modernize sua infraestrutura com a nuvem",
    "services.security.title": "Segurança",
    "services.security.description": "Proteja seus dados e sistemas",
    "services.support.title": "Suporte",
    "services.support.description": "Suporte técnico quando você precisar",

    // Testimonials
    "testimonials.title": "O que nossos clientes dizem",
    "testimonials.subtitle":
      "Veja os depoimentos de quem já confia na Vilainfo para suas soluções tecnológicas",

    // Why Choose Us
    "why.title": "Por que escolher a Vilainfo?",
    "why.subtitle":
      "Combinamos experiência, inovação e resultados para entregar as melhores soluções tecnológicas",
    "why.differentials": "Nossos Diferenciais",
    "why.diff.agile": "Metodologia ágil",
    "why.diff.team": "Equipe multidisciplinar",
    "why.diff.support": "Suporte 24/7",
    "why.diff.roi": "ROI comprovado",
    "why.diff.tech": "Tecnologias modernas",
    "why.feature.agility.title": "Agilidade",
    "why.feature.agility.desc":
      "Entregamos resultados rápidos com metodologias eficientes e processos otimizados.",
    "why.feature.experience.title": "Experiência",
    "why.feature.experience.desc":
      "Mais de 30 anos no mercado, com expertise comprovada em diversas tecnologias.",
    "why.feature.quality.title": "Qualidade",
    "why.feature.quality.desc":
      "Padrões elevados de qualidade em todos os projetos, garantindo excelência.",
    "why.feature.results.title": "Resultados",
    "why.feature.results.desc":
      "Foco em resultados mensuráveis que impactem positivamente seu negócio.",

    // CTA
    "cta.title": "Pronto para Transformar seu Negócio?",
    "cta.subtitle":
      "Entre em contato conosco e descubra como nossas soluções podem impulsionar o crescimento da sua empresa",
    "cta.primary": "Solicitar Orçamento",
    "cta.secondary": "Ver Serviços",

    // Footer
    "footer.description":
      "Transformando negócios através da tecnologia há mais de 30 anos. Especialistas em desenvolvimento, cloud, segurança e suporte técnico.",
    "footer.services": "Serviços",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.development": "Desenvolvimento",
    "footer.cloud": "Cloud & Infraestrutura",
    "footer.security": "Segurança",
    "footer.support": "Suporte 24/7",
    "footer.phone": "(27) 99999-9999",
    "footer.email": "contato@vilainfo.com.br",
    "footer.location": "Vila Velha, ES",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",

    // Cookies
    "cookies.banner.title": "Consentimento de Cookies",
    "cookies.banner.description":
      "Utilizamos cookies para melhorar sua experiência de navegação, fornecer conteúdo personalizado e analisar nosso tráfego.",
    "cookies.banner.accept": "Aceitar Todos",
    "cookies.banner.reject": "Rejeitar Todos",
    "cookies.banner.customize": "Personalizar",
    "cookies.policy": "Política de Cookies",
    "cookies.preferences": "Preferências de Cookies",
    "cookies.essential": "Cookies Essenciais",
    "cookies.analytics": "Cookies de Análise",
    "cookies.marketing": "Cookies de Marketing",
    "cookies.functional": "Cookies Funcionais",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.clients": "Clients",
    "nav.contact": "Contact",
    "header.cta": "Contact Us",

    // Hero
    "hero.title.solutions": "Solutions",
    "hero.title.for": "for your business",
    "hero.subtitle":
      "We transform ideas into efficient digital solutions with over 30 years of experience in technology",
    "hero.cta.primary": "Request Quote",
    "hero.cta.secondary": "Our Services",
    "hero.stats.years": "years of experience",
    "hero.stats.projects": "projects delivered",
    "hero.stats.clients": "satisfied clients",

    // Rotating words
    "words.technological": "technological",
    "words.personalized": "personalized",
    "words.intelligent": "intelligent",
    "words.modern": "modern",

    // About
    "about.title": "Who we are",
    "about.description1":
      "Vilainfo is a company specialized in technological solutions, with over 30 years of market experience. Our mission is to transform ideas into digital reality by offering development, security and IT infrastructure services with excellence and innovation.",
    "about.description2":
      "We work with the most modern technologies and agile methodologies, ensuring quality deliveries on schedule.",
    "about.cta": "Learn More",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "We offer complete technology solutions to boost your business growth",
    "services.development.title": "Development",
    "services.development.description":
      "We create custom solutions for your business",
    "services.cloud.title": "Cloud & Infrastructure",
    "services.cloud.description":
      "Modernize your infrastructure with the cloud",
    "services.security.title": "Security",
    "services.security.description": "Protect your data and systems",
    "services.support.title": "Support",
    "services.support.description": "Technical support when you need it",

    // Testimonials
    "testimonials.title": "What our clients say",
    "testimonials.subtitle":
      "See testimonials from those who already trust Vilainfo for their technological solutions",

    // Why Choose Us
    "why.title": "Why choose Vilainfo?",
    "why.subtitle":
      "We combine experience, innovation and results to deliver the best technological solutions",
    "why.differentials": "Our Differentials",
    "why.diff.agile": "Agile methodology",
    "why.diff.team": "Multidisciplinary team",
    "why.diff.support": "24/7 Support",
    "why.diff.roi": "Proven ROI",
    "why.diff.tech": "Modern technologies",
    "why.feature.agility.title": "Agility",
    "why.feature.agility.desc":
      "We deliver fast results with efficient methodologies and optimized processes.",
    "why.feature.experience.title": "Experience",
    "why.feature.experience.desc":
      "Over 30 years in the market, with proven expertise in various technologies.",
    "why.feature.quality.title": "Quality",
    "why.feature.quality.desc":
      "High quality standards in all projects, ensuring excellence.",
    "why.feature.results.title": "Results",
    "why.feature.results.desc":
      "Focus on measurable results that positively impact your business.",

    // CTA
    "cta.title": "Ready to Transform your Business?",
    "cta.subtitle":
      "Contact us and discover how our solutions can boost your company's growth",
    "cta.primary": "Request Quote",
    "cta.secondary": "View Services",

    // Footer
    "footer.description":
      "Transforming businesses through technology for over 30 years. Experts in development, cloud, security and technical support.",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.development": "Development",
    "footer.cloud": "Cloud & Infrastructure",
    "footer.security": "Security",
    "footer.support": "24/7 Support",
    "footer.phone": "(27) 99999-9999",
    "footer.email": "contact@vilainfo.com.br",
    "footer.location": "Vila Velha, ES",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",

    // Cookies
    "cookies.banner.title": "Cookie Consent",
    "cookies.banner.description":
      "We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.",
    "cookies.banner.accept": "Accept All",
    "cookies.banner.reject": "Reject All",
    "cookies.banner.customize": "Customize",
    "cookies.policy": "Cookie Policy",
    "cookies.preferences": "Cookie Preferences",
    "cookies.essential": "Essential Cookies",
    "cookies.analytics": "Analytics Cookies",
    "cookies.marketing": "Marketing Cookies",
    "cookies.functional": "Functional Cookies",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const saved = localStorage.getItem("vilainfo-language");
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: "pt" | "en") => {
    setLanguage(lang);
    localStorage.setItem("vilainfo-language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["pt"]] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
