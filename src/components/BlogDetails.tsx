import { useParams, Link } from 'react-router-dom';
import { BLOGS } from '../data/blogs';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gold-100 mb-4">Blog Post Not Found</h2>
        <Link to="/blog" className="text-gold-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-24">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gold-300 text-sm mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to all articles
      </Link>

      <div className="flex items-center gap-4 text-xs text-gold-200/60 mb-4">
        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-gold-100 mb-6 leading-tight">
        {post.title}
      </h1>

      <div className="w-full h-64 md:h-80 glass rounded-2xl flex items-center justify-center p-6 mb-8 border border-gold-300/20">
        <img src={post.image} alt={post.title} className="h-full object-contain" />
      </div>

      <div
        className="prose prose-invert max-w-none text-gold-100/80 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
