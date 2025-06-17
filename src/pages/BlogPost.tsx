
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, BookOpen } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Em uma aplicação real, você buscaria o post pelo slug
  const post = {
    title: "Mudanças no Simples Nacional 2024: O que Você Precisa Saber",
    content: `
      <h2>Introdução</h2>
      <p>O Simples Nacional é o regime tributário mais utilizado por pequenas e médias empresas no Brasil. Em 2024, importantes mudanças entraram em vigor, afetando milhões de empreendedores.</p>
      
      <h2>Principais Mudanças</h2>
      <h3>1. Novos Limites de Faturamento</h3>
      <p>O limite de faturamento para permanecer no Simples Nacional foi atualizado para R$ 4.800.000,00 anuais, representando um aumento significativo em relação ao ano anterior.</p>
      
      <h3>2. Novas Alíquotas</h3>
      <p>As alíquotas foram revisadas para diferentes faixas de faturamento, com ajustes que beneficiam especialmente empresas de serviços e comércio.</p>
      
      <h3>3. Simplificação de Obrigações</h3>
      <p>Algumas obrigações acessórias foram simplificadas, reduzindo a burocracia para empresários do regime.</p>
      
      <h2>Como Essas Mudanças Afetam Sua Empresa</h2>
      <p>Para empresas que já estão no Simples Nacional, as mudanças podem representar tanto oportunidades de economia quanto necessidade de adequação. É fundamental revisar sua situação fiscal com um contador especializado.</p>
      
      <h2>Próximos Passos</h2>
      <p>Recomendamos que você:</p>
      <ul>
        <li>Revise seu enquadramento tributário</li>
        <li>Calcule o impacto das novas alíquotas</li>
        <li>Verifique se ainda compensa permanecer no regime</li>
        <li>Considere mudanças operacionais necessárias</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>As mudanças no Simples Nacional 2024 representam uma evolução importante do regime tributário. Com planejamento adequado e orientação profissional, sua empresa pode se beneficiar dessas atualizações.</p>
    `,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    author: "Dr. Carlos Mendonça",
    date: "15 de Janeiro, 2024",
    readTime: "5 min",
    views: "2.1k",
    category: "Tributário"
  };

  const relatedPosts = [
    {
      title: "eSocial: Prazo Final para Adequação se Aproxima",
      slug: "esocial-prazo-adequacao",
      category: "Trabalhista"
    },
    {
      title: "Imposto de Renda 2024: Calendário e Principais Mudanças",
      slug: "imposto-renda-2024-calendario", 
      category: "Imposto de Renda"
    },
    {
      title: "MEI 2024: Novas Regras e Oportunidades",
      slug: "mei-2024-novas-regras",
      category: "MEI"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {post.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  {post.views}
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Ler Artigo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
