import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import productsData from '../data/products.json';
import { AffiliateNotice } from '../components/AffiliateNotice';

export const Categories = () => {
  const categoryConfigs = [
    {
      name: 'Dresses',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      description: 'Flowy cottagecore midis, romantic puff sleeves, and satin slip dresses for picnics and sunlit cafes.',
    },
    {
      name: 'Tops',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
      description: 'Double-lined ribbed square tanks, tailored linen waistcoats, and breezy poplin boyfriend shirts.',
    },
    {
      name: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      description: 'Slouchy pleated front dad trousers, 90s tennis skirts, and bias-cut satin midis.',
    },
    {
      name: 'Bags & Accessories',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      description: 'Ruched dumpling shoulder bags, heavy canvas book totes, tortoiseshell sunglasses, and bow clips.',
    },
    {
      name: 'Jewelry',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      description: '18K gold-plated croissant hoops, organic baroque pearls, and dainty bow ring sets that do not tarnish.',
    },
    {
      name: 'Shoes',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      description: 'Chunky bit loafers, velvet Mary Jane ballet flats with arch support, and retro sneakers.',
    },
    {
      name: 'Co-ords',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      description: 'Sculpting ribbed workout sets, matching loungewear, and effortless two-piece matching fits.',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep mb-1 block">
            Aesthetic Wardrobe
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Browse by Category
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Find exactly what your wardrobe is missing—from statement bags to everyday dainty jewelry.
          </p>
        </div>

        <AffiliateNotice className="mb-10" />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryConfigs.map((cat) => {
            const count = productsData.filter((p) => p.category === cat.name).length;

            return (
              <Link
                key={cat.name}
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="group bg-white rounded-32 p-5 shadow-card hover:shadow-card-hover border border-cream transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] rounded-24 overflow-hidden mb-4 bg-cream/40">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-brown-deep shadow-2xs">
                    {count} {count === 1 ? 'Find' : 'Finds'}
                  </div>
                </div>

                <div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-brown-deep group-hover:text-rose-deep transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-brown-muted leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-cream flex items-center justify-between text-xs font-semibold text-rose-deep">
                  <span>Explore {cat.name}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};
