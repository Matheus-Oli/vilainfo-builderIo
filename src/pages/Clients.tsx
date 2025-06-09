import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { ArrowRight, TrendingUp, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import ClientShowcase from "../components/ClientShowcase";
import TestimonialsSection from "../components/TestimonialsSection";

const Clients = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.clients") === "Clients";

  const industries = [
    {
      name: isEnglish ? "Technology" : "Tecnologia",
      count: "25+",
      icon: "🚀",
      description: isEnglish
        ? "From startups to enterprise software companies"
        : "De startups a empresas de software empresarial",
    },
    {
      name: isEnglish ? "Healthcare" : "Saúde",
      count: "15+",
      icon: "🏥",
      description: isEnglish
        ? "Digital health solutions and medical platforms"
        : "Soluções de saúde digital e plataformas médicas",
    },
    {
      name: isEnglish ? "Finance" : "Finanças",
      count: "20+",
      icon: "💰",
      description: isEnglish
        ? "Banking, fintech, and financial services"
        : "Bancário, fintech e serviços financeiros",
    },
    {
      name: isEnglish ? "Retail & E-commerce" : "Varejo & E-commerce",
      count: "30+",
      icon: "🛒",
      description: isEnglish
        ? "Online stores and retail management systems"
        : "Lojas online e sistemas de gestão de varejo",
    },
    {
      name: isEnglish ? "Manufacturing" : "Manufatura",
      count: "12+",
      icon: "🏭",
      description: isEnglish
        ? "Industrial automation and IoT solutions"
        : "Automação industrial e soluções IoT",
    },
    {
      name: isEnglish ? "Education" : "Educação",
      count: "18+",
      icon: "🎓",
      description: isEnglish
        ? "Learning management and educational platforms"
        : "Gestão de aprendizado e plataformas educacionais",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "200+",
      label: isEnglish ? "Happy Clients" : "Clientes Satisfeitos",
      description: isEnglish
        ? "Companies that trust our expertise"
        : "Empresas que confiam em nossa expertise",
    },
    {
      icon: Globe,
      value: "15+",
      label: isEnglish ? "Countries" : "Países",
      description: isEnglish
        ? "Global reach and presence"
        : "Alcance e presença global",
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: isEnglish ? "Average ROI" : "ROI Médio",
      description: isEnglish
        ? "Return on investment for our clients"
        : "Retorno sobre investimento para nossos clientes",
    },
    {
      icon: Award,
      value: "99%",
      label: isEnglish ? "Success Rate" : "Taxa de Sucesso",
      description: isEnglish
        ? "Project completion and satisfaction"
        : "Conclusão de projetos e satisfação",
    },
  ];

  const successMetrics = [
    {
      metric: "95%",
      description: isEnglish
        ? "Average cost reduction"
        : "Redução média de custos",
      icon: "💰",
    },
    {
      metric: "99.9%",
      description: isEnglish
        ? "System uptime achieved"
        : "Uptime de sistema alcançado",
      icon: "⚡",
    },
    {
      metric: "2x",
      description: isEnglish
        ? "Performance improvement"
        : "Melhoria de performance",
      icon: "📈",
    },
    {
      metric: "24/7",
      description: isEnglish
        ? "Support availability"
        : "Disponibilidade de suporte",
      icon: "🛠️",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-green-900/90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
            alt="Clients Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            {isEnglish ? "Our Clients" : "Nossos Clientes"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed"
          >
            {isEnglish
              ? "We've partnered with forward-thinking companies, from innovative startups to Fortune 100 corporations, delivering exceptional results across industries."
              : "Firmamos parcerias com empresas visionárias, desde startups inovadoras até corporações Fortune 100, entregando resultados excepcionais em diversos setores."}
          </motion.p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish ? "Industries We Serve" : "Setores que Atendemos"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "Our expertise spans across multiple industries, delivering tailored solutions that address unique sector challenges."
                : "Nossa expertise abrange múltiplos setores, entregando soluções personalizadas que abordam desafios únicos de cada setor."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 group-hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {industry.count}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish
                ? "Client Success Stories"
                : "Histórias de Sucesso dos Clientes"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "Real projects, real results. See how we've helped organizations transform their business through technology."
                : "Projetos reais, resultados reais. Veja como ajudamos organizações a transformar seus negócios através da tecnologia."}
            </motion.p>
          </div>

          <ClientShowcase />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish ? "Proven Results" : "Resultados Comprovados"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "Our track record speaks for itself. Here are the measurable impacts we've delivered for our clients."
                : "Nosso histórico fala por si só. Aqui estão os impactos mensuráveis que entregamos para nossos clientes."}
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-green-100 dark:border-green-900/30 group-hover:border-green-200 dark:group-hover:border-green-800 transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400 mb-4">
                    {item.metric}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call to Action */}
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
              ? "Ready to Join Our Success Stories?"
              : "Pronto para Ser Nossa Próxima História de Sucesso?"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 leading-relaxed"
          >
            {isEnglish
              ? "Join the companies that have already transformed their business with Vilainfo. Let's discuss your project and create the next success story together."
              : "Junte-se às empresas que já transformaram seus negócios com a Vilainfo. Vamos discutir seu projeto e criar a próxima história de sucesso juntos."}
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
              {isEnglish ? "Start Your Project" : "Iniciar Seu Projeto"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm"
            >
              {isEnglish ? "Download Case Studies" : "Baixar Estudos de Caso"}
            </Button>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default Clients;
