"use client"

import { Star, Calendar, User, Search, Menu, Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2, ShoppingBag, TrendingUp, DollarSign } from "lucide-react"
import { useState } from "react"
import { ProductCard } from "@/components/ProductCard"
import { AdminPanel } from "@/components/AdminPanel"
import { getAllProducts } from "@/lib/products"
import { Product } from "@/lib/types"

export default function TechBlog() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>(getAllProducts())
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { name: "Smartphones", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
    { name: "Notebooks", icon: Laptop, color: "from-purple-500 to-pink-500" },
    { name: "Fones", icon: Headphones, color: "from-orange-500 to-red-500" },
    { name: "Smartwatches", icon: Watch, color: "from-green-500 to-emerald-500" },
    { name: "Câmeras", icon: Camera, color: "from-indigo-500 to-blue-500" },
    { name: "Games", icon: Gamepad2, color: "from-pink-500 to-rose-500" },
  ]

  const featuredReviews = [
    {
      id: 1,
      title: "iPhone 15 Pro Max: Vale a pena o upgrade?",
      excerpt: "Testamos o novo flagship da Apple por 2 semanas. Confira nossa análise completa sobre desempenho, câmeras e bateria.",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=600&fit=crop",
      category: "Smartphones",
      rating: 4.5,
      author: "Tech Reviewer",
      date: "15 Mar 2024",
    },
    {
      id: 2,
      title: "MacBook Pro M3: O notebook mais poderoso do mercado",
      excerpt: "O novo chip M3 da Apple promete revolucionar a performance. Será que cumpre o que promete? Descubra em nossa análise.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      category: "Notebooks",
      rating: 5.0,
      author: "Tech Reviewer",
      date: "12 Mar 2024",
    },
    {
      id: 3,
      title: "Sony WH-1000XM5: O rei do cancelamento de ruído",
      excerpt: "Testamos os novos fones premium da Sony. O cancelamento de ruído está ainda melhor e a qualidade de áudio impressiona.",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=600&fit=crop",
      category: "Fones",
      rating: 4.8,
      author: "Tech Reviewer",
      date: "10 Mar 2024",
    },
    {
      id: 4,
      title: "Samsung Galaxy S24 Ultra: O Android definitivo",
      excerpt: "Com S Pen integrada e câmera de 200MP, o S24 Ultra é o smartphone Android mais completo. Veja nossa análise detalhada.",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=600&fit=crop",
      category: "Smartphones",
      rating: 4.7,
      author: "Tech Reviewer",
      date: "08 Mar 2024",
    },
    {
      id: 5,
      title: "Dell XPS 15: Elegância e performance em equilíbrio",
      excerpt: "O XPS 15 combina design premium com hardware poderoso. Ideal para criadores de conteúdo e profissionais exigentes.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
      category: "Notebooks",
      rating: 4.6,
      author: "Tech Reviewer",
      date: "05 Mar 2024",
    },
    {
      id: 6,
      title: "Apple Watch Series 9: Pequenas melhorias, grande impacto",
      excerpt: "O novo Apple Watch traz recursos sutis mas importantes. Confira se vale a pena fazer o upgrade do seu modelo anterior.",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=600&fit=crop",
      category: "Smartwatches",
      rating: 4.4,
      author: "Tech Reviewer",
      date: "02 Mar 2024",
    },
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : i < rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          {rating.toFixed(1)}
        </span>
      </div>
    )
  }

  const handleUpdateProduct = (product: Product) => {
    setProducts(products.map(p => p.id === product.id ? product : p))
  }

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id))
  }

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product])
  }

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products

  const featuredProducts = products.filter(p => p.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TechReview
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                  Reviews honestos de tecnologia
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Início
              </a>
              <a href="#reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Reviews
              </a>
              <a href="#produtos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Produtos
              </a>
              <a href="#categorias" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Categorias
              </a>
              <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Sobre
              </a>
            </nav>

            {/* Search & Menu */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
                  Início
                </a>
                <a href="#reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
                  Reviews
                </a>
                <a href="#produtos" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
                  Produtos
                </a>
                <a href="#categorias" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
                  Categorias
                </a>
                <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
                  Sobre
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Reviews Honestos de
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tecnologia
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Análises detalhadas dos últimos smartphones, notebooks, gadgets e muito mais. 
              Tudo testado por quem entende de tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#produtos" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                🛒 Ver Produtos à Venda
              </a>
              <a href="#reviews" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300">
                📝 Ler Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {products.length}+
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Produtos Disponíveis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                4.7
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Avaliação Média
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                98%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Satisfação
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                12x
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sem Juros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section id="produtos" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                🔥 Produtos em Destaque
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Os melhores produtos testados e aprovados pela nossa equipe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section id="categorias" className="py-12 sm:py-16 lg:py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore por Categoria
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Encontre produtos e reviews das categorias que você procura
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              const isSelected = selectedCategory === category.name
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(isSelected ? null : category.name)}
                  className={`group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${
                    isSelected 
                      ? 'border-blue-500 shadow-xl' 
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} ${
                    isSelected ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'
                  } transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {category.name}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Filtered Products */}
          {selectedCategory && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCategory}
                </h4>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Ver Todos
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🛒 Todos os Produtos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Navegue por todo nosso catálogo de produtos testados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews Section */}
      <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📝 Últimos Reviews
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Confira nossas análises mais recentes e detalhadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredReviews.map((review) => (
              <article
                key={review.id}
                id={`review-${review.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {review.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {review.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                    {review.excerpt}
                  </p>

                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <User className="w-4 h-4" />
                      <span>{review.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{review.date}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    Ler Review Completo
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              Carregar Mais Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Fique por Dentro das Novidades
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Receba nossos reviews, ofertas exclusivas e notícias de tecnologia diretamente no seu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">TechReview</h4>
              <p className="text-sm text-gray-400">
                Reviews honestos e detalhados dos melhores produtos de tecnologia do mercado. Compre com segurança através dos nossos links verificados.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Início</a></li>
                <li><a href="#produtos" className="hover:text-blue-400 transition-colors">Produtos</a></li>
                <li><a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a></li>
                <li><a href="#categorias" className="hover:text-blue-400 transition-colors">Categorias</a></li>
                <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Smartphones</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Notebooks</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Fones de Ouvido</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Smartwatches</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Redes Sociais</h4>
              <p className="text-sm text-gray-400 mb-4">
                Siga-nos nas redes sociais para não perder nenhuma novidade
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg transition-colors flex items-center justify-center">
                  <span className="text-sm font-bold">𝕏</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors flex items-center justify-center">
                  <span className="text-sm font-bold">in</span>
                </button>
                <button className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors flex items-center justify-center">
                  <span className="text-sm font-bold">YT</span>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 TechReview. Todos os direitos reservados. | Pagamentos processados com segurança.</p>
          </div>
        </div>
      </footer>

      {/* Admin Panel */}
      <AdminPanel
        products={products}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddProduct={handleAddProduct}
      />
    </div>
  )
}
