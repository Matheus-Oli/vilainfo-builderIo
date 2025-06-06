import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Users,
  Clock,
  TrendingUp,
  Cpu,
  CheckCircle,
  Target,
  Award,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const differentials = [
    {
      icon: CheckCircle,
      text: "Metodologia ágil",
    },
    {
      icon: Users,
      text: "Equipe multidisciplinar",
    },
    {
      icon: Clock,
      text: "Suporte 24/7",
    },
    {
      icon: TrendingUp,
      text: "ROI comprovado",
    },
    {
      icon: Cpu,
      text: "Tecnologias modernas",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Agilidade",
      description:
        "Entregamos resultados rápidos com metodologias eficientes e processos otimizados.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBgColor: "group-hover:bg-blue-600",
      hoverIconColor: "group-hover:text-white",
    },
    {
      icon: Award,
      title: "Experiência",
      description:
        "Mais de 30 anos no mercado, com expertise comprovada em diversas tecnologias.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      hoverBgColor: "group-hover:bg-green-600",
      hoverIconColor: "group-hover:text-white",
    },
    {
      icon: Target,
      title: "Qualidade",
      description:
        "Padrões elevados de qualidade em todos os projetos, garantindo excelência.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverBgColor: "group-hover:bg-purple-600",
      hoverIconColor: "group-hover:text-white",
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description:
        "Foco em resultados mensuráveis que impactem positivamente seu negócio.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverBgColor: "group-hover:bg-orange-600",
      hoverIconColor: "group-hover:text-white",
    },
  ];

  return (
    <section
      ref={ref}
      className="why-choose-us py-20 bg-white"
      id="diferenciais"
    >
      <div className="why-choose-us__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "why-choose-us__header text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="why-choose-us__title text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Vilainfo?
          </h2>
          <p className="why-choose-us__subtitle text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos experiência, inovação e resultados para entregar as
            melhores soluções tecnológicas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Differentials List */}
          <div
            className={cn(
              "why-choose-us__differentials transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Nossos Diferenciais
            </h3>

            <ul className="why-choose-us__list space-y-6">
              {differentials.map((differential, index) => {
                const Icon = differential.icon;
                return (
                  <li
                    key={differential.text}
                    className={cn(
                      "why-choose-us__list-item flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-300",
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8",
                    )}
                    style={{
                      transitionDelay: isVisible
                        ? `${300 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div className="why-choose-us__list-icon w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">
                      {differential.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Feature Cards */}
          <div
            className={cn(
              "why-choose-us__features transition-all duration-700 delay-400",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className={cn(
                      "why-choose-us__feature-card group cursor-pointer border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 ease-out",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8",
                    )}
                    style={{
                      transitionDelay: isVisible
                        ? `${500 + index * 100}ms`
                        : "0ms",
                    }}
                  >
                    <CardHeader className="why-choose-us__card-header pb-4">
                      <div
                        className={cn(
                          "why-choose-us__icon-wrapper w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300",
                          feature.bgColor,
                          feature.hoverBgColor,
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-8 h-8 transition-all duration-300",
                            feature.iconColor,
                            feature.hoverIconColor,
                          )}
                        />
                      </div>
                      <CardTitle className="why-choose-us__card-title text-xl font-bold text-gray-900">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="why-choose-us__card-content pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
