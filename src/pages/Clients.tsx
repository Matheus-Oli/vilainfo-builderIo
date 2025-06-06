import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";

const Clients = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.clients") === "Clients";
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const clients = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop",
      industry: isEnglish ? "Technology" : "Tecnologia",
    },
    {
      name: "InnovaTech",
      logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop",
      industry: isEnglish ? "Innovation" : "Inovação",
    },
    {
      name: "DataSoft",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
      industry: isEnglish ? "Software" : "Software",
    },
    {
      name: "CloudSystems",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=80&fit=crop",
      industry: isEnglish ? "Cloud Computing" : "Computação em Nuvem",
    },
    {
      name: "SecureNet",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=80&fit=crop",
      industry: isEnglish ? "Cybersecurity" : "Cibersegurança",
    },
    {
      name: "DigitalFlow",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=80&fit=crop",
      industry: isEnglish ? "Digital Solutions" : "Soluções Digitais",
    },
  ];

  const testimonials = isEnglish
    ? [
        {
          name: "Maria Silva",
          role: "CEO, TechCorp",
          company: "TechCorp",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b9c08b52?w=100&h=100&fit=crop&crop=face",
          content:
            "Vilainfo completely transformed our infrastructure. The support is exceptional and the results exceeded our expectations. I recommend them without hesitation!",
          rating: 5,
          project: "Cloud Infrastructure Migration",
        },
        {
          name: "João Santos",
          role: "CTO, InnovaTech",
          company: "InnovaTech",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          content:
            "High-level professionalism and technical expertise. The Vilainfo team delivered our project on time and within budget. Long-term partnership guaranteed!",
          rating: 5,
          project: "Custom Software Development",
        },
        {
          name: "Ana Costa",
          role: "IT Director, DataSoft",
          company: "DataSoft",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
          content:
            "The security implementation was perfect. Our company is now fully compliant with international standards thanks to Vilainfo's expertise.",
          rating: 5,
          project: "Security Audit & Implementation",
        },
        {
          name: "Carlos Lima",
          role: "Operations Manager, CloudSystems",
          company: "CloudSystems",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          content:
            "Exceptional 24/7 support. Whenever we need help, the Vilainfo team is always available with quick and effective solutions.",
          rating: 5,
          project: "24/7 Technical Support",
        },
        {
          name: "Luciana Oliveira",
          role: "CEO, SecureNet",
          company: "SecureNet",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
          content:
            "The digital transformation of our company was conducted with excellence. Vilainfo understood our needs and delivered beyond expectations.",
          rating: 5,
          project: "Digital Transformation",
        },
      ]
    : [
        {
          name: "Maria Silva",
          role: "CEO, TechCorp",
          company: "TechCorp",
          image:
            "https://images.unsplash.com/photo-1494790108755-2616b9c08b52?w=100&h=100&fit=crop&crop=face",
          content:
            "A Vilainfo transformou completamente nossa infraestrutura. O suporte é excepcional e os resultados superaram nossas expectativas. Recomendo sem hesitar!",
          rating: 5,
          project: "Migração de Infraestrutura Cloud",
        },
        {
          name: "João Santos",
          role: "CTO, InnovaTech",
          company: "InnovaTech",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
          content:
            "Profissionalismo e expertise técnica de alto nível. A equipe da Vilainfo entregou nosso projeto no prazo e dentro do orçamento. Parceria de longo prazo garantida!",
          rating: 5,
          project: "Desenvolvimento de Software Personalizado",
        },
        {
          name: "Ana Costa",
          role: "Diretora de TI, DataSoft",
          company: "DataSoft",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
          content:
            "A implementação de segurança foi perfeita. Nossa empresa agora está totalmente em conformidade com padrões internacionais graças à expertise da Vilainfo.",
          rating: 5,
          project: "Auditoria e Implementação de Segurança",
        },
        {
          name: "Carlos Lima",
          role: "Gerente de Operações, CloudSystems",
          company: "CloudSystems",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
          content:
            "Suporte 24/7 excepcional. Sempre que precisamos de ajuda, a equipe da Vilainfo está sempre disponível com soluções rápidas e eficazes.",
          rating: 5,
          project: "Suporte Técnico 24/7",
        },
        {
          name: "Luciana Oliveira",
          role: "CEO, SecureNet",
          company: "SecureNet",
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
          content:
            "A transformação digital da nossa empresa foi conduzida com excelência. A Vilainfo entendeu nossas necessidades e entregou além das expectativas.",
          rating: 5,
          project: "Transformação Digital",
        },
      ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "w-5 h-5",
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300 dark:text-gray-600",
        )}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {isEnglish ? "Our Clients" : "Nossos Clientes"}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              {isEnglish
                ? "Companies that trust Vilainfo for their technological solutions"
                : "Empresas que confiam na Vilainfo para suas soluções tecnológicas"}
            </p>
          </div>
        </section>

        {/* Clients Logos */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {isEnglish
                  ? "Companies We Work With"
                  : "Empresas com as Quais Trabalhamos"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {isEnglish
                  ? "We are proud to serve companies from various industries"
                  : "Temos orgulho de atender empresas de diversos segmentos"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div key={client.name} className="text-center group">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-16 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {client.industry}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {isEnglish
                  ? "What Our Clients Say"
                  : "O que Nossos Clientes Dizem"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {isEnglish
                  ? "Real testimonials from companies that have transformed their business with us"
                  : "Depoimentos reais de empresas que transformaram seus negócios conosco"}
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Client Image/Info */}
                    <div className="bg-gradient-to-br from-green-600 to-blue-600 p-12 flex flex-col justify-center items-center text-white relative">
                      <div className="absolute top-8 right-8">
                        <Quote className="w-12 h-12 text-white/20" />
                      </div>

                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white/20"
                      />

                      <h3 className="text-2xl font-bold mb-2 text-center">
                        {testimonials[currentTestimonial].name}
                      </h3>

                      <p className="text-lg mb-2 text-center opacity-90">
                        {testimonials[currentTestimonial].role}
                      </p>

                      <p className="text-sm opacity-80 text-center mb-4">
                        {testimonials[currentTestimonial].company}
                      </p>

                      <div className="bg-white/20 rounded-lg px-4 py-2">
                        <p className="text-sm font-medium">
                          {isEnglish ? "Project:" : "Projeto:"}{" "}
                          {testimonials[currentTestimonial].project}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="p-12 flex flex-col justify-center">
                      <div className="flex gap-1 mb-6">
                        {renderStars(testimonials[currentTestimonial].rating)}
                      </div>

                      <blockquote className="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-8 italic">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>

                      {/* Navigation */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTestimonial(index)}
                              className={cn(
                                "w-3 h-3 rounded-full transition-all duration-200",
                                index === currentTestimonial
                                  ? "bg-green-600"
                                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400",
                              )}
                            />
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            onClick={prevTestimonial}
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={nextTestimonial}
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {isEnglish ? "Success Stories" : "Histórias de Sucesso"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {isEnglish
                  ? "Real results that demonstrate our commitment to excellence"
                  : "Resultados reais que demonstram nosso compromisso com a excelência"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    95%
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {isEnglish ? "Cost Reduction" : "Redução de Custos"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {isEnglish
                      ? "Average cost reduction achieved by our clients after cloud migration"
                      : "Redução média de custos alcançada pelos nossos clientes após migração para cloud"}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    99.9%
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {isEnglish ? "Uptime" : "Disponibilidade"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {isEnglish
                      ? "System availability guaranteed by our infrastructure solutions"
                      : "Disponibilidade de sistemas garantida pelas nossas soluções de infraestrutura"}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    2x
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {isEnglish ? "Performance Boost" : "Aumento de Performance"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {isEnglish
                      ? "Average performance improvement in applications optimized by our team"
                      : "Melhoria média de performance em aplicações otimizadas pela nossa equipe"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {isEnglish
                  ? "Ready to be our next success story?"
                  : "Pronto para ser nossa próxima história de sucesso?"}
              </h2>
              <p className="text-xl mb-8">
                {isEnglish
                  ? "Join companies that have already transformed their business with Vilainfo"
                  : "Junte-se às empresas que já transformaram seus negócios com a Vilainfo"}
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                {isEnglish ? "Start Your Project" : "Iniciar Seu Projeto"}
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Clients;
