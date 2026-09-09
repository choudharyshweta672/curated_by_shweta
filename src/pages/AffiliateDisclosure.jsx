import React from 'react';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AffiliateDisclosure = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck size={13} />
            <span>Full Compliance & Transparency</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Affiliate Disclosure
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Last Updated: September 2026
          </p>
        </div>

        {/* Highlight Quote Box */}
        <div className="bg-blush-light/60 rounded-28 p-6 border border-blush mb-8 text-center space-y-2">
          <p className="font-playfair text-lg sm:text-xl font-bold text-brown-deep">
            "Some links on this website are affiliate links. As an Amazon Associate, I earn from qualifying purchases."
          </p>
          <p className="text-xs text-brown-soft">
            This means if you click through and finalize a purchase, I may receive a small commission at zero additional cost to you.
          </p>
        </div>

        <div className="bg-white rounded-32 p-6 sm:p-10 shadow-card border border-cream space-y-6 text-xs sm:text-sm text-brown-soft leading-relaxed font-light">
          
          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              1. What Are Affiliate Links?
            </h2>
            <p>
              Affiliate links are specialized URLs that track the referral from our website (<strong>Curated by Shweta</strong>) to verified retail partner stores such as Amazon India and Flipkart. When you click one of these buttons or links and purchase an item, the retailer pays us a modest referral fee.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              2. Does It Cost You Anything Extra?
            </h2>
            <p>
              <strong>No, absolutely not.</strong> You pay the exact same price—or even less if an active marketplace discount or coupon applies—whether you use our curated links or navigate to the marketplace directly.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              3. Amazon Associates Program
            </h2>
            <p>
              Curated by Shweta is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              4. Flipkart Affiliate Program
            </h2>
            <p>
              We also participate in the Flipkart Affiliate Network, earning commissions on eligible purchases made through our curated product links.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              5. Editorial Independence & Honesty
            </h2>
            <p>
              Every recommendation on this website reflects our genuine aesthetic judgment and quality review. We do not accept payment to post positive reviews of subpar products. If an item does not meet our high standards for fabric feel, flattering fit, and durability, it does not get added to our board.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              6. Contact Information
            </h2>
            <p>
              If you have any questions or feedback regarding our affiliate links or would like to report a broken or inaccurate link, please feel free to email us directly at <a href="mailto:curatedbyshweta@gmail.com" className="text-rose-deep underline font-medium">curatedbyshweta@gmail.com</a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
