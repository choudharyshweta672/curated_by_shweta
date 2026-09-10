import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Star, CheckCircle, Flame, Gift, Compass } from 'lucide-react';
import productsData from '../data/products.json';
import collectionsData from '../data/collections.json';
import reviewsData from '../data/reviews.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { formatCurrency } from '../utils/currency';
export const Home = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeBudgetTab, setActiveBudgetTab] = useState(499);
  const [activeStyle, setActiveStyle] = useState("All");
  const styles = [
  "All",
  "Coquette",
  "Clean Girl",
  "Minimal Luxury",
  "College Wardrobe",
  "Viral",
];
  

  // Dynamic products from products.json
  const trendingFinds = productsData
  .filter((p) => p.featured)
  .filter((p) => {
    if (activeStyle === "All") return true;
    return p.aesthetic === activeStyle;
  })
  .slice(0, 8);
  const newArrivals = productsData.filter((p) => p.new).slice(0, 4);
  const bestSellers = productsData.filter((p) => p.bestSeller).slice(0, 4);
  const budgetFilteredProducts = productsData.filter((p) => p.price <= activeBudgetTab).slice(0, 4);

  // Categories with counts
  const categories = [
    { name: 'Dresses', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', count: productsData.filter(p => p.category === 'Dresses').length },
    { name: 'Tops', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80', count: productsData.filter(p => p.category === 'Tops').length },
    { name: 'Bottoms', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80', count: productsData.filter(p => p.category === 'Bottoms').length },
    { name: 'Bags & Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80', count: productsData.filter(p => p.category === 'Bags & Accessories').length },
    { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80', count: productsData.filter(p => p.category === 'Jewelry').length },
    { name: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80', count: productsData.filter(p => p.category === 'Shoes').length },
  ];

  const moodboardImages = [
    { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80', title: 'Summer Romantics', aesthetic: 'Coquette' },
    { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80', title: 'Tailored Waistcoats', aesthetic: 'Clean Girl' },
    { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80', title: 'Ribbon Details', aesthetic: 'Feminine Luxury' },
    { url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80', title: 'Canvas & Matcha', aesthetic: 'College' },
    { url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', title: 'Gold Hoops Everyday', aesthetic: 'Minimal' },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-12">
      
      {/* ================= HERO SECTION V2 ================= */}

<section className="relative overflow-hidden rounded-[40px] mx-4 lg:mx-8 bg-gradient-to-br from-[#FFF8F5] via-[#FFF2F5] to-[#FDF6F2] border border-[#F5E5E8]">

  {/* Background circles */}
  <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative z-10">

    {/* LEFT CONTENT */}
    <div>

      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-pink-200 rounded-full px-4 py-2 mb-6 shadow-sm">
        <Sparkles size={14} className="text-pink-500" />
        <span className="text-xs font-semibold tracking-widest uppercase text-pink-600">
          Pinterest Curated Fashion
        </span>
      </div>

      <h1 className="font-playfair text-5xl lg:text-7xl leading-[1.05] text-[#3E3028] font-bold">
        Wear the Pinterest Girl Lifestyle.
      </h1>

      <p className="mt-6 text-lg text-[#6F5A52] leading-8 max-w-xl">
        Handpicked outfits, jewelry, bags and accessories that look straight out
        of Pinterest — from Soft Girl to Old Money, all under your budget.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">

        <Link
          to="/shop"
          className="px-8 py-4 rounded-full bg-[#D98B9F] text-white font-medium shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          Shop New Arrivals
          <ArrowRight size={18}/>
        </Link>

        <Link
          to="/collections"
          className="px-8 py-4 rounded-full bg-white border border-[#EAD8C0] text-[#3E3028] font-medium hover:bg-[#FFF5F7] transition-all duration-300"
        >
          Explore Collections
        </Link>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mt-12">

        <div>
          <h3 className="text-3xl font-bold text-[#3E3028]">500+</h3>
          <p className="text-sm text-[#8A756B] mt-1">Pinterest Finds</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#3E3028]">50+</h3>
          <p className="text-sm text-[#8A756B] mt-1">Outfit Collections</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#3E3028]">100%</h3>
          <p className="text-sm text-[#8A756B] mt-1">Verified Picks</p>
        </div>

      </div>

    </div>

    {/* RIGHT COLLAGE */}
    <div className="relative">

      <div className="grid grid-cols-2 gap-4">

        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
          className="rounded-[30px] h-[360px] object-cover shadow-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80"
          className="rounded-[30px] h-[280px] mt-16 object-cover shadow-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
          className="rounded-[30px] h-[240px] -mt-8 object-cover shadow-xl"
        />

        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
          className="rounded-[30px] h-[330px] object-cover shadow-xl"
        />

      </div>

      {/* Floating Card */}
      <div className="absolute top-4 left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-pink-100">
        <p className="text-xs text-gray-500">Trending Today</p>
        <h4 className="font-semibold text-[#3E3028]">Old Money Blazer</h4>
        <p className="text-pink-500 font-bold">₹899</p>
      </div>

      {/* Discount Card */}
      <div className="absolute bottom-4 right-2 bg-[#FFF1F4] rounded-2xl px-5 py-4 shadow-xl border border-pink-200">
        <p className="text-xs uppercase tracking-widest text-pink-500">
          Soft Girl Collection
        </p>
        <h3 className="text-2xl font-bold text-[#D98B9F]">
          30% OFF
        </h3>
      </div>

    </div>

  </div>

</section>
      
      {/* Global Transparency Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AffiliateNotice />
      </div>

      {/* 2. TRENDING PINTEREST FINDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-deep mb-2">
    <Flame size={14} />
    <span>Going Viral On Pinterest</span>
  </div>

  <h2 className="font-playfair text-4xl sm:text-5xl text-[#3E3028] font-bold">
    Trending Pinterest Finds ✨
  </h2>

  <p className="text-[#8A756B] mt-3 mb-6 max-w-xl">
    Viral Pinterest outfits, soft girl accessories, old money staples and trendy fashion picks curated just for you.
  </p>

  {/* Pinterest Filter Chips */}
  <div className="flex flex-wrap gap-3">
    {styles.map((style) => (
      <button
        key={style}
        onClick={() => setActiveStyle(style)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeStyle === style
            ? "bg-[#D98B9F] text-white shadow-lg scale-105"
            : "bg-white border border-[#F2DDD9] text-[#6F5A52] hover:bg-[#FFF4F6]"
        }`}
      >
        {style}
      </button>
    ))}
  </div>
</div>
          <Link
            to="/pinterest-finds"
            className="text-sm font-semibold text-rose-deep hover:text-brown-deep transition-colors flex items-center gap-1 group"
          >
            <span>View all viral pins</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trendingFinds.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 3. SHOP BY CATEGORY */}
      <section className="bg-cream/60 py-16 my-12 border-y border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep mb-2 block">
              Curated Wardrobe
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold mb-3">
              Shop by Aesthetic Category
            </h2>
            <p className="text-xs sm:text-sm text-brown-muted">
              Carefully organized so you can build your capsule wardrobe piece by piece.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="group bg-white rounded-28 p-3 shadow-card hover:shadow-card-hover transition-all duration-300 border border-cream flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square rounded-20 overflow-hidden mb-3 bg-cream/30">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-playfair font-semibold text-brown-deep text-sm group-hover:text-rose-deep transition-colors">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-brown-muted mt-0.5">
                  {cat.count} curated items
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-deep mb-2">
              <Sparkles size={14} />
              <span>Just Added to the Board</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold">
              New Arrivals This Week
            </h2>
          </div>
          <Link
            to="/shop?sort=newest"
            className="text-sm font-semibold text-rose-deep hover:text-brown-deep transition-colors flex items-center gap-1 group"
          >
            <span>Shop latest drop</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 5. OUTFIT COLLECTIONS ("Shop Entire Look") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-32 p-6 sm:p-10 border border-cream shadow-soft">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                Head-to-Toe Styling
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold">
                Shop Entire Outfit Looks
              </h2>
              <p className="text-xs sm:text-sm text-brown-muted mt-1">
                Every piece chosen to complement each other. Bundle and save on your overall look.
              </p>
            </div>
            <Link
              to="/collections"
              className="px-6 py-2.5 rounded-full bg-brown-deep hover:bg-brown-soft text-white text-xs font-semibold transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore All Lookbooks</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collectionsData.slice(0, 2).map((col) => {
              // Get products for this collection from productsData
              const lookProducts = productsData.filter((p) => col.productIds.includes(p.id));
              const totalPrice = lookProducts.reduce((sum, p) => sum + p.price, 0);
              const totalOldPrice = lookProducts.reduce((sum, p) => sum + (p.oldPrice || p.price), 0);

              return (
                <div
                  key={col.id}
                  className="rounded-28 p-5 bg-cream/40 border border-cream hover:border-blush transition-all flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <img
                      src={col.coverImage}
                      alt={col.title}
                      className="w-full sm:w-40 h-48 rounded-20 object-cover flex-shrink-0"
                    />
                    <div>
                      <span className="text-[11px] font-semibold text-rose-deep uppercase tracking-wider">
                        {col.aesthetic}
                      </span>
                      <h3 className="font-playfair text-lg sm:text-xl font-bold text-brown-deep mt-1 mb-2">
                        {col.title}
                      </h3>
                      <p className="text-xs text-brown-muted line-clamp-2 mb-3">
                        {col.description}
                      </p>
                      
                      {/* Bundle Pricing */}
                      <div className="p-2.5 rounded-xl bg-white border border-cream flex items-baseline justify-between">
                        <span className="text-xs font-medium text-brown-muted">Complete Outfit:</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-poppins font-bold text-base text-brown-deep">
                            {formatCurrency(totalPrice)}
                          </span>
                          {totalOldPrice > totalPrice && (
                            <span className="text-xs text-brown-muted line-through">
                              {formatCurrency(totalOldPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Included pieces preview */}
                  <div className="pt-3 border-t border-cream flex items-center justify-between">
                    <div className="flex -space-x-2 overflow-hidden">
                      {lookProducts.map((lp) => (
                        <img
                          key={lp.id}
                          src={lp.image}
                          alt={lp.name}
                          className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                          title={lp.name}
                        />
                      ))}
                    </div>
                    <Link
                      to="/collections"
                      className="text-xs font-semibold text-rose-deep hover:underline flex items-center gap-1"
                    >
                      <span>Shop this bundle</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BUDGET FASHION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Gift size={13} />
            <span>Budget-Friendly Luxury</span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold mb-2">
            Priced for Every Budget
          </h2>
          <p className="text-xs sm:text-sm text-brown-muted">
            You don't have to break the bank to look like a Pinterest board. Filter by your target price below.
          </p>

          {/* Interactive Budget Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[299, 499, 699, 999].map((limit) => (
              <button
                key={limit}
                onClick={() => setActiveBudgetTab(limit)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeBudgetTab === limit
                    ? 'bg-rose-dusty text-white shadow-soft scale-105'
                    : 'bg-cream/70 text-brown-soft hover:bg-cream'
                }`}
              >
                Under ₹{limit}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Products Preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {budgetFilteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to={`/under-${activeBudgetTab}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs font-semibold transition-colors border border-cream"
          >
            <span>See all {productsData.filter(p => p.price <= activeBudgetTab).length} finds under ₹{activeBudgetTab}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 7. BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep mb-1 block">
              Most Loved by Besties
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold">
              Community Best Sellers
            </h2>
          </div>
          <Link
            to="/shop?sort=popular"
            className="text-sm font-semibold text-rose-deep hover:text-brown-deep transition-colors flex items-center gap-1 group"
          >
            <span>Shop top rated</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 8. PINTEREST MOODBOARD */}
      <section className="bg-cream/40 py-16 border-t border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-deep mb-2">
              <Compass size={13} />
              <span>Visual Inspiration</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold mb-2">
              The Pinterest Moodboard
            </h2>
            <p className="text-xs sm:text-sm text-brown-muted">
              Live pins, aesthetic swatches, and dreamy moments from Shweta's personal curation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {moodboardImages.map((pin, i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] rounded-28 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <img
                  src={pin.url}
                  alt={pin.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brown-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full self-start">
                    {pin.aesthetic}
                  </span>
                  <div>
                    <p className="font-playfair text-sm font-semibold">{pin.title}</p>
                    <span className="text-[11px] text-white/80">Save Pin 📌</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER / COMMUNITY REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400" />
            ))}
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl text-brown-deep font-bold mb-2">
            Loved by 10,000+ Pinterest Girls
          </h2>
          <p className="text-xs sm:text-sm text-brown-muted">
            What our community besties say about shopping through our verified aesthetic finds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-28 p-6 shadow-card border border-cream flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brown-soft leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-cream flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-xs text-brown-deep">{rev.name}</h4>
                  <span className="text-[11px] text-brown-muted">{rev.handle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
};
