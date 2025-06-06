import { useLanguage } from "@/contexts/AppContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cloud,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  Check,
} from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Soluções personalizadas para web, mobile e desktop",
      features: [
        "Aplicações Web Responsivas",
        "Desenvolvimento Mobile (iOS/Android)",
        "Sistemas Desktop",
        "APIs e Microserviços",
        "Integração de Sistemas",
        "E-commerce Personalizado",
      ],
      technologies: ["React", "Node.js", "Python", "Flutter", ".NET", "PHP"],
    },
    {
      icon: Cloud,
      title: "Cloud & Infraestrutura",
      description: "Modernização e otimização da sua infraestrutura de TI",
      features: [
        "Migração para Cloud",
        "AWS, Azure, Google Cloud",
        "DevOps e CI/CD",
        "Monitoramento 24/7",
        "Backup e Disaster Recovery",
        "Otimização de Performance",
      ],
      technologies: [
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
      ],
    },
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Proteção completa dos seus dados e sistemas",
      features: [
        "Auditoria de Segurança",
        "Implementação ISO 27001",
        "Gestão de Vulnerabilidades",
        "Compliance LGPD",
        "Segurança em Cloud",
        "Treinamento de Equipes",
      ],
      technologies: [
        "SIEM",
        "Firewall",
        "VPN",
        "SSL/TLS",
        "Multi-factor Auth",
        "Encryption",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Técnico",
      description: "Suporte especializado quando você mais precisa",
      features: [
        "Suporte 24/7",
        "Help Desk Multilíngue",
        "Manutenção Preventiva",
        "SLA Garantido",
        "Monitoramento Proativo",
        "Relatórios Detalhados",
      ],
      technologies: [
        "ServiceNow",
        "Zendesk",
        "ITIL",
        "Monitoring Tools",
        "Remote Support",
        "Ticketing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Soluções tecnológicas completas para transformar seu negócio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                >
                  <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          O que oferecemos:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Tecnologias utilizadas:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Metodologia
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Processo estruturado para garantir qualidade e resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análise",
                description: "Entendemos suas necessidades e objetivos",
              },
              {
                step: "02",
                title: "Planejamento",
                description: "Desenvolvemos a estratégia e arquitetura ideal",
              },
              {
                step: "03",
                title: "Desenvolvimento",
                description: "Implementamos a solução com metodologia ágil",
              },
              {
                step: "04",
                title: "Entrega",
                description: "Realizamos testes, deploy e treinamento",
              },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato conosco e descubra como podemos ajudar
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
