// Types for payment system
export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviewId?: string
  paymentLinks: PaymentLink[]
  affiliateLinks?: AffiliateLink[]
  inStock: boolean
  featured: boolean
}

export interface PaymentLink {
  id: string
  platform: 'stripe' | 'paypal' | 'pagseguro' | 'mercadopago' | 'custom'
  url: string
  label: string
  active: boolean
}

export interface AffiliateLink {
  id: string
  store: string
  url: string
  commission?: number
  label: string
}

export interface Review {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  rating: number
  author: string
  date: string
  productId?: string
  pros: string[]
  cons: string[]
  verdict: string
}
