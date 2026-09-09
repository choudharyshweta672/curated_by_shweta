import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Star, ExternalLink, Sparkles, Share2, ArrowLeft, Check, ChevronDown, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { useWishlist } from '../context/WishlistContext';
import { formatCurrency, calculateDiscount } from '../utils/currency';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const product = productsData.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('styling');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setSelectedColor(product.colors?.[0] || '');
      setSelectedSize(product.sizes?.[0] || '');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="font-playfair text-2xl font-bold text-brown-deep mb-4">
          Product Not Found 🧺
        </h2>
        <p className="text-sm text-brown-muted mb-6">
          This piece might have moved or been updated.
        </p>
        <Link
          to="/shop"
          className="px-6 py-2.5 rounded-full bg-rose-dusty text-white text-xs font-semibold"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const discount = calculateDiscount(product.price, product.oldPrice);

  const gallery = [
    product.image,
    ...(product.gallery || [])
  ].filter((v, i, a) => a.indexOf(v) === i);

  // Related products from the same category or aesthetic
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && (p.category === product.category || p.aesthetic === product.aesthetic))
    .slice(0, 4);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleSharePinterest = () => {
    const url = encodeURIComponent(window.location.href);
    const media = encodeURIComponent(product.image);
    const desc = encodeURIComponent(`${product.name} - Curated by Shweta 🤍`);
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${desc}`, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`Check out this aesthetic find curated by Shweta: ${product.name} (${formatCurrency(product.price)}) - ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? '' : key);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-brown-muted mb-6">
          <Link to="/" className="hover:text-brown-deep">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-brown-deep">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-brown-deep">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-brown-deep font-medium line-clamp-1">{product.name}</span>
        </div>

        <AffiliateNotice className="mb-8" />

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Left: Gallery (Thumbnails + Main Stage) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-32 overflow-hidden bg-cream/40 border border-cream shadow-card group">
              <img
                src={activeImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                {product.new && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-md text-rose-deep border border-blush shadow-xs">
                    New In
                  </span>
                )}
                {product.bestSeller && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blush text-brown-deep border border-rose-dusty/40 shadow-xs flex items-center gap-1">
                    <Sparkles size={11} className="text-rose-deep" />
                    <span>Best Seller</span>
                  </span>
                )}
                {discount > 0 && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-brown-deep text-white shadow-xs">
                    Save {discount}%
                  </span>
                )}
              </div>

              {/* Wishlist Heart Icon */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brown-soft hover:text-rose-deep shadow-soft transition-all hover:scale-110"
                aria-label="Wishlist"
              >
                <Heart
                  size={20}
                  className={wishlisted ? 'fill-rose-dusty text-rose-dusty' : ''}
                />
              </button>
            </div>

            {/* Thumbnails Row */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-24 rounded-20 overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImage === img ? 'border-rose-dusty scale-105 shadow-sm' : 'border-cream opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Affiliate CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider">
                  {product.aesthetic || product.category}
                </span>
                <div className="flex items-center gap-1 text-brown-soft text-xs">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-brown-muted">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-playfair text-2xl sm:text-4xl font-bold text-brown-deep mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-poppins font-bold text-3xl sm:text-4xl text-brown-deep">
                  {formatCurrency(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-base sm:text-lg text-brown-muted line-through">
                    {formatCurrency(product.oldPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blush text-rose-deep">
                    {discount}% OFF
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-brown-muted leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brown-soft block mb-2">
                    Select Color: <span className="font-normal text-brown-muted">{selectedColor}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                          selectedColor === color
                            ? 'bg-brown-deep text-white border-brown-deep shadow-xs'
                            : 'bg-white text-brown-soft border-cream hover:border-rose-dusty'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brown-soft block mb-2">
                    Select Size: <span className="font-normal text-brown-muted">{selectedSize}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-4 py-2 rounded-20 text-xs font-medium border transition-all ${
                          selectedSize === sz
                            ? 'bg-blush text-brown-deep font-bold border-rose-dusty shadow-xs'
                            : 'bg-white text-brown-soft border-cream hover:border-rose-dusty'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Primary Affiliate Action Buttons */}
              <div className="space-y-3 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.amazonLink && (
                    <a
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="py-3.5 px-6 rounded-full bg-brown-deep hover:bg-brown-soft text-white text-sm font-semibold text-center transition-all shadow-card flex items-center justify-center gap-2 group"
                    >
                      <span>Buy on Amazon 🛍️</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {product.flipkartLink && (
                    <a
                      href={product.flipkartLink}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="py-3.5 px-6 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-sm font-semibold text-center transition-all shadow-card flex items-center justify-center gap-2 group"
                    >
                      <span>Buy on Flipkart ⚡</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-center gap-6 text-[11px] text-brown-muted pt-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={13} className="text-rose-deep" />
                    100% Genuine Partner Link
                  </span>
                  <span className="flex items-center gap-1">
                    <Truck size={13} className="text-rose-deep" />
                    Fast Prime / Assured Delivery
                  </span>
                </div>
              </div>

              {/* Social Share & Wishlist Row */}
              <div className="flex items-center justify-between py-3 border-y border-cream">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="flex items-center gap-2 text-xs font-semibold text-brown-deep hover:text-rose-deep transition-colors"
                >
                  <Heart
                    size={16}
                    className={wishlisted ? 'fill-rose-dusty text-rose-dusty' : ''}
                  />
                  <span>{wishlisted ? 'Saved in Wishlist 🤍' : 'Save to Wishlist'}</span>
                </button>

                {/* Share Icons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-brown-muted mr-1">Share:</span>
                  <button
                    onClick={handleSharePinterest}
                    className="p-1.5 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs"
                    title="Pin this on Pinterest"
                  >
                    📌 Pin
                  </button>
                  <button
                    onClick={handleShareWhatsApp}
                    className="p-1.5 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs"
                    title="Share via WhatsApp"
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="p-1.5 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs flex items-center gap-1"
                    title="Copy Link"
                  >
                    {copiedLink ? <Check size={12} className="text-rose-deep" /> : <Share2 size={12} />}
                    <span>{copiedLink ? 'Copied!' : 'Link'}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Accordion Details */}
            <div className="space-y-2 pt-4">
              
              {/* Shweta's Styling Tips Accordion */}
              {product.stylingTips && (
                <div className="rounded-20 bg-cream/50 border border-cream overflow-hidden">
                  <button
                    onClick={() => toggleAccordion('styling')}
                    className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brown-deep"
                  >
                    <div className="flex items-center gap-2 text-rose-deep">
                      <Sparkles size={14} />
                      <span>Shweta's Styling Notes</span>
                    </div>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openAccordion === 'styling' ? 'rotate-180' : ''}`} />
                  </button>
                  {openAccordion === 'styling' && (
                    <div className="px-4 pb-4 text-xs text-brown-soft leading-relaxed italic border-t border-cream/50 pt-2">
                      "{product.stylingTips}"
                    </div>
                  )}
                </div>
              )}

              {/* Fabric & Specifications */}
              <div className="rounded-20 bg-cream/50 border border-cream overflow-hidden">
                <button
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brown-deep"
                >
                  <span>Fabric, Fit & Specifications</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openAccordion === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'fabric' && (
                  <div className="px-4 pb-4 text-xs text-brown-muted space-y-1.5 border-t border-cream/50 pt-2">
                    <p>• <strong>Category:</strong> {product.category}</p>
                    <p>• <strong>Aesthetic:</strong> {product.aesthetic || 'Everyday Chic'}</p>
                    <p>• <strong>Care Instructions:</strong> Machine wash cold on gentle cycle or hand wash. Lay flat to dry.</p>
                  </div>
                )}
              </div>

              {/* Shipping & Return Policy */}
              <div className="rounded-20 bg-cream/50 border border-cream overflow-hidden">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brown-deep"
                >
                  <span>Shipping & Returns</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'shipping' && (
                  <div className="px-4 pb-4 text-xs text-brown-muted space-y-1.5 border-t border-cream/50 pt-2">
                    <p>• Fulfilled via verified marketplace partners (Amazon Prime / Flipkart Assured).</p>
                    <p>• Easy 7-10 day return or replacement policy supported as per marketplace standards.</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Related / Complete the Look Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-cream">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep mb-1 block">
                  More Aesthetic Pieces
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-brown-deep">
                  You Might Also Adore
                </h3>
              </div>
              <Link
                to="/shop"
                className="text-xs font-semibold text-rose-deep hover:underline"
              >
                View all finds →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
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
