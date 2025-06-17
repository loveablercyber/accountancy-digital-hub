
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechStart Ltda",
      location: "São Paulo, SP",
      rating: 5,
      text: "O ContaExcel transformou nossa gestão contábil. A automação nos poupou horas de trabalho e a consultoria especializada nos ajudou a economizar 30% em impostos.",
      service: "Planejamento Tributário",
      savings: "R$ 45.000/ano",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "João Santos",
      company: "Indústria Moderna S/A",
      location: "Campinas, SP",
      rating: 5,
      text: "Atendimento excepcional e expertise incomparável. Desde que migramos para o ContaExcel, nossa conformidade fiscal é 100% e nunca mais tivemos problemas com órgãos fiscalizadores.",
      service: "Compliance Fiscal",
      savings: "Zero Multas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ana Costa",
      company: "Comércio ABC",
      location: "Santos, SP",
      rating: 5,
      text: "A digitalização completa dos processos e o dashboard em tempo real nos deram total controle sobre nossa situação fiscal. Recomendo para qualquer empresa que busca modernidade.",
      service: "Contabilidade Digital",
      savings: "70% Tempo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Carlos Oliveira",
      company: "Prestadora de Serviços XYZ",
      location: "São José dos Campos, SP",
      rating: 5,
      text: "Profissionais altamente qualificados e tecnologia de ponta. A abertura da nossa filial foi concluída em menos de 48 horas com total suporte jurídico e contábil.",
      service: "Abertura de Empresa",
      savings: "48h Processo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Mais de 1.000 empresas confiam em nossa expertise. Veja os resultados 
            que alcançamos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white dark:bg-slate-800 shadow-lg">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-blue-200 dark:text-blue-800" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-800"
                    />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.company}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="outline" className="mb-1 text-xs">
                      {testimonial.service}
                    </Badge>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      Economia: {testimonial.savings}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">4.9/5</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">1000+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">99.8%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Anos de Mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
