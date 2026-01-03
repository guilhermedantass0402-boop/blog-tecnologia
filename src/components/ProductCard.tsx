"use client"

import { ShoppingCart, ExternalLink, CreditCard, DollarSign, TrendingUp } from "lucide-react"
import { Product, PaymentLink, AffiliateLink } from "@/lib/types"

interface ProductCardProps {
  product: Product
  showFullDetails?: boolean
}

export function ProductCard({ product, showFullDetails = false }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handlePaymentClick = (link: PaymentLink) => {
    // Track click for analytics
    console.log(`Payment clicked: ${link.platform} for ${product.name}`)
    window.open(link.url, '_blank')
  }

  const handleAffiliateClick = (link: AffiliateLink) => {
    // Track affiliate click for commission
    console.log(`Affiliate clicked: ${link.store} for ${product.name}`)
    window.open(link.url, '_blank')
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'stripe':
        return <CreditCard className="w-4 h-4" />
      case 'paypal':
        return <DollarSign className="w-4 h-4" />
      case 'pagseguro':
        return <ShoppingCart className="w-4 h-4" />
      case 'mercadopago':
        return <TrendingUp className="w-4 h-4" />
      default:
        return <CreditCard className="w-4 h-4" />
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'stripe':
        return 'from-purple-600 to-indigo-600'
      case 'paypal':
        return 'from-blue-600 to-blue-700'
      case 'pagseguro':
        return 'from-green-600 to-emerald-600'
      case 'mercadopago':
        return 'from-cyan-500 to-blue-500'
      default:
        return 'from-gray-600 to-gray-700'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
            {product.category}
          </span>
          {discount > 0 && (
            <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
              -{discount}% OFF
            </span>
          )}
          {product.featured && (
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
              ⭐ Destaque
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            product.inStock 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {product.inStock ? 'Em Estoque' : 'Esgotado'}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through mb-1">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </p>
          )}
          <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ou 12x de R$ {(product.price / 12).toFixed(2).replace('.', ',')}
          </p>
        </div>

        {/* Payment Links */}
        {product.inStock && product.paymentLinks.length > 0 && (
          <div className="space-y-3 mb-4">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              💳 Comprar Direto:
            </p>
            {product.paymentLinks.filter(link => link.active).map((link) => (
              <button
                key={link.id}
                onClick={() => handlePaymentClick(link)}
                className={`w-full py-3 px-4 bg-gradient-to-r ${getPlatformColor(link.platform)} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2`}
              >
                {getPlatformIcon(link.platform)}
                {link.label}
              </button>
            ))}
          </div>
        )}

        {/* Affiliate Links */}
        {product.affiliateLinks && product.affiliateLinks.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              🛒 Ou compre em lojas parceiras:
            </p>
            {product.affiliateLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleAffiliateClick(link)}
                className="w-full py-2.5 px-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  {link.label}
                </span>
                {link.commission && (
                  <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                    +{link.commission}% cashback
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Review Link */}
        {product.reviewId && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={`#review-${product.reviewId}`}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium flex items-center gap-2"
            >
              📝 Ler review completo
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
