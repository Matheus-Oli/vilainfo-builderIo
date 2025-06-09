import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import {
  ArrowRight,
  Play,
  Code,
  Cloud,
  Shield,
  HeadphonesIcon,
  Database,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";
import MethodologySection from "../components/MethodologySection";
import TechStack from "../components/TechStack";
const Services = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.services") === "Services";

  const services = [
    {
      icon: Code,
      title: isEnglish ? "Custom Development" : "Desenvolvimento Personalizado",
      description: isEnglish
        ? "Tailored software solutions designed specifically for your business needs and objectives."
        : "Soluções de software personalizadas projetadas especificamente para suas necessidades e objetivos de negócio.",
      features: isEnglish
        ? [
            "Responsive Web Applications",
            "Progressive Web Apps (PWA)",
            "API Development & Integration",
            "Custom E-commerce Solutions",
            "Enterprise Software Systems",
            "Real-time Applications",
            "Microservices Architecture",
            "Third-party Integrations",
          ]
        : [
            "Aplicações Web Responsivas",
            "Progressive Web Apps (PWA)",
            "Desenvolvimento e Integração de APIs",
            "Soluções E-commerce Personalizadas",
            "Sistemas de Software Empresarial",
            "Aplicações em Tempo Real",
            "Arquitetura de Microserviços",
            "Integrações com Terceiros",
          ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Python",
        "PostgreSQL",
        "Docker",
      ],
      featured: true,
    },
    {
      icon: Smartphone,
      title: isEnglish ? "Mobile Development" : "Desenvolvimento Mobile",
      description: isEnglish
        ? "Native and cross-platform mobile applications for iOS and Android with outstanding user experience."
        : "Aplicações móveis nativas e multiplataforma para iOS e Android com experiência de usuário excepcional.",
      features: isEnglish
        ? [
            "iOS Native Apps (Swift)",
            "Android Native Apps (Kotlin)",
            "React Native Cross-platform",
            "Flutter Development",
            "Mobile App UI/UX Design",
            "App Store Optimization",
            "Push Notifications",
            "Offline Functionality",
          ]
        : [
            "Apps Nativas iOS (Swift)",
            "Apps Nativas Android (Kotlin)",
            "React Native Multiplataforma",
            "Desenvolvimento Flutter",
            "Design UI/UX para Mobile",
            "Otimização para App Store",
            "Notificações Push",
            "Funcionalidade Offline",
          ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Expo",
      ],
    },
    {
      icon: Cloud,
      title: isEnglish ? "Cloud & Infrastructure" : "Cloud & Infraestrutura",
      description: isEnglish
        ? "Modern cloud solutions and infrastructure management for scalable, secure, and reliable systems."
        : "Soluções cloud modernas e gerenciamento de infraestrutura para sistemas escaláveis, seguros e confiáveis.",
      features: isEnglish
        ? [
            "Cloud Migration Strategy",
            "AWS, Azure, Google Cloud",
            "DevOps & CI/CD Pipelines",
            "Container Orchestration",
            "Infrastructure as Code",
            "24/7 Monitoring & Alerts",
            "Auto-scaling Solutions",
            "Disaster Recovery Planning",
          ]
        : [
            "Estratégia de Migração Cloud",
            "AWS, Azure, Google Cloud",
            "DevOps & Pipelines CI/CD",
            "Orquestração de Containers",
            "Infraestrutura como Código",
            "Monitoramento 24/7 & Alertas",
            "Soluções de Auto-scaling",
            "Planejamento de Disaster Recovery",
          ],
      technologies: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
    },
    {
      icon: Database,
      title: isEnglish ? "Data & Analytics" : "Dados & Analytics",
      description: isEnglish
        ? "Transform your data into actionable insights with advanced analytics and business intelligence solutions."
        : "Transforme seus dados em insights acionáveis com análises avançadas e soluções de business intelligence.",
      features: isEnglish
        ? [
            "Data Warehouse Design",
            "ETL/ELT Pipeline Development",
            "Business Intelligence Dashboards",
            "Machine Learning Models",
            "Predictive Analytics",
            "Real-time Data Processing",
            "Data Governance & Quality",
            "Custom Reporting Solutions",
          ]
        : [
            "Design de Data Warehouse",
            "Desenvolvimento de Pipelines ETL/ELT",
            "Dashboards de Business Intelligence",
            "Modelos de Machine Learning",
            "Análises Preditivas",
            "Processamento de Dados em Tempo Real",
            "Governança e Qualidade de Dados",
            "Soluções de Relatórios Personalizados",
          ],
      technologies: [
        "Python",
        "R",
        "Tableau",
        "Power BI",
        "Apache Spark",
        "Snowflake",
      ],
    },
    {
      icon: Shield,
      title: isEnglish ? "Cybersecurity" : "Cibersegurança",
      description: isEnglish
        ? "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards."
        : "Soluções de segurança abrangentes para proteger seus ativos digitais e garantir conformidade com padrões da indústria.",
      features: isEnglish
        ? [
            "Security Audits & Assessments",
            "Penetration Testing",
            "ISO 27001 Implementation",
            "GDPR/LGPD Compliance",
            "Identity & Access Management",
            "Endpoint Protection",
            "Security Incident Response",
            "Staff Training Programs",
          ]
        : [
            "Auditorias e Avaliações de Segurança",
            "Testes de Penetração",
            "Implementação ISO 27001",
            "Conformidade GDPR/LGPD",
            "Gestão de Identidade e Acesso",
            "Proteção de Endpoints",
            "Resposta a Incidentes de Segurança",
            "Programas de Treinamento",
          ],
      technologies: [
        "SIEM",
        "Splunk",
        "CrowdStrike",
        "Okta",
        "Vault",
        "Nessus",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: isEnglish ? "Support & Maintenance" : "Suporte & Manutenção",
      description: isEnglish
        ? "Reliable technical support and proactive maintenance to keep your systems running at peak performance."
        : "Suporte técnico confiável e manutenção proativa para manter seus sistemas funcionando com performance máxima.",
      features: isEnglish
        ? [
            "24/7 Technical Support",
            "Proactive System Monitoring",
            "Performance Optimization",
            "Security Updates & Patches",
            "Backup & Recovery Services",
            "SLA Guarantee",
            "Multi-language Support",
            "Dedicated Account Management",
          ]
        : [
            "Suporte Técnico 24/7",
            "Monitoramento Proativo de Sistemas",
            "Otimização de Performance",
            "Atualizações e Patches de Segurança",
            "Serviços de Backup & Recovery",
            "Garantia de SLA",
            "Suporte Multilíngue",
            "Gerenciamento de Conta Dedicado",
          ],
      technologies: [
        "ServiceNow",
        "Zendesk",
        "Nagios",
        "Prometheus",
        "Grafana",
        "PagerDuty",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-green-900/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              {isEnglish ? (
                <>
                  Technology Solutions
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                    That Transform
                  </span>
                </>
              ) : (
                <>
                  Soluções Tecnológicas
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                    Que Transformam
                  </span>
                </>
              )}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90"
            >
              {isEnglish
                ? "We create cutting-edge digital solutions that drive growth, efficiency, and innovation for businesses of all sizes."
                : "Criamos soluções digitais de ponta que impulsionam crescimento, eficiência e inovação para empresas de todos os tamanhos."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                {isEnglish ? "Start Your Project" : "Iniciar Seu Projeto"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                {isEnglish ? "Watch Demo" : "Assistir Demo"}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish ? "Our Services" : "Nossos Serviços"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {isEnglish
                ? "From custom development to cloud infrastructure, we offer comprehensive technology solutions designed to accelerate your digital transformation."
                : "Do desenvolvimento personalizado à infraestrutura em nuvem, oferecemos soluções tecnológicas abrangentes projetadas para acelerar sua transformação digital."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                technologies={service.technologies}
                index={index}
                featured={service.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <MethodologySection />

      {/* Tech Stack & Differentials */}
      <TechStack />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {isEnglish
              ? "Ready to Transform Your Business?"
              : "Pronto para Transformar Seu Negócio?"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 leading-relaxed"
          >
            {isEnglish
              ? "Let's discuss how our expertise can help you achieve your technology goals and drive business growth."
              : "Vamos discutir como nossa expertise pode ajudá-lo a alcançar seus objetivos tecnológicos e impulsionar o crescimento dos negócios."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {isEnglish ? "Get Free Consultation" : "Consultoria Gratuita"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm"
            >
              {isEnglish ? "View Portfolio" : "Ver Portfólio"}
            </Button>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Services;
