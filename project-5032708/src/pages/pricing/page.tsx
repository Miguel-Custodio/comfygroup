import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlobBackground from '../../components/base/BlobBackground';
import { pricingData, deliveryNote } from '../../mocks/pricing';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <BlobBackground variant="mixed" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              PRICING
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all our inflatables. No hidden fees, just fun!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {pricingData.map((item, index) => (
              <motion.div
                key={item.productId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">{item.productName}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                      <h3 className="text-sm font-black text-gray-700 mb-2 tracking-wide">WHOLE DAY</h3>
                      <p className="text-4xl font-black text-purple-600">${item.wholeDay}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                      <h3 className="text-sm font-black text-gray-700 mb-2 tracking-wide">3 HOURS RENTAL</h3>
                      <p className="text-4xl font-black text-blue-600">${item.threeHours}</p>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 text-center">
                      <h3 className="text-sm font-black text-gray-700 mb-2 tracking-wide">EACH ADDITIONAL HOUR</h3>
                      <p className="text-4xl font-black text-teal-600">${item.additionalHour}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-black text-gray-900 mb-4">SETUP OPTIONS</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                        <span className="font-bold text-gray-700 text-sm">Indoor Setup</span>
                        <span className="text-gray-900 font-black">Included</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                        <span className="font-bold text-gray-700 text-sm">Outdoor Setup</span>
                        <span className="text-gray-900 font-black">Included</span>
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                        <span className="font-bold text-gray-700 text-sm">Water Setup</span>
                        <span className="text-gray-900 font-black">
                          {item.waterSetup > 0 ? `+$${item.waterSetup}` : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Link
                      to={`/product/${item.productId}`}
                      className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-full font-bold text-center hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      VIEW DETAILS
                    </Link>
                    <Link
                      to="/book"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-4 rounded-full font-bold text-center hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
                    >
                      BOOK NOW
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-2xl text-gray-900"></i>
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2">IMPORTANT NOTE</h3>
                <p className="text-gray-700 leading-relaxed">{deliveryNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}