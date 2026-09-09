import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

export const Navbar = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);
  const { wishlistCount } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBudgetDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Pinterest Finds', path: '/pinterest-finds' },
    { name: 'Outfits', path: '/collections' },
    { name: 'Categories', path: '/categories' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  const budgetLinks = [
    { label: 'Under ₹299', path: '/under-299', badge: 'Dainty & Cute' },
    { label: 'Under ₹499', path: '/under-499', badge: 'Everyday Staples' },
    { label: 'Under ₹699', path: '/under-699', badge: 'Zara Dupes' },
    { label: 'Under ₹999', path: '/under-999', badge: 'Luxury Minimal' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-cream via-blush-light to-cream py-1.5 px-4 text-center text-xs text-brown-soft border-b border-blush/40 flex items-center justify-center gap-2">
        <Sparkles size={13} className="text-rose-deep animate-pulse" />
        <span className="font-medium tracking-wide">
          Curated by Shweta 🤍 • Minimal Feminine Luxury • Top Amazon & Flipkart Finds Under ₹999
        </span>
        <Sparkles size={13} className="text-rose-deep animate-pulse hidden sm:inline" />
      </div>

      {/* Main Floating Glass Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 sm:mt-3">
        <nav
          className={`glass-nav rounded-28 px-4 sm:px-6 py-3 sm:py-3.5 transition-all duration-300 shadow-soft flex items-center justify-between ${
            scrolled ? 'shadow-card bg-white/90' : 'bg-white/80'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 group text-left"
          >
            <span className="font-cormorant text-2xl sm:text-3xl font-semibold tracking-tight text-brown-deep group-hover:text-rose-deep transition-colors">
              Curated by Shweta
            </span>
            <span className="text-rose-dusty text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300">
              🤍
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-blush text-brown-deep font-semibold shadow-xs'
                    : 'text-brown-soft hover:text-brown-deep hover:bg-cream/60'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Budget Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}
                onMouseEnter={() => setBudgetDropdownOpen(true)}
                className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                  location.pathname.startsWith('/under-')
                    ? 'bg-blush text-brown-deep font-semibold'
                    : 'text-brown-soft hover:text-brown-deep hover:bg-cream/60'
                }`}
              >
                <span>Budget</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {budgetDropdownOpen && (
                <div
                  onMouseLeave={() => setBudgetDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-20 p-2 shadow-card border border-cream z-50"
                >
                  {budgetLinks.map((budget) => (
                    <Link
                      key={budget.path}
                      to={budget.path}
                      className="block px-3 py-2 rounded-xl text-xs font-medium text-brown-soft hover:bg-blush-light hover:text-brown-deep transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{budget.label}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-cream text-brown-muted">
                          {budget.badge}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Live Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-cream/70 hover:bg-cream text-brown-soft hover:text-brown-deep transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Search fashion finds (/) "
            >
              <Search size={16} className="text-brown-soft" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-brown-muted bg-white rounded border border-cream">
                /
              </kbd>
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-full bg-cream/70 hover:bg-blush text-brown-soft hover:text-rose-deep transition-colors group"
              title="Saved Wishlist"
            >
              <Heart
                size={18}
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  wishlistCount > 0 ? 'fill-rose-dusty text-rose-dusty' : ''
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-dusty text-white font-semibold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-cream/70 hover:bg-cream text-brown-deep"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-lg rounded-28 p-5 shadow-card border border-cream animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-20 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-blush text-brown-deep font-semibold'
                      : 'text-brown-soft hover:bg-cream/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-cream">
                <span className="text-xs font-semibold uppercase tracking-wider text-brown-muted px-4 block mb-1">
                  Budget Edits
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {budgetLinks.map((budget) => (
                    <Link
                      key={budget.path}
                      to={budget.path}
                      className="px-3 py-2 rounded-xl text-xs font-medium bg-cream/50 hover:bg-blush-light text-brown-deep text-center"
                    >
                      {budget.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-cream flex justify-between items-center px-4">
                <Link
                  to="/collaborate"
                  className="text-xs font-semibold text-rose-deep hover:underline"
                >
                  Brand Collaborations →
                </Link>
                <Link
                  to="/affiliate-disclosure"
                  className="text-xs text-brown-muted hover:underline"
                >
                  Affiliate Disclosure
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
