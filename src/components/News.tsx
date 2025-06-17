
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock, Eye, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRSSNews } from "@/hooks/useRSSNews";

export const News = () => {
  const { data: rssNews, isLoading, error } = useRSSNews();

  // Dados estáticos como fallback
  const fallbackNews = [
    {
      id: 1,
      title: "Mudanças no Simples Nacional 2024: O que Você Precisa Saber",
      excerpt: "As novas regras do Simples Nacional trazem alterações importantes para MEIs e pequenas empresas. Entenda como essas mudanças podem impactar seu negócio.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Carlos Mendonça",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      views: "2.1k",
      category: "Tributário",
      featured: true,
      link: "/blog/mudancas-simples-nacional-2024"
    },
    {
      id: 2,
      title: "eSocial: Prazo Final para Adequação se Aproxima",
      excerpt: "Empresas têm até março para se adequar às novas obrigações do eSocial. Veja o checklist completo para não ser multado.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dra. Ana Silva",
      date: "12 de Janeiro, 2024",
      readTime: "7 min",
      views: "1.8k",
      category: "Trabalhista",
      featured: true,
      link: "/blog/esocial-prazo-adequacao"
    }
  ];

  // Combinar notícias do RSS com dados estáticos
  const newsArticles = rssNews ? [
    ...rssNews.slice(0, 2).map((item, index) => ({
      id: `rss-${index}`,
      title: item.title,
      excerpt: item.description,
      image: `https://images.unsplash.com/photo-${index % 2 === 0 ? '1454165804606-c3d57bc86b40' : '1551434678-e076c223a692'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      author: "Portal Contábeis",
      date: item.pubDate,
      readTime: "5 min",
      views: "1.2k",
      category: item.category || "Tributário",
      featured: true,
      link: item.link,
      external: true
    })),
    ...rssNews.slice(2, 6).map((item, index) => ({
      id: `rss-regular-${index}`,
      title: item.title,
      excerpt: item.description,
      image: `https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d', '1460925895917-afdab827c52f', '1554224155-6726b3ff858f', '1551288049-bebda4e38f71'][index % 4]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      author: "Portal Contábeis",
      date: item.pubDate,
      readTime: "4 min",
      views: "800",
      category: item.category || "Empresarial",
      featured: false,
      link: item.link,
      external: true
    }))
  ] : fallbackNews.concat([
    {
      id: 3,
      title: "Imposto de Renda 2024: Calendário e Principais Mudanças",
      excerpt: "A Receita Federal divulgou o calendário do IR 2024. Confira as datas importantes e as principais novidades desta declaração.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Roberto Santos",
      date: "10 de Janeiro, 2024",
      readTime: "6 min",
      views: "3.2k",
      category: "Imposto de Renda",
      featured: false,
      link: "/blog/imposto-renda-2024-calendario"
    },
    {
      id: 4,
      title: "Digitalização Contábil: Como a IA Está Mudando o Setor",
      excerpt: "A inteligência artificial e automação estão revolucionando a contabilidade. Descubra como sua empresa pode se beneficiar dessas tecnologias.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Carlos Mendonça",
      date: "8 de Janeiro, 2024",
      readTime: "8 min",
      views: "1.5k",
      category: "Tecnologia",
      featured: false,
      link: "/blog/digitalizacao-contabil-ia"
    }
  ]);

  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  if (error) {
    console.log('Erro ao carregar RSS, usando dados estáticos:', error);
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Blog Contábil
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Últimas Notícias e Insights
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas mudanças na legislação tributária 
            e dicas exclusivas dos nossos especialistas.
          </p>
          {isLoading && (
            <div className="mt-4 text-sm text-slate-500">
              Carregando notícias atualizadas...
            </div>
          )}
          <div className="mt-6">
            <Link to="/blog">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Ver Todos os Artigos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredNews.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    {article.category}
                  </Badge>
                </div>
                {article.external && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Externo
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {article.excerpt}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                </div>
                {article.external ? (
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="group">
                      Ler Artigo Completo
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                ) : (
                  <Link to={article.link}>
                    <Button variant="outline" className="group">
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regularNews.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700 text-xs">
                    {article.category}
                  </Badge>
                </div>
                {article.external && (
                  <div className="absolute top-2 right-2">
                    <ExternalLink className="h-3 w-3 text-white bg-black/50 rounded p-0.5" />
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
                {article.external ? (
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Ler Mais
                    </Button>
                  </a>
                ) : (
                  <Link to={article.link}>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Ler Mais
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Receba Nossas Atualizações
            </h3>
            <p className="mb-6 text-blue-100">
              Cadastre-se em nossa newsletter e seja o primeiro a saber sobre mudanças na legislação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 rounded-md text-slate-900"
              />
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Assinar Newsletter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
