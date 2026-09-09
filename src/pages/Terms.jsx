import React from 'react';

export const Terms = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Last Updated: September 2026
          </p>
        </div>

        <div className="bg-white rounded-32 p-6 sm:p-10 shadow-card border border-cream space-y-6 text-xs sm:text-sm text-brown-soft leading-relaxed font-light">
          <p>
            Welcome to <strong>Curated by Shweta 🤍</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              1. Content & Affiliate Nature
            </h2>
            <p>
              Curated by Shweta is an independent editorial curation platform. All product pricing, availability, and delivery guarantees are subject to change by the respective retailers (Amazon India, Flipkart, etc.). We strive to keep all pricing up to date, but the merchant's live listing always governs.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              2. Intellectual Property
            </h2>
            <p>
              The design, aesthetic layout, logos, and curated style articles on this website are the intellectual property of Curated by Shweta. Product trademarks, brand names, and official merchant photos belong to their respective copyright holders.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              3. Disclaimer of Warranties
            </h2>
            <p>
              While we curate items based on verified customer ratings and personal satisfaction, transactions are made directly between you and the respective third-party retailers. Any customer service, return, or refund claims must be directed to Amazon or Flipkart.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
