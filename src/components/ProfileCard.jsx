import React from "react";
import profile from "../assets/images/profile.jpg"; // ganti dengan foto kamu

function ProfileCard() {
  return (
    <section
      id="profile"
      className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 max-w-md mx-auto border border-gray-100"
    >
      {/* Profile Image */}
      <img
        src={profile}
        alt="Profile"
        className="w-36 h-36 object-cover rounded-full mb-5 border-4 border-blue-500 shadow-sm"
      />

      {/* Name */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Arie Pratama
      </h2>

      {/* Role */}
      <p className="text-gray-500 text-sm md:text-base mt-1 mb-4">
        Frontend Developer | UI/UX Enthusiast
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        Seorang pengembang antarmuka dengan passion terhadap desain modern,
        animasi interaktif, dan pengalaman pengguna yang menyenangkan.
      </p>

      {/* Contact Button */}
      <a
        href="#contact"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
      >
        Hubungi Saya
      </a>
    </section>
  );
}

export default ProfileCard;
