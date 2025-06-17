
import { useQuery } from '@tanstack/react-query';

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  category?: string;
}

const parseRSSFeed = async (rssUrl: string): Promise<RSSItem[]> => {
  try {
    // Usando um proxy CORS para acessar o RSS
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error('Falha ao buscar RSS feed');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('RSS feed inválido');
    }
    
    return data.items.map((item: any, index: number) => ({
      title: item.title,
      description: item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      link: item.link,
      pubDate: new Date(item.pubDate).toLocaleDateString('pt-BR'),
      category: index < 2 ? 'Tributário' : index < 4 ? 'Trabalhista' : 'Empresarial'
    }));
  } catch (error) {
    console.error('Erro ao buscar RSS:', error);
    throw error;
  }
};

export const useRSSNews = () => {
  return useQuery({
    queryKey: ['rss-news'],
    queryFn: () => parseRSSFeed('https://www.contabeis.com.br/rss/noticias/'),
    staleTime: 15 * 60 * 1000, // 15 minutos
    refetchInterval: 30 * 60 * 1000, // Atualiza a cada 30 minutos
    retry: 3
  });
};
