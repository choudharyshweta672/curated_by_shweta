import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted">
            Last Updated: September 2026
          </p>
        </div>

        <div className="bg-white rounded-32 p-6 sm:p-10 shadow-card border border-cream space-y-6 text-xs sm:text-sm text-brown-soft leading-relaxed font-light">
          <p>
            At <strong>Curated by Shweta 🤍</strong>, accessible from curatedbyshweta.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Curated by Shweta and how we use it.
          </p>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              1. Information We Collect
            </h2>
            <p>
              We do not require you to create an account to browse our fashion curations. If you voluntarily subscribe to our newsletter or fill out a brand collaboration form, we collect the email address and contact information you provide solely for communication purposes.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              2. LocalStorage & Saved Wishlist
            </h2>
            <p>
              When you save items to your wishlist, this data is stored locally in your web browser's <code>localStorage</code>. This information stays private on your personal device and is not transmitted to external third-party servers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              3. Cookies and Affiliate Tracking
            </h2>
            <p>
              When you click on an outbound Amazon or Flipkart affiliate link, the merchant platform may place a cookie on your browser to attribute qualifying purchases to our partner account. Please refer to Amazon's and Flipkart's respective privacy notices for their cookie policies.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="font-playfair text-xl font-bold text-brown-deep">
              4. Contact Us
            </h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at curatedbyshweta@gmail.com.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
