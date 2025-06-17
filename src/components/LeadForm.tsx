
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  FileText, 
  Download, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Building, 
  Percent,
  CreditCard,
  PiggyBank,
  Briefcase,
  Receipt,
  Target,
  BarChart3
} from "lucide-react";

export const LeadForm = () => {
  const [activeSimulator, setActiveSimulator] = useState("tax");
  
  const simulators = [
    {
      id: "tax",
      title: "Calculadora de Impostos",
      description: "Descubra quanto sua empresa paga de impostos por mês",
      icon: Calculator,
      fields: [
        { label: "Faturamento Mensal", placeholder: "R$ 50.000,00", type: "text" },
        { label: "Regime Tributário", placeholder: "Selecionar", type: "select", options: ["Simples Nacional", "Lucro Presumido", "Lucro Real"] },
        { label: "Atividade Principal", placeholder: "Comércio, Indústria, Serviços", type: "text" }
      ]
    },
    {
      id: "company",
      title: "Simulador de Abertura",
      description: "Calcule custos e tempo para abrir sua empresa",
      icon: FileText,
      fields: [
        { label: "Tipo de Empresa", placeholder: "Selecionar", type: "select", options: ["MEI", "Ltda", "Eireli", "S/A"] },
        { label: "Atividade", placeholder: "Área de atuação", type: "text" },
        { label: "Número de Sócios", placeholder: "1", type: "number" }
      ]
    },
    {
      id: "payroll",
      title: "Calculadora de Folha",
      description: "Simule custos de folha de pagamento completa",
      icon: Users,
      fields: [
        { label: "Número de Funcionários", placeholder: "10", type: "number" },
        { label: "Salário Médio", placeholder: "R$ 2.500,00", type: "text" },
        { label: "Setor da Empresa", placeholder: "Selecionar", type: "select", options: ["Comércio", "Indústria", "Serviços", "Tecnologia"] }
      ]
    },
    {
      id: "profit",
      title: "Simulador de Lucratividade",
      description: "Analise a margem de lucro do seu negócio",
      icon: TrendingUp,
      fields: [
        { label: "Receita Bruta Mensal", placeholder: "R$ 100.000,00", type: "text" },
        { label: "Custos Fixos", placeholder: "R$ 30.000,00", type: "text" },
        { label: "Custos Variáveis (%)", placeholder: "40", type: "number" }
      ]
    },
    {
      id: "mei",
      title: "Calculadora MEI",
      description: "Verifique se MEI é ideal para seu negócio",
      icon: Building,
      fields: [
        { label: "Faturamento Anual Previsto", placeholder: "R$ 81.000,00", type: "text" },
        { label: "Tipo de Atividade", placeholder: "Selecionar", type: "select", options: ["Comércio", "Indústria", "Serviços"] },
        { label: "Possui Funcionários", placeholder: "Selecionar", type: "select", options: ["Não", "Sim - 1 funcionário"] }
      ]
    },
    {
      id: "savings",
      title: "Calculadora de Economia",
      description: "Compare regimes e descubra sua economia",
      icon: Percent,
      fields: [
        { label: "Faturamento Atual", placeholder: "R$ 200.000,00", type: "text" },
        { label: "Regime Atual", placeholder: "Selecionar", type: "select", options: ["Simples Nacional", "Lucro Presumido", "Lucro Real"] },
        { label: "Margem de Lucro (%)", placeholder: "15", type: "number" }
      ]
    },
    {
      id: "cash-flow",
      title: "Simulador de Fluxo de Caixa",
      description: "Projete o fluxo de caixa da sua empresa",
      icon: CreditCard,
      fields: [
        { label: "Receitas Mensais", placeholder: "R$ 80.000,00", type: "text" },
        { label: "Gastos Fixos", placeholder: "R$ 25.000,00", type: "text" },
        { label: "Gastos Variáveis", placeholder: "R$ 35.000,00", type: "text" }
      ]
    },
    {
      id: "investment",
      title: "Calculadora de Investimento",
      description: "Analise viabilidade de novos investimentos",
      icon: PiggyBank,
      fields: [
        { label: "Valor do Investimento", placeholder: "R$ 100.000,00", type: "text" },
        { label: "Retorno Mensal Esperado", placeholder: "R$ 5.000,00", type: "text" },
        { label: "Prazo de Retorno (meses)", placeholder: "24", type: "number" }
      ]
    },
    {
      id: "business-plan",
      title: "Simulador de Plano de Negócios",
      description: "Valide a viabilidade do seu negócio",
      icon: Briefcase,
      fields: [
        { label: "Investimento Inicial", placeholder: "R$ 50.000,00", type: "text" },
        { label: "Faturamento Projetado (1º ano)", placeholder: "R$ 300.000,00", type: "text" },
        { label: "Margem Operacional (%)", placeholder: "20", type: "number" }
      ]
    },
    {
      id: "simples-calculator",
      title: "Calculadora Simples Nacional",
      description: "Calcule os impostos no Simples Nacional",
      icon: Receipt,
      fields: [
        { label: "Faturamento dos Últimos 12 Meses", placeholder: "R$ 1.000.000,00", type: "text" },
        { label: "Anexo do Simples", placeholder: "Selecionar", type: "select", options: ["Anexo I - Comércio", "Anexo II - Indústria", "Anexo III - Serviços", "Anexo IV - Serviços", "Anexo V - Serviços"] },
        { label: "Faturamento do Mês", placeholder: "R$ 100.000,00", type: "text" }
      ]
    },
    {
      id: "break-even",
      title: "Ponto de Equilibrio",
      description: "Calcule o ponto de equilíbrio da empresa",
      icon: Target,
      fields: [
        { label: "Custos Fixos Totais", placeholder: "R$ 20.000,00", type: "text" },
        { label: "Preço de Venda Unitário", placeholder: "R$ 100,00", type: "text" },
        { label: "Custo Variável Unitário", placeholder: "R$ 60,00", type: "text" }
      ]
    },
    {
      id: "financial-analysis",
      title: "Análise Financeira",
      description: "Avalie a saúde financeira da empresa",
      icon: BarChart3,
      fields: [
        { label: "Ativo Total", placeholder: "R$ 500.000,00", type: "text" },
        { label: "Passivo Total", placeholder: "R$ 200.000,00", type: "text" },
        { label: "Receita Líquida Anual", placeholder: "R$ 1.200.000,00", type: "text" }
      ]
    }
  ];

  const currentSimulator = simulators.find(s => s.id === activeSimulator);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            Ferramentas Gratuitas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simule e Descubra
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Use nossos simuladores gratuitos e receba um relatório personalizado 
            com análise completa da sua situação fiscal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Simulator Tabs */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {simulators.map((simulator) => {
                const IconComponent = simulator.icon;
                return (
                  <div
                    key={simulator.id}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${
                      activeSimulator === simulator.id
                        ? "bg-white shadow-lg"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                    onClick={() => setActiveSimulator(simulator.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeSimulator === simulator.id
                          ? "bg-blue-100"
                          : "bg-white/20"
                      }`}>
                        <IconComponent className={`h-4 w-4 ${
                          activeSimulator === simulator.id
                            ? "text-blue-600"
                            : "text-white"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-xs ${
                          activeSimulator === simulator.id
                            ? "text-slate-900"
                            : "text-white"
                        }`}>
                          {simulator.title}
                        </h3>
                        <p className={`text-xs ${
                          activeSimulator === simulator.id
                            ? "text-slate-600"
                            : "text-blue-100"
                        }`}>
                          {simulator.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Simulator Form */}
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center">
                <currentSimulator.icon className="h-5 w-5 mr-2 text-blue-600" />
                {currentSimulator.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentSimulator.fields.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select className="w-full p-3 border border-slate-300 rounded-md">
                      <option>{field.placeholder}</option>
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <Input 
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              {/* Lead Capture Fields */}
              <div className="border-t pt-4 mt-6">
                <h4 className="font-medium text-slate-900 mb-4">
                  Receba o Relatório Completo
                </h4>
                <div className="space-y-3">
                  <Input placeholder="Seu nome completo" />
                  <Input type="email" placeholder="Seu melhor e-mail" />
                  <Input placeholder="WhatsApp para contato" />
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <Calculator className="h-4 w-4 mr-2" />
                Calcular e Receber Relatório
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>

              <div className="text-center">
                <p className="text-xs text-slate-500">
                  ✓ Relatório gratuito ✓ Sem compromisso ✓ Consultoria incluída
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Download className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Relatório Detalhado</h3>
            <p className="text-sm text-blue-100">PDF completo com análise personalizada</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Cálculos Precisos</h3>
            <p className="text-sm text-blue-100">Baseado na legislação vigente</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Consultoria Gratuita</h3>
            <p className="text-sm text-blue-100">30 min de consultoria especializada</p>
          </div>
        </div>
      </div>
    </section>
  );
};
