import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Target,
  Award,
  Users,
  Lightbulb,
  Shield,
  Zap,
  Heart,
  Globe,
} from "lucide-react";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import Timeline from "../components/Timeline";
import CompanyStats from "../components/CompanyStats";
import TeamSection from "../components/TeamSection";

const About = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.about") === "About Us";

  const values = [
    {
      icon: Target,
      title: isEnglish ? "Our Mission" : "Nossa Missão",
      description: isEnglish
        ? "Transform ideas into innovative digital solutions that drive our clients' growth and competitive advantage through efficient technology integration."
        : "Transformar ideias em soluções digitais inovadoras que impulsionem o crescimento e vantagem competitiva dos nossos clientes através da integração eficiente de tecnologias.",
    },
    {
      icon: Award,
      title: isEnglish ? "Our Vision" : "Nossa Visão",
      description: isEnglish
        ? "Be a reference in technological solutions, recognized for excellence, innovation and the ability to turn data into valuable business information."
        : "Ser referência em soluções tecnológicas, reconhecida pela excelência, inovação e capacidade de transformar dados em informações valiosas para negócios.",
    },
    {
      icon: Heart,
      title: isEnglish ? "Our Values" : "Nossos Valores",
      description: isEnglish
        ? "Integrity, quality, innovation and commitment to exceptional results, always keeping the client at the center of our decisions."
        : "Integridade, qualidade, inovação e compromisso com resultados excepcionais, sempre mantendo o cliente no centro de nossas decisões.",
    },
    {
      icon: Lightbulb,
      title: isEnglish ? "Innovation" : "Inovação",
      description: isEnglish
        ? "We constantly seek new technologies and methodologies to deliver increasingly efficient and modern solutions."
        : "Buscamos constantemente novas tecnologias e metodologias para entregar soluções cada vez mais eficientes e modernas.",
    },
    {
      icon: Shield,
      title: isEnglish ? "Security" : "Segurança",
      description: isEnglish
        ? "Information security is a priority, ensuring data protection and system integrity in all our solutions."
        : "A segurança da informação é prioridade, garantindo proteção de dados e integridade dos sistemas em todas as nossas soluções.",
    },
    {
      icon: Users,
      title: isEnglish ? "Collaboration" : "Colaboração",
      description: isEnglish
        ? "We work as partners with our clients, building lasting relationships based on trust and mutual success."
        : "Trabalhamos como parceiros dos nossos clientes, construindo relacionamentos duradouros baseados em confiança e sucesso mútuo.",
    },
    {
      icon: Zap,
      title: isEnglish ? "Efficiency" : "Eficiência",
      description: isEnglish
        ? "We optimize processes and resources to deliver maximum value in the shortest possible time."
        : "Otimizamos processos e recursos para entregar o máximo valor no menor tempo possível.",
    },
    {
      icon: Globe,
      title: isEnglish ? "Sustainability" : "Sustentabilidade",
      description: isEnglish
        ? "We develop solutions that consider environmental and social impact, contributing to a more sustainable future."
        : "Desenvolvemos soluções que consideram o impacto ambiental e social, contribuindo para um futuro mais sustentável.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              {isEnglish ? "About Vilainfo" : "Sobre a Vilainfo"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            >
              {isEnglish
                ? "30 years transforming businesses through technology, integrating applications and turning data into valuable information"
                : "30 anos transformando negócios através da tecnologia, integrando aplicações e transformando dados em informações valiosas"}
            </motion.p>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {isEnglish
                  ? "Numbers that Tell Our Story"
                  : "Números que Contam Nossa História"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {isEnglish
                  ? "Results achieved throughout our three-decade journey"
                  : "Resultados conquistados ao longo de nossa jornada de três décadas"}
              </motion.p>
            </div>

            <CompanyStats />
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {isEnglish
                    ? "We Are Much More Than a Platform"
                    : "Somos Muito Mais que uma Plataforma"}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    {isEnglish
                      ? "Vilainfo specializes in integrating applications and distinct platforms, transforming data from various systems into valuable information. We commercialize software and associated technical services, aiming to add value to our clients' data and provide real competitive advantages through information liquidity."
                      : "A Vilainfo é especializada em integrar aplicações e plataformas distintas, transformando dados de diversos sistemas em informações valiosas. Comercializamos softwares e serviços técnicos associados, visando agregar valor aos dados de nossos clientes e conferir diferenciais competitivos reais por meio da liquidez das informações."}
                  </p>
                  <p>
                    {isEnglish
                      ? "Our solutions seek to increase efficiency, productivity and competitive advantage of corporations, extending their reach capacity. We maintain active relationship and communication processes with clients, identifying their needs and offering personalized solutions."
                      : "Nossas soluções buscam aumentar a eficiência, produtividade e vantagem competitiva das corporações, estendendo sua capacidade de alcance. Mantemos um processo ativo de relacionamento e comunicação com os clientes, identificando suas necessidades e oferecendo soluções personalizadas."}
                  </p>
                  <p>
                    {isEnglish
                      ? "We have a software factory with experienced designers, developers and project architects, using our own methodology for system development and project management."
                      : "Possuímos uma fábrica de software com projetistas experientes, desenvolvedores e arquitetos de projeto, utilizando metodologia própria de desenvolvimento de sistemas e gerenciamento de projetos."}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt={isEnglish ? "Vilainfo Team" : "Equipe Vilainfo"}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500 rounded-full opacity-60"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {isEnglish ? "Our Journey" : "Nossa Trajetória"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {isEnglish
                  ? "Key milestones that shaped our evolution and growth"
                  : "Marcos importantes que moldaram nossa evolução e crescimento"}
              </motion.p>
            </div>

            <Timeline />
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {isEnglish ? "Our Pillars" : "Nossos Pilares"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                {isEnglish
                  ? "The values and principles that guide us and define our identity as a company"
                  : "Os valores e princípios que nos guiam e definem nossa identidade como empresa"}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 h-full group hover:scale-105">
                      <CardHeader className="pb-4">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DELOREAN Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:30px_30px]"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-bold mb-4"
                  >
                    {isEnglish ? "DELOREAN ERP System" : "Sistema ERP DELOREAN"}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-xl opacity-90 max-w-3xl mx-auto"
                  >
                    {isEnglish
                      ? "Our flagship ERP system focused on Commerce, Fleet Management, Asset Leasing and Financial Management"
                      : "Nosso sistema ERP principal focado em Comércio, Gestão de Frotas, Locação de Bens e Gestão Financeira"}
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      100%
                    </div>
                    <div className="text-lg opacity-90">
                      {isEnglish ? "Customizable" : "Personalizável"}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      24/7
                    </div>
                    <div className="text-lg opacity-90">
                      {isEnglish ? "Support" : "Suporte"}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      10+
                    </div>
                    <div className="text-lg opacity-90">
                      {isEnglish ? "Years Active" : "Anos Ativo"}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      50+
                    </div>
                    <div className="text-lg opacity-90">
                      {isEnglish ? "Companies Using" : "Empresas Usando"}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TeamSection />
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                    alt={isEnglish ? "Company Culture" : "Cultura da Empresa"}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {isEnglish
                    ? "Helping People in the Search for Truth"
                    : "Ajudar as Pessoas na Busca pela Verdade"}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  <p>
                    {isEnglish
                      ? "We believe that business success starts with the right information. Our mission goes beyond providing technology; we help companies discover truths hidden in their data."
                      : "Acreditamos que o sucesso nos negócios começa com a informação certa. Nossa missão vai além de fornecer tecnologia; ajudamos empresas a descobrir verdades escondidas em seus dados."}
                  </p>
                  <p>
                    {isEnglish
                      ? "We create an environment where innovation flourishes, where each team member can contribute their unique talent to build exceptional solutions."
                      : "Criamos um ambiente onde a inovação floresce, onde cada membro da equipe pode contribuir com seu talento único para construir soluções excepcionais."}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default About;
