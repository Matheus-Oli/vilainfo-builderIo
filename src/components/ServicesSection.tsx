import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Cloud, Shield, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t("services.development.title"),
      description: t("services.development.description"),
      items: [
        "Aplicações Web Responsivas",
        "Sistemas Empresariais",
        "APIs e Integrações",
        "Mobile Apps",
      ],
    },
    {
      icon: Cloud,
      title: t("services.cloud.title"),
      description: t("services.cloud.description"),
      items: [
        "Migração para Cloud",
        "AWS, Azure, Google Cloud",
        "DevOps e CI/CD",
        "Monitoramento 24/7",
      ],
    },
    {
      icon: Shield,
      title: t("services.security.title"),
      description: t("services.security.description"),
      items: [
        "Auditoria de Segurança",
        "Implementação ISO 27001",
        "Backup e Recovery",
        "Compliance LGPD",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: t("services.support.title"),
      description: t("services.support.description"),
      items: [
        "Suporte 24/7",
        "Manutenção Preventiva",
        "Help Desk Especializado",
        "SLA Garantido",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="services py-20 bg-white dark:bg-gray-900"
      id="servicos"
    >
      <div className="services__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "services__header text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="services__title text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="services__subtitle text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="services__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className={cn(
                  "services__card group cursor-pointer border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <CardHeader className="services__card-header text-center pb-4">
                  <div className="services__icon-wrapper mx-auto w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="services__card-title text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="services__card-description text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="services__card-content pt-0">
                  <ul className="services__list space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="services__list-item flex items-start gap-2 text-sm text-gray-700"
                      >
                        <div className="services__bullet w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
