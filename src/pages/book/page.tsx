import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlobBackground from '../../components/base/BlobBackground';
import { products } from '../../mocks/products';

export default function Book() {
  const [formData, setFormData] = useState({
    model: '',
    date: '',
    startTime: '',
    endTime: '',
    address: '',
    setupType: 'outdoor',
    waterNeeded: 'no',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new URLSearchParams();
      
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4vv092mtigcascn5qd0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          model: '',
          date: '',
          startTime: '',
          endTime: '',
          address: '',
          setupType: 'outdoor',
          waterNeeded: 'no',
          name: '',
          email: '',
          phone: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              GET A QUOTE
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Fill out the form below and we'll get back to you with a custom quote
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12"
          >
            <form id="booking-form" onSubmit={handleSubmit} data-readdy-form>
              <div className="space-y-5 sm:space-y-6">
                {/* Model Selection */}
                <div>
                  <label htmlFor="model" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                    SELECT INFLATABLE *
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                  >
                    <option value="">Choose an inflatable...</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.name}>
                        {product.name} - From ${product.priceFrom}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                    EVENT DATE *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                  />
                </div>

                {/* Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="startTime" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                      START TIME *
                    </label>
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="endTime" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                      END TIME *
                    </label>
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                    EVENT ADDRESS *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    maxLength={500}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium resize-none text-sm sm:text-base"
                    placeholder="Enter full address including city and zip code"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.address.length}/500 characters</p>
                </div>

                {/* Setup Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="setupType" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                      SETUP TYPE *
                    </label>
                    <select
                      id="setupType"
                      name="setupType"
                      value={formData.setupType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                    >
                      <option value="indoor">Indoor</option>
                      <option value="outdoor">Outdoor</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="waterNeeded" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                      WATER NEEDED? *
                    </label>
                    <select
                      id="waterNeeded"
                      name="waterNeeded"
                      value={formData.waterNeeded}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t-2 border-gray-200 pt-5 sm:pt-6 mt-5 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-5 sm:mb-6 tracking-tight">CONTACT INFORMATION</h3>
                  
                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-black text-gray-900 mb-2 tracking-wide">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-gray-900 font-medium text-sm sm:text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg tracking-wide hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT BOOKING REQUEST'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                    <p className="text-green-800 font-bold text-sm sm:text-base">
                      Thank you! We've received your booking request and will contact you shortly.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                    <p className="text-red-800 font-bold text-sm sm:text-base">
                      Oops! Something went wrong. Please try again or call us directly.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Prefer to talk? Give us a call!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-900">
              <a href="tel:6045186863" className="flex items-center space-x-2 font-bold hover:text-purple-600 transition-colors cursor-pointer text-sm sm:text-base">
                <i className="ri-phone-line text-lg sm:text-xl"></i>
                <span>604-518-6863</span>
              </a>
              <a href="mailto:comfyplayrentals@gmail.com" className="flex items-center space-x-2 font-bold hover:text-purple-600 transition-colors cursor-pointer text-sm sm:text-base break-all">
                <i className="ri-mail-line text-lg sm:text-xl"></i>
                <span>comfyplayrentals@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}