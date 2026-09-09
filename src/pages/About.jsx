import React from 'react';
import { Sparkles, Heart, ExternalLink, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>The Story Behind The Curation</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Meet Shweta 🤍
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Fashion curator, Pinterest enthusiast, and your personal everyday aesthetic stylist.
          </p>
        </div>

        {/* Profile / Editorial Feature */}
        <div className="bg-white rounded-32 p-6 sm:p-10 shadow-card border border-cream mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 aspect-[3/4] rounded-28 overflow-hidden shadow-soft bg-cream/40">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Shweta"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="font-cormorant text-2xl sm:text-3xl text-rose-deep font-semibold block">
                "Fashion is an art of soft confidence."
              </span>
              <p className="text-xs sm:text-sm text-brown-soft leading-relaxed">
                Hi besties! I started <strong>Curated by Shweta</strong> because like millions of girls in India aged 16 to 30, I had endless Pinterest boards full of Hailey Bieber, Matilda Djerf, and Parisian dream aesthetics—but finding those exact high-quality pieces on Amazon or Flipkart under ₹1,000 felt impossible.
              </p>
              <p className="text-xs sm:text-sm text-brown-soft leading-relaxed">
                I spend hours every single week combing through thousands of catalog listings, checking verified reviews, ordering samples, and inspecting fabric weights to bring you the best Zara, Rhode, and Mango dupes that actually look and feel luxurious.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Follow on Pinterest 📌</span>
                  <ExternalLink size={12} />
                </a>
                <Link
                  to="/collaborate"
                  className="px-5 py-2.5 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs font-semibold transition-all border border-cream"
                >
                  Work With Me →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* The 4 Brand Pillars */}
        <div className="space-y-6 mb-12">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-brown-deep text-center mb-8">
            The Curation Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-28 bg-cream/40 border border-cream space-y-2">
              <div className="flex items-center gap-2 text-rose-deep font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>Minimal Feminine Luxury</span>
              </div>
              <p className="text-xs text-brown-muted leading-relaxed">
                Soft neutral color palettes, clean tailoring, romantic ribbon accents, and effortless shapes that feel timeless rather than fleeting micro-trends.
              </p>
            </div>

            <div className="p-6 rounded-28 bg-cream/40 border border-cream space-y-2">
              <div className="flex items-center gap-2 text-rose-deep font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>Under ₹999 Budget Rule</span>
              </div>
              <p className="text-xs text-brown-muted leading-relaxed">
                Luxury should never be gatekept by unreasonable prices. 95% of our recommendations are under ₹999 so college students and young professionals can build capsule wardrobes guilt-free.
              </p>
            </div>

            <div className="p-6 rounded-28 bg-cream/40 border border-cream space-y-2">
              <div className="flex items-center gap-2 text-rose-deep font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>Non-Sheer, High-Wear Fabrics</span>
              </div>
              <p className="text-xs text-brown-muted leading-relaxed">
                We prioritize heavyweight ribbed knits, breathable cotton poplin, double-lined tops, and anti-tarnish stainless steel gold jewelry.
              </p>
            </div>

            <div className="p-6 rounded-28 bg-cream/40 border border-cream space-y-2">
              <div className="flex items-center gap-2 text-rose-deep font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>Full FTC & Amazon Transparency</span>
              </div>
              <p className="text-xs text-brown-muted leading-relaxed">
                We openly disclose affiliate links on every card and page. Our recommendations are 100% genuine and curated purely based on aesthetic value and verified buyer satisfaction.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
