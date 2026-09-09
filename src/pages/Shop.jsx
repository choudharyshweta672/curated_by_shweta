import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, Sparkles, RotateCcw } from 'lucide-react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { formatCurrency } from '../utils/currency';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedAesthetic, setSelectedAesthetic] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState(initialSort);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync state if search params change
  useEffect(() => {
    if (searchParams.get('category')) {
      setSelectedCategory(searchParams.get('category'));
    }
    if (searchParams.get('search')) {
      setSearchQuery(searchParams.get('search'));
    }
    if (searchParams.get('sort')) {
      setSortBy(searchParams.get('sort'));
    }
  }, [searchParams]);

  // Extract distinct categories, aesthetics, colors
  const categories = useMemo(() => {
    const list = ['All', ...new Set(productsData.map((p) => p.category))];
    return list;
  }, []);

  const aesthetics = useMemo(() => {
    const list = ['All', ...new Set(productsData.map((p) => p.aesthetic).filter(Boolean))];
    return list;
  }, []);

  const colors = useMemo(() => {
    const colorSet = new Set();
    productsData.forEach((p) => {
      if (Array.isArray(p.colors)) {
        p.colors.forEach((c) => colorSet.add(c));
      }
    });
    return ['All', ...Array.from(colorSet)];
  }, []);

  // Filter & Sort Pipeline
  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.aesthetic && p.aesthetic.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Aesthetic filter
    if (selectedAesthetic !== 'All') {
      result = result.filter((p) => p.aesthetic === selectedAesthetic);
    }

    // Color filter
    if (selectedColor !== 'All') {
      result = result.filter((p) => p.colors && p.colors.includes(selectedColor));
    }

    // Price range filter
    result = result.filter((p) => p.price <= priceRange);

    // Sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        result.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedAesthetic, selectedColor, priceRange, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedAesthetic('All');
    setSelectedColor('All');
    setPriceRange(1000);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All' ||
    selectedAesthetic !== 'All' ||
    selectedColor !== 'All' ||
    priceRange < 1000 ||
    sortBy !== 'featured';

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep mb-1 block">
            All Verified Finds
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            The Fashion Closet
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Explore our complete collection of aesthetic wardrobe staples, verified on Amazon & Flipkart.
          </p>
        </div>

        {/* Global Affiliate Notice */}
        <AffiliateNotice className="mb-8" />

        {/* Live Search & Filter Controls Bar */}
        <div className="bg-white rounded-28 p-3 sm:p-4 shadow-soft border border-cream mb-8 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, aesthetics, tags..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-cream/50 text-xs sm:text-sm text-brown-deep placeholder:text-brown-light focus:outline-none focus:ring-1 focus:ring-rose-dusty"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brown-muted hover:text-brown-deep"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Quick Categories Bar (Desktop) */}
          <div className="hidden xl:flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-rose-dusty text-white shadow-xs'
                    : 'bg-cream/40 text-brown-soft hover:bg-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Action: Mobile Filter Trigger & Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 rounded-full bg-cream hover:bg-cream-dark text-brown-deep text-xs font-semibold flex items-center gap-1.5"
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-rose-deep"></span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-brown-muted hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3.5 py-2 rounded-full bg-cream/60 text-xs text-brown-deep font-medium border-0 focus:ring-1 focus:ring-rose-dusty cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="newest">Newest Arrivals</option>
                <option value="popular">Most Loved & Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Desktop Left Filter Sidebar */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white rounded-28 p-6 shadow-soft border border-cream space-y-6 sticky top-28">
              
              <div className="flex items-center justify-between pb-3 border-b border-cream">
                <span className="font-playfair font-bold text-brown-deep text-base">
                  Filter by
                </span>
                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-rose-deep hover:underline flex items-center gap-1 font-medium"
                  >
                    <RotateCcw size={12} />
                    <span>Reset All</span>
                  </button>
                )}
              </div>

              {/* Price Range Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-brown-soft mb-2">
                  <span>Max Price</span>
                  <span className="font-bold text-brown-deep">{formatCurrency(priceRange)}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-rose-dusty cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-brown-muted mt-1">
                  <span>₹200</span>
                  <span>₹1000</span>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brown-muted block mb-2.5">
                  Category
                </span>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center justify-between text-xs text-brown-soft hover:text-brown-deep cursor-pointer py-1"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-rose-dusty"
                        />
                        <span>{cat}</span>
                      </div>
                      <span className="text-[10px] text-brown-muted">
                        {cat === 'All' ? productsData.length : productsData.filter(p => p.category === cat).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Aesthetic Vibe Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brown-muted block mb-2.5">
                  Aesthetic Mood
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {aesthetics.map((aes) => (
                    <button
                      key={aes}
                      onClick={() => setSelectedAesthetic(aes)}
                      className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                        selectedAesthetic === aes
                          ? 'bg-brown-deep text-white'
                          : 'bg-cream/60 text-brown-soft hover:bg-cream'
                      }`}
                    >
                      {aes}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brown-muted block mb-2.5">
                  Color Palette
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                  {colors.slice(0, 8).map((col) => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`px-2.5 py-1 rounded-full text-[11px] transition-all border ${
                        selectedColor === col
                          ? 'bg-blush text-brown-deep font-semibold border-rose-dusty'
                          : 'bg-white text-brown-soft border-cream hover:border-rose-dusty/40'
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Products Grid */}
          <div className="lg:col-span-3">
            {/* Results count & active tags */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-brown-muted">
                Showing <strong className="text-brown-deep">{filteredProducts.length}</strong> fashion finds
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="lg:hidden text-xs text-rose-deep font-semibold hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-32 p-12 text-center border border-cream shadow-soft space-y-4">
                <div className="text-3xl">🧺</div>
                <h3 className="font-playfair text-xl font-bold text-brown-deep">
                  No fashion finds match these filters
                </h3>
                <p className="text-xs text-brown-muted max-w-sm mx-auto">
                  Try adjusting the price slider or resetting category & aesthetic filters to view all available pieces.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filters Slide-in Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-brown-deep/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white w-full max-w-xs h-full p-6 overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-cream">
                <h3 className="font-playfair font-bold text-brown-deep text-lg">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)} className="p-1 rounded-full text-brown-muted">
                  <X size={20} />
                </button>
              </div>

              {/* Price Slider */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span>Max Price:</span>
                  <span className="font-bold">{formatCurrency(priceRange)}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-rose-dusty"
                />
              </div>

              {/* Categories */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brown-muted block mb-2">Category</span>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-1.5 rounded-xl text-xs ${
                        selectedCategory === cat ? 'bg-blush font-semibold text-brown-deep' : 'text-brown-soft'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aesthetics */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brown-muted block mb-2">Aesthetic</span>
                <div className="flex flex-wrap gap-1.5">
                  {aesthetics.map((aes) => (
                    <button
                      key={aes}
                      onClick={() => setSelectedAesthetic(aes)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        selectedAesthetic === aes ? 'bg-brown-deep text-white' : 'bg-cream text-brown-soft'
                      }`}
                    >
                      {aes}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-cream flex gap-2">
              <button
                onClick={handleResetFilters}
                className="flex-1 py-2.5 rounded-full bg-cream text-xs font-semibold text-brown-deep"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 rounded-full bg-rose-dusty text-white text-xs font-semibold"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
};
