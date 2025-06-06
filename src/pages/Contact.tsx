import { useState } from "react";
import { useLanguage } from "@/contexts/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: isEnglish ? "Phone" : "Telefone",
      value: "(27) 99999-9999",
      link: "tel:+5527999999999",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: isEnglish ? "contact@vilainfo.com.br" : "contato@vilainfo.com.br",
      link: "mailto:contato@vilainfo.com.br",
    },
    {
      icon: MapPin,
      title: isEnglish ? "Address" : "Endereço",
      value: isEnglish ? "Vila Velha, ES - Brazil" : "Vila Velha, ES - Brasil",
      link: "#",
    },
    {
      icon: Clock,
      title: isEnglish ? "Hours" : "Horário",
      value: isEnglish ? "Mon - Fri: 8am to 6pm" : "Seg - Sex: 8h às 18h",
      link: "#",
    },
  ];

  const faqItems = isEnglish
    ? [
        {
          question: "What is the average timeframe for developing a project?",
          answer:
            "The timeframe varies according to project complexity, but generally between 30 to 90 days for medium-sized projects.",
        },
        {
          question: "Do you offer support after delivery?",
          answer:
            "Yes, we offer different support and maintenance plans to ensure continuous operation of your solution.",
        },
        {
          question: "Do you work with agile methodologies?",
          answer:
            "Yes, we use agile methodologies like Scrum and Kanban to ensure incremental deliveries and higher quality.",
        },
      ]
    : [
        {
          question: "Qual o prazo médio para desenvolvimento de um projeto?",
          answer:
            "O prazo varia conforme a complexidade do projeto, mas geralmente entre 30 a 90 dias para projetos de médio porte.",
        },
        {
          question: "Vocês oferecem suporte após a entrega?",
          answer:
            "Sim, oferecemos diferentes planos de suporte e manutenção para garantir o funcionamento contínuo da sua solução.",
        },
        {
          question: "Trabalham com metodologias ágeis?",
          answer:
            "Sim, utilizamos metodologias ágeis como Scrum e Kanban para garantir entregas incrementais e maior qualidade.",
        },
      ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {isEnglish ? "Get in Touch" : "Entre em Contato"}
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              {isEnglish
                ? "We are ready to transform your ideas into reality"
                : "Estamos prontos para transformar suas ideias em realidade"}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {isEnglish ? "Send Your Message" : "Envie sua Mensagem"}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300">
                      {isEnglish
                        ? "Fill out the form and we will contact you within 24 hours"
                        : "Preencha o formulário e entraremos em contato em até 24 horas"}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-gray-900 dark:text-white"
                          >
                            {isEnglish ? "Name *" : "Nome *"}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            placeholder={
                              isEnglish ? "Your full name" : "Seu nome completo"
                            }
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-gray-900 dark:text-white"
                          >
                            E-mail *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            placeholder={
                              isEnglish ? "your@email.com" : "seu@email.com"
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="company"
                            className="text-gray-900 dark:text-white"
                          >
                            {isEnglish ? "Company" : "Empresa"}
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            placeholder={
                              isEnglish ? "Company name" : "Nome da empresa"
                            }
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-gray-900 dark:text-white"
                          >
                            {isEnglish ? "Phone" : "Telefone"}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            placeholder="(27) 99999-9999"
                          />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="subject"
                          className="text-gray-900 dark:text-white"
                        >
                          {isEnglish ? "Subject *" : "Assunto *"}
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                          placeholder={
                            isEnglish
                              ? "How can we help?"
                              : "Como podemos ajudar?"
                          }
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="message"
                          className="text-gray-900 dark:text-white"
                        >
                          {isEnglish ? "Message *" : "Mensagem *"}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                          rows={6}
                          placeholder={
                            isEnglish
                              ? "Describe your project or need..."
                              : "Descreva seu projeto ou necessidade..."
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
                      >
                        {isEnglish ? "Send Message" : "Enviar Mensagem"}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card
                        key={index}
                        className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center">
                              <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {info.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 dark:text-gray-400">
                          {isEnglish ? "Interactive map" : "Mapa interativo"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="border-0 shadow-lg bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">
                      {isEnglish ? "Business Hours" : "Horário de Atendimento"}
                    </h3>
                    <div className="space-y-1">
                      <p>
                        {isEnglish
                          ? "Monday to Friday: 8am to 6pm"
                          : "Segunda a Sexta: 8h às 18h"}
                      </p>
                      <p>
                        {isEnglish
                          ? "Saturday: 8am to 12pm"
                          : "Sábado: 8h às 12h"}
                      </p>
                      <p>{isEnglish ? "Sunday: Closed" : "Domingo: Fechado"}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-sm opacity-90">
                        {isEnglish
                          ? "24/7 emergency support available for clients with support contract"
                          : "Suporte de emergência 24/7 disponível para clientes com contrato de suporte"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {isEnglish
                  ? "Frequently Asked Questions"
                  : "Perguntas Frequentes"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {isEnglish
                  ? "Some common questions from our clients"
                  : "Algumas dúvidas comuns de nossos clientes"}
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700"
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
