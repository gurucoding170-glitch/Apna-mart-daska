import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Phone, 
  MapPin 
} from 'lucide-react';
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
                <MapPin className="w-4 h-4 text-gold-300" /> Sialkot Road, Daska
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-300" /> 0305-6241497
              </p>
              
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-2 pt-2">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/apnamartdaska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-gold-100/60 hover:text-gold-300" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/apnamartdaska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gold-100/60 hover:text-gold-300" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@apnamartdaska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-gold-100/60 hover:text-gold-300" />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@apna.mart.daska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-gold-100/60 hover:text-gold-300" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.68 6.33 6.33 0 009.33 22a6.34 6.34 0 006.34-6.33V9.32a8.16 8.16 0 004.92 1.62V7.49a4.84 4.84 0 01-1-.8z"/>
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/Apnamartdaska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-gold-100/60 hover:text-gold-300" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/irslan-tariq-90113a430"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gold-100/60 hover:text-gold-300" />
                </a>

                {/* Pinterest */}
                <a
                  href="http://www.pinterest.com/apnamartdaska"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-8 h-8 rounded-lg bg-cocoa-800 flex items-center justify-center hover:bg-cocoa-700 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-gold-100/60 hover:text-gold-300" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/>
                  </svg>
                </a>
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
