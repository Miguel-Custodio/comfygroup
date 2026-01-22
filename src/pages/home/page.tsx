import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlobBackground from '../../components/base/BlobBackground';
import ImageModal from '../../components/base/ImageModal';
import { products } from '../../mocks/products';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; name: string } | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      name: "Hiranya",
      text: "Comfy Play is very responsive and very reasonable with the pricing. Kids enjoyed well in the bday party throughout the whole time so it's really worth to have this bouncy castle. Thank you and keep up the great service.",
      rating: 5
    },
    {
      name: "Amira",
      text: "Very happy with their service! Kids loved it – will definitely be booking again in the future!",
      rating: 5
    },
    {
      name: "Guanqun",
      text: "Great, thank you! Really nice experience. We will definitely come back again!",
      rating: 5
    },
    {
      name: "Alyzza",
      text: "You guys are amazing! You made my son's birthday extra special! Thank you so much! See you again soon!",
      rating: 5
    },
    {
      name: "Janiel",
      text: "The bouncy castle is lovely! Kids enjoy playing on it. Thank you again! Feel free to post my comment, I'll give you an excellent review on Facebook Marketplace. If any of my friends need a bouncy, I would highly recommend you!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <BlobBackground variant="hero" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
              READY TO MAKE<br />YOUR PARTY<br />UNFORGETTABLE?
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Welcome to Comfy Play! We bring the fun to your doorstep with premium inflatable rentals. 
              Safe, clean, and professionally delivered for birthdays, events, and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <BlobBackground variant="section" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight px-4">
              GET READY TO<br />BOUNCE INTO FUN!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Our inflatables are ideal for any event, adding joy and excitement to gatherings like birthday parties or neighborhood get-togethers. Join us for a fun-filled experience!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: 'ri-search-line',
                title: 'CHOOSE YOUR INFLATABLE',
                description: 'Browse our collection of premium inflatables and select the perfect one for your event',
                link: '/catalogue'
              },
              {
                icon: 'ri-calendar-check-line',
                title: 'BOOK DATE & TIME',
                description: 'Pick your date, time, and location. We handle delivery and setup for you',
                link: 'https://www.facebook.com/profile.php?id=61577642781403'
              },
              {
                icon: 'ri-checkbox-circle-line',
                title: 'ENJOY THE PARTY',
                description: 'We arrive on time, set everything up, and pick it up when you\'re done. Easy!',
                link: null
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-shadow"
              >
                {step.link ? (
                  step.link.startsWith('http') ? (
                    <a href={step.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                        <i className={`${step.icon} text-2xl sm:text-3xl text-white`}></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
                    </a>
                  ) : (
                    <Link to={step.link} className="block cursor-pointer">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                        <i className={`${step.icon} text-2xl sm:text-3xl text-white`}></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
                    </Link>
                  )
                ) : (
                  <>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                      <i className={`${step.icon} text-2xl sm:text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{step.description}</p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Inflatables */}
      <section className="py-12 sm:py-16 md:py-24 bg-white relative">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight px-4">
              FEATURED INFLATABLES
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Our most popular party attractions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-product-shop>
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div 
                  className="relative w-full h-64 sm:h-72 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ url: product.image, name: product.name })}
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
                    {product.features.slice(0, 3).map((feature, idx) => (
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
                      className="w-full bg-gray-900 text-white px-4 py-3 rounded-full font-bold text-xs sm:text-sm text-center hover:bg-gray-800 transition-all whitespace-nowrap cursor-pointer"
                    >
                      BOOK NOW
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/catalogue"
              className="inline-block bg-gray-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg tracking-wide hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              VIEW ALL INFLATABLES
            </Link>
          </div>
        </div>
      </section>

      {/* Why ComfyPlay */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <BlobBackground variant="section" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight px-4">
              WHY COMFY PLAY?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">The difference is in the details</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: 'ri-shield-check-line',
                title: 'SAFETY FIRST',
                description: 'All our inflatables meet strict safety standards and are regularly inspected for your peace of mind'
              },
              {
                icon: 'ri-sparkling-line',
                title: 'PROFESSIONALLY CLEANED',
                description: 'Every inflatable is thoroughly sanitized and cleaned before and after each rental'
              },
              {
                icon: 'ri-time-line',
                title: 'ON-TIME DELIVERY',
                description: 'We arrive when we say we will. Professional setup and pickup included with every rental'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center px-4"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className={`${item.icon} text-3xl sm:text-4xl text-white`}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 tracking-tight">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight px-4">
              WHAT OUR CUSTOMERS<br />ARE SAYING
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">Real experiences from real families</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-12 md:px-16">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#A8D5E6] via-[#B8E6D5] to-[#9BC4E8] rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
                  {/* Comfy Play Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                      <i className="ri-emotion-happy-line text-3xl sm:text-4xl text-gray-900"></i>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-xl sm:text-2xl text-yellow-400"></i>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 text-center mb-6 sm:mb-8 leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  {/* Customer Name */}
                  <p className="text-center text-base sm:text-lg font-black text-gray-900 tracking-tight">
                    {testimonials[currentTestimonial].name}
                    <span className="block text-xs sm:text-sm font-bold text-gray-700 mt-1">Comfy Play Customer</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 sm:left-0 md:-left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer z-10"
              aria-label="Previous testimonial"
            >
              <i className="ri-arrow-left-s-line text-xl sm:text-2xl"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 sm:right-0 md:-right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer z-10"
              aria-label="Next testimonial"
            >
              <i className="ri-arrow-right-s-line text-xl sm:text-2xl"></i>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all cursor-pointer ${
                    index === currentTestimonial
                      ? 'bg-gray-900 w-6 sm:w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <BlobBackground variant="footer" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">
              LET'S HEAR<br />FROM YOU
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed px-4">
              Get your free quote today and let's make your next party the best one yet!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577642781403"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg tracking-wide hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer"
              >
                BOOK NOW
              </a>
              <a
                href="https://wa.me/16045186863"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-900 text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg tracking-wide hover:bg-gray-900 hover:text-white transition-all whitespace-nowrap cursor-pointer"
              >
                CALL US NOW
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-gray-900 px-4">
              <div className="px-2">
                <h3 className="text-base sm:text-lg font-black mb-2 tracking-tight">Mobile Number</h3>
                <p className="text-base sm:text-lg md:text-xl font-bold">+1 604-518-6863</p>
              </div>
              <div className="px-2">
                <h3 className="text-base sm:text-lg font-black mb-2 tracking-tight">E-mail Address</h3>
                <p className="text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">comfyplayrentals@gmail.com</p>
              </div>
              <div className="px-2">
                <h3 className="text-base sm:text-lg font-black mb-2 tracking-tight">Office Address</h3>
                <p className="text-base sm:text-lg md:text-xl font-bold">15738 85th Ave, Surrey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <ImageModal
        isOpen={selectedImage !== null}
        imageUrl={selectedImage?.url || ''}
        imageName={selectedImage?.name || ''}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}