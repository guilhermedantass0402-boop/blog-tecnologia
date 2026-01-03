import { Product } from './types'

// Mock database - In production, replace with real database
export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'O smartphone mais avançado da Apple com chip A17 Pro, câmera de 48MP e tela Super Retina XDR de 6.7"',
    price: 9499.00,
    originalPrice: 10999.00,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop',
    category: 'Smartphones',
    rating: 4.5,
    reviewId: '1',
    paymentLinks: [
      {
        id: 'stripe-1',
        platform: 'stripe',
        url: 'https://buy.stripe.com/test_example',
        label: 'Pagar com Stripe',
        active: true
      },
      {
        id: 'paypal-1',
        platform: 'paypal',
        url: 'https://www.paypal.com/paypalme/example',
        label: 'Pagar com PayPal',
        active: true
      }
    ],
    affiliateLinks: [
      {
        id: 'amazon-1',
        store: 'Amazon',
        url: 'https://amazon.com.br/iphone-15-pro-max',
        commission: 5,
        label: 'Comprar na Amazon'
      },
      {
        id: 'magazineluiza-1',
        store: 'Magazine Luiza',
        url: 'https://magazineluiza.com.br/iphone-15-pro-max',
        commission: 3,
        label: 'Comprar na Magazine Luiza'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'MacBook Pro M3',
    description: 'Notebook profissional com chip M3, 16GB RAM, 512GB SSD e tela Liquid Retina XDR de 14"',
    price: 15999.00,
    originalPrice: 17999.00,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
    category: 'Notebooks',
    rating: 5.0,
    reviewId: '2',
    paymentLinks: [
      {
        id: 'stripe-2',
        platform: 'stripe',
        url: 'https://buy.stripe.com/test_example2',
        label: 'Pagar com Stripe',
        active: true
      },
      {
        id: 'mercadopago-2',
        platform: 'mercadopago',
        url: 'https://mpago.la/example',
        label: 'Pagar com Mercado Pago',
        active: true
      }
    ],
    affiliateLinks: [
      {
        id: 'amazon-2',
        store: 'Amazon',
        url: 'https://amazon.com.br/macbook-pro-m3',
        commission: 4,
        label: 'Comprar na Amazon'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Fones de ouvido premium com cancelamento de ruído líder de mercado e áudio Hi-Res',
    price: 1899.00,
    originalPrice: 2299.00,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop',
    category: 'Fones',
    rating: 4.8,
    reviewId: '3',
    paymentLinks: [
      {
        id: 'pagseguro-3',
        platform: 'pagseguro',
        url: 'https://pagseguro.uol.com.br/checkout/example',
        label: 'Pagar com PagSeguro',
        active: true
      }
    ],
    affiliateLinks: [
      {
        id: 'amazon-3',
        store: 'Amazon',
        url: 'https://amazon.com.br/sony-wh1000xm5',
        commission: 6,
        label: 'Comprar na Amazon'
      },
      {
        id: 'kabum-3',
        store: 'KaBuM!',
        url: 'https://kabum.com.br/sony-wh1000xm5',
        commission: 4,
        label: 'Comprar na KaBuM!'
      }
    ],
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Smartphone Android premium com S Pen, câmera de 200MP e tela Dynamic AMOLED 2X',
    price: 7999.00,
    originalPrice: 8999.00,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=600&fit=crop',
    category: 'Smartphones',
    rating: 4.7,
    reviewId: '4',
    paymentLinks: [
      {
        id: 'stripe-4',
        platform: 'stripe',
        url: 'https://buy.stripe.com/test_example4',
        label: 'Pagar com Stripe',
        active: true
      }
    ],
    affiliateLinks: [
      {
        id: 'samsung-4',
        store: 'Samsung Store',
        url: 'https://samsung.com.br/galaxy-s24-ultra',
        commission: 3,
        label: 'Comprar na Samsung'
      }
    ],
    inStock: true,
    featured: false
  },
  {
    id: '5',
    name: 'Dell XPS 15',
    description: 'Notebook premium com Intel Core i7, 16GB RAM, RTX 4050 e tela OLED 4K',
    price: 11999.00,
    originalPrice: 13499.00,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop',
    category: 'Notebooks',
    rating: 4.6,
    reviewId: '5',
    paymentLinks: [
      {
        id: 'paypal-5',
        platform: 'paypal',
        url: 'https://www.paypal.com/paypalme/example5',
        label: 'Pagar com PayPal',
        active: true
      }
    ],
    affiliateLinks: [
      {
        id: 'dell-5',
        store: 'Dell Store',
        url: 'https://dell.com.br/xps-15',
        commission: 4,
        label: 'Comprar na Dell'
      }
    ],
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    description: 'Smartwatch com chip S9, tela Always-On Retina e recursos avançados de saúde',
    price: 4299.00,
    originalPrice: 4999.00,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop',
    category: 'Smartwatches',
    rating: 4.4,
    reviewId: '6',
    paymentLinks: [
      {
        id: 'mercadopago-6',
        platform: 'mercadopago',
        url: 'https://mpago.la/example6',
        label: 'Pagar com Mercado Pago',
        active: true
      }
    ],
    affiliateLinks: [
      {
        id: 'apple-6',
        store: 'Apple Store',
        url: 'https://apple.com/br/watch',
        commission: 2,
        label: 'Comprar na Apple'
      }
    ],
    inStock: true,
    featured: false
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured)
}

export function getAllProducts(): Product[] {
  return products
}
