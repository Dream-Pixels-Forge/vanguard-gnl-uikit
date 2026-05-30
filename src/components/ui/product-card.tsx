import { cn } from '../../lib/utils'
import { getLiquidSurface, getAnimation } from '../../lib/tailwind-utils'
import { Star, Eye, Heart, Share2 } from 'lucide-react'
import * as React from 'react'

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  image?: string
  price: string | number
  originalPrice?: string | number
  rating?: number
  reviews?: number
  tags?: string[]
  onFavorite?: () => void
  onShare?: () => void
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  function ProductCard({ name, image, price, originalPrice, rating, reviews, tags, onFavorite, onShare, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'group rounded-3xl overflow-hidden',
          getLiquidSurface(),
          getAnimation('slow'),
          'hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]',
          className,
        )}
        {...props}
      >
        <div className="relative aspect-[4/3] bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Eye size={32} className="text-white/10" />
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-1.5">
              {tags.map((tag, i) => (
                <span key={i} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/70 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {onFavorite && (
              <button onClick={onFavorite} className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/50 hover:text-white transition-colors">
                <Heart size={14} />
              </button>
            )}
            {onShare && (
              <button onClick={onShare} className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/50 hover:text-blue-400 transition-colors">
                <Share2 size={14} />
              </button>
            )}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-sm font-bold text-white truncate mb-2">{name}</h3>
          {rating !== undefined && (
            <div className="flex items-center gap-1.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className={i < rating ? 'text-white fill-white' : 'text-white/10'} />
              ))}
              {reviews !== undefined && <span className="text-[10px] text-white/30 ml-1">({reviews})</span>}
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-lg font-black text-white">${price}</span>
            {originalPrice && (
              <span className="text-xs text-white/30 line-through">${originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    )
  },
)
ProductCard.displayName = 'ProductCard'
