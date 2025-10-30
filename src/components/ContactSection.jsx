import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-gray-50 relative overflow-visible">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* === KOTAK UTAMA KOLABORASI === */}
        <div className="relative bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-14 md:p-20 flex flex-col md:flex-row gap-14 items-stretch overflow-visible">
          
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
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-md">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="font-medium">arie@email.com</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white shadow-md">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
                <span className="font-medium">0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white shadow-md">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className="font-medium">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* === KANAN: FORM PESAN LEBAR === */}
          <div className="flex-[1.5] relative flex items-center justify-center">
            <div
              className="absolute top-[-70px] right-[-250px] w-[165%] bg-white rounded-[40px] p-16 md:p-20 border-[4px] border-purple-200 shadow-[0_30px_120px_rgba(0,0,0,0.18)] hover:shadow-[0_35px_140px_rgba(0,0,0,0.22)] transition-all duration-500 z-20"
            >
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <input
                    type="text"
                    placeholder="Nama"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-lg"
                  />
                </div>

                <textarea
                  placeholder="Pesan"
                  rows="7"
                  className="w-full px-6 py-5 rounded-xl border-2 border-gray-300 text-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition resize-none text-lg"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-5 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 transition flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(99,102,241,0.35)]"
                >
                  Kirim Pesan <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
