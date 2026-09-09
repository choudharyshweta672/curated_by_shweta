import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Gift, ArrowLeft, Sparkles, Filter } from 'lucide-react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { formatCurrency } from '../utils/currency';

export const BudgetPage = ({ maxPriceProp }) => {
  const { amount } = useParams();
  const maxPrice = maxPriceProp || Number(amount) || 499;

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products by price limit
  const budgetProducts = useMemo(() => {
    let list = productsData.filter((p) => p.price <= maxPrice);
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    return list;
  }, [maxPrice, selectedCategory]);

  const categories = useMemo(() => {
    const cats = productsData
      .filter((p) => p.price <= maxPrice)
      .map((p) => p.category);
    return ['All', ...new Set(cats)];
  }, [maxPrice]);

  const budgetSubtitles = {
    299: 'Pocket-friendly coquette ribbons, dainty hoops, and hair essentials that look 5x their price.',
    499: 'The holy grail everyday staples: butter ribbed tanks, Parisian totes, and sunglasses.',
    699: 'High-street dupes: tailored waistcoats, pleated skirts, and boyfriend cotton shirts.',
    999: 'Luxury minimal silhouettes: slouchy dad trousers, cottagecore dresses, and chunky loafers.',
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-deep hover:underline mb-6"
        >
          <ArrowLeft size={14} />
          <span>Back to all fashion finds</span>
        </Link>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Gift size={13} />
            <span>Budget Curation</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Aesthetic Finds Under ₹{maxPrice}
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted leading-relaxed">
            {budgetSubtitles[maxPrice] || 'Verified high quality Amazon & Flipkart finds that fit your budget.'}
          </p>

          {/* Quick budget tier pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[299, 499, 699, 999].map((tier) => (
              <Link
                key={tier}
                to={`/under-${tier}`}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  maxPrice === tier
                    ? 'bg-rose-dusty text-white shadow-soft scale-105'
                    : 'bg-cream text-brown-soft hover:bg-blush-light'
                }`}
              >
                Under ₹{tier}
              </Link>
            ))}
          </div>
        </div>

        <AffiliateNotice className="mb-8" />

        {/* Category Filter Chips */}
        {categories.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 mb-8 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-brown-deep text-white'
                    : 'bg-white text-brown-soft border border-cream hover:bg-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brown-muted">
            Found {budgetProducts.length} items under {formatCurrency(maxPrice)}
          </span>
        </div>

        {/* Products Grid */}
        {budgetProducts.length === 0 ? (
          <div className="bg-white rounded-32 p-12 text-center border border-cream shadow-soft">
            <p className="text-sm text-brown-muted">
              No products found in this category under ₹{maxPrice}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {budgetProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
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
