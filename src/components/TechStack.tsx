import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Shield,
  Users,
  Zap,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

const TechStack = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.services") === "Services";

  const technologies = [
    {
      category: isEnglish ? "Frontend" : "Frontend",
      techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: isEnglish ? "Backend" : "Backend",
      techs: ["Node.js", "Python", "Java", "C#", ".NET"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: isEnglish ? "Database" : "Banco de Dados",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: isEnglish ? "Cloud & DevOps" : "Cloud & DevOps",
      techs: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: isEnglish ? "Mobile" : "Mobile",
      techs: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      color: "from-pink-500 to-rose-500",
    },
    {
      category: isEnglish ? "Security" : "Segurança",
      techs: ["OAuth", "JWT", "SSL/TLS", "HTTPS", "Encryption"],
      color: "from-gray-500 to-slate-500",
    },
  ];

  const differentials = [
    {
      icon: Clock,
      title: isEnglish ? "Fast Delivery" : "Entrega Rápida",
      description: isEnglish
        ? "Agile methodology with 2-week sprints"
        : "Metodologia ágil com sprints de 2 semanas",
      stat: "50%",
      statDesc: isEnglish ? "faster than average" : "mais rápido que a média",
    },
    {
      icon: Users,
      title: isEnglish ? "Expert Team" : "Equipe Especialista",
      description: isEnglish
        ? "Senior developers with 5+ years experience"
        : "Desenvolvedores seniores com 5+ anos de experiência",
      stat: "98%",
      statDesc: isEnglish ? "client satisfaction" : "satisfação do cliente",
    },
    {
      icon: Shield,
      title: isEnglish ? "Security First" : "Segurança em Primeiro",
      description: isEnglish
        ? "Enterprise-grade security standards"
        : "Padrões de segurança empresarial",
      stat: "100%",
      statDesc: isEnglish ? "secure deployments" : "deploys seguros",
    },
    {
      icon: Zap,
      title: isEnglish ? "High Performance" : "Alta Performance",
      description: isEnglish
        ? "Optimized code for maximum efficiency"
        : "Código otimizado para máxima eficiência",
      stat: "99.9%",
      statDesc: isEnglish ? "uptime guarantee" : "garantia de uptime",
    },
    {
      icon: Globe,
      title: isEnglish ? "Global Support" : "Suporte Global",
      description: isEnglish
        ? "24/7 support across multiple time zones"
        : "Suporte 24/7 em múltiplos fusos horários",
      stat: "24/7",
      statDesc: isEnglish ? "availability" : "disponibilidade",
    },
    {
      icon: Award,
      title: isEnglish ? "Quality Assured" : "Qualidade Garantida",
      description: isEnglish
        ? "ISO certified processes and procedures"
        : "Processos e procedimentos certificados ISO",
      stat: "ISO",
      statDesc: isEnglish ? "27001 certified" : "27001 certificado",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: isEnglish
        ? "Information Security"
        : "Segurança da Informação",
      year: "2020",
    },
    {
      name: "AWS Partner",
      description: isEnglish ? "Cloud Solutions" : "Soluções em Nuvem",
      year: "2019",
    },
    {
      name: "Microsoft Partner",
      description: isEnglish ? "Azure Certified" : "Azure Certificado",
      year: "2018",
    },
    {
      name: "Google Cloud",
      description: isEnglish ? "Partner Network" : "Rede de Parceiros",
      year: "2021",
    },
  ];

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish ? "Technology Stack" : "Stack de Tecnologia"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "We use cutting-edge technologies to build robust, scalable, and future-proof solutions."
                : "Utilizamos tecnologias de ponta para construir soluções robustas, escaláveis e preparadas para o futuro."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-800">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Differentials Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish ? "Why Choose Us" : "Por que Nos Escolher"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "Our competitive advantages that make us the ideal partner for your technology projects."
                : "Nossas vantagens competitivas que nos tornam o parceiro ideal para seus projetos de tecnologia."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-800 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {item.stat}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.statDesc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish
                ? "Certifications & Partnerships"
                : "Certificações & Parcerias"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "Industry certifications and strategic partnerships that validate our expertise."
                : "Certificações da indústria e parcerias estratégicas que validam nossa expertise."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-800 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {cert.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    {isEnglish ? "Since" : "Desde"} {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
