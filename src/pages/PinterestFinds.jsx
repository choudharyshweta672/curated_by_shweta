import React, { useState, useMemo } from 'react';
import { Flame, Sparkles, ShoppingBag, Heart, BookOpen, Coffee } from 'lucide-react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';

export const PinterestFinds = () => {
  const [activeTab, setActiveTab] = useState('viral');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const tabs = [
    { id: 'viral', label: "This Week's Viral Finds", icon: Flame },
    { id: 'amazon', label: 'Amazon Finds', icon: ShoppingBag },
    { id: 'essentials', label: 'Pinterest Girl Essentials', icon: Sparkles },
    { id: 'coquette', label: 'Coquette Collection', icon: Heart },
    { id: 'cleangirl', label: 'Clean Girl Collection', icon: Coffee },
    { id: 'college', label: 'College Wardrobe Collection', icon: BookOpen },
  ];

  // Dynamic filter based on productsData
  const displayedProducts = useMemo(() => {
    switch (activeTab) {
      case 'viral':
        return productsData.filter((p) => p.featured || p.aesthetic === 'Viral');
      case 'amazon':
        return productsData.filter((p) => !!p.amazonLink);
      case 'essentials':
        return productsData.filter((p) => p.bestSeller || p.price < 500);
      case 'coquette':
        return productsData.filter((p) => p.aesthetic === 'Coquette');
      case 'cleangirl':
        return productsData.filter((p) => p.aesthetic === 'Clean Girl');
      case 'college':
        return productsData.filter((p) => p.aesthetic === 'College Wardrobe');
      default:
        return productsData;
    }
  }, [activeTab]);

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Flame size={13} />
            <span>Curated from Pinterest Boards</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Pinterest Viral Finds
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            The exact aesthetic pieces trending across feeds, moodboards, and camera rolls right now.
          </p>
        </div>

        {/* Global Affiliate Notice */}
        <AffiliateNotice className="mb-8" />

        {/* Category Tabs Pill Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 hide-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 shadow-2xs ${
                  isActive
                    ? 'bg-brown-deep text-white shadow-soft scale-105'
                    : 'bg-white hover:bg-cream text-brown-soft border border-cream'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-rose-dusty' : 'text-rose-deep'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-brown-deep">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h2>
          <span className="text-xs text-brown-muted">
            {displayedProducts.length} verified pins
          </span>
        </div>

        {/* Pinterest Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

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
