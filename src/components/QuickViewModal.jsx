import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Star, ExternalLink, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { formatCurrency, calculateDiscount } from '../utils/currency';

export const QuickViewModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const discount = calculateDiscount(product.price, product.oldPrice);

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');

  // Update active image if product changes
  useEffect(() => {
    setActiveImage(product.image);
    setSelectedColor(product.colors?.[0] || '');
    setSelectedSize(product.sizes?.[0] || '');
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const galleryImages = [
    product.image,
    ...(product.gallery || [])
  ].filter((v, i, a) => a.indexOf(v) === i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brown-deep/40 backdrop-blur-sm animate-fadeIn">
      {/* Modal Card */}
      <div
        className="bg-white rounded-32 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cream relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream/80 hover:bg-cream text-brown-deep transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Left: Image & Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[3/4] w-full rounded-28 overflow-hidden bg-cream/30 shadow-xs border border-cream">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-brown-deep text-white shadow-xs">
                  Save {discount}%
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-14 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImage === img ? 'border-rose-dusty scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Affiliate Buy */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              {/* Badges & Rating */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider">
                  {product.aesthetic || product.category}
                </span>
                <div className="flex items-center gap-1 text-brown-soft text-xs">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-brown-muted">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-brown-deep mb-2">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-poppins font-bold text-2xl text-brown-deep">
                  {formatCurrency(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-brown-muted line-through">
                    {formatCurrency(product.oldPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-xs font-semibold text-rose-deep">
                    ({discount}% OFF)
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-brown-muted leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-3">
                  <span className="text-xs font-semibold text-brown-soft block mb-1.5">
                    Available Colors: <span className="font-normal text-brown-muted">{selectedColor}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                          selectedColor === color
                            ? 'bg-brown-deep text-white border-brown-deep'
                            : 'bg-cream/50 text-brown-soft border-cream hover:border-rose-dusty'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4">
                  <span className="text-xs font-semibold text-brown-soft block mb-1.5">
                    Available Sizes: <span className="font-normal text-brown-muted">{selectedSize}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1 rounded-xl text-xs font-medium border transition-all ${
                          selectedSize === sz
                            ? 'bg-blush text-brown-deep font-semibold border-rose-dusty'
                            : 'bg-white text-brown-soft border-cream hover:border-rose-dusty'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Shweta's Styling Tip */}
              {product.stylingTips && (
                <div className="p-3.5 rounded-20 bg-cream/70 border border-blush/40 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-deep mb-1">
                    <Sparkles size={13} />
                    <span>Shweta's Styling Tip:</span>
                  </div>
                  <p className="text-xs text-brown-soft italic">
                    "{product.stylingTips}"
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons & Links */}
            <div className="space-y-2 pt-2 border-t border-cream">
              <div className="grid grid-cols-2 gap-3">
                {product.amazonLink && (
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="py-3 px-4 rounded-full bg-brown-deep hover:bg-brown-soft text-white text-xs sm:text-sm font-semibold text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Shop on Amazon</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                {product.flipkartLink && (
                  <a
                    href={product.flipkartLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="py-3 px-4 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-xs sm:text-sm font-semibold text-center transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Shop on Flipkart</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="flex items-center gap-1.5 text-xs font-medium text-brown-soft hover:text-rose-deep transition-colors"
                >
                  <Heart
                    size={16}
                    className={wishlisted ? 'fill-rose-dusty text-rose-dusty' : ''}
                  />
                  <span>{wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="text-xs font-semibold text-rose-deep hover:underline flex items-center gap-1"
                >
                  <span>Full Details & Reviews</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
