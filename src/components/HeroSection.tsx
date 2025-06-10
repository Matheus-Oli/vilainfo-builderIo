import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/AppContext";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  const rotatingWords = [
    t("words.technological"),
    t("words.personalized"),
    t("words.intelligent"),
    t("words.modern"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section
      ref={ref}
      className={cn(
        "hero relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-700 pt-16 lg:pt-20",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      id="inicio"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&crop=faces")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero__container max-w-7xl mx-auto text-center lg:text-left">
        {/* Hero Content */}
        <div
          className={cn(
            "hero__content space-y-6 lg:space-y-8 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h1 className="hero__title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto lg:mx-0">
            {t("hero.title.solutions")}{" "}
            <span className="hero__rotating-word relative">
              <span className="text-green-400 relative z-10 drop-shadow-lg">
                {rotatingWords[currentWordIndex]}
              </span>
              <span className="absolute inset-0 bg-green-500/20 rounded-lg -z-10 animate-pulse blur-sm"></span>
            </span>
            <br />
            {t("hero.title.for")}
          </h1>

          <p className="hero__subtitle text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
            {t("hero.subtitle")}
          </p>

          <div className="hero__cta flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start px-4 lg:px-0">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto min-w-[200px]"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 dark:border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto min-w-[200px] backdrop-blur-sm"
            >
              {t("hero.cta.secondary")}
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics Counters */}
      <div
        className={cn(
          "hero__stats absolute bottom-4 sm:bottom-8 lg:bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4 transition-all duration-700 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        <div className="hero__stats-container bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-2xl p-3 sm:p-4 lg:p-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 text-center">
            <div className="hero__stat-item">
              <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                {t("hero.stats.years")}
              </p>
            </div>
            <div className="hero__stat-item">
              <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                {t("hero.stats.projects")}
              </p>
            </div>
            <div className="hero__stat-item">
              <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm lg:text-base font-medium leading-tight">
                {t("hero.stats.clients")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
