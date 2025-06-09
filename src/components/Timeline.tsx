import { motion } from "framer-motion";
import { Calendar, Award, Rocket, Target, Users, Building } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  milestone?: boolean;
}

const Timeline = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.about") === "About Us";

  const timelineData: TimelineItem[] = [
    {
      year: "1994",
      title: isEnglish ? "Foundation" : "Fundação",
      description: isEnglish
        ? "Vilainfo was founded with the mission to democratize access to technology and help companies adapt to the digital age."
        : "A Vilainfo foi fundada com a missão de democratizar o acesso à tecnologia e ajudar empresas a se adaptarem à era digital.",
      icon: Rocket,
      milestone: true,
    },
    {
      year: "2000",
      title: isEnglish ? "First Decade" : "Primeira Década",
      description: isEnglish
        ? "Consolidation in the market with focus on corporate solutions and strategic partnerships."
        : "Consolidação no mercado com foco em soluções corporativas e parcerias estratégicas.",
      icon: Building,
    },
    {
      year: "2005",
      title: isEnglish ? "Technology Expansion" : "Expansão Tecnológica",
      description: isEnglish
        ? "Development of the software factory with experienced designers, developers and project architects."
        : "Desenvolvimento da fábrica de software com projetistas experientes, desenvolvedores e arquitetos de projeto.",
      icon: Users,
    },
    {
      year: "2010",
      title: isEnglish ? "DELOREAN Launch" : "Lançamento do DELOREAN",
      description: isEnglish
        ? "Launch of DELOREAN ERP system focused on Commerce, Fleet Management, Asset Leasing and Financial Management."
        : "Lançamento do sistema ERP DELOREAN focado em Comércio, Gestão de Frotas, Locação de Bens e Gestão Financeira.",
      icon: Target,
      milestone: true,
    },
    {
      year: "2015",
      title: isEnglish ? "Digital Transformation" : "Transformação Digital",
      description: isEnglish
        ? "Specialized consultancy in Information Technology, including analysis, development, support and systems documentation."
        : "Consultoria especializada em Tecnologia da Informação, incluindo análise, desenvolvimento, suporte e documentação de sistemas.",
      icon: Award,
    },
    {
      year: "2020",
      title: isEnglish ? "Innovation Era" : "Era da Inovação",
      description: isEnglish
        ? "Implementation of agile methodologies and modern technologies to ensure quality deliveries on schedule."
        : "Implementação de metodologias ágeis e tecnologias modernas para garantir entregas de qualidade no prazo.",
      icon: Calendar,
    },
    {
      year: "2024",
      title: isEnglish ? "Present Day" : "Atualidade",
      description: isEnglish
        ? "30 years transforming business through technology, serving from startups to large corporations."
        : "30 anos transformando negócios através da tecnologia, atendendo desde startups até grandes corporações.",
      icon: Building,
      milestone: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-green-500 dark:from-green-400 dark:via-blue-400 dark:to-green-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Icon Container */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                    item.milestone
                      ? "bg-gradient-to-br from-green-500 to-blue-500 border-white dark:border-gray-900 text-white"
                      : "bg-white dark:bg-gray-800 border-green-500 dark:border-green-400 text-green-600 dark:text-green-400"
                  } shadow-lg`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div
                    className={`rounded-2xl p-6 ${
                      item.milestone
                        ? "bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-800"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    } shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                          item.milestone
                            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                            : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        }`}
                      >
                        {item.year}
                      </span>
                      {item.milestone && (
                        <span className="inline-block px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium rounded-full">
                          {isEnglish ? "Milestone" : "Marco"}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`text-xl font-bold mb-3 ${
                        item.milestone
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
