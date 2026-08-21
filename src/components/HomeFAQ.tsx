import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Daska mein delivery kitne time mein hoti hai?",
      a: "Daska city aur qareebi ilaqon mein order confirm hone ke 2 se 4 ghante ke andar delivery kar di jaati hai."
    },
    {
      q: "Kya Cash on Delivery (COD) available hai?",
      a: "Jee haan, aap order receive karte waqt cash pay kar sakte hain. Online bank transfer ki sahulat bhi mojud hai."
    },
    {
      q: "Kya saare products 100% original hain?",
      a: "Bilkul! Hum tamam grocery items, bakery specialties, aur snacks direct official distributors se procure karte hain."
    },
    {
      q: "Order cancel ya change kaise karein?",
      a: "Order place karne ke baad aap humare WhatsApp number par message karke order modify ya cancel karwa sakte hain."
    }
  ];

  return (
    <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto border-t border-gold-300/10 mt-12">
      <div className="flex items-center gap-2 mb-2 justify-center">
        <HelpCircle className="w-5 h-5 text-gold-300" />
        <span className="text-xs font-bold uppercase tracking-widest text-gold-300">Quick Answers</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center gold-gradient-text mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-cocoa-900/40 border border-gold-300/15 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-semibold text-gold-50 text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-300 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-5 text-xs md:text-sm text-gold-100/70 border-t border-gold-300/10 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
