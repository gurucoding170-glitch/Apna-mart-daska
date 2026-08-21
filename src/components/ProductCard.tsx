import { motion } from 'framer-motion';
import { Star, Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAdd: (p: Product) => void;
  index: number;
}

export default function ProductCard({ product, onAdd, index }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // Dedicated page open hone se rokne ke liye jab Quick Add dabyen
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative rounded-2xl bg-cocoa-900/40 border border-gold-300/10 overflow-hidden hover:border-gold-300/30 transition-all hover:shadow-card cursor-pointer"
    >
      <div className={`relative h-44 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-3 overflow-hidden`}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain drop-shadow-xl z-10"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-gold-300 text-cocoa-900 text-[10px] font-bold uppercase tracking-wide shadow-md">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gold-50 text-sm leading-tight group-hover:text-gold-300 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-gold-300 text-gold-300" />
            <span className="text-xs font-medium text-gold-100/70">{product.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gold-100/40 mb-3 line-clamp-1">{product.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold gold-gradient-text">PKR {product.price}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
              added ? 'bg-success/20 text-success border border-success/40' : 'bg-gold-300 text-cocoa-900 hover:shadow-glow-gold'
            }`}
          >
            {added ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
