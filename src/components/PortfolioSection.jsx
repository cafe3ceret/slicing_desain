import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";

const projects = [
  {
    id: 1,
    title: "GoFinance App",
    category: "Mobile App",
    description:
      "Aplikasi manajemen keuangan dengan desain yang clean, modern, dan mudah digunakan.",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    title: "EduSmart Landing Page",
    category: "Website",
    description:
      "Landing page untuk platform pendidikan fokus pada visual storytelling & UX.",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "DataHub Dashboard",
    category: "Dashboard",
    description:
      "Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging.",
    image: project3,
    link: "#",
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Portfolio Pilihan
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal
          maupun internasional.
        </p>

        {/* Grid 3 kolom */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gambar + Label */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Konten */}
              <div className="p-6 text-left">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline"
                >
                  Lihat Detail
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
