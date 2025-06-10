import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/AppContext";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.contact") === "Contact";
  const { trackFormSubmission, trackEvent } = useAnalytics();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track form submission for analytics
    trackFormSubmission("contact_form");
    trackEvent("form_submit", "contact", formData.service || "general");

    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: isEnglish ? "Call Us" : "Ligue para Nós",
      subtitle: isEnglish
        ? "Speak directly with our team"
        : "Fale diretamente com nossa equipe",
      value: "(27) 99999-9999",
      link: "tel:+5527999999999",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: isEnglish ? "Email Us" : "Envie um Email",
      subtitle: isEnglish ? "Send us your questions" : "Envie suas dúvidas",
      value: "contato@vilainfo.com.br",
      link: "mailto:contato@vilainfo.com.br",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: isEnglish
        ? "Chat with us instantly"
        : "Converse conosco instantaneamente",
      value: isEnglish ? "Online support" : "Suporte online",
      link: "https://wa.me/5527999999999",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      title: isEnglish ? "Schedule Meeting" : "Agendar Reunião",
      subtitle: isEnglish ? "Book a consultation" : "Agende uma consultoria",
      value: isEnglish ? "Free consultation" : "Consultoria gratuita",
      link: "#",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: isEnglish ? "Our Location" : "Nossa Localização",
      details: [
        "Vila Velha, ES - Brasil",
        isEnglish ? "Espírito Santo State" : "Estado do Espírito Santo",
        isEnglish ? "Southeastern Brazil" : "Sudeste do Brasil",
      ],
    },
    {
      icon: Clock,
      title: isEnglish ? "Business Hours" : "Horário de Funcionamento",
      details: [
        isEnglish
          ? "Monday - Friday: 8:00 - 18:00"
          : "Segunda - Sexta: 8:00 - 18:00",
        isEnglish ? "Saturday: 8:00 - 12:00" : "Sábado: 8:00 - 12:00",
        isEnglish ? "Sunday: Closed" : "Domingo: Fechado",
      ],
    },
    {
      icon: Users,
      title: isEnglish ? "Support Team" : "Equipe de Suporte",
      details: [
        isEnglish ? "24/7 Emergency Support" : "Suporte Emergencial 24/7",
        isEnglish ? "Multilingual Team" : "Equipe Multilíngue",
        isEnglish ? "Expert Technicians" : "Técnicos Especialistas",
      ],
    },
  ];

  const services = isEnglish
    ? [
        "Custom Development",
        "Mobile Development",
        "Cloud & Infrastructure",
        "Data & Analytics",
        "Cybersecurity",
        "Support & Maintenance",
        "Other",
      ]
    : [
        "Desenvolvimento Personalizado",
        "Desenvolvimento Mobile",
        "Cloud & Infraestrutura",
        "Dados & Analytics",
        "Cibersegurança",
        "Suporte & Manutenção",
        "Outro",
      ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-green-900/90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            {isEnglish ? "Let's Work Together" : "Vamos Trabalhar Juntos"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed"
          >
            {isEnglish
              ? "Ready to transform your business? Get in touch and discover how we can help you achieve your technology goals."
              : "Pronto para transformar seu negócio? Entre em contato e descubra como podemos ajudá-lo a alcançar seus objetivos tecnológicos."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl font-semibold shadow-xl"
            >
              {isEnglish ? "Start Conversation" : "Iniciar Conversa"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-4 text-lg rounded-2xl backdrop-blur-sm shadow-lg"
            >
              {isEnglish ? "Schedule Call" : "Agendar Ligação"}
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {isEnglish ? "Get in Touch" : "Entre em Contato"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {isEnglish
                ? "Choose the best way to reach us. We're here to help you succeed."
                : "Escolha a melhor forma de nos contatar. Estamos aqui para ajudá-lo a ter sucesso."}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a
                    href={method.link}
                    className="block bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-600 group-hover:border-green-200 dark:group-hover:border-green-800 group-hover:scale-105 h-full"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {method.subtitle}
                    </p>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      {method.value}
                    </p>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 pb-8">
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                      {isEnglish ? "Send Your Message" : "Envie sua Mensagem"}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {isEnglish
                        ? "Tell us about your project and we'll get back to you within 24 hours"
                        : "Conte-nos sobre seu projeto e retornaremos em até 24 horas"}
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {isEnglish ? "Message Sent!" : "Mensagem Enviada!"}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {isEnglish
                            ? "Thank you for your message. We'll be in touch soon!"
                            : "Obrigado pela sua mensagem. Entraremos em contato em breve!"}
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label
                              htmlFor="name"
                              className="text-gray-900 dark:text-white font-medium"
                            >
                              {isEnglish ? "Full Name *" : "Nome Completo *"}
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="mt-2 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl"
                              placeholder={
                                isEnglish
                                  ? "Your full name"
                                  : "Seu nome completo"
                              }
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="email"
                              className="text-gray-900 dark:text-white font-medium"
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
                              className="mt-2 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl"
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
                              className="text-gray-900 dark:text-white font-medium"
                            >
                              {isEnglish ? "Company" : "Empresa"}
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleChange}
                              className="mt-2 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl"
                              placeholder={
                                isEnglish ? "Company name" : "Nome da empresa"
                              }
                            />
                          </div>
                          <div>
                            <Label
                              htmlFor="phone"
                              className="text-gray-900 dark:text-white font-medium"
                            >
                              {isEnglish ? "Phone" : "Telefone"}
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              className="mt-2 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl"
                              placeholder="(27) 99999-9999"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label
                              htmlFor="service"
                              className="text-gray-900 dark:text-white font-medium"
                            >
                              {isEnglish
                                ? "Service of Interest"
                                : "Serviço de Interesse"}
                            </Label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="mt-2 h-12 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-3 text-gray-900 dark:text-white"
                            >
                              <option value="">
                                {isEnglish
                                  ? "Select a service"
                                  : "Selecione um serviço"}
                              </option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <Label
                              htmlFor="subject"
                              className="text-gray-900 dark:text-white font-medium"
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
                              className="mt-2 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl"
                              placeholder={
                                isEnglish
                                  ? "How can we help?"
                                  : "Como podemos ajudar?"
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label
                            htmlFor="message"
                            className="text-gray-900 dark:text-white font-medium"
                          >
                            {isEnglish ? "Message *" : "Mensagem *"}
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-xl"
                            rows={6}
                            placeholder={
                              isEnglish
                                ? "Tell us about your project, timeline, and any specific requirements..."
                                : "Conte-nos sobre seu projeto, cronograma e requisitos específicos..."
                            }
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-14 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {isEnglish ? "Send Message" : "Enviar Mensagem"}
                          <Send className="w-5 h-5 ml-2" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {isEnglish
                    ? "Office Information"
                    : "Informações do Escritório"}
                </h3>

                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-2xl">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                                  {info.title}
                                </h4>
                                <div className="space-y-1">
                                  {info.details.map((detail, detailIndex) => (
                                    <p
                                      key={detailIndex}
                                      className="text-gray-600 dark:text-gray-300"
                                    >
                                      {detail}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Emergency Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="w-6 h-6" />
                        <h4 className="font-bold text-lg">
                          {isEnglish
                            ? "Emergency Support"
                            : "Suporte de Emergência"}
                        </h4>
                      </div>
                      <p className="mb-3">
                        {isEnglish
                          ? "24/7 emergency support for critical issues"
                          : "Suporte de emergência 24/7 para problemas críticos"}
                      </p>
                      <p className="text-sm opacity-90">
                        {isEnglish
                          ? "Available for clients with active support contracts"
                          : "Disponível para clientes com contratos de suporte ativos"}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
