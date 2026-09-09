import React, { useState } from 'react';
import { Mail, Sparkles, ExternalLink, Check, ChevronDown, Users, Eye, TrendingUp } from 'lucide-react';

export const Collaborate = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    website: '',
    deliverable: 'Pinterest Pins + Affiliate Feature',
    budget: '₹25,000 - ₹50,000',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What types of brands do you collaborate with?',
      a: 'We collaborate with fashion, footwear, beauty, jewelry, and lifestyle brands that align with our minimal feminine luxury aesthetic (Clean Girl, Coquette, Minimalist chic, everyday college fashion).'
    },
    {
      q: 'What is the average turnaround time for brand deliverables?',
      a: 'Standard turnaround time is 7 to 10 business days from the receipt of product samples to pin drafting, photography, and live publishing.'
    },
    {
      q: 'Do you offer affiliate-only or gifting partnerships?',
      a: 'We accept gifting for organic editorial consideration. Guaranteed dedicated board features, homepage spotlight placement, and custom outfit lookbook bundles require paid sponsorship.'
    },
    {
      q: 'Can brands track analytics and click-through performance?',
      a: 'Yes! Post-campaign reporting includes impressions, Pinterest pin saves, outbound affiliate clicks, and conversion data.'
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-light text-rose-deep text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>Brand Partnerships & PR</span>
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl text-brown-deep font-bold mb-3">
            Collaborate With Shweta 🤍
          </h1>
          <p className="text-xs sm:text-sm text-brown-muted leading-relaxed">
            Reach an engaged, high-intent audience of over 250,000+ fashion-forward women aged 16–30 seeking aesthetic everyday wardrobe inspiration.
          </p>
        </div>

        {/* Audience Metrics Snapshot */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-28 p-5 border border-cream shadow-card text-center">
            <div className="w-10 h-10 rounded-full bg-blush-light text-rose-deep flex items-center justify-center mx-auto mb-2">
              <Eye size={20} />
            </div>
            <span className="font-poppins font-bold text-2xl text-brown-deep block">850K+</span>
            <span className="text-xs text-brown-muted">Monthly Pinterest Views</span>
          </div>

          <div className="bg-white rounded-28 p-5 border border-cream shadow-card text-center">
            <div className="w-10 h-10 rounded-full bg-blush-light text-rose-deep flex items-center justify-center mx-auto mb-2">
              <Users size={20} />
            </div>
            <span className="font-poppins font-bold text-2xl text-brown-deep block">92%</span>
            <span className="text-xs text-brown-muted">Female Audience (16–30 yrs)</span>
          </div>

          <div className="bg-white rounded-28 p-5 border border-cream shadow-card text-center">
            <div className="w-10 h-10 rounded-full bg-blush-light text-rose-deep flex items-center justify-center mx-auto mb-2">
              <TrendingUp size={20} />
            </div>
            <span className="font-poppins font-bold text-2xl text-brown-deep block">4.8%</span>
            <span className="text-xs text-brown-muted">Pin Save & Click Rate</span>
          </div>
        </div>

        {/* Pinterest Profile Direct Button */}
        <div className="bg-cream/40 rounded-28 p-4 mb-12 border border-cream flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-deep text-white flex items-center justify-center font-bold text-lg">
              P
            </div>
            <div>
              <h4 className="font-playfair font-bold text-sm text-brown-deep">
                Official Pinterest Creator Account
              </h4>
              <p className="text-xs text-brown-muted">
                Explore our live boards, viral pins, and engagement statistics.
              </p>
            </div>
          </div>
          <a
            href="https://pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-brown-deep hover:bg-brown-soft text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Visit Pinterest Profile</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Collaboration Inquiry Form */}
        <div className="bg-white rounded-32 p-6 sm:p-10 shadow-card border border-cream mb-16">
          <h2 className="font-playfair text-2xl font-bold text-brown-deep mb-2">
            Send a Partnership Inquiry
          </h2>
          <p className="text-xs text-brown-muted mb-6">
            Fill out the details below and Shweta's management team will reply within 24–48 hours.
          </p>

          {formSubmitted ? (
            <div className="p-8 rounded-28 bg-blush-light border border-blush text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-blush text-rose-deep flex items-center justify-center mx-auto">
                <Check size={24} />
              </div>
              <h3 className="font-playfair text-xl font-bold text-brown-deep">
                Inquiry Received! 🤍
              </h3>
              <p className="text-xs sm:text-sm text-brown-muted max-w-md mx-auto">
                Thank you for reaching out. We look forward to reviewing your brand and exploring an aesthetic partnership.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-brown-soft block mb-1">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="e.g. Celine & Co."
                    className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown-soft block mb-1">
                    Your Name / Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Maya (PR Manager)"
                    className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-brown-soft block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="pr@yourbrand.com"
                    className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown-soft block mb-1">
                    Website or Social Handle
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourbrand.com"
                    className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-brown-soft block mb-1">
                    Deliverable of Interest
                  </label>
                  <select
                    value={formData.deliverable}
                    onChange={(e) => setFormData({ ...formData, deliverable: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                  >
                    <option>Pinterest Pins + Affiliate Feature</option>
                    <option>Dedicated Outfit Lookbook Placement</option>
                    <option>Website Homepage Banner Spotlight</option>
                    <option>Gifted Seeding for Organic Review</option>
                    <option>Long-Term Brand Ambassador</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-brown-soft block mb-1">
                    Campaign Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                  >
                    <option>Gifting Only (Subject to Approval)</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 - ₹50,000</option>
                    <option>₹50,000 - ₹1,00,000</option>
                    <option>₹1,00,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-brown-soft block mb-1">
                  Campaign Message & Vision *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your upcoming launch, product details, target dates, or specific moodboard vision..."
                  className="w-full px-4 py-2.5 rounded-20 bg-cream/30 border border-cream text-xs sm:text-sm text-brown-deep focus:outline-none focus:border-rose-dusty"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-rose-dusty hover:bg-rose-deep text-white font-medium text-xs sm:text-sm shadow-card transition-all"
              >
                Submit Collaboration Request 💌
              </button>
            </form>
          )}
        </div>

        {/* Brand FAQ Accordion */}
        <div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-brown-deep text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-24 border border-cream overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-brown-deep"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform text-rose-deep flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-brown-muted leading-relaxed border-t border-cream/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
