
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Shield,
  Award
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Abertura de Empresa",
    "Gestão Tributária", 
    "Folha de Pagamento",
    "Consultoria Financeira",
    "Auditoria e Compliance",
    "Contabilidade Digital"
  ];

  const quickLinks = [
    "Início",
    "Quem Somos", 
    "Serviços",
    "Blog",
    "Atendimento",
    "Contato"
  ];

  const legalLinks = [
    "Termos de Uso",
    "Política de Privacidade",
    "LGPD",
    "Código de Ética",
    "Denúncias",
    "Compliance"
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              ContaExcel
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Escritório de contabilidade moderno, especializado em automação 
              fiscal e consultoria estratégica para empresas de todos os portes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">
                  Av. Paulista, 1000 - Conj. 1501<br />
                  São Paulo, SP - CEP: 01310-100
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">contato@contaexcel.com.br</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal & Compliance</h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="space-y-3">
              <Badge variant="outline" className="border-green-400 text-green-400 text-xs">
                <Shield className="h-3 w-3 mr-1" />
                SSL Certificado
              </Badge>
              <Badge variant="outline" className="border-blue-400 text-blue-400 text-xs">
                <Award className="h-3 w-3 mr-1" />
                CRC-SP Regulamentado
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            <p>© {currentYear} ContaExcel Assessoria Contábil Ltda. Todos os direitos reservados.</p>
            <p className="mt-1">
              <strong>CNPJ:</strong> 12.345.678/0001-90 | 
              <strong> CRC-SP:</strong> 2SP034567/O-6 | 
              <strong> Responsável Técnico:</strong> Dr. Carlos Mendonça - CRC-SP 1234567
            </p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Desenvolvido com tecnologia brasileira</span>
            </div>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-6 p-4 bg-slate-800 rounded-lg">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>Aviso Legal:</strong> As informações contidas neste site têm caráter meramente informativo. 
            Para orientações específicas sobre sua situação fiscal e contábil, consulte sempre um profissional 
            habilitado. Este escritório está inscrito no CRC-SP sob o número 2SP034567/O-6 e atua em conformidade 
            com as normas do Conselho Federal de Contabilidade (CFC) e demais órgãos regulamentadores.
          </p>
        </div>
      </div>
    </footer>
  );
};
