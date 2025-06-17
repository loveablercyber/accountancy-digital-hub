
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Eye, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  category: string;
  slug: string;
  external: boolean;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
  );
};
