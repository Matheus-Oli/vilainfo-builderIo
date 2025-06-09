import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

const MethodologySection = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.services") === "Services";

  const steps = [
    {
      icon: Search,
      number: "01",
      title: isEnglish ? "Discovery & Analysis" : "Descoberta & Análise",
      description: isEnglish
        ? "We deep dive into your business goals, challenges, and requirements to understand exactly what you need."
        : "Mergulhamos profundamente em seus objetivos de negócio, desafios e requisitos para entender exatamente o que você precisa.",
      duration: isEnglish ? "1-2 weeks" : "1-2 semanas",
    },
    {
      icon: PenTool,
      number: "02",
      title: isEnglish ? "Strategy & Design" : "Estratégia & Design",
      description: isEnglish
        ? "We create a comprehensive strategy and design the architecture that will deliver optimal results for your project."
        : "Criamos uma estratégia abrangente e projetamos a arquitetura que entregará resultados ótimos para seu projeto.",
      duration: isEnglish ? "2-3 weeks" : "2-3 semanas",
    },
    {
      icon: Code,
      number: "03",
      title: isEnglish ? "Development & Testing" : "Desenvolvimento & Testes",
      description: isEnglish
        ? "Our expert developers build your solution using agile methodology with continuous testing and quality assurance."
        : "Nossos desenvolvedores especialistas constroem sua solução usando metodologia ágil com testes contínuos e garantia de qualidade.",
      duration: isEnglish ? "4-12 weeks" : "4-12 semanas",
    },
    {
      icon: Rocket,
      number: "04",
      title: isEnglish ? "Launch & Support" : "Lançamento & Suporte",
      description: isEnglish
        ? "We deploy your solution and provide ongoing support to ensure everything runs smoothly and performs optimally."
        : "Implantamos sua solução e fornecemos suporte contínuo para garantir que tudo funcione perfeitamente e tenha performance otimizada.",
      duration: isEnglish ? "Ongoing" : "Contínuo",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {isEnglish ? "How We Work" : "Como Trabalhamos"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {isEnglish
              ? "Our proven methodology ensures successful project delivery from conception to launch and beyond."
              : "Nossa metodologia comprovada garante a entrega bem-sucedida de projetos desde a concepção até o lançamento e além."}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-blue-200 to-green-200 dark:from-green-800 dark:via-blue-800 dark:to-green-800"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative z-10">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {step.duration}
                    </div>
                  </div>

                  {/* Connection Line for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full z-20 shadow-lg"></div>
                  )}

                  {/* Connection Line for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-500 to-blue-500"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {isEnglish
              ? "Ready to start your project with our proven methodology?"
              : "Pronto para iniciar seu projeto com nossa metodologia comprovada?"}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isEnglish ? "Start Your Project" : "Iniciar Seu Projeto"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
