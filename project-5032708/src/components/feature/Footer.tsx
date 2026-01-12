import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          <div className="sm:col-span-2 md:col-span-2 flex items-center justify-center sm:justify-start">
            <div className="w-full max-w-xs sm:max-w-sm h-48 sm:h-56 md:h-64">
              <img 
                src="https://static.readdy.ai/image/42ea4f69f7f6abb89f88992a6d7eca39/aacc623df09fb52c91d8ae2fb4c3d6f2.png" 
                alt="Comfy Play Logo" 
                className="w-full h-full object-contain object-center sm:object-left"
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black tracking-wide mb-3 sm:mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="text-white/90 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/90 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/catalogue" className="text-white/90 hover:text-white transition-colors text-sm">Inflatables</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-black tracking-wide mb-3 sm:mb-4">CONTACT US</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <i className="ri-whatsapp-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <a href="https://wa.me/16045186863" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors cursor-pointer break-words">+1 604-518-6863</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <i className="ri-mail-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <a href="mailto:comfyplayrentals@gmail.com" className="text-white/90 hover:text-white transition-colors cursor-pointer break-all">comfyplayrentals@gmail.com</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <i className="ri-map-pin-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <a href="https://www.google.com/maps/search/?api=1&query=15738+85th+Ave+Surrey" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors cursor-pointer break-words">15738 85th Ave, Surrey</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <i className="ri-instagram-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <a href="https://www.instagram.com/comfyplayrentals/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors cursor-pointer break-words">@comfyplayrentals</a>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <i className="ri-facebook-fill text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <a href="https://www.facebook.com/profile.php?id=61577642781403" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-colors cursor-pointer break-words">Comfy Play Rentals</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
          <p className="text-white/80 text-xs sm:text-sm text-center md:text-left px-4">
            © 2025 Comfy Play Inflatable Party Rentals. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?ref=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
