
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Shield, 
  Calculator, 
  Briefcase,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Abertura de Empresa",
      description: "Processo completo de constituição empresarial com suporte jurídico e contábil",
      features: ["CNPJ em 24h", "Licenças e Alvarás", "Enquadramento Fiscal", "Consultoria Inicial"],
      badge: "Mais Popular",
      color: "blue"
    },
    {
      icon: Calculator,
      title: "Gestão Tributária",
      description: "Otimização fiscal inteligente com tecnologia e expertise especializada",
      features: ["Apuração Automática", "Planejamento Tributário", "Elisão Fiscal", "Compliance"],
      badge: "Economia Garantida",
      color: "green"
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Gestão completa de RH com cálculos precisos e conformidade trabalhista",
      features: ["eSocial Integrado", "Cálculos Automáticos", "Rescisões", "Benefícios"],
      badge: "Sem Erro",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Consultoria Financeira",
      description: "Análises estratégicas para crescimento sustentável do seu negócio",
      features: ["DRE Gerencial", "Fluxo de Caixa", "Indicadores", "Projeções"],
      badge: "Crescimento",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Auditoria e Compliance",
      description: "Conformidade total com normas contábeis e fiscais vigentes",
      features: ["Auditoria Interna", "Due Diligence", "Governança", "Risk Management"],
      badge: "Segurança Total",
      color: "red"
    },
    {
      icon: Briefcase,
      title: "Contabilidade Digital",
      description: "Tecnologia de ponta para automação total dos processos contábeis",
      features: ["Dashboard Real-time", "APIs Integradas", "IA Contábil", "Mobile App"],
      badge: "Inovação",
      color: "indigo"
    }
  ];

  const regimes = [
    { name: "MEI", description: "Microempreendedor Individual" },
    { name: "Simples Nacional", description: "Regime Simplificado" },
    { name: "Lucro Presumido", description: "Tributação Presumida" },
    { name: "Lucro Real", description: "Tributação pelo Lucro Efetivo" }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Serviços Especializados
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Soluções Contábeis Completas
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Oferecemos um portfólio abrangente de serviços contábeis com tecnologia de ponta 
            e expertise especializada para empresas de todos os portes.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white dark:bg-slate-800 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-${service.color}-100 dark:bg-${service.color}-900`}>
                      <IconComponent className={`h-6 w-6 text-${service.color}-600 dark:text-${service.color}-400`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tax Regimes */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Regimes Tributários Atendidos
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Expertise em todos os regimes fiscais para otimizar sua carga tributária
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regimes.map((regime, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{regime.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{regime.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
