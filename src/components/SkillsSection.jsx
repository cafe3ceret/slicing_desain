import React from "react";

// Contoh data skill (bisa kamu ganti sesuai keahlianmu)
const skills = [
  {
    name: "UI/UX Design",
    icon: "🎨",
  },
  {
    name: "Web Development",
    icon: "💻",
  },
  {
    name: "Branding",
    icon: "✨",
  },
  {
    name: "Illustration",
    icon: "✏️",
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Keahlian yang saya kuasai dalam mendesain dan membangun produk digital.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition rounded-xl py-8 px-5 text-center"
          >
            <div className="text-3xl mb-4">{skill.icon}</div>
            <h3 className="font-semibold text-gray-800">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
