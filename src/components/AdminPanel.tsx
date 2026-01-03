"use client"

import { useState } from "react"
import { X, Plus, Trash2, Edit, ExternalLink } from "lucide-react"
import { Product, PaymentLink, AffiliateLink } from "@/lib/types"

interface AdminPanelProps {
  products: Product[]
  onUpdateProduct: (product: Product) => void
  onDeleteProduct: (id: string) => void
  onAddProduct: (product: Product) => void
}

export function AdminPanel({ products, onUpdateProduct, onDeleteProduct, onAddProduct }: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isCreating, setIsCreating] = useState(false)

  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    originalPrice: 0,
    image: '',
    category: 'Smartphones',
    rating: 5,
    inStock: true,
    featured: false,
    paymentLinks: [],
    affiliateLinks: []
  })

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData(product)
    setIsCreating(false)
    setIsOpen(true)
  }

  const handleCreate = () => {
    setEditingProduct(null)
    setFormData({
      name: '',
      description: '',
      price: 0,
      originalPrice: 0,
      image: '',
      category: 'Smartphones',
      rating: 5,
      inStock: true,
      featured: false,
      paymentLinks: [],
      affiliateLinks: []
    })
    setIsCreating(true)
    setIsOpen(true)
  }

  const handleSave = () => {
    if (isCreating) {
      const newProduct: Product = {
        ...formData as Product,
        id: Date.now().toString()
      }
      onAddProduct(newProduct)
    } else if (editingProduct) {
      onUpdateProduct({ ...editingProduct, ...formData } as Product)
    }
    setIsOpen(false)
  }

  const addPaymentLink = () => {
    setFormData({
      ...formData,
      paymentLinks: [
        ...(formData.paymentLinks || []),
        {
          id: Date.now().toString(),
          platform: 'stripe',
          url: '',
          label: 'Pagar com Stripe',
          active: true
        }
      ]
    })
  }

  const removePaymentLink = (id: string) => {
    setFormData({
      ...formData,
      paymentLinks: formData.paymentLinks?.filter(link => link.id !== id)
    })
  }

  const updatePaymentLink = (id: string, updates: Partial<PaymentLink>) => {
    setFormData({
      ...formData,
      paymentLinks: formData.paymentLinks?.map(link => 
        link.id === id ? { ...link, ...updates } : link
      )
    })
  }

  const addAffiliateLink = () => {
    setFormData({
      ...formData,
      affiliateLinks: [
        ...(formData.affiliateLinks || []),
        {
          id: Date.now().toString(),
          store: '',
          url: '',
          label: 'Comprar na Loja',
          commission: 0
        }
      ]
    })
  }

  const removeAffiliateLink = (id: string) => {
    setFormData({
      ...formData,
      affiliateLinks: formData.affiliateLinks?.filter(link => link.id !== id)
    })
  }

  const updateAffiliateLink = (id: string, updates: Partial<AffiliateLink>) => {
    setFormData({
      ...formData,
      affiliateLinks: formData.affiliateLinks?.map(link => 
        link.id === id ? { ...link, ...updates } : link
      )
    })
  }

  return (
    <>
      {/* Admin Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <Edit className="w-6 h-6" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                🛠️ Painel Administrativo
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!editingProduct && !isCreating ? (
                <>
                  {/* Product List */}
                  <div className="mb-6">
                    <button
                      onClick={handleCreate}
                      className="w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      Adicionar Novo Produto
                    </button>
                  </div>

                  <div className="space-y-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            R$ {product.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onDeleteProduct(product.id)}
                            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Edit/Create Form */}
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Nome do Produto
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Descrição
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Preço (R$)
                        </label>
                        <input
                          type="number"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Preço Original (R$)
                        </label>
                        <input
                          type="number"
                          value={formData.originalPrice}
                          onChange={(e) => setFormData({ ...formData, originalPrice: parseFloat(e.target.value) })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        URL da Imagem
                      </label>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Payment Links */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          💳 Links de Pagamento
                        </label>
                        <button
                          onClick={addPaymentLink}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          Adicionar
                        </button>
                      </div>
                      <div className="space-y-3">
                        {formData.paymentLinks?.map((link) => (
                          <div key={link.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-2">
                            <div className="flex items-center justify-between">
                              <select
                                value={link.platform}
                                onChange={(e) => updatePaymentLink(link.id, { platform: e.target.value as any })}
                                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                              >
                                <option value="stripe">Stripe</option>
                                <option value="paypal">PayPal</option>
                                <option value="pagseguro">PagSeguro</option>
                                <option value="mercadopago">Mercado Pago</option>
                              </select>
                              <button
                                onClick={() => removePaymentLink(link.id)}
                                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <input
                              type="text"
                              placeholder="URL do link de pagamento"
                              value={link.url}
                              onChange={(e) => updatePaymentLink(link.id, { url: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                            />
                            <input
                              type="text"
                              placeholder="Label do botão"
                              value={link.label}
                              onChange={(e) => updatePaymentLink(link.id, { label: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Affiliate Links */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          🛒 Links de Afiliados
                        </label>
                        <button
                          onClick={addAffiliateLink}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-4 h-4" />
                          Adicionar
                        </button>
                      </div>
                      <div className="space-y-3">
                        {formData.affiliateLinks?.map((link) => (
                          <div key={link.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-2">
                            <div className="flex items-center justify-between">
                              <input
                                type="text"
                                placeholder="Nome da loja"
                                value={link.store}
                                onChange={(e) => updateAffiliateLink(link.id, { store: e.target.value })}
                                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                              />
                              <button
                                onClick={() => removeAffiliateLink(link.id)}
                                className="ml-2 p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <input
                              type="text"
                              placeholder="URL do link de afiliado"
                              value={link.url}
                              onChange={(e) => updateAffiliateLink(link.id, { url: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                placeholder="Label do botão"
                                value={link.label}
                                onChange={(e) => updateAffiliateLink(link.id, { label: e.target.value })}
                                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                              />
                              <input
                                type="number"
                                placeholder="Comissão %"
                                value={link.commission}
                                onChange={(e) => updateAffiliateLink(link.id, { commission: parseFloat(e.target.value) })}
                                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={() => {
                          setEditingProduct(null)
                          setIsCreating(false)
                        }}
                        className="flex-1 py-3 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        Voltar
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Salvar Produto
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
