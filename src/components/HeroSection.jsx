import React from "react";
import profile from "../assets/images/profile.jpg";
import circleLeft from "../assets/images/circle-left.png";
import circleRight from "../assets/images/circle-right.png";
import span1 from "../assets/images/span (1).png"; // 💡
import span2 from "../assets/images/span (2).png"; // 🚀

function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24 bg-gradient-to-r from-[#BFDBFE] via-[#F3E8FF] to-[#FCE7F3] overflow-visible">
      
      {/* === LINGKARAN BACKGROUND === */}
      <img
        src={circleLeft}
        alt="circle left"
        className="absolute left-[40px] top-[40px] w-[240px] h-[240px] object-contain opacity-90 select-none pointer-events-none z-0"
      />
      <img
        src={circleRight}
        alt="circle right"
        className="absolute right-[40px] bottom-[40px] w-[320px] h-[320px] object-contain opacity-90 select-none pointer-events-none z-0"
      />

      {/* === TEKS === */}
      <div className="flex-1 text-center md:text-left z-10 md:pr-0">
        <div className="md:ml-10">
          <p className="text-sm text-gray-500 mb-2">Hi, I’m</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Aditya Arief Darmawan
          </h1>

          <div className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
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

      {/* === FOTO PROFIL + IKON === */}
        <div className="flex-1 relative flex justify-center items-center mt-12 md:mt-0 md:-ml-16 z-10">
          {/* FRAME FOTO */}
          <div className="relative w-[288px] h-[288px] rounded-2xl overflow-hidden border-[6px] border-white shadow-md">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl"
            />

           {/* ikon 💡 */}
            <img
              src={span1}
              className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/5 w-[70px] h-[70px]"
            />

            {/* ikon 🚀 */}
            <img
              src={span2}
              className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[80px] h-[80px]"
            />
          </div>
        </div>

    </section>
  );
}

export default HeroSection;
