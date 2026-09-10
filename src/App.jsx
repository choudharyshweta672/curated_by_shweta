import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/layout/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { PinterestFinds } from './pages/PinterestFinds';
import { OutfitCollections } from './pages/OutfitCollections';
import { Categories } from './pages/Categories';
import { BudgetPage } from './pages/BudgetPage';
import { ProductDetails } from './pages/ProductDetails';
import { Wishlist } from './pages/Wishlist';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Collaborate } from './pages/Collaborate';
import { AffiliateDisclosure } from './pages/AffiliateDisclosure';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcut to open search (/)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-ivory text-brown-soft font-poppins selection:bg-blush selection:text-brown-deep">
          
          {/* Floating Navigation Header */}
          <Navbar onOpenSearch={() => setSearchOpen(true)} />

          {/* Main Routing Container */}
         <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/pinterest-finds" element={<PinterestFinds />} />
              <Route path="/collections" element={<OutfitCollections />} />
              <Route path="/categories" element={<Categories />} />
              
              {/* Dedicated Budget Routes */}
              <Route path="/under-299" element={<BudgetPage maxPriceProp={299} />} />
              <Route path="/under-499" element={<BudgetPage maxPriceProp={499} />} />
              <Route path="/under-699" element={<BudgetPage maxPriceProp={699} />} />
              <Route path="/under-999" element={<BudgetPage maxPriceProp={999} />} />
              <Route path="/budget/:amount" element={<BudgetPage />} />
              
              {/* Product Details */}
              <Route path="/product/:id" element={<ProductDetails />} />
              
              {/* Wishlist */}
              <Route path="/wishlist" element={<Wishlist />} />
              
              {/* Blog System */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Brand & Creator Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/collaborate" element={<Collaborate />} />
              
              {/* Legal & Compliance */}
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Search Modal */}
          <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

          {/* Aesthetic Footer with Global Affiliate Notice */}
          <Footer />

        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;
