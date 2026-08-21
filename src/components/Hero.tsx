import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Truck } from 'lucide-react';
import Oreo3D from './Oreo3D';

export default function Hero() {
  const [explode, setExplode] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // scroll-driven explode
  useEffect(() => {
    const handleScroll = () => {
      if (isDragging.current) return;
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.6)));
      setExplode(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSlider = useCallback((v: number) => {
    isDragging.current = true;
    setExplode(v);
    setTimeout(() => {
      isDragging.current = false;
    }, 200);
  }, []);

  const callouts = [
    { label: 'Rich Cocoa 70%', side: 'left', showAt: 0.3, y: '30%' },
    { label: 'Pure Alpine Cream', side: 'right', showAt: 0.35, y: '50%' },
    { label: 'Zero Trans Fats', side: 'left', showAt: 0.4, y: '70%' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* glow backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-oreo-400/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold-300/10 blur-[100px]" />
      </div>

      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 mb-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gold-300/30 text-sm text-gold-200 mb-6">
          <Sparkles className="w-4 h-4 text-gold-300" />
          <span>Premium Snacks · Local Daska Bakery</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
          <span className="gold-gradient-text">Apna Daska Mart</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gold-100/70 max-w-2xl mx-auto">
          Where the humble Oreo unfolds into a world of flavour. Scroll or drag
          the slider to explode the biscuit and discover what's inside.
        </p>
      </motion.div>

      {/* 3D canvas */}
      <div className="relative z-0 w-full h-[420px] md:h-[500px]">
        <Oreo3D explode={explode} />

        {/* floating callouts */}
        {callouts.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, x: c.side === 'left' ? -30 : 30 }}
            animate={{
              opacity: explode > c.showAt ? 1 : 0,
              x: explode > c.showAt ? 0 : c.side === 'left' ? -30 : 30,
            }}
            transition={{ duration: 0.4 }}
            className={`absolute top-[${c.y}] ${c.side === 'left' ? 'left-4 md:left-16' : 'right-4 md:right-16'} pointer-events-none`}
            style={{ top: c.y }}
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass border border-gold-300/30 shadow-glow-gold">
              <span className="w-2 h-2 rounded-full bg-gold-300 animate-pulse" />
              <span className="text-sm font-medium text-gold-100 whitespace-nowrap">
                {c.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* slider control */}
      <div className="relative z-10 w-full max-w-md px-6 mt-2">
        <div className="flex items-center justify-between text-xs text-gold-100/50 mb-2">
          <span>Assembled</span>
          <span>Exploded</span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={explode}
          onChange={(e) => handleSlider(parseFloat(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-cocoa-700 accent-gold-300"
          style={{
            background: `linear-gradient(to right, #e5b869 ${explode * 100}%, #3a2415 ${explode * 100}%)`,
          }}
        />
      </div>

      {/* delivery banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-8 flex items-center gap-2 px-4 py-2.5 rounded-full bg-oreo-500/15 border border-oreo-400/30 text-oreo-300 text-sm"
      >
        <Truck className="w-4 h-4" />
        <span>Special Delivery Offer for Daska & Nearby Areas!</span>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-100/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
