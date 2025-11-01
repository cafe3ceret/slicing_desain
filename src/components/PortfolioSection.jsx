import React from "react";
import project1 from "../assets/images/finance.png";
import project2 from "../assets/images/web.png";
import project3 from "../assets/images/dashboard.png";

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
    <section id="portfolio" className="py-20 bg-gray-50 flex justify-center">
      <div className="max-w-7xl px-6 text-center">
        {/* === TITLE === */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Portfolio Pilihan
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal
          maupun internasional.
        </p>

        {/* === GRID CARD === */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white w-[346px] h-[420px] rounded-[16px]
                         shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                         transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* === GAMBAR === */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* === TEKS === */}
              <div className="p-6 text-left flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

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
