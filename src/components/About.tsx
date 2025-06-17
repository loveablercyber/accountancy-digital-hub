
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp, Shield } from "lucide-react";

export const About = () => {
  const team = [
    {
      name: "Dr. Carlos Mendonça",
      role: "Contador Responsável",
      credential: "CRC-SP 1234567",
      experience: "20+ anos de experiência",
      specialties: ["Auditoria", "Consultoria Fiscal", "Governança Corporativa"]
    },
    {
      name: "Ana Paula Silva",
      role: "Gestora de Compliance",
      credential: "CRC-SP 2345678",
      experience: "15+ anos de experiência",
      specialties: ["eSocial", "Folha de Pagamento", "Trabalhista"]
    },
    {
      name: "Ricardo Santos",
      role: "Especialista Tributário",
      credential: "CRC-SP 3456789",
      experience: "12+ anos de experiência",
      specialties: ["Planejamento Tributário", "Elisão Fiscal", "Consultoria"]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Transparência total e ética profissional em todos os processos"
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Tecnologia de ponta aplicada à contabilidade moderna"
    },
    {
      icon: Users,
      title: "Relacionamento",
      description: "Atendimento personalizado e consultoria estratégica"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Qualidade superior e resultados mensuráveis"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Quem Somos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Expertise e Confiança
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Somos um escritório de contabilidade moderno, combinando tradição, experiência 
            e inovação tecnológica para oferecer soluções contábeis de excelência.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Nossa História
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Fundado em 2008, o ContaExcel nasceu da visão de revolucionar a contabilidade 
              tradicional através da tecnologia e excelência no atendimento. Com mais de 15 anos 
              de mercado, consolidamos nossa posição como referência em soluções contábeis 
              inteligentes.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Nossa missão é simplificar a gestão contábil das empresas, oferecendo automação, 
              compliance garantido e consultoria estratégica para impulsionar o crescimento 
              dos nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000+</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Empresas Atendidas</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg">
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400">99.8%</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Taxa de Compliance</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Nossos Valores
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Nossa Equipe Especializada
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {member.credential}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    {member.experience}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
