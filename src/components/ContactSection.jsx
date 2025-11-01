import React from "react";
import emailIcon from "../assets/images/Frame (4).png";
import waIcon from "../assets/images/Frame (5).png";
import locationIcon from "../assets/images/Frame (6).png";

function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-gray-50 relative overflow-visible pb-32">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* === KOTAK UTAMA KOLABORASI === */}
        <div className="relative w-[896px] h-[640px] mx-auto rounded-[24px] p-[2px] 
                        bg-gradient-to-r from-[#DBEAFE] via-[#FFFFFF] to-[#F3E8FF] shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
          
          {/* Lapisan isi di dalam border */}
          <div className="rounded-[22px] p-14 md:p-20 flex flex-col md:flex-row gap-14 items-stretch overflow-visible">
            
            {/* === KIRI: Info Kolaborasi === */}
            <div className="flex-[1.1] flex flex-col justify-center z-10 pr-8">
              <h2 className="text-[30px] md:text-[38px] font-extrabold text-gray-900 mb-6 leading-tight">
                Tertarik Kolaborasi?
              </h2>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Yuk, diskusikan project impianmu!  
                Saya siap membantu menciptakan produk digital yang{" "}
                <span className="font-semibold text-purple-700">
                  impactful, modern, dan user-friendly
                </span>{" "}
                untuk bisnismu.
              </p>

              <ul className="space-y-6 text-base md:text-lg text-gray-900">
                <li className="flex items-center gap-4">
                  <img src={emailIcon} alt="Email" className="w-5 h-5" />
                  <span className="font-medium">cafeceret3@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <img src={waIcon} alt="WhatsApp" className="w-5 h-6" />
                  <span className="font-medium">0813-2630-6712</span>
                </li>
                <li className="flex items-center gap-4">
                  <img src={locationIcon} alt="Location" className="w-4 h-5" />
                  <span className="font-medium">Surakarta, Indonesia</span>
                </li>
              </ul>
            </div>

            {/* === KANAN: FORM PESAN === */}
            <div className="flex-[1.5] relative flex items-center justify-center">
              <div
                className="relative bg-white rounded-[16px] p-10 
                          border-[2px] border-purple-200 
                          shadow-[0_20px_80px_rgba(0,0,0,0.12)] 
                          transition-all duration-500 z-20 
                          w-[800px] h-[340px]"
              >
                <form className="space-y-5">
                  <div className="flex justify-between w-[714px] mx-auto gap-[16px]">
                    <input
                      type="text"
                      placeholder="Nama"
                      className="w-[349px] h-[50px] px-4 rounded-[8px] border border-gray-300 text-gray-700 
                                focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none 
                                transition text-base"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-[349px] h-[50px] px-4 rounded-[8px] border border-gray-300 text-gray-700 
                                focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none 
                                transition text-base"
                    />
                  </div>

                  <textarea
                    placeholder="Pesan"
                    rows="4"
                    className="block w-[714px] mx-auto px-5 py-4 rounded-[8px] border border-gray-300 text-gray-700 
                              focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none 
                              transition resize-none text-base"
                  ></textarea>
                </form>
              </div>

              <button
                type="submit"
                className="absolute bottom-[100px] left-1/2 -translate-x-1/2 
                          w-[714px] h-[50px] text-white text-sm font-semibold rounded-[12px] 
                          bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 
                          transition flex items-center justify-center gap-2 
                          shadow-[0_6px_20px_rgba(99,102,241,0.35)] 
                          z-30"
              >
                Kirim Pesan <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
