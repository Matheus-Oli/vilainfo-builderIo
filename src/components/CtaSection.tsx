import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/AppContext";
import { cn } from "@/lib/utils";

const CtaSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      className="cta relative py-20 bg-gradient-to-r from-green-500 via-green-600 to-blue-600 overflow-hidden"
      id="contato"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full"></div>
      </div>

      <div className="cta__container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div
          className={cn(
            "cta__content transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="cta__title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t("cta.title")}
          </h2>

          <p className="cta__subtitle text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>
          {/* CTA Buttons */}
          <div
            className={cn(
              "cta__buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="cta__primary-btn bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[200px]"
              >
                {t("cta.primary")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="cta__secondary-btn border-2 border-white text-white bg-white/10 hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-[200px] backdrop-blur-sm"
              >
                {t("cta.secondary")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className={cn(
            "cta__contact-info grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="cta__contact-item flex flex-col items-center text-white">
            <Phone className="w-8 h-8 mb-3 text-white/90" />
            <span className="text-lg font-semibold">(27) 99999-9999</span>
          </div>

          <div className="cta__contact-item flex flex-col items-center text-white">
            <div className="w-8 h-8 mb-3 flex items-center justify-center">
              <span className="text-2xl">@</span>
            </div>
            <span className="text-lg font-semibold">
              contato@vilainfo.com.br
            </span>
          </div>

          <div className="cta__contact-item flex flex-col items-center text-white">
            <MapPin className="w-8 h-8 mb-3 text-white/90" />
            <span className="text-lg font-semibold">Vila Velha, ES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
