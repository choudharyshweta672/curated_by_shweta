import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import productsData from '../data/products.json';
import { formatCurrency } from '../utils/currency';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const quickTags = [
    'Clean Girl',
    'Coquette',
    'Under ₹499',
    'Tops',
    'Dresses',
    'Jewelry',
    'Bags & Accessories'
  ];

  const filteredProducts = query.trim() === ''
    ? []
    : productsData.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.aesthetic && p.aesthetic.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
        );
      }).slice(0, 6);

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
    onClose();
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-brown-deep/40 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-32 max-w-2xl w-full shadow-2xl border border-cream overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-cream flex items-center gap-3">
          <Search size={20} className="text-rose-deep flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Pinterest fashion finds, aesthetics, categories..."
            className="w-full text-sm sm:text-base text-brown-deep placeholder:text-brown-light bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-brown-muted hover:text-brown-deep"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs rounded-full bg-cream text-brown-muted hover:text-brown-deep"
          >
            Esc
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="px-5 py-3 bg-cream/40 border-b border-cream flex items-center gap-2 overflow-x-auto hide-scrollbar">
          <span className="text-[11px] font-semibold text-brown-muted flex items-center gap-1 flex-shrink-0">
            <Sparkles size={11} className="text-rose-dusty" />
            Trending:
          </span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 rounded-full text-xs bg-white hover:bg-blush text-brown-soft border border-cream shadow-2xs transition-colors flex-shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 sm:p-5 max-h-96 overflow-y-auto">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-brown-muted text-xs sm:text-sm">
              <p>Type anything like "Coquette", "Linen", "Hoops", or "Trousers" to find curated gems ✨</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-brown-muted text-xs sm:text-sm">
              <p>No fashion finds matching "{query}". Try checking our categories or budget pages!</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brown-muted mb-2">
                Matching Products ({filteredProducts.length})
              </p>
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectProduct(p.id)}
                  className="group p-2.5 rounded-20 hover:bg-cream/60 transition-colors flex items-center justify-between cursor-pointer border border-transparent hover:border-cream"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-14 rounded-xl object-cover bg-cream flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-playfair font-semibold text-brown-deep text-sm group-hover:text-rose-deep transition-colors line-clamp-1">
                        {p.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-brown-muted mt-0.5">
                        <span className="text-rose-deep font-medium">{p.aesthetic || p.category}</span>
                        <span>•</span>
                        <span className="font-bold text-brown-deep">{formatCurrency(p.price)}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-brown-muted group-hover:text-rose-deep group-hover:translate-x-1 transition-all mr-2" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View All Shop Link */}
        <div className="p-3 bg-ivory border-t border-cream text-center">
          <button
            onClick={() => {
              navigate(`/shop?search=${encodeURIComponent(query)}`);
              onClose();
            }}
            className="text-xs font-semibold text-rose-deep hover:underline"
          >
            Explore all items in Shop →
          </button>
        </div>

      </div>
    </div>
  );
};
