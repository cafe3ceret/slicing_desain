import React from "react";
import figmaIcon from "../assets/images/figma.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import htmlIcon from "../assets/images/html.png";

const skills = [
  {
    icon: figmaIcon,
    name: "Figma",
    desc: "UI Design, Prototyping",
    color: "bg-[#DBEAFE]",
  },
  {
    icon: jsIcon,
    name: "JavaScript",
    desc: "Front-End Development",
    color: "bg-[#FEF9C3]",
  },
  {
    icon: reactIcon,
    name: "React",
    desc: "Web Apps & SPA",
    color: "bg-[#EDE9FE]",
  },
  {
    icon: htmlIcon,
    name: "HTML & CSS",
    desc: "Responsive Design",
    color: "bg-[#FCE7F3]",
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50 flex justify-center">
      <div className="w-[1104px] px-4">
        {/* === TITLE === */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Keahlian
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
          </p>
        </div>

        {/* === GRID CARD === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] 
                         hover:shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-300
                         w-[260px] h-[220px] flex flex-col items-center justify-center gap-4 hover:-translate-y-1"
            >
              {/* ICON */}
              <div
                className={`w-[90px] h-[90px] ${skill.color} rounded-full flex items-center justify-center`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-[62px] h-[62px] object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="text-center">
                <h3 className="text-gray-900 font-semibold text-lg mb-1">
                  {skill.name}
                </h3>
                <p className="text-gray-500 text-sm">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
