import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, CheckCircle2, Loader2, User, Phone } from 'lucide-react';
import type { CartApi } from '@/hooks/useCart';
import { DELIVERY_AREAS } from '@/data/products';

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  cart: CartApi;
}

export default function CheckoutModal({ open, onClose, cart }: CheckoutModalProps) {
  const { items, subtotal, clear } = cart;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState<string>('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'form' | 'loading' | 'success'>('form');

  const deliveryFee = subtotal >= 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  const canSubmit = name.trim() && phone.trim() && area && address.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('loading');

    // 1. WhatsApp Number (Change to your actual store WhatsApp number)
    const storeWhatsAppNumber = '923056241497'; 

    // 2. Format Items List
    const itemsText = items
      .map((item) => `• ${item.product.title} (x${item.quantity}) - PKR ${item.product.price * item.quantity}`)
      .join('\n');

    // 3. Format Message
    const message = 
`🛒 *NEW ORDER - APNA DASKA MART* 🛒

👤 *Customer:* ${name.trim()}
📞 *Phone:* ${phone.trim()}
📍 *Area:* ${area}
🏠 *Address:* ${address.trim()}

--- *ORDER DETAILS* ---
${itemsText}

🚚 *Delivery:* ${deliveryFee === 0 ? 'FREE' : `PKR ${deliveryFee}`}
💰 *Total Amount:* PKR ${total}

_Payment Mode: Cash on Delivery_`;

    // 4. Open WhatsApp
    const whatsappUrl = `https://wa.me/${storeWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // 5. Show Success Screen
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  const handleClose = () => {
    if (status === 'success') {
      clear();
      setName('');
      setPhone('');
      setArea('');
      setAddress('');
      setStatus('form');
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-ink-800 rounded-2xl border border-gold-300/15 shadow-card overflow-hidden"
            >
              {status === 'success' ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-9 h-9 text-success" />
                  </motion.div>
                  <h3 className="text-xl font-bold gold-gradient-text mb-2">
                    Order Confirmed!
                  </h3>
                  <p className="text-gold-100/60 text-sm mb-1">
                    Thank you, {name}! Your order details have been sent to WhatsApp.
                  </p>
                  <p className="text-gold-100/40 text-sm mb-6">
                    We'll contact you on {phone} to confirm delivery to {area}.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-xl bg-gold-300 text-cocoa-900 font-semibold text-sm hover:shadow-glow-gold transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* header */}
                  <div className="flex items-center justify-between p-5 border-b border-gold-300/10">
                    <div>
                      <h3 className="font-bold text-gold-50">Checkout</h3>
                      <p className="text-xs text-gold-100/40">
                        Delivering to Daska & nearby areas
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="p-2 rounded-lg hover:bg-cocoa-800 text-gold-100/60 hover:text-gold-300 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-5 space-y-4">
                    {/* order summary */}
                    <div className="rounded-xl bg-cocoa-900/40 border border-gold-300/10 p-4 space-y-2">
                      <p className="text-xs font-semibold text-gold-100/50 uppercase tracking-wide">
                        Order Summary
                      </p>
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex justify-between text-sm text-gold-100/70"
                        >
                          <span>
                            {item.product.title} × {item.quantity}
                          </span>
                          <span>PKR {item.product.price * item.quantity}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm text-gold-100/50 pt-2 border-t border-gold-300/10">
                        <span>Delivery</span>
                        <span className={deliveryFee === 0 ? 'text-success' : ''}>
                          {deliveryFee === 0 ? 'FREE' : `PKR ${deliveryFee}`}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-gold-50 pt-2 border-t border-gold-300/10">
                        <span>Total</span>
                        <span className="gold-gradient-text">PKR {total}</span>
                      </div>
                    </div>

                    {/* name */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gold-100/60 mb-1.5">
                        <User className="w-3.5 h-3.5" /> Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ahmed Khan"
                        className="w-full px-4 py-2.5 rounded-xl bg-cocoa-900/60 border border-gold-300/15 text-sm text-gold-50 placeholder:text-gold-100/30 focus:outline-none focus:border-gold-300/50 transition-all"
                      />
                    </div>

                    {/* phone */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gold-100/60 mb-1.5">
                        <Phone className="w-3.5 h-3.5" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0300 1234567"
                        className="w-full px-4 py-2.5 rounded-xl bg-cocoa-900/60 border border-gold-300/15 text-sm text-gold-50 placeholder:text-gold-100/30 focus:outline-none focus:border-gold-300/50 transition-all"
                      />
                    </div>

                    {/* area dropdown */}
                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-gold-100/60 mb-1.5">
                        <MapPin className="w-3.5 h-3.5" /> Delivery Area
                      </label>
                      <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-cocoa-900/60 border border-gold-300/15 text-sm text-gold-50 focus:outline-none focus:border-gold-300/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-ink-800">
                          Select your area...
                        </option>
                        {DELIVERY_AREAS.map((a) => (
                          <option key={a} value={a} className="bg-ink-800">
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* address */}
                    <div>
                      <label className="text-xs font-medium text-gold-100/60 mb-1.5 block">
                        Full Address
                      </label>
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="House #, street, landmark..."
                        rows={2}
                        className="w-full px-4 py-2.5 rounded-xl bg-cocoa-900/60 border border-gold-300/15 text-sm text-gold-50 placeholder:text-gold-100/30 focus:outline-none focus:border-gold-300/50 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!canSubmit || status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-gold-300 to-gold-400 text-cocoa-900 font-semibold hover:shadow-glow-gold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing Order...
                        </>
                      ) : (
                        <>Place Order · PKR {total}</>
                      )}
                    </button>
                    <p className="text-center text-xs text-gold-100/30">
                      Cash on Delivery available · No advance payment needed
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
