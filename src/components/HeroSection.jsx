import React from "react";
import profile from "../assets/images/profile.jpg";
import circleLeft from "../assets/images/circle-left.png";
import circleRight from "../assets/images/circle-right.png";

function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 bg-gradient-to-r from-[#BFDBFE] via-[#F3E8FF] to-[#FCE7F3] overflow-visible">
      
      {/* === LINGKARAN GAMBAR KIRI === */}
      <img
        src={circleLeft}
        alt="circle left"
        className="absolute left-[40px] top-[40px] w-[240px] h-[240px] object-contain opacity-90 select-none pointer-events-none z-0"
      />

      {/* === LINGKARAN GAMBAR KANAN === */}
      <img
        src={circleRight}
        alt="circle right"
        className="absolute right-[40px] bottom-[40px] w-[320px] h-[320px] object-contain opacity-90 select-none pointer-events-none z-0"
      />


      {/* === TEKS UTAMA === */}
      <div className="flex-1 text-center md:text-left z-10 md:pr-0">
        <div className="md:ml-10"> {/* Geser isi teks saja */}
          <p className="text-sm text-gray-500 mb-2">Hi, I’m</p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Aditya Arief Darmawan
          </h1>

          <div className="inline-block bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
            UI/UX Designer & Web Developer
          </div>

          <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
            Membantu brand dan bisnis membangun produk digital yang impactful
            lewat desain yang kreatif, modern, dan user-centric.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#1E40AF] transition-all duration-200">
              Lihat Karya
            </button>
            <button className="border border-[#2563EB] text-[#2563EB] px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>


      {/* === FOTO PROFIL === */}
      <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0 md:-ml-16 z-10">
        <div className="relative w-[288px] h-[288px] rounded-2xl overflow-hidden border-[6px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* ICON 💡 */}
          <div className="absolute -top-5 -left-5 w-12 h-12 bg-white rounded-[14px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center z-20">
            <i className="fa-solid fa-lightbulb text-blue-500 text-xl"></i>
          </div>

          {/* ICON 🚀 */}
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.2)] z-20">
            <i className="fa-solid fa-rocket text-white text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
