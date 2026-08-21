import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, Cookie } from 'lucide-react';
import { CATEGORIES, type Category } from '@/data/products';

interface HeaderProps {
  search: string;
  onSearch: (v: string) => void;
  activeCategory: Category | 'All';
  onCategory: (c: Category | 'All') => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({
  search,
  onSearch,
  activeCategory,
  onCategory,
  cartCount,
  onCartClick,
}: HeaderProps) {
  const pills: (Category | 'All')[] = ['All', ...CATEGORIES];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-gold-300/15">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* top row */}
        <div className="flex items-center justify-between h-16 gap-4">
          {/* logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cocoa-800 to-cocoa-900 flex items-center justify-center border border-gold-300/30 shadow-glow-gold">
              <Cookie className="w-5 h-5 text-gold-300" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-bold gold-gradient-text leading-tight">
                Apna Daska Mart
              </h1>
              <p className="text-[10px] text-gold-100/40 leading-tight">
                Premium Snacks & Grocery
              </p>
            </div>
          </div>

          {/* search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-100/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search biscuits, chocolates, beverages..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cocoa-900/60 border border-gold-300/15 text-sm text-gold-50 placeholder:text-gold-100/30 focus:outline-none focus:border-gold-300/50 focus:bg-cocoa-800/60 transition-all"
            />
            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => onSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-100/40 hover:text-gold-300"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* cart button */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-gold-300 to-gold-400 text-cocoa-900 font-semibold text-sm hover:shadow-glow-gold transition-all shrink-0"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-oreo-400 text-white text-[10px] font-bold flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* category pills */}
        <div className="flex items-center gap-2 pb-3 overflow-x-auto scrollbar-hide">
          {pills.map((pill) => (
            <button
              key={pill}
              onClick={() => onCategory(pill)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === pill
                  ? 'bg-gold-300 text-cocoa-900 shadow-glow-gold'
                  : 'bg-cocoa-900/50 text-gold-100/60 border border-gold-300/10 hover:border-gold-300/30 hover:text-gold-100'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
