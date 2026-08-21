import { BLOGS } from '../data/blogs';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold gold-gradient-text mb-4">
          Snack Stories & Insights
        </h1>
        <p className="text-gold-100/70 text-lg max-w-xl mx-auto">
          Reviews, flavor guides, and everything you need to know about imported snacks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS.map((post) => (
          <article
            key={post.id}
            className="glass rounded-2xl overflow-hidden border border-gold-300/20 flex flex-col justify-between hover:border-gold-300/40 transition-all"
          >
            <div>
              <div className="h-48 overflow-hidden bg-cocoa-800/50 flex items-center justify-center p-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full object-contain hover:scale-105 transition-transform duration-300"
                  width="200"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gold-200/60 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gold-100 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gold-100/60 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-gold-300 text-sm font-semibold hover:gap-3 transition-all"
              >
                Read Full Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
