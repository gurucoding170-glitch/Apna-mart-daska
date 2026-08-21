import { Cookie, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gold-300/10 bg-cocoa-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cocoa-800 to-cocoa-900 flex items-center justify-center border border-gold-300/30">
                <Cookie className="w-5 h-5 text-gold-300" />
              </div>
              <h3 className="font-bold gold-gradient-text">Apna Daska Mart</h3>
            </Link>
            <p className="text-sm text-gold-100/40 max-w-xs">
              Premium snacks, Oreo collections, and authentic Daska bakery
              specialties — delivered fresh to your doorstep.
            </p>
          </div>

          {/* pages */}
          <div>
            <h4 className="text-sm font-semibold text-gold-100/70 mb-3">Pages</h4>
            <ul className="space-y-2 text-sm text-gold-100/40">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold-300 transition-colors">Help & FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gold-100/70 mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-gold-100/40">
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Biscuits</li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Chocolates</li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Beverages</li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Daska Specialties</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold-100/70 mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gold-100/40">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-300" /> Main Bazaar, Daska
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-300" /> 052-6612345
              </p>
              <div className="flex gap-3 pt-2">
                <span className="w-9 h-9 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 cursor-pointer transition-colors">
                  <Facebook className="w-4 h-4 text-gold-100/60" />
                </span>
                <span className="w-9 h-9 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 cursor-pointer transition-colors">
                  <Instagram className="w-4 h-4 text-gold-100/60" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gold-300/10 text-center text-xs text-gold-100/30">
          © 2026 Apna Daska Mart. Crafted with care in Daska, Punjab.
        </div>
      </div>
    </footer>
  );
}
