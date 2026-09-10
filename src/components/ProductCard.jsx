// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Star, Eye, ExternalLink, Sparkles } from 'lucide-react';
// import { useWishlist } from '../context/WishlistContext';
// import { formatCurrency, calculateDiscount } from '../utils/currency';

// export const ProductCard = ({ product, onQuickView }) => {
//   const { isWishlisted, toggleWishlist } = useWishlist();
//   const wishlisted = isWishlisted(product.id);
//   const discount = calculateDiscount(product.price, product.oldPrice);

//   return (
//     <div className="group bg-white rounded-28 p-3 sm:p-4 shadow-card hover:shadow-card-hover transition-all duration-300 border border-cream/70 flex flex-col justify-between relative overflow-hidden">
      
//       {/* Top Image Container */}
//       <div className="relative aspect-[3/4] w-full rounded-20 overflow-hidden bg-cream/40 mb-3 sm:mb-4">
        
//         {/* Badges */}
//         <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5 items-start">
//           {product.new && (
//             <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-md text-rose-deep border border-blush/60 shadow-xs">
//               New
//             </span>
//           )}
//           {product.bestSeller && (
//             <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-blush text-brown-deep border border-rose-dusty/40 shadow-xs flex items-center gap-1">
//               <Sparkles size={10} className="text-rose-deep" />
//               <span>Bestseller</span>
//             </span>
//           )}
//           {discount > 0 && (
//             <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brown-deep text-white shadow-xs">
//               Save {discount}%
//             </span>
//           )}
//         </div>

//         {/* Wishlist Heart Toggle */}
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             toggleWishlist(product.id);
//           }}
//           className="absolute top-2.5 right-2.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-brown-soft hover:text-rose-deep shadow-soft transition-all duration-200 hover:scale-110 active:scale-95"
//           aria-label="Save to wishlist"
//         >
//           <Heart
//             size={18}
//             className={`transition-colors duration-200 ${
//               wishlisted ? 'fill-rose-dusty text-rose-dusty' : 'text-brown-soft'
//             }`}
//           />
//         </button>

//         {/* Clickable Product Image */}
//         <Link to={`/product/${product.id}`} className="block w-full h-full">
//           <img
//             src={product.image}
//             alt={product.name}
//             loading="lazy"
//             className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
//           />
//         </Link>

//         {/* Quick View Hover Button */}
//         <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hidden sm:block">
//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               onQuickView(product);
//             }}
//             className="w-full py-2.5 px-3 rounded-full bg-white/95 backdrop-blur-md text-brown-deep hover:bg-white text-xs font-semibold shadow-soft border border-cream flex items-center justify-center gap-1.5 transition-all hover:text-rose-deep"
//           >
//             <Eye size={14} />
//             <span>Quick View</span>
//           </button>
//         </div>
//       </div>

//       {/* Product Content Details */}
//       <div className="flex flex-col flex-grow px-1">
        
//         {/* Aesthetic / Category */}
//         <div className="flex items-center justify-between text-[11px] text-brown-muted mb-1">
//           <span className="uppercase tracking-wider font-medium text-rose-deep">
//             {product.aesthetic || product.category}
//           </span>
//           <div className="flex items-center gap-1 text-brown-soft">
//             <Star size={12} className="fill-amber-400 text-amber-400" />
//             <span className="font-medium">{product.rating}</span>
//             <span className="text-[10px] text-brown-muted">({product.reviewsCount})</span>
//           </div>
//         </div>

//         {/* Product Title */}
//         <Link
//           to={`/product/${product.id}`}
//           className="font-playfair text-sm sm:text-base font-semibold text-brown-deep line-clamp-2 hover:text-rose-deep transition-colors mb-2 leading-snug"
//         >
//           {product.name}
//         </Link>

