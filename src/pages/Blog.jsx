import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import blogsData from '../data/blogs.json';
import { AffiliateNotice } from '../components/AffiliateNotice';

export const Blog = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen size={13} />
            <span>Editorial Style Notes</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            The Pinterest Style Guide 📖
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Capsule wardrobe formulas, smart shopping secrets, and aesthetic outfit breakdowns written by Shweta.
          </p>
        </div>

        <AffiliateNotice className="mb-10" />

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-32 p-5 shadow-card hover:shadow-card-hover border border-cream transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-24 overflow-hidden mb-4 bg-cream/40">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    {blog.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 backdrop-blur-md text-brown-deep shadow-2xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-brown-muted mb-2">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>

                <h2 className="font-playfair text-lg sm:text-xl font-bold text-brown-deep group-hover:text-rose-deep transition-colors mb-2 line-clamp-2">
                  <Link to={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-brown-muted leading-relaxed line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-cream flex items-center justify-between">
                <span className="text-xs text-brown-soft font-medium">
                  By {blog.author}
                </span>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-xs font-semibold text-rose-deep hover:underline flex items-center gap-1"
                >
                  <span>Read Story</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
