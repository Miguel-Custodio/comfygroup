import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import BlobBackground from '../../components/base/BlobBackground';

export default function Contact() {
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
              CONTACT US
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Have questions? We're here to help make your party planning easy!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {[
              {
                icon: 'ri-whatsapp-line',
                title: 'WHATSAPP',
                content: '+1 604-518-6863',
                link: 'https://wa.me/16045186863'
              },
              {
                icon: 'ri-mail-line',
                title: 'EMAIL',
                content: 'comfyplayrentals@gmail.com',
                link: 'mailto:comfyplayrentals@gmail.com'
              },
              {
                icon: 'ri-map-pin-line',
                title: 'ADDRESS',
                content: '15738 85th Ave, Surrey',
                link: 'https://maps.google.com/?q=15738+85th+Ave+Surrey'
              },
              {
                icon: 'ri-instagram-line',
                title: 'INSTAGRAM',
                content: '@comfyplayrentals',
                link: 'https://www.instagram.com/comfyplayrentals/'
              },
              {
                icon: 'ri-facebook-fill',
                title: 'FACEBOOK',
                content: 'Comfy Play Rentals',
                link: 'https://www.facebook.com/profile.php?id=61577642781403'
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6 sm:p-8 text-center hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${item.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
                <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 tracking-wide">{item.title}</h3>
                <p className="text-lg sm:text-xl text-gray-700 font-bold break-words">{item.content}</p>
              </motion.a>
            ))}
          </div>

          {/* Booking Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 sm:p-8 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 sm:gap-3">
              <i className="ri-facebook-fill text-3xl sm:text-4xl text-blue-600"></i>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">Book Through Facebook Messenger</h3>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-5 sm:mb-6">
              You can also schedule directly through our virtual assistant on Facebook Messenger.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61577642781403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-black text-base sm:text-lg tracking-wide hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer"
            >
              OPEN MESSENGER
            </a>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center tracking-tight px-4">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {[
                {
                  question: 'What are the payment methods?',
                  answer: 'Payment is made at the end of the event, and can be completed via cash or Interac e-Transfer.'
                },
                {
                  question: 'Do you deliver the inflatables?',
                  answer: 'Delivery is not included. The fee is calculated based on the distance from Surrey (15738 85th Ave).'
                },
                {
                  question: 'Do you set up the inflatables?',
                  answer: 'Setup is optional. Customers may install the inflatables themselves. If you prefer our team to handle setup, the fee is $20 for indoor setup and $30 for outdoor setup.'
                },
                {
                  question: 'Can I extend the rental time?',
                  answer: 'Yes. Additional rental time costs $10 per extra hour.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-5 sm:p-6"
                >
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-14 md:mt-16 text-center"
          >
            <p className="text-lg sm:text-xl text-gray-600 mb-5 sm:mb-6 px-4">Still have questions?</p>
            <a
              href="https://wa.me/16045186863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg tracking-wide hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}