//         {/* Price & Discount */}
//         <div className="flex items-baseline gap-2 mb-3">
//           <span className="font-poppins font-bold text-base sm:text-lg text-brown-deep">
//             {formatCurrency(product.price)}
//           </span>
//           {product.oldPrice && (
//             <span className="text-xs text-brown-muted line-through">
//               {formatCurrency(product.oldPrice)}
//             </span>
//           )}
//         </div>

//         {/* Dual Affiliate Action Buttons */}
//         <div className="grid grid-cols-2 gap-1.5 pt-1 mt-auto">
//           {product.amazonLink && (
//             <a
//               href={product.amazonLink}
//               target="_blank"
//               rel="noopener noreferrer sponsored"
//               className="py-2 px-2 rounded-xl bg-cream hover:bg-cream-dark text-brown-deep text-[11px] font-semibold text-center transition-colors flex items-center justify-center gap-1 border border-cream-dark/40"
//               title="Buy on Amazon India"
//             >
//               <span>Amazon</span>
//               <ExternalLink size={10} className="text-brown-muted" />
//             </a>
//           )}
//           {product.flipkartLink && (
//             <a
//               href={product.flipkartLink}
//               target="_blank"
//               rel="noopener noreferrer sponsored"
//               className="py-2 px-2 rounded-xl bg-blush-light hover:bg-blush text-brown-deep text-[11px] font-semibold text-center transition-colors flex items-center justify-center gap-1 border border-blush"
//               title="Buy on Flipkart"
//             >
//               <span>Flipkart</span>
//               <ExternalLink size={10} className="text-rose-deep" />
//             </a>
//           )}
//         </div>

//         {/* Mobile Quick View Fallback */}
//         <button
//           onClick={() => onQuickView(product)}
//           className="sm:hidden mt-2 text-[11px] font-medium text-rose-deep hover:underline text-center"
//         >
//           Quick View Details
//         </button>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Link } from "react-router-dom";

import { Heart, Star, Eye, ShoppingBag } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { formatCurrency } from "../utils/currency";

export const ProductCard = ({ product, onQuickView }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();

  const liked = isWishlisted(product.id);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  return (
    <div className="group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#F5E8E4]">

      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#FFF8F5]">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-[#D98B9F] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {discount}% OFF
          </span>
        )}

        {/* Pinterest Badge */}
        {product.featured && (
          <span className="absolute top-3 right-3 bg-white text-[#D98B9F] text-[11px] font-semibold px-3 py-1 rounded-full shadow">
            📌 Pinterest Pick
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute bottom-3 right-3 h-10 w-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow hover:bg-[#FFF0F4] transition"
        >
          <Heart
            size={18}
            className={
              liked
                ? "fill-[#D98B9F] text-[#D98B9F]"
                : "text-[#6F5A52]"
            }
          />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <button
            onClick={() => onQuickView(product)}
            className="bg-white rounded-full px-5 py-2 text-sm font-medium text-[#3E3028] flex items-center gap-2 shadow-lg"
          >
            <Eye size={16} />
            Quick View
          </button>
        </div>

      </div>

      {/* Card Content */}
      <div className="p-4">

        {/* Category */}
        <p className="uppercase text-[11px] tracking-wider text-[#B07C8D] font-semibold">
          {product.category}
        </p>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-[#3E3028] mt-1 line-clamp-2 group-hover:text-[#C77289] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="flex items-center text-yellow-500">
            <Star size={14} className="fill-yellow-500" />
            <span className="ml-1 font-medium">
              {product.rating || "4.8"}
            </span>
          </div>

          <span className="text-[#8A756B] text-xs">
            ({product.reviewsCount || "120"})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-[#3E3028]">
            {formatCurrency(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-sm line-through text-[#9C8C84]">
              {formatCurrency(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Buy Button */}
        <a
  href={product.amazonLink}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 w-full bg-[#D98B9F] hover:bg-[#C77289] text-white rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
>
  <ShoppingBag size={16} />
  Buy on Amazon
</a>

      </div>
    </div>
  );
};