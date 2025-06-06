import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="about py-16 lg:py-20 bg-gray-50"
      id="quem-somos"
    >
      <div className="about__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={cn(
              "about__image order-2 lg:order-1 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8",
            )}
          >
            <div className="about__image-wrapper relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=faces"
                alt="Equipe Vilainfo trabalhando em soluções tecnológicas"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    30+
                  </div>
                  <div className="text-sm text-gray-600">Anos de</div>
                  <div className="text-sm text-gray-600">Experiência</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "about__content order-1 lg:order-2 transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            )}
          >
            <h2 className="about__title text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quem é a <span className="text-green-600">Vilainfo</span>
            </h2>

            <div className="about__description space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Somos uma empresa especializada em soluções tecnológicas, com
                mais de 30 anos de experiência no mercado. Nossa missão é
                transformar ideias em realidade digital oferecendo serviços de
                desenvolvimento, segurança e infraestrutura de TI com excelência
                e inovação.
              </p>

              <p>
                Trabalhamos com as mais modernas tecnologias e metodologias
                ágeis, garantindo entregas de qualidade no prazo estabelecido.
              </p>
            </div>

            <Button
              size="lg"
              className="about__cta bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Saiba Mais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
