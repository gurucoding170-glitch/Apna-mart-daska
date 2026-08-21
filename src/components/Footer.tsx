import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cocoa-950 border-t border-gold-300/10 py-8 px-4 md:px-6 text-gold-100/60 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-gold-50">DesiPunjab</p>
          <p className="text-xs text-gold-100/40 mt-1">Fresh snacks & daily essentials delivered in Daska.</p>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link>
          <Link to="/faq" className="hover:text-gold-300 transition-colors">Help & FAQ</Link>
          <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link>
        </div>

        <p className="text-xs text-gold-100/40">
          © {new Date().getFullYear()} Apna Daska Mart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
