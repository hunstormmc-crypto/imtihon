import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-8">Sahifa topilmadi</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Kechirasiz, siz qidirgan sahifa mavjud emas. Bosh sahifaga qaytib, boshqa sahifalarni ko'rib chiqing.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFound;