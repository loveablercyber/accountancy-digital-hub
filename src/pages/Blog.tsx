
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogGrid } from "@/components/blog/BlogGrid";
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
        <BlogHeader isLoading={isLoading} />
        
        <BlogFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <BlogGrid posts={filteredPosts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
