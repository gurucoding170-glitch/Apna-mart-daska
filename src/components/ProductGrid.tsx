import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PackageSearch } from 'lucide-react';
import { PRODUCTS, type Category, type Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  search: string;
  activeCategory: Category | 'All';
  onAdd: (p: Product) => void;
}

export default function ProductGrid({
  search,
  activeCategory,
  onAdd,
}: ProductGridProps) {
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="shop" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-2">
          Explore the Collection
        </h2>
        <p className="text-gold-100/50 text-sm">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
        </p>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gold-100/40">
          <PackageSearch className="w-12 h-12 mb-4" />
          <p className="text-lg font-medium">No products match your search</p>
          <p className="text-sm">Try a different keyword or category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
              index={i}
            />
          ))}
        </div>
      )}
    </section>
  );
}
