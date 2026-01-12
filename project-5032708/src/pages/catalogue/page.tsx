import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlobBackground from '../../components/base/BlobBackground';
import ImageModal from '../../components/base/ImageModal';
import { products } from '../../mocks/products';

export default function Catalogue() {
  const [selectedProduct, setSelectedProduct] = useState<{ images: string[]; name: string } | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <BlobBackground variant="mixed" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">
              OUR INFLATABLES
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 mb-6">
              Choose from our premium collection of bounce houses, water slides, and combo units
            </p>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <strong className="text-gray-900">How to book:</strong> Click on <strong>BOOK NOW</strong> to make your reservation through our intelligent virtual assistant. For specific questions or complex rentals, you can schedule directly with an attendant on{' '}
                <a 
                  href="https://wa.me/15614445555" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-bold underline cursor-pointer"
                >
                  WhatsApp
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-product-shop>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div 
                  className="relative w-full h-64 sm:h-72 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct({ images: product.images, name: product.name })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.hasWater && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      WATER
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <i className="ri-zoom-in-line text-white text-3xl sm:text-4xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 tracking-tight">{product.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{product.shortDescription}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                        <i className="ri-checkbox-circle-fill text-gray-900 mr-2 flex-shrink-0"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase">3-Hour Rental:</span>
                      <span className="text-xl sm:text-2xl font-black text-gray-900">${product.priceFrom}</span>
                    </div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase">Full Day Rental:</span>
                      <span className="text-xl sm:text-2xl font-black text-gray-900">${product.priceFullDay}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61577642781403"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-full font-bold text-xs sm:text-sm text-center hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <ImageModal
        isOpen={selectedProduct !== null}
        images={selectedProduct?.images || []}
        alt={selectedProduct?.name || ''}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}