import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Sparkles, Heart, Share2, Check } from 'lucide-react';
import blogsData from '../data/blogs.json';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';

export const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-playfair text-2xl font-bold text-brown-deep mb-4">
          Article Not Found 📖
        </h2>
        <Link to="/blog" className="px-6 py-2.5 rounded-full bg-rose-dusty text-white text-xs font-semibold">
          Return to Blog
        </Link>
      </div>
    );
  }

  // Get embedded featured products from products.json
  const featuredProducts = productsData.filter((p) =>
    blog.featuredProductIds?.includes(p.id)
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-deep hover:underline mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to all style guides</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-blush-light text-rose-deep"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-brown-deep leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-between py-3 border-y border-cream text-xs text-brown-muted">
            <div className="flex items-center gap-4">
              <span>By {blog.author}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {blog.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {blog.readTime}
              </span>
            </div>

            <button
              onClick={handleCopyLink}
              className="p-1.5 px-3 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check size={12} className="text-rose-deep" /> : <Share2 size={12} />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="aspect-[16/9] w-full rounded-32 overflow-hidden mb-8 shadow-card bg-cream/40">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        <AffiliateNotice className="mb-8" />

        {/* Article Content */}
        <div className="space-y-8 text-brown-soft leading-relaxed text-sm sm:text-base font-light">
          <p className="text-lg sm:text-xl font-serif text-brown-deep leading-relaxed italic border-l-2 border-rose-dusty pl-4">
            {blog.excerpt}
          </p>

          {blog.content.map((section, idx) => (
            <div key={idx} className="space-y-3 pt-2">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-brown-deep">
                {section.heading}
              </h2>
              <p className="text-brown-soft leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Embedded Affiliate Recommendations */}
        {featuredProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-cream bg-cream/30 rounded-32 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles size={14} />
              <span>Shop The Pieces Mentioned in this Story</span>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-brown-deep mb-6">
              Verified Amazon & Flipkart Links
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {featuredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
};
