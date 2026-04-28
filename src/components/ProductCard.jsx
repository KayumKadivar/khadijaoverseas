import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const ProductCard = ({ product }) => (
  <Link
    href={`/products/${product.slug}`}
    className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-all duration-700 bg-card border border-primary/10"
  >
    {/* Product Image */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={product.image.src || product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      {/* Dark overlay that fades in on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
    </div>

    {/* Decorative Leaf - now always visible */}
    <div className="absolute top-4 right-4 transition-all duration-500">
      <div className="h-10 w-10 rounded-full bg-accent/30 border border-accent/40 flex items-center justify-center">
        <Leaf className="h-5 w-5 text-accent" />
      </div>
    </div>

    {/* Product Info - now always visible */}
    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transition-transform duration-500">
      <div className="bg-black/80 border border-white/10 rounded-2xl p-5 shadow-2xl">
        <span className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase mb-1 block">Premium Export</span>
        <h3 className="font-serif text-xl md:text-2xl text-white font-bold leading-tight drop-shadow-sm">
          {product.name.replace("Dehydrated ", "")}
        </h3>
        <p className="text-white/80 text-md mt-2 line-clamp-2 transition-opacity duration-500 leading-relaxed">
          {product.short}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="h-px flex-1 bg-white/20 mr-4" />
          <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>

    {/* Border Glow Effect */}
    <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/40 rounded-3xl transition-colors duration-700 pointer-events-none" />
  </Link>
);

export default ProductCard;
