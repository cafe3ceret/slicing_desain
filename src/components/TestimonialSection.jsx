import React from "react";
import profile1 from "../assets/images/nadia.jfif";
import profile2 from "../assets/images/lanang.jpg";

// Data Testimoni
const testimonials = [
  {
    id: 1,
    name: "Citra Nadya",
    role: "Product Manager, Fintech",
    text: "Adit mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!",
    image: profile1,
  },
  {
    id: 2,
    name: "Rama Putra",
    role: "CEO, EduStartup",
    text: "Kreativitas & kecepatan kerja Adit luar biasa. Landing page yang dibuat sangat modern & efektif meningkatkan konversi produk kami.",
    image: profile2,
  },
];

function TestimonialSection() {
  return (
    <section id="testimonial" className="py-20 bg-gray-50 flex justify-center">
      <div className="max-w-6xl w-full px-6">
        {/* === TITLE === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimoni Klien
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Apa kata mereka yang pernah bekerja sama dengan saya.
          </p>
        </div>

        {/* === GRID CARD === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[472px] h-[244px] rounded-[16px]
                         shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                         transition-all duration-300 border border-gray-100 p-6 flex flex-col justify-between"
            >
              {/* === PROFILE HEADER === */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[56px] h-[56px] rounded-full object-cover border-[3px] border-[#E5E7EB]"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-[16px]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* === TESTIMONIAL TEXT === */}
              <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
