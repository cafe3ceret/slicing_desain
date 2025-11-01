import React from "react";
import profile from "../assets/images/profile.jpg";
import instagramIcon from "../assets/images/Frame (2).png"; // ikon Instagram
import linkedinIcon from "../assets/images/Frame (3).png"; // ikon LinkedIn

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* === LEFT: PROFILE + NAME === */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-pink-300"
          />
          <span className="font-semibold text-gray-800 text-[15px]">
            Aditya Arief Darmawan
          </span>
        </div>

        {/* === CENTER: NAVIGATION === */}
        <nav className="flex items-center gap-8 text-gray-500 text-sm">
          <a href="#about" className="hover:text-gray-800 transition">
            About
          </a>
          <a href="#skills" className="hover:text-gray-800 transition">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-gray-800 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-gray-800 transition">
            Contact
          </a>
        </nav>

        {/* === RIGHT: SOCIAL ICONS (pakai gambar) === */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-[20px] h-[20px] object-contain"
            />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-[20px] h-[20px] object-contain"
            />
          </a>
        </div>
      </div>

      {/* === COPYRIGHT TEXT === */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Aditya Arief Darmawan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
