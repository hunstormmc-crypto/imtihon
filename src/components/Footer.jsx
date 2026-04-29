import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo/Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-black text-white">
              KinoUz
            </Link>
            <p className="text-gray-300 text-base mt-2">
              O'zbekistonning eng yaxshi kino platformasi
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Navigatsiya</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition text-base">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/all-movies" className="text-gray-300 hover:text-white transition text-base">
                  Barcha filmlar
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-white transition text-base">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kategoriyalar</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 text-base">Drama</span>
              </li>
              <li>
                <span className="text-gray-300 text-base">Komediya</span>
              </li>
              <li>
                <span className="text-gray-300 text-base">Fantastika</span>
              </li>
              <li>
                <span className="text-gray-300 text-base">Hujjatli</span>
              </li>
            </ul>
          </div>

          {/* Contact/Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Aloqa</h3>
            <div className="flex space-x-4">
              {/* Telegram */}
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-.873 0-1.682-.292-2.383-.844l2.06-2.06c.552-.552.844-1.361.844-2.234s-.292-1.682-.844-2.234c-.552-.552-1.361-.844-2.234-.844s-1.682.292-2.234.844l-2.06-2.06c.701-.552 1.51-.844 2.383-.844s1.682.292 2.383.844c.701.552 1.071 1.255 1.071 2.138s-.37 1.586-1.071 2.138l2.06 2.06c-.552.552-.844 1.361-.844 2.234s.292 1.682.844 2.234c.552.552 1.361.844 2.234.844s1.682-.292 2.234-.844c.552-.552.844-1.361.844-2.234s-.292-1.682-.844-2.234L16.167 16.988z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-base">
            © 2026 KinoUz. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white text-base transition">
              Maxfiylik siyosati
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-base transition">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;