import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ArrowRight, Share2, Check, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';

export const Wishlist = () => {
  const { wishlist, clearWishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [shared, setShared] = useState(false);

  // Match wishlisted IDs to actual products from products.json
  const wishlistedProducts = productsData.filter((p) => wishlist.includes(p.id));

  const handleShareWishlist = () => {
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart size={13} className="fill-rose-dusty text-rose-dusty" />
            <span>Saved Inspiration</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Your Aesthetic Wishlist 🤍
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            All your favorite pins and pieces saved in one place. Ready whenever you want to treat yourself.
          </p>
        </div>

        <AffiliateNotice className="mb-8" />

        {wishlistedProducts.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-cream">
            <span className="text-xs font-semibold uppercase tracking-wider text-brown-muted">
              {wishlistedProducts.length} Saved {wishlistedProducts.length === 1 ? 'Piece' : 'Pieces'}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShareWishlist}
                className="px-4 py-1.5 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                {shared ? <Check size={12} className="text-rose-deep" /> : <Share2 size={12} />}
                <span>{shared ? 'Link Copied!' : 'Share Wishlist'}</span>
              </button>
              <button
                onClick={clearWishlist}
                className="px-4 py-1.5 rounded-full bg-white hover:bg-red-50 text-red-600 border border-red-100 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Trash2 size={12} />
                <span>Clear All</span>
              </button>
            </div>
          </div>
        )}

        {/* Wishlist Items Grid */}
        {wishlistedProducts.length === 0 ? (
          <div className="bg-white rounded-32 p-12 sm:p-16 text-center border border-cream shadow-soft max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-blush-light flex items-center justify-center mx-auto text-rose-deep">
              <Heart size={32} />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-brown-deep">
              Your wishlist is empty
            </h3>
            <p className="text-xs sm:text-sm text-brown-muted leading-relaxed">
              Explore our Pinterest viral finds, Clean Girl staples, and click the little heart icon on any product to save it here!
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-xs sm:text-sm font-semibold transition-all shadow-card"
              >
                <ShoppingBag size={16} />
                <span>Explore Trending Finds</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistedProducts.map((product) => (
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
