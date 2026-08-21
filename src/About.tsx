export default function About() {
  return (
    <div className="min-h-screen bg-cocoa-950 text-gold-50 pt-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold gold-gradient-text mb-8">About Apna Daska Mart</h1>
      <div className="prose prose-invert prose-gold">
        <p className="text-lg text-gold-100/80 mb-6">
          Apna Daska Mart Daska ka premium online grocery store hai. Humara maqsad aap ko ghar bethe 100% original aur fresh products faraham karna hai.
        </p>
        <h3 className="text-xl font-bold text-gold-300">Why Choose Us?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gold-100/70">
          <li>100% Original Products - No compromises on quality.</li>
          <li>Fast Local Delivery - Serving Daska, Sialkot, and surrounding areas.</li>
          <li>Secure Payment - Pay on delivery or easy online options.</li>
          <li>Freshness Guaranteed - Directly from trusted distributors.</li>
        </ul>
      </div>
    </div>
  );
}
