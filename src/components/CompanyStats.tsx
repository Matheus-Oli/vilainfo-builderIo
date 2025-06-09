import { motion } from "framer-motion";
import { Users, Award, Calendar, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import AnimatedCounter from "./AnimatedCounter";

const CompanyStats = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.about") === "About Us";

  const stats = [
    {
      icon: Calendar,
      value: 30,
      suffix: "+",
      label: isEnglish ? "Years of Experience" : "Anos de Experiência",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      value: 2000,
      suffix: "+",
      label: isEnglish ? "Companies Served" : "Empresas Atendidas",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Award,
      value: 200,
      suffix: "+",
      label: isEnglish ? "Projects Delivered" : "Projetos Entregues",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: isEnglish ? "Client Satisfaction" : "Satisfação dos Clientes",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-800">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Number */}
              <div className="flex items-baseline gap-1 mb-2">
                <AnimatedCounter
                  value={stat.value}
                  className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                />
                <span
                  className={`text-2xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>

              {/* Hover Effect Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CompanyStats;
