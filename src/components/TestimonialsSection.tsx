import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9c08b52?w=80&h=80&fit=crop&crop=face",
      content:
        "A Vilainfo transformou completamente nossa infraestrutura. O suporte é excepcional e os resultados superaram nossas expectativas. Recomendo sem hesitar!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "CTO, InnovaTech",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content:
        "Profissionalismo e expertise técnica de alto nível. A equipe da Vilainfo entregou nosso projeto no prazo e dentro do orçamento. Parceria de longo prazo garantida!",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "w-5 h-5",
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300",
        )}
      />
    ));
  };

  return (
    <section
      ref={ref}
      className="testimonials py-20 bg-gray-50"
      id="depoimentos"
    >
      <div className="testimonials__container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "testimonials__header text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="testimonials__title text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="testimonials__subtitle text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os depoimentos de quem já confia na Vilainfo para suas soluções
            tecnológicas
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials__grid grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={cn(
                "testimonials__card relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
              )}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : "0ms",
              }}
            >
              <CardContent className="testimonials__card-content p-8">
                {/* Quote Icon */}
                <div className="testimonials__quote-icon absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-green-200" />
                </div>

                {/* Stars Rating */}
                <div className="testimonials__rating flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="testimonials__content text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="testimonials__client flex items-center gap-4">
                  <div className="testimonials__avatar">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="testimonials__client-info">
                    <h4 className="testimonials__client-name font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="testimonials__client-role text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-50 to-transparent rounded-tl-full -z-10"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
