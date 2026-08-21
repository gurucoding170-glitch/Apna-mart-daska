export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    slug: 'rare-imported-oreo-flavors',
    title: 'Top 5 Rare Imported Oreo Flavors You Can Get Right Now',
    excerpt: 'Explore unique international Oreo flavors imported directly from the US and Japan that you won’t find in regular stores.',
    content: `
      <p>If you thought Oreos were just plain chocolate and vanilla cream, you are missing out on a massive universe of international flavors. Imported snack lovers around the world hunt for exclusive releases that never hit local supermarket shelves.</p>
      
      <h3>1. Peanut Butter & Chocolate Oreo</h3>
      <p>A classic American combo that blends rich peanut butter cream with dark cocoa biscuits for the ultimate savory-sweet balance.</p>
      
      <h3>2. Japanese Matcha Green Tea Oreo</h3>
      <p>Directly imported from East Asia, this variant offers a subtle, authentic matcha tea bitterness balanced with sweet cream.</p>

      <h3>3. Birthday Cake Edition</h3>
      <p>Packed with colorful sprinkles inside cream that tastes like real vanilla frosting. Perfect for celebrations!</p>

      <p>Check out our imported snacks section on <strong>Apna Daska Mart</strong> to grab these before stock runs out!</p>
    `,
    date: '2026-08-21',
    readTime: '3 min read',
    image: '/products/oreochoco.webp',
  },
  {
    id: '2',
    slug: 'local-vs-imported-snacks-hype',
    title: 'Local vs. Imported Snacks: Is the Hype Really Worth It?',
    excerpt: 'An honest look into cocoa purity, cream textures, and manufacturing standards of international packaged snacks.',
    content: `
      <p>A common question snack lovers ask is: <em>Why pay extra for imported snacks when local alternatives exist?</em> The answer comes down to three key factors: ingredient quality, flavor balance, and texture.</p>
      
      <h3>1. Cocoa Purity</h3>
      <p>International versions often utilize higher cocoa solids and authentic dairy fats instead of lower-grade vegetable oil substitutes, giving a much richer taste.</p>

      <h3>2. Crunch & Texture</h3>
      <p>Imported packaging relies on advanced moisture-barrier sealing, ensuring biscuits retain 100% crispiness during transport.</p>

      <p>Treat yourself to premium quality—browse our handpicked imported selection today!</p>
    `,
    date: '2026-08-20',
    readTime: '4 min read',
    image: '/products/oreoclassic.png',
  },
  {
    id: '3',
    slug: 'ultimate-imported-snack-gift-guide',
    title: 'Ultimate Snack Gift Guide: Perfect Hampers for Any Occasion',
    excerpt: 'Looking for a unique gift? Here is how to curate an unforgettable imported snack hamper for birthdays and events.',
    content: `
      <p>Finding a gift that someone will actually enjoy can be tough. An imported snack box filled with rare chocolates, unique biscuits, and imported candies is guaranteed to surprise anyone.</p>

      <h3>How to Build Your Custom Hamper:</h3>
      <ul>
        <li><strong>Pick 1 Hero Biscuit:</strong> Select an exclusive imported Oreo flavor.</li>
        <li><strong>Add Rich Chocolates:</strong> Include premium cocoa bars or imported cream bites.</li>
        <li><strong>Balance with Savory:</strong> Toss in imported crisps or flavored nuts.</li>
      </ul>

      <p>Mix and match items directly from our store to create your custom gift box!</p>
    `,
    date: '2026-08-19',
    readTime: '3 min read',
    image: '/products/oreochoco.webp',
  },
];
