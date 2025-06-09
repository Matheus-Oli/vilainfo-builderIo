import { motion } from "framer-motion";
import { Linkedin, Mail, User } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const TeamSection = () => {
  const { t } = useLanguage();
  const isEnglish = t("nav.about") === "About Us";

  const teamMembers: TeamMember[] = [
    {
      name: "Paulo Krieser",
      position: isEnglish ? "CEO & Founder" : "CEO & Fundador",
      description: isEnglish
        ? "Visionary leader with over 30 years of experience in technology and business innovation."
        : "Líder visionário com mais de 30 anos de experiência em tecnologia e inovação empresarial.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "paulo@vilainfo.com.br",
    },
    {
      name: "Flávio Maciel",
      position: isEnglish ? "CTO & Co-founder" : "CTO & Co-fundador",
      description: isEnglish
        ? "Technology expert specializing in software architecture and development methodologies."
        : "Especialista em tecnologia com foco em arquitetura de software e metodologias de desenvolvimento.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "flavio@vilainfo.com.br",
    },
    {
      name: "Vanderson Mello",
      position: isEnglish ? "Director of Operations" : "Diretor de Operações",
      description: isEnglish
        ? "Operations specialist focused on process optimization and customer relationship management."
        : "Especialista em operações com foco em otimização de processos e gestão de relacionamento com clientes.",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      email: "vanderson@vilainfo.com.br",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {isEnglish ? "Meet Our Leadership" : "Conheça Nossa Liderança"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          {isEnglish
            ? "The experienced professionals leading Vilainfo's technological innovation"
            : "Os profissionais experientes que lideram a inovação tecnológica da Vilainfo"}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-green-200 dark:group-hover:border-green-800 relative overflow-hidden">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-green-100 dark:ring-green-900/30 group-hover:ring-green-200 dark:group-hover:ring-green-800/50 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-500 dark:hover:bg-blue-500 text-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-green-100 dark:bg-green-900/30 hover:bg-green-500 dark:hover:bg-green-500 text-green-600 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name} Email`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
