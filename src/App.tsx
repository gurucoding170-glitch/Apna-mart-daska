import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductDetails from '@/components/ProductDetails';
import About from './About';
import FAQ from './FAQ';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import type { Category, Product } from '@/data/products';

// Scroll to top automatically whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const cart = useCart();

  const handleAdd = (product: Product) => {
    cart.add(product);
  };

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-ink-900 flex flex-col justify-between">
      <ScrollToTop />

      {/* Global Header */}
      <Header
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
        cartCount={cart.count}
        onCartClick={() => setCartOpen(true)}
      />

      {/* Page Routing */}
      <main className="flex-grow">
        <Routes>
          {/* Main Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductGrid
                  search={search}
                  activeCategory={activeCategory}
                  onAdd={handleAdd}
                />
              </>
            }
          />

          {/* Dedicated 3D Product Details Page */}
          <Route
            path="/product/:id"
            element={<ProductDetails onAdd={handleAdd} />}
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
      />
    </div>
  );
}
