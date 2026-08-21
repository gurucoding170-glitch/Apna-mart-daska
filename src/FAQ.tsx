export default function FAQ() {
  const faqs = [
    { q: "Do you deliver in all areas of Daska?", a: "Yes, we cover all main areas of Daska, Sialkot, and Sambrial." },
    { q: "How long does delivery take?", a: "We aim to deliver within 2-4 hours of order confirmation." },
    { q: "Is Cash on Delivery available?", a: "Yes, we offer Cash on Delivery (COD) for all orders." },
    { q: "Are your products 100% original?", a: "Absolutely. We source directly from official distributors." }
  ];

  return (
    <div className="min-h-screen bg-cocoa-950 text-gold-50 pt-20 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold gold-gradient-text mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-black/30 p-6 rounded-xl border border-gold-300/10">
            <h3 className="text-lg font-bold text-gold-300 mb-2">{faq.q}</h3>
            <p className="text-gold-100/70">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
