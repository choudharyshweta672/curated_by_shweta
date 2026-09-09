import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, ExternalLink, ArrowRight, Check } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-cream/70 border-t border-cream-dark/50 pt-16 pb-12 mt-20 text-brown-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-white rounded-32 p-8 sm:p-12 mb-16 shadow-soft border border-blush/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blush/20 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-3">
              Weekly Aesthetic Edit
            </span>
            <h3 className="font-playfair text-2xl sm:text-4xl text-brown-deep font-semibold mb-3">
              Join the Chic Club 💌
            </h3>
            <p className="text-sm text-brown-muted mb-6 leading-relaxed">
              Get secret Amazon & Flipkart aesthetic finds, discount alerts, and capsule wardrobe styling guides delivered to your inbox every Sunday morning.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush text-brown-deep font-medium text-sm animate-fadeIn">
                <Check size={18} className="text-rose-deep" />
                <span>You're in! Welcome to the chic club bestie 🤍</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full bg-ivory border border-cream text-sm text-brown-deep placeholder:text-brown-light focus:outline-none focus:border-rose-dusty transition-colors"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-cream-dark/40">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-cormorant text-3xl font-semibold text-brown-deep">
                Curated by Shweta <span className="text-rose-dusty">🤍</span>
              </span>
            </Link>
            <p className="text-sm text-brown-muted leading-relaxed max-w-sm">
              Minimal feminine luxury fashion curated for everyday Pinterest dreamers. We discover the prettiest, high-quality Amazon & Flipkart wardrobe staples so you don't have to scroll for hours.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blush text-brown-deep text-xs font-medium border border-cream shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Pinterest</span>
                <ExternalLink size={12} className="text-rose-deep" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blush text-brown-deep text-xs font-medium border border-cream shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink size={12} className="text-rose-deep" />
              </a>
              <a
                href="mailto:curatedbyshweta@gmail.com"
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blush text-brown-deep text-xs font-medium border border-cream shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Mail size={12} className="text-rose-deep" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-playfair font-semibold text-brown-deep text-base mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/" className="hover:text-rose-deep transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-rose-deep transition-colors">Shop All Finds</Link></li>
              <li><Link to="/pinterest-finds" className="hover:text-rose-deep transition-colors">Pinterest Viral Finds</Link></li>
              <li><Link to="/collections" className="hover:text-rose-deep transition-colors">Shop Entire Look</Link></li>
              <li><Link to="/categories" className="hover:text-rose-deep transition-colors">Browse Categories</Link></li>
              <li><Link to="/wishlist" className="hover:text-rose-deep transition-colors">Saved Wishlist</Link></li>
            </ul>
          </div>

          {/* Col 3: Budget Fashion */}
          <div>
            <h4 className="font-playfair font-semibold text-brown-deep text-base mb-4">
              Budget Edits
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/under-299" className="hover:text-rose-deep transition-colors">Finds Under ₹299</Link></li>
              <li><Link to="/under-499" className="hover:text-rose-deep transition-colors">Finds Under ₹499</Link></li>
              <li><Link to="/under-699" className="hover:text-rose-deep transition-colors">Finds Under ₹699</Link></li>
              <li><Link to="/under-999" className="hover:text-rose-deep transition-colors">Finds Under ₹999</Link></li>
              <li><Link to="/blog" className="hover:text-rose-deep transition-colors">Style Guide Blog</Link></li>
            </ul>
          </div>

          {/* Col 4: Creator & Legal */}
          <div>
            <h4 className="font-playfair font-semibold text-brown-deep text-base mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-rose-deep transition-colors">About Shweta</Link></li>
              <li><Link to="/collaborate" className="hover:text-rose-deep transition-colors">Brand Collaborations</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-rose-deep transition-colors font-medium text-brown-deep">Affiliate Disclosure</Link></li>
              <li><Link to="/privacy" className="hover:text-rose-deep transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-rose-deep transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Global Affiliate Disclaimer Box */}
        <div className="mt-8 p-4 rounded-20 bg-blush-light/50 border border-blush/40 text-xs text-brown-muted leading-relaxed text-center">
          <p className="font-medium text-brown-soft">
            <span className="font-semibold text-brown-deep">Affiliate Disclosure:</span> Some links on this website are affiliate links. As an Amazon Associate and Flipkart affiliate, I earn a small commission from qualifying purchases at no extra cost to you. Thank you for supporting the curation! 🤍
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brown-muted gap-4">
          <p>© {new Date().getFullYear()} Curated by Shweta. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="fill-rose-dusty text-rose-dusty" /> for aesthetic fashion lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
