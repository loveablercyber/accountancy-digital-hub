import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight, Clock, Eye, Search, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRSSNews } from "@/hooks/useRSSNews";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const { data: rssNews, isLoading } = useRSSNews();

  const categories = [
    "Todos", "Tributário", "Trabalhista", "Imposto de Renda", 
    "Tecnologia", "Empresarial", "MEI", "Simples Nacional"
  ];

  // Dados estáticos como fallback
  const staticPosts = [
    {
      id: 1,
      title: "Mudanças no Simples Nacional 2024: O que Você Precisa Saber",
      excerpt: "As novas regras do Simples Nacional trazem alterações importantes para MEIs e pequenas empresas. Entenda como essas mudanças podem impactar seu negócio e quais são os novos limites de faturamento.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Carlos Mendonça",
      date: "15 de Janeiro, 2024",
      readTime: "5 min",
      views: "2.1k",
      category: "Tributário",
      slug: "mudancas-simples-nacional-2024",
      external: false
    }
  ];

  // Combinar notícias do RSS com dados estáticos
  const allPosts = rssNews ? [
    ...rssNews.map((item, index) => ({
      id: `rss-${index}`,
      title: item.title,
      excerpt: item.description,
      image: `https://images.unsplash.com/photo-${['1454165804606-c3d57bc86b40', '1551434678-e076c223a692', '1554224155-6726b3ff858f', '1551288049-bebda4e38f71', '1507003211169-0a1dd7228f2d', '1460925895917-afdab827c52f'][index % 6]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,
      author: "Portal Contábeis",
      date: item.pubDate,
      readTime: "5 min",
      views: "1.2k",
      category: item.category || "Tributário",
      slug: item.link,
      external: true
    })),
    ...staticPosts
  ] : staticPosts.concat([
    {
      id: 2,
      title: "eSocial: Prazo Final para Adequação se Aproxima",
      excerpt: "Empresas têm até março para se adequar às novas obrigações do eSocial. Veja o checklist completo para não ser multado e garanta a conformidade da sua empresa.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dra. Ana Silva",
      date: "12 de Janeiro, 2024",
      readTime: "7 min",
      views: "1.8k",
      category: "Trabalhista",
      slug: "esocial-prazo-adequacao",
      external: false
    },
    {
      id: 3,
      title: "Imposto de Renda 2024: Calendário e Principais Mudanças",
      excerpt: "A Receita Federal divulgou o calendário do IR 2024. Confira as datas importantes e as principais novidades desta declaração para não perder prazos.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Dr. Roberto Santos",
      date: "10 de Janeiro, 2024",
      readTime: "6 min",
      views: "3.2k",
      category: "Imposto de Renda",
      slug: "imposto-renda-2024-calendario",
      external: false
    }
  ]);

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Blog Contábil
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Insights e Atualizações
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Mantenha-se atualizado com as últimas mudanças na legislação tributária 
              e dicas exclusivas dos nossos especialistas.
            </p>
            {isLoading && (
              <div className="mt-4 text-sm text-slate-500">
                Carregando notícias atualizadas do Portal Contábeis...
              </div>
            )}
          </div>
        </section>

        {/* Search and Filter */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-blue-600 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    {post.external && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-green-600 text-white text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          RSS
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {post.date}
                      </span>
                      {post.external ? (
                        <a href={post.slug} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="group">
                            Ler Mais
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                      ) : (
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="outline" size="sm" className="group">
                            Ler Mais
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-300">
                  Nenhum artigo encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
