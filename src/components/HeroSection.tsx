import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Shield } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const rotatingWords = [
    "tecnológicas",
    "personalizadas",
    "inteligentes",
    "modernas",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "hero min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 lg:px-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
    >
      <div className="hero__container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div
          className={cn(
            "hero__content space-y-8 text-center lg:text-left transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="hero__title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Soluções{" "}
            <span className="hero__rotating-word relative">
              <span className="text-green-600 relative z-10">
                {rotatingWords[currentWordIndex]}
              </span>
              <span className="absolute inset-0 bg-green-100 rounded-lg -z-10 animate-pulse"></span>
            </span>
            <br />
            para o seu negócio
          </h1>

          <p className="hero__subtitle text-xl text-gray-600 max-w-2xl">
            Transformamos ideias em soluções digitais eficientes com mais de 30
            anos de experiência em tecnologia
          </p>

          <div className="hero__cta">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div
          className={cn(
            "hero__image relative transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="hero__image-wrapper relative">
            <div className="hero__illustration bg-gradient-to-tr from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="hero__icon-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
                  <Code className="w-12 h-12 text-white" />
                </div>
                <div className="hero__icon-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
                  <Cloud className="w-12 h-12 text-white" />
                </div>
                <div className="hero__icon-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <div className="hero__icon-card bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xl">
                      24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="hero__floating-elements absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="hero__floating-elements absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Statistics Counters */}
      <div
        className={cn(
          "hero__stats absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 transition-all duration-700 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="hero__stats-container bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="hero__stat-item">
              <div className="text-3xl font-bold text-green-600">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-gray-600 mt-2">anos de experiência</p>
            </div>
            <div className="hero__stat-item">
              <div className="text-3xl font-bold text-green-600">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-gray-600 mt-2">projetos entregues</p>
            </div>
            <div className="hero__stat-item">
              <div className="text-3xl font-bold text-green-600">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-gray-600 mt-2">clientes satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
