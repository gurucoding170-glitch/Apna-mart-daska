import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-gold-300/10 bg-cocoa-900/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <Logo />
            </Link>
            <p className="text-sm text-gold-100/50 max-w-xs leading-relaxed">
              Your ultimate destination for authentic imported chocolates, rare Oreo collections, and premium international snacks — delivered directly to your doorstep.
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
              <li>
                <Link to="/blog" className="hover:text-gold-300 transition-colors">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gold-100/70 mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-gold-100/40">
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Biscuits & Cookies</li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Imported Chocolates</li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Beverages</li>
              <li className="hover:text-gold-300 cursor-pointer transition-colors">Rare Snacks</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold-100/70 mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gold-100/40">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-300" /> Main City, Daska
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
          © 2026 Apna Daska Mart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
