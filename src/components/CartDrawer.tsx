import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartApi } from '@/hooks/useCart';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cart: CartApi;
  onCheckout: () => void;
}

const DELIVERY_FEE = 150;
const FREE_DELIVERY_THRESHOLD = 2000;

export default function CartDrawer({
  open,
  onClose,
  cart,
  onCheckout,
}: CartDrawerProps) {
  const { items, updateQty, remove, subtotal, count } = cart;
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : DELIVERY_FEE;
  const total = subtotal + deliveryFee;
  const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_DELIVERY_THRESHOLD) * 100);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-ink-800 border-l border-gold-300/15 flex flex-col"
          >
            {/* header */}
            <div className="flex items-center justify-between p-5 border-b border-gold-300/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold-300" />
                <h2 className="font-bold text-gold-50">Your Cart</h2>
                <span className="text-sm text-gold-100/40">({count})</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-cocoa-800 text-gold-100/60 hover:text-gold-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* free delivery progress */}
            {items.length > 0 && (
              <div className="px-5 py-3 bg-cocoa-900/40 border-b border-gold-300/10">
                {remaining > 0 ? (
                  <p className="text-xs text-gold-100/60 mb-2">
                    Add <span className="font-semibold text-gold-300">PKR {remaining}</span> more for FREE delivery!
                  </p>
                ) : (
                  <p className="text-xs text-success mb-2 font-medium">
                    You've unlocked FREE delivery!
                  </p>
                )}
                <div className="h-1.5 rounded-full bg-cocoa-700 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-400"
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  />
                </div>
              </div>
            )}

            {/* items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gold-100/40">
                  <ShoppingBag className="w-14 h-14 mb-4 opacity-40" />
                  <p className="text-lg font-medium text-gold-100/60">Your cart is empty</p>
                  <p className="text-sm">Add some delicious snacks to get started</p>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40, height: 0 }}
                      className="flex gap-3 p-3 rounded-xl bg-cocoa-900/40 border border-gold-300/10"
                    >
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.product.gradient} flex items-center justify-center text-2xl shrink-0`}>
                        {item.product.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gold-50 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-gold-100/40 mb-2">
                          PKR {item.product.price} each
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 bg-cocoa-800 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity - 1)}
                              className="p-1 rounded hover:bg-cocoa-700 text-gold-100/70 transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center text-sm font-medium text-gold-50">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.product.id, item.quantity + 1)}
                              className="p-1 rounded hover:bg-cocoa-700 text-gold-100/70 transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold gold-gradient-text">
                              PKR {item.product.price * item.quantity}
                            </span>
                            <button
                              onClick={() => remove(item.product.id)}
                              className="p-1 rounded text-gold-100/30 hover:text-error transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* footer */}
            {items.length > 0 && (
              <div className="p-5 border-t border-gold-300/10 space-y-3 bg-cocoa-900/30">
                <div className="flex justify-between text-sm text-gold-100/60">
                  <span>Subtotal</span>
                  <span>PKR {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gold-100/60">
                  <span>Delivery</span>
                  <span className={deliveryFee === 0 ? 'text-success font-medium' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `PKR ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-gold-50 pt-2 border-t border-gold-300/10">
                  <span>Total</span>
                  <span className="gold-gradient-text">PKR {total}</span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-300 to-gold-400 text-cocoa-900 font-semibold hover:shadow-glow-gold transition-all"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
