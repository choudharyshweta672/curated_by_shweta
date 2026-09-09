import React, { useState } from 'react';
import { Sparkles, ArrowRight, ExternalLink, ShoppingBag, Check } from 'lucide-react';
import collectionsData from '../data/collections.json';
import productsData from '../data/products.json';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { formatCurrency, calculateDiscount } from '../utils/currency';

export const OutfitCollections = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep mb-1 block">
            Complete Lookbooks
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Shop the Entire Look 🎀
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Curated head-to-toe styling. Click each piece to grab the verified Amazon & Flipkart affiliate links.
          </p>
        </div>

        <AffiliateNotice className="mb-10" />

        {/* Collections Stack */}
        <div className="space-y-12">
          {collectionsData.map((col) => {
            // Match products from products.json
            const items = productsData.filter((p) => col.productIds.includes(p.id));
            const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
            const totalOldPrice = items.reduce((sum, item) => sum + (item.oldPrice || item.price), 0);
            const totalSavings = totalOldPrice - totalPrice;
            const discountPct = calculateDiscount(totalPrice, totalOldPrice);

            return (
              <div
                key={col.id}
                className="bg-white rounded-32 p-6 sm:p-8 shadow-card border border-cream transition-all duration-300 hover:shadow-card-hover"
              >
                {/* Look Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-cream">
                  
                  {/* Model / Mood Photo */}
                  <div className="lg:col-span-4 aspect-[4/3] sm:aspect-[3/4] rounded-28 overflow-hidden shadow-soft bg-cream/40">
                    <img
                      src={col.coverImage}
                      alt={col.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Look Info & Bundle Price Box */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider">
                        {col.aesthetic}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cream text-brown-deep text-xs font-medium">
                        {items.length} Complete Pieces
                      </span>
                    </div>

                    <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-brown-deep">
                      {col.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-brown-muted leading-relaxed max-w-2xl">
                      {col.description}
                    </p>

                    {/* Bundle Pricing Card */}
                    <div className="p-4 sm:p-5 rounded-28 bg-cream/50 border border-cream flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-brown-muted block mb-0.5">
                          Total Outfit Bundle Price
                        </span>
                        <div className="flex items-baseline gap-3">
                          <span className="font-poppins font-bold text-2xl sm:text-3xl text-brown-deep">
                            {formatCurrency(totalPrice)}
                          </span>
                          {totalOldPrice > totalPrice && (
                            <span className="text-sm text-brown-muted line-through">
                              {formatCurrency(totalOldPrice)}
                            </span>
                          )}
                          {discountPct > 0 && (
                            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-brown-deep text-white">
                              Save {discountPct}% ({formatCurrency(totalSavings)})
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-brown-soft">
                          Available on Prime & Flipkart Assured
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Individual Pieces Breakdown Grid */}
                <div className="pt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brown-muted mb-4 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-rose-deep" />
                    <span>Included Pieces in this Outfit ({items.length})</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-20 bg-ivory border border-cream flex flex-col justify-between hover:border-blush transition-colors group"
                      >
                        <div className="flex gap-3 mb-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-20 rounded-xl object-cover flex-shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                            onClick={() => setQuickViewProduct(item)}
                          />
                          <div className="flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] text-rose-deep font-semibold uppercase tracking-wider">
                                {item.category}
                              </span>
                              <h4
                                onClick={() => setQuickViewProduct(item)}
                                className="font-playfair text-xs font-semibold text-brown-deep line-clamp-2 cursor-pointer hover:text-rose-deep transition-colors"
                              >
                                {item.name}
                              </h4>
                            </div>
                            <span className="font-bold text-xs text-brown-deep">
                              {formatCurrency(item.price)}
                            </span>
                          </div>
                        </div>

                        {/* Direct Affiliate Buttons */}
                        <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-cream">
                          {item.amazonLink && (
                            <a
                              href={item.amazonLink}
                              target="_blank"
                              rel="noopener noreferrer sponsored"
                              className="py-1.5 px-2 rounded-lg bg-white hover:bg-cream text-[11px] font-semibold text-brown-deep text-center transition-colors border border-cream shadow-2xs flex items-center justify-center gap-1"
                            >
                              <span>Amazon</span>
                              <ExternalLink size={9} />
                            </a>
                          )}
                          {item.flipkartLink && (
                            <a
                              href={item.flipkartLink}
                              target="_blank"
                              rel="noopener noreferrer sponsored"
                              className="py-1.5 px-2 rounded-lg bg-blush-light hover:bg-blush text-[11px] font-semibold text-brown-deep text-center transition-colors border border-blush shadow-2xs flex items-center justify-center gap-1"
                            >
                              <span>Flipkart</span>
                              <ExternalLink size={9} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
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
