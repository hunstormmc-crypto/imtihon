import React, { useState, useEffect } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: img1,
      title: "Avatar:Olov va kul",
      description: "Dramatik va qiziqarli voqealar",
    },
    {
      image: img2,
      title: "Capitan america:Yangi dunyo",
      description: " Dramatik va qiziqarli voqealar.",
    },
    {
      image: img3,
      title: "Minecraft:Offical movie",
      description: " Yangi sarguzashtlar sizni kutmoqda.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];

  return (
    // Konteyner balandligini h-screen qildik, lekin overflow-hidden bilan rasmni jilovladik
    <div className="relative w-full h-[600px] md:h-[80vh] lg:h-screen overflow-hidden bg-black">
      
      {/* IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full">
        <img
          key={currentIndex} // Rasm almashganda silliq chiqishi uchun key muhim
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* GRADIENT OVERLAYS (ITV uslubidagi qoraytirish) */}
      {/* 1. Chapdan o'ngga qoraytirish (tekst uchun) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      
      {/* 2. Pastdan tepaga qoraytirish (saytning davomi bilan ulanishi uchun) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white z-10">
        <div className="max-w-2xl animate-fadeIn">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-gray-400 font-bold mb-2">
            KinoUz premier 
          </p>

          <h2 className="text-4xl md:text-7xl font-black mb-4 leading-tight">
            {slide.title}
          </h2>

          <p className="text-gray-300 text-sm md:text-lg mb-8 line-clamp-3">
            {slide.description}
          </p>

          <div className="flex items-center gap-4">
            <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 active:scale-95">
              Tomosha qilish
            </button>
            <button className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* DOTS (Indikatorlar) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 bg-green-500" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition group"
      >
        <span className="text-4xl font-light group-hover:scale-125 block">‹</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition group"
      >
        <span className="text-4xl font-light group-hover:scale-125 block">›</span>
      </button>

    </div>
  );
};

export default Carousel;