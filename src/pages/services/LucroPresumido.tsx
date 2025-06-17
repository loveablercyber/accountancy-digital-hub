
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, TrendingUp, Calculator, FileText, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const LucroPresumido = () => {
  const benefits = [
    "Ideal para empresas com margem de lucro alta",
    "Tributação sobre lucro presumido",
    "Menos obrigações acessórias",
    "Flexibilidade na distribuição de lucros",
    "Planejamento tributário eficiente",
    "Adequado para prestação de serviços"
  ];

  const impostos = [
    { imposto: "IRPJ", aliquota: "15% + 10%*", base: "Lucro Presumido" },
    { imposto: "CSLL", aliquota: "9%", base: "Lucro Presumido" },
    { imposto: "PIS", aliquota: "0,65%", base: "Receita Bruta" },
    { imposto: "COFINS", aliquota: "3%", base: "Receita Bruta" },
    { imposto: "ISS", aliquota: "2% a 5%", base: "Receita de Serviços" },
    { imposto: "ICMS", aliquota: "Variável", base: "Receita de Vendas" }
  ];

  const presumidos = [
    { atividade: "Revenda de combustíveis", percentual: "1,6%" },
    { atividade: "Venda de mercadorias", percentual: "8%" },
    { atividade: "Transporte de cargas", percentual: "8%" },
    { atividade: "Serviços em geral", percentual: "32%" },
    { atividade: "Serviços profissionais", percentual: "32%" },
    { atividade: "Intermediação de negócios", percentual: "32%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Lucro Presumido
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Tributação{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Eficiente
              </span>{" "}
              para Sua Empresa
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Regime ideal para empresas com alta margem de lucro e faturamento até R$ 78 milhões. 
              Otimização tributária garantida para seu negócio.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              Migrar para Lucro Presumido
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Vantagens do Lucro Presumido
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Percentuais de Presunção */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Percentuais de Presunção
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
                  <thead className="bg-purple-50 dark:bg-purple-900/20">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                        Atividade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                        % Presunção
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {presumidos.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">
                          {item.atividade}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {item.percentual}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Como Funciona?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      No Lucro Presumido, a Receita Federal presume um percentual de lucro 
                      sobre o faturamento da empresa, aplicando os impostos sobre essa base.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Isso significa que mesmo que sua empresa tenha uma margem de lucro 
                      superior ao percentual presumido, você pagará impostos apenas sobre 
                      a presunção.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quando Escolher?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Margem de lucro alta
                      </li>
                      <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Prestação de serviços
                      </li>
                      <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Faturamento até R$ 78 milhões
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impostos */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Impostos no Lucro Presumido
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
                <thead className="bg-purple-50 dark:bg-purple-900/20">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                      Imposto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                      Alíquota
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                      Base de Cálculo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {impostos.map((imposto, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                        {imposto.imposto}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                        {imposto.aliquota}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                        {imposto.base}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center">
              * Adicional de 10% sobre a parcela que exceder R$ 20.000/mês
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Precisa de Ajuda para Decidir?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Nossa equipe de especialistas pode analisar sua empresa e indicar 
              o melhor regime tributário para sua situação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Agendar Consultoria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                Simular Tributação
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LucroPresumido;
