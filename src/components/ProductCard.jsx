import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

const ProductCard = ({ product }) => (
  <Link
    href={product.slug.startsWith("?") ? `/products${product.slug}` : `/products/${product.slug}`}
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


    {/* Product Info - now always visible */}
    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-3 xl:p-4 flex flex-col justify-end transition-transform duration-500">
      <div className="bg-black/85 border border-white/10 rounded-xl p-3 sm:p-4 lg:p-3 xl:p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-wrap items-end justify-between gap-x-2 gap-y-1.5 w-full">
          <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-[13px] xl:text-[14px] 2xl:text-base text-white font-bold leading-tight drop-shadow-sm px-1 flex-1 min-w-[100px] break-words">
            {product.name.replace("Dehydrated ", "")}
          </h3>
          <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-7 lg:w-7 xl:h-8 xl:w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110 flex-shrink-0 self-end ml-auto">
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4" />
          </div>
        </div>
      </div>
    </div>

    {/* Border Glow Effect */}
    <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/40 rounded-3xl transition-colors duration-700 pointer-events-none" />
  </Link>
);

export default ProductCard;
