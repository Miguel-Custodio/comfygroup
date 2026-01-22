import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ImageModal from '../../components/base/ImageModal';
import { products } from '../../mocks/products';
import { pricingData } from '../../mocks/pricing';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const pricing = pricingData.find((p) => p.productId === id);
  const [selectedProduct, setSelectedProduct] = useState<{ images: string[]; name: string } | null>(null);

  if (!product || !pricing) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">PRODUCT NOT FOUND</h1>
          <Link to="/catalogue" className="text-purple-600 font-bold cursor-pointer hover:text-purple-700">
            Back to Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <Link to="/catalogue" className="inline-flex items-center text-purple-600 font-bold mb-4 sm:mb-6 hover:text-purple-700 cursor-pointer text-sm sm:text-base">
              <i className="ri-arrow-left-line mr-2"></i>
              BACK TO CATALOGUE
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">{product.name}</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">{product.shortDescription}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div 
                className="w-full h-72 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer group relative"
                onClick={() => setSelectedProduct({ images: product.images, name: product.name })}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-4xl sm:text-5xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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