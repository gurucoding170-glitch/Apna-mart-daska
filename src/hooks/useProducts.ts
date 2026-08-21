import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Product } from '@/data/products';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from('products').select('*');
      if (!error && data) {
        // Mapping DB columns to frontend camelCase properties
        const formattedData: Product[] = data.map((item) => ({
          id: item.id,
          name: item.name,
          category: item.category,
          price: Number(item.price),
          rating: Number(item.rating),
          reviews: Number(item.reviews),
          image: item.image,
          sketchfabId: item.sketchfab_id,
          tagline: item.tagline,
          badge: item.badge,
          gradient: item.gradient,
        }));
        setProducts(formattedData);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return { products, loading };
}
