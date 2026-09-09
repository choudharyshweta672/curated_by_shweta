import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('curated_shweta_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load wishlist from localStorage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('curated_shweta_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (!exists) {
        // Aesthetic soft confetti celebration
        try {
          confetti({
            particleCount: 25,
            spread: 45,
            origin: { y: 0.8 },
            colors: ['#FADCE6', '#E8A5B8', '#FFFDF8', '#F8F1E9']
          });
        } catch (err) {
          // ignore
        }
        return [...prev, productId];
      } else {
        return prev.filter((id) => id !== productId);
      }
    });
  };

  const isWishlisted = (productId) => wishlist.includes(productId);

  const clearWishlist = () => setWishlist([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
