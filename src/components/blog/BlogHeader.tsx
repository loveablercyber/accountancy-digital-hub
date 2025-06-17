
import { Badge } from "@/components/ui/badge";

interface BlogHeaderProps {
  isLoading: boolean;
}

export const BlogHeader = ({ isLoading }: BlogHeaderProps) => {
  return (
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
  );
};
