import { useLanguage } from "@/contexts/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Target, Clock } from "lucide-react";
import Header from "../components/Header";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("nav.about") === "About Us" ? "Our Mission" : "Nossa Missão",
      description:
        t("nav.about") === "About Us"
          ? "Transform ideas into innovative digital solutions that drive our clients' growth."
          : "Transformar ideias em soluções digitais inovadoras que impulsionem o crescimento dos nossos clientes.",
    },
    {
      icon: Award,
      title: t("nav.about") === "About Us" ? "Our Vision" : "Nossa Visão",
      description:
        t("nav.about") === "About Us"
          ? "Be a reference in technological solutions, recognized for excellence and innovation."
          : "Ser referência em soluções tecnológicas, reconhecida pela excelência e inovação.",
    },
    {
      icon: Users,
      title: t("nav.about") === "About Us" ? "Our Values" : "Nossos Valores",
      description:
        t("nav.about") === "About Us"
          ? "Integrity, quality, innovation and commitment to exceptional results."
          : "Integridade, qualidade, inovação e compromisso com resultados excepcionais.",
    },
    {
      icon: Clock,
      title: t("nav.about") === "About Us" ? "Our History" : "Nossa História",
      description:
        t("nav.about") === "About Us"
          ? "Over 30 years building lasting relationships and delivering effective solutions."
          : "Mais de 30 anos construindo relacionamentos duradouros e entregando soluções eficazes.",
    },
  ];

  const isEnglish = t("nav.about") === "About Us";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {isEnglish ? "About Vilainfo" : "Sobre a Vilainfo"}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              {isEnglish
                ? "Over 30 years transforming businesses through technology"
                : "Há mais de 30 anos transformando negócios através da tecnologia"}
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {isEnglish ? "Our Journey" : "Nossa Trajetória"}
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <p>
                    {isEnglish
                      ? "Founded in 1994, Vilainfo was born with the purpose of democratizing access to technology and helping companies adapt to the digital age."
                      : "Fundada em 1994, a Vilainfo nasceu com o propósito de democratizar o acesso à tecnologia e ajudar empresas a se adaptarem à era digital."}
                  </p>
                  <p>
                    {isEnglish
                      ? "Over three decades, we have constantly evolved, following technological transformations and maintaining our commitment to excellence and innovation."
                      : "Ao longo de três décadas, evoluímos constantemente, acompanhando as transformações tecnológicas e mantendo nosso compromisso com a excelência e inovação."}
                  </p>
                  <p>
                    {isEnglish
                      ? "Today, we are an established company in the market, with a specialized team and robust portfolio of solutions that serve from startups to large corporations."
                      : "Hoje, somos uma empresa consolidada no mercado, com uma equipe especializada e portfólio robusto de soluções que atendem desde startups até grandes corporações."}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                  alt={isEnglish ? "Vilainfo Team" : "Equipe Vilainfo"}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {isEnglish ? "Our Pillars" : "Nossos Pilares"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {isEnglish
                  ? "The values that guide us and define our identity as a company"
                  : "Os valores que nos guiam e definem nossa identidade como empresa"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700"
                  >
                    <CardHeader className="pb-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {isEnglish
                    ? "Numbers that Speak for Themselves"
                    : "Números que Falam por Si"}
                </h2>
                <p className="text-xl opacity-90">
                  {isEnglish
                    ? "Results achieved throughout our journey"
                    : "Resultados conquistados ao longo de nossa jornada"}
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">30+</div>
                  <div className="text-lg opacity-90">
                    {isEnglish ? "Years of Experience" : "Anos de Experiência"}
                  </div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    200+
                  </div>
                  <div className="text-lg opacity-90">
                    {isEnglish ? "Projects Delivered" : "Projetos Entregues"}
                  </div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
                  <div className="text-lg opacity-90">
                    {isEnglish ? "Active Clients" : "Clientes Ativos"}
                  </div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                  <div className="text-lg opacity-90">
                    {isEnglish ? "Satisfaction" : "Satisfação"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
