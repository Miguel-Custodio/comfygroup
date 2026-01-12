import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlobBackground from '../../components/base/BlobBackground';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <BlobBackground />
      <Navbar />
      
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 px-4">
              About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Comfy Play</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Creating unforgettable moments of joy and laughter for families across the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://static.readdy.ai/image/42ea4f69f7f6abb89f88992a6d7eca39/60f91aad751e4ea4491194ae84149f5e.png"
                alt="Children playing on inflatables"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 px-4 md:px-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our company was created from a simple idea: bring more joy and fun to family celebrations. What started as a passion for creating happy moments quickly became a trusted inflatable rental service. Over time, we grew by focusing on safety, quality, and reliable service. Today, we are proud to be part of unforgettable events and lasting memories.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-10 md:mb-12 px-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: 'ri-shield-check-line',
                  title: 'Safety First',
                  description: 'All our inflatables are regularly inspected, cleaned, and meet the highest safety standards to ensure worry-free fun.'
                },
                {
                  icon: 'ri-star-line',
                  title: 'Premium Quality',
                  description: 'We invest in top-tier commercial-grade inflatables that are durable, vibrant, and designed for maximum enjoyment.'
                },
                {
                  icon: 'ri-customer-service-2-line',
                  title: 'Excellent Service',
                  description: 'Our friendly team handles setup, delivery, and pickup with professionalism, making your event planning stress-free.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <i className={`${feature.icon} text-2xl sm:text-3xl text-white`}></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Commitment</h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8">
              At Comfy Play, we're more than just an inflatable rental company. We're part of your celebration, dedicated to creating moments that families will treasure forever. Every bounce, every slide, every laugh matters to us.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              {[
                { number: '180+', label: 'Events' },
                { number: '1', label: 'Year Experience' },
                { number: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-black mb-2">{stat.number}</div>
                  <div className="text-base sm:text-lg font-semibold opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
          >
            <div className="space-y-4 sm:space-y-6 px-4 md:px-0 order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our passionate team of event specialists is dedicated to making your celebration perfect. From helping you choose the right inflatable to ensuring timely delivery and setup, we're here every step of the way.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We take pride in our work and love seeing the joy on children's faces when they see their party come to life. Your happiness is our success!
              </p>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://static.readdy.ai/image/42ea4f69f7f6abb89f88992a6d7eca39/b99efddaf8ae1cf815ea18c241a78a28.png"
                alt="Our team"
                className="w-full h-64 sm:h-80 md:h-96 object-cover object-top rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
