import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/AppContext";

interface ServiceCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  index: number;
  featured?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  technologies,
  index,
  featured = false,
}: ServiceCardProps) => {
  const { t } = useLanguage();
  const isEnglish = t("nav.services") === "Services";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className={`relative h-full bg-white dark:bg-gray-800 rounded-3xl border-2 transition-all duration-500 ${
          featured
            ? "border-green-200 dark:border-green-800 shadow-2xl scale-105"
            : "border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:border-green-200 dark:hover:border-green-800"
        } group-hover:scale-105 overflow-hidden`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-6 right-6 z-10">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {isEnglish ? "Most Popular" : "Mais Popular"}
            </div>
          </div>
        )}

        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 p-8">
          {/* Icon and Header */}
          <div className="mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                featured
                  ? "bg-gradient-to-br from-green-500 to-blue-500 text-white"
                  : "bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-600 dark:text-green-400"
              } group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              {isEnglish ? "What's Included:" : "O que está Incluído:"}
            </h4>
            <ul className="space-y-3">
              {features.slice(0, 4).map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1 + featureIndex * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              {isEnglish ? "Technologies:" : "Tecnologias:"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className={`w-full group/btn ${
              featured
                ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0"
                : "bg-white dark:bg-gray-700 hover:bg-green-50 dark:hover:bg-green-900/20 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-700"
            } transition-all duration-300`}
          >
            <span>{isEnglish ? "Get Started" : "Começar Agora"}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
