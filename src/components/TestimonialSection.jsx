import React from "react";
import profile1 from "../assets/images/profile.jpg"; // ganti sesuai gambar testimoni
import profile2 from "../assets/images/profile.jpg";
import profile3 from "../assets/images/profile.jpg";

// Data Testimoni
const testimonials = [
  {
    id: 1,
    name: "Rizky Putra",
    role: "Owner – CoffeeSpace",
    text: "Adit sangat profesional dan komunikatif. Desain website yang dibuat sangat modern dan meningkatkan citra brand bisnis saya.",
    image: profile1,
  },
  {
    id: 2,
    name: "Salsa Dewi",
    role: "Founder – Kenz UI",
    text: "Kualitas UI yang detail dan user friendly. Setiap elemen diperhatikan dengan matang dan sesuai dengan kebutuhan user.",
    image: profile2,
  },
  {
    id: 3,
    name: "Andi Saputra",
    role: "CEO – DigitalHive",
    text: "Bekerja dengan Adit sangat menyenangkan! Hasil cepat, responsif, dan selalu memberikan ide-ide kreatif.",
    image: profile3,
  },
];

function TestimonialSection() {
  return (
    <section id="testimonial" className="max-w-6xl mx-auto px-6">
      
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimoni
        </h2>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Beberapa review dari klien yang pernah bekerja sama dengan saya.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 p-6"
          >
            {/* Profile & Name */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-200"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Text */}
            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
