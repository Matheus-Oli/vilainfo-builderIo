import { motion } from "framer-motion";
import { Building, TrendingUp, Award } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

interface Client {
  name: string;
  logo: string;
  industry: string;
  description: string;
  project: string;
  results: string;
  featured?: boolean;
}

const ClientShowcase = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.clients") === "Clients";

  const clients: Client[] = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop",
      industry: isEnglish ? "Technology" : "Tecnologia",
      description: isEnglish
        ? "Leading technology company specializing in enterprise software solutions and digital transformation."
        : "Empresa líder em tecnologia especializada em soluções de software empresarial e transformação digital.",
      project: isEnglish
        ? "Cloud Infrastructure Migration"
        : "Migração de Infraestrutura Cloud",
      results: isEnglish
        ? "40% cost reduction, 99.9% uptime"
        : "40% redução de custos, 99,9% uptime",
      featured: true,
    },
    {
      name: "InnovaTech",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop",
      industry: isEnglish ? "Innovation" : "Inovação",
      description: isEnglish
        ? "Innovation-driven company focused on developing cutting-edge solutions for emerging markets."
        : "Empresa orientada à inovação focada no desenvolvimento de soluções de ponta para mercados emergentes.",
      project: isEnglish
        ? "Custom Software Development"
        : "Desenvolvimento de Software Personalizado",
      results: isEnglish
        ? "300% productivity increase"
        : "300% aumento de produtividade",
    },
    {
      name: "DataSoft Analytics",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
      industry: isEnglish ? "Data Analytics" : "Análise de Dados",
      description: isEnglish
        ? "Data analytics company providing business intelligence solutions for Fortune 500 companies."
        : "Empresa de análise de dados fornecendo soluções de business intelligence para empresas Fortune 500.",
      project: isEnglish
        ? "Business Intelligence Platform"
        : "Plataforma de Business Intelligence",
      results: isEnglish
        ? "Real-time insights, 50% faster decisions"
        : "Insights em tempo real, 50% decisões mais rápidas",
    },
    {
      name: "CloudSystems Inc",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=80&fit=crop",
      industry: isEnglish ? "Cloud Computing" : "Computação em Nuvem",
      description: isEnglish
        ? "Cloud infrastructure provider delivering scalable solutions for modern businesses."
        : "Provedor de infraestrutura em nuvem oferecendo soluções escaláveis para empresas modernas.",
      project: isEnglish
        ? "Multi-Cloud Architecture"
        : "Arquitetura Multi-Cloud",
      results: isEnglish
        ? "Zero downtime migrations"
        : "Migrações sem downtime",
    },
    {
      name: "SecureNet",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=80&fit=crop",
      industry: isEnglish ? "Cybersecurity" : "Cibersegurança",
      description: isEnglish
        ? "Cybersecurity firm protecting organizations from advanced threats and ensuring compliance."
        : "Empresa de cibersegurança protegendo organizações contra ameaças avançadas e garantindo compliance.",
      project: isEnglish
        ? "Security Infrastructure Overhaul"
        : "Reforma da Infraestrutura de Segurança",
      results: isEnglish
        ? "100% compliance, zero breaches"
        : "100% compliance, zero violações",
      featured: true,
    },
    {
      name: "DigitalFlow",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=80&fit=crop",
      industry: isEnglish ? "Digital Solutions" : "Soluções Digitais",
      description: isEnglish
        ? "Digital transformation consultancy helping traditional businesses modernize their operations."
        : "Consultoria em transformação digital ajudando empresas tradicionais a modernizar suas operações.",
      project: isEnglish
        ? "Digital Transformation Initiative"
        : "Iniciativa de Transformação Digital",
      results: isEnglish
        ? "200% ROI in first year"
        : "200% ROI no primeiro ano",
    },
    {
      name: "MobileTech",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop",
      industry: isEnglish ? "Mobile Technology" : "Tecnologia Mobile",
      description: isEnglish
        ? "Mobile app development company creating innovative solutions for iOS and Android platforms."
        : "Empresa de desenvolvimento de apps móveis criando soluções inovadoras para plataformas iOS e Android.",
      project: isEnglish
        ? "Cross-Platform Mobile App"
        : "App Mobile Multiplataforma",
      results: isEnglish
        ? "1M+ downloads, 4.8★ rating"
        : "1M+ downloads, 4,8★ avaliação",
    },
    {
      name: "FinanceFlow",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop",
      industry: isEnglish ? "Financial Services" : "Serviços Financeiros",
      description: isEnglish
        ? "Financial technology company developing secure payment solutions and banking platforms."
        : "Empresa de tecnologia financeira desenvolvendo soluções seguras de pagamento e plataformas bancárias.",
      project: isEnglish
        ? "Secure Payment Gateway"
        : "Gateway de Pagamento Seguro",
      results: isEnglish
        ? "PCI DSS compliant, 99.99% uptime"
        : "PCI DSS compliant, 99,99% uptime",
    },
    {
      name: "EcoTech Solutions",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
      industry: isEnglish ? "Green Technology" : "Tecnologia Verde",
      description: isEnglish
        ? "Sustainable technology company focused on environmental monitoring and energy optimization."
        : "Empresa de tecnologia sustentável focada em monitoramento ambiental e otimização energética.",
      project: isEnglish
        ? "IoT Environmental Monitoring"
        : "Monitoramento Ambiental IoT",
      results: isEnglish
        ? "30% energy savings, real-time monitoring"
        : "30% economia de energia, monitoramento em tempo real",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Featured Clients */}
      <div className="mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {isEnglish
            ? "Featured Success Stories"
            : "Histórias de Sucesso em Destaque"}
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {clients
            .filter((client) => client.featured)
            .map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-green-100 dark:border-green-900/30 group-hover:border-green-200 dark:group-hover:border-green-800">
                  <div className="flex items-start gap-6 mb-6">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-16 h-16 object-contain rounded-xl bg-gray-50 dark:bg-gray-700 p-2"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        {client.name}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                        {client.industry}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {client.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {isEnglish ? "Project:" : "Projeto:"}
                        </span>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {client.project}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {isEnglish ? "Results:" : "Resultados:"}
                        </span>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {client.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* All Clients Grid */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {isEnglish
            ? "Trusted by Industry Leaders"
            : "Confiado por Líderes da Indústria"}
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-800 group-hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-12 h-12 object-contain rounded-lg bg-gray-50 dark:bg-gray-700 p-1 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {client.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {client.industry}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {client.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {client.project}
                  </span>
                  <Award className="w-4 h-4 text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;
