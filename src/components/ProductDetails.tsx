import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Star, ShoppingBag, ArrowLeft, Rotate3d, Check } from 'lucide-react';
import { PRODUCTS, type Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SEO from '@/components/SEO';

interface ProductDetailsProps {
  onAdd: (p: Product) => void;
}

export default function ProductDetails({ onAdd }: ProductDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen text-center py-20 text-gold-50">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-gold-300 text-black rounded-lg">
          Back to Home
        </button>
      </div>
    );
  }

  // Recommendation logic: Same category products minus current product
  const recommendedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  // GEO Schema Data for Google & AI Engines
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.tagline,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "Apna Daska Mart"
    },
    "seller": {
      "@type": "GroceryStore",
      "name": "Apna Daska Mart",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daska",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PKR",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "areaServed": ["Daska", "Sialkot", "Sambrial", "Pasrur"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews
    }
  };

  return (
    <div className="min-h-screen bg-cocoa-950 text-gold-50 pt-20 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Dynamic SEO & GEO Meta Tags */}
      <SEO
        title={`${product.name} - Buy Online in Daska, Pakistan | Apna Daska Mart`}
        description={`Order 100% original ${product.name} online in Daska, Sialkot, and nearby areas for PKR ${product.price}. Instant home delivery available.`}
        keywords={`${product.name}, buy ${product.name} online, ${product.name} price in pakistan, grocery delivery daska`}
        image={product.image}
        url={`/product/${product.id}`}
        schema={productSchema}
      />

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 mb-6 text-gold-300/80 hover:text-gold-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Store
      </button>

      {/* Main Grid: Top 3D View & Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* 1. Interactive 3D Model Viewer Container */}
        <div className="relative h-[380px] md:h-[450px] w-full bg-black/50 border border-gold-300/20 rounded-3xl overflow-hidden flex items-center justify-center">
          {product.sketchfabId ? (
            <iframe
              title={product.name}
              className="w-full h-full border-0"
              src={`https://sketchfab.com/models/${product.sketchfabId}/embed?autostart=1&internal=1&ui_animation=0&ui_infos=0&ui_controls=1&ui_stop=0&ui_watermark=0`}
              allow="autoplay; fullscreen; vr"
            />
          ) : (
            <div className="p-8 h-full flex flex-col items-center justify-center">
              <img src={product.image} alt={product.name} className="h-full object-contain drop-shadow-2xl" />
            </div>
          )}

          {product.sketchfabId && (
            <span className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 text-gold-300 text-xs font-semibold backdrop-blur-md">
              <Rotate3d className="w-4 h-4" /> Drag mouse/touch to view in 3D
            </span>
          )}
        </div>

        {/* 2. Product Information & Actions */}
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase font-bold tracking-widest text-gold-300 mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gold-50 mb-3">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-gold-300 text-gold-300" />
              <span className="font-bold text-gold-50">{product.rating}</span>
            </div>
            <span className="text-gold-100/40">•</span>
            <span className="text-sm text-gold-100/60">{product.reviews} Customer Reviews</span>
          </div>

          <p className="text-gold-100/70 text-base mb-6 leading-relaxed">
            {product.tagline}. Fresh stock guaranteed directly from official distribution channels in Daska.
          </p>

          <div className="text-3xl font-black gold-gradient-text mb-8">
            PKR {product.price}
          </div>

          <button
            onClick={handleAddToCart}
            className={`w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all shadow-xl ${
              added
                ? 'bg-success text-cocoa-900'
                : 'bg-gold-300 text-cocoa-900 hover:shadow-glow-gold hover:scale-[1.02]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-5 h-5" /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="w-5 h-5" /> Add to Shopping Cart
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Recommended Products Section */}
      {recommendedProducts.length > 0 && (
        <section className="pt-10 border-t border-gold-300/10">
          <h3 className="text-2xl font-bold gold-gradient-text mb-6">Recommended for You</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedProducts.map((recProduct, idx) => (
              <ProductCard key={recProduct.id} product={recProduct} onAdd={onAdd} index={idx} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
