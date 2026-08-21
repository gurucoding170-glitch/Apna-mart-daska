export type Category = 'Biscuits' | 'Chocolates' | 'Beverages' | 'Daska Specialties';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // PKR
  rating: number;
  reviews: number;
  image: string;
  sketchfabId?: string; // 👈 Yahan 3D model ki ID save hogi
  tagline: string;
  badge?: string;
  gradient: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const CATEGORIES: Category[] = [
  'Biscuits',
  'Chocolates',
  'Beverages',
  'Daska Specialties',
];

export const PRODUCTS: Product[] = [
  {
    id: 'oreo-classic',
    name: 'Oreo Classic',
    category: 'Biscuits',
    price: 400,
    rating: 4.9,
    reviews: 1284,
    image: '/products/oreoclassic.png',
    sketchfabId: '1a1c6a5549aa4e8694d97acf7fcbb30e', // 👈 Test 3D Model ID (Oreo Cookie)
    tagline: 'The original chocolate sandwich biscuit',
    badge: 'Bestseller',
    gradient: 'from-cocoa-800 to-cocoa-900',
  },
  {
    id: 'oreo-dark',
    name: 'Oreo Chocolate',
    category: 'Biscuits',
    price: 420,
    rating: 4.8,
    reviews: 892,
    image: '/products/oreochoco.png',
    sketchfabId: '077ca586c28d41628d2eb637f6fa443c', // 👈 Model ID
    tagline: '70% rich cocoa shells, intense flavour',
    badge: 'New',
    gradient: 'from-cocoa-900 to-ink-900',
  },
];

export const DELIVERY_AREAS = [
  'Daska',
  'Sialkot',
  'Sambrial',
  'Pasrur',
] as const;

export const INGREDIENT_CALLOUTS = [
  { label: 'Rich Cocoa 70%', side: 'left' as const, y: 1.6 },
  { label: 'Pure Alpine Cream', side: 'right' as const, y: 0 },
  { label: 'Zero Trans Fats', side: 'left' as const, y: -1.6 },
];
