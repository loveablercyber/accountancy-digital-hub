
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp, Calculator, FileText, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const SimplesNacional = () => {
  const benefits = [
    "Tributação simplificada em uma única guia",
    "Alíquotas reduzidas de impostos",
    "Menos burocracia e obrigações acessórias",
    "Preferência em licitações públicas",
    "Facilidade para exportação",
    "Parcelamento de débitos em até 60 vezes"
  ];

  const faixas = [
    { receita: "Até R$ 180.000", aliquota: "4% a 6%", anexo: "Anexo I - Comércio" },
    { receita: "Até R$ 360.000", aliquota: "4,5% a 9%", anexo: "Anexo II - Indústria" },
    { receita: "Até R$ 4.800.000", aliquota: "6% a 33%", anexo: "Anexo III - Serviços" },
    { receita: "Até R$ 4.800.000", aliquota: "4,5% a 30%", anexo: "Anexo IV - Serviços" },
    { receita: "Até R$ 4.800.000", aliquota: "15,5% a 30,5%", anexo: "Anexo V - Serviços" }
  ];

  const services = [
    {
      icon: FileText,
      title: "Migração para Simples",
      description: "Análise e processo completo de migração",
      features: ["Análise de viabilidade", "Documentação completa", "Acompanhamento mensal"]
    },
    {
      icon: Calculator,
      title: "Gestão Tributária",
      description: "Apuração e pagamento de impostos",
      features: ["Cálculo do DAS", "Planejamento tributário", "Relatórios gerenciais"]
    },
    {
      icon: TrendingUp,
      title: "Consultoria Especializada",
      description: "Orientação estratégica para crescimento",
      features: ["Análise de rentabilidade", "Projeções fiscais", "Otimização tributária"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Simples Nacional
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Regime Tributário{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Simplificado
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Ideal para pequenas e médias empresas que buscam simplificar a tributação 
              e reduzir a carga de impostos com até 40% de economia.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Migrar para Simples Nacional
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Vantagens do Simples Nacional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faixas de Tributação */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Faixas de Tributação 2024
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
                <thead className="bg-blue-50 dark:bg-blue-900/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                      Receita Bruta Anual
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                      Alíquota
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                      Anexo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {faixas.map((faixa, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                        {faixa.receita}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                        {faixa.aliquota}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                        {faixa.anexo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                      <CardDescription className="text-center">{service.description}</CardDescription>
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
                      <Button className="w-full">Solicitar Orçamento</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SimplesNacional;
