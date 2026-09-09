import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, ShoppingBag } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex items-center justify-center px-4">
      <div className="bg-white rounded-32 p-8 sm:p-14 shadow-card border border-cream max-w-lg w-full text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 rounded-full bg-blush-light text-rose-deep flex items-center justify-center mx-auto text-3xl shadow-soft">
          🎀
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-deep">
            404 • Page Missing
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-deep">
            Lost in the Closet?
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted leading-relaxed">
            This pin or page seems to have wandered off our aesthetic moodboard. Let's get you back to the pretty things.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-rose-dusty hover:bg-rose-deep text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 transition-all"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/shop"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-cream hover:bg-blush text-brown-deep text-xs font-semibold border border-cream flex items-center justify-center gap-2 transition-all"
          >
            <ShoppingBag size={15} />
            <span>Explore All Finds</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
