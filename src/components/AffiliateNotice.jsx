import React from 'react';
import { Sparkles, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AffiliateNotice = ({ className = '' }) => {
  return (
    <div className={`p-3 sm:p-3.5 rounded-20 bg-blush-light/60 border border-blush/60 text-xs text-brown-soft flex items-center justify-between gap-3 ${className}`}>
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-rose-deep flex-shrink-0" />
        <span className="leading-snug">
          <strong>Affiliate Transparency:</strong> As an Amazon Associate and brand partner, I earn from qualifying purchases at no extra cost to you.
        </span>
      </div>
      <Link
        to="/affiliate-disclosure"
        className="text-[11px] font-semibold text-rose-deep hover:underline whitespace-nowrap hidden sm:inline-flex items-center gap-1"
      >
        <Info size={11} />
        <span>Read policy</span>
      </Link>
    </div>
  );
};
