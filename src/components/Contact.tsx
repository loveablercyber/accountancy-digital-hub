
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Video,
  HeadphonesIcon
} from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 3456-7890",
      description: "Seg-Sex: 8h às 18h",
      action: "Ligar Agora",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      info: "(11) 99999-8888",
      description: "Resposta automática 24/7",
      action: "Chamar no WhatsApp",
      color: "green"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@contaexcel.com.br",
      description: "Resposta em até 2h",
      action: "Enviar E-mail",
      color: "purple"
    },
    {
      icon: Video,
      title: "Videoconferência",
      info: "Atendimento Online",
      description: "Agende sua reunião",
      action: "Agendar Reunião",
      color: "orange"
    }
  ];

  const emergencySupport = {
    title: "Suporte Emergencial",
    description: "Para clientes em dia com mensalidades",
    phone: "(11) 99999-0000",
    hours: "24/7 - Finais de semana e feriados"
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Atendimento Multicanal
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Escolha o canal que preferir para falar conosco. Nossa equipe está pronta 
            para oferecer a melhor solução para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-${method.color}-100 dark:bg-${method.color}-900`}>
                          <IconComponent className={`h-6 w-6 text-${method.color}-600 dark:text-${method.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {method.title}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                            {method.info}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                            {method.description}
                          </p>
                          <Button size="sm" variant="outline" className="text-xs">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Emergency Support */}
              <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900">
                      <HeadphonesIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-900 dark:text-red-100 mb-1">
                        {emergencySupport.title}
                      </h3>
                      <p className="text-sm text-red-700 dark:text-red-300 mb-1">
                        {emergencySupport.phone}
                      </p>
                      <p className="text-xs text-red-600 dark:text-red-400 mb-2">
                        {emergencySupport.description}
                      </p>
                      <p className="text-xs text-red-500 dark:text-red-500">
                        {emergencySupport.hours}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    Nosso Escritório
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="text-sm text-slate-600 dark:text-slate-300 not-italic mb-4">
                    Av. Paulista, 1000 - Conj. 1501<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </address>
                  
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-300 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    Segunda a Sexta: 8h às 18h
                  </div>
                  
                  <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <div><strong>CNPJ:</strong> 12.345.678/0001-90</div>
                    <div><strong>CRC-SP:</strong> 2SP034567/O-6</div>
                    <div><strong>Responsável Técnico:</strong> Dr. Carlos Mendonça</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl">Fale Conosco</CardTitle>
                <p className="text-slate-600 dark:text-slate-300">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nome Completo *
                    </label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Empresa
                    </label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      E-mail *
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Serviço de Interesse
                  </label>
                  <select className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800">
                    <option>Selecione um serviço</option>
                    <option>Abertura de Empresa</option>
                    <option>Gestão Tributária</option>
                    <option>Folha de Pagamento</option>
                    <option>Consultoria Financeira</option>
                    <option>Auditoria e Compliance</option>
                    <option>Contabilidade Digital</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva suas necessidades ou dúvidas..."
                    rows={4}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="privacy" className="rounded" />
                  <label htmlFor="privacy" className="text-sm text-slate-600 dark:text-slate-300">
                    Concordo com os <a href="#" className="text-blue-600 hover:underline">Termos de Uso</a> e 
                    <a href="#" className="text-blue-600 hover:underline"> Política de Privacidade</a>
                  </label>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Enviar Mensagem
                </Button>

                <div className="text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Ou agende uma consultoria gratuita:
                  </p>
                  <Button variant="outline" className="mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Consultoria
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Localização do Escritório
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.65818698!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt!2sbr!4v1642694852707!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
