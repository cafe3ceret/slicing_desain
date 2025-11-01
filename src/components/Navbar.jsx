import React, { useState } from "react";
import logo from "../assets/images/profile.jpg"; // Avatar / foto profil
import instagramIcon from "../assets/images/Frame (2).png"; // Ikon Instagram
import linkedinIcon from "../assets/images/Frame (3).png"; // Ikon LinkedIn

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* === LEFT: Logo + Brand === */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow"
          />
          <span className="text-[15px] md:text-base font-semibold text-gray-800 tracking-tight">
            Aditya Arief Darmawan
          </span>
        </a>

        {/* === CENTER: NAV LINKS (Desktop) === */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <li><a href="#about" className="hover:text-gray-900">About</a></li>
          <li><a href="#skills" className="hover:text-gray-900">Skills</a></li>
          <li><a href="#portfolio" className="hover:text-gray-900">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
        </ul>

        {/* === RIGHT: SOCIAL ICONS (pakai gambar) === */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-[18px] h-[18px] object-contain"
            />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-[18px] h-[18px] object-contain"
            />
          </a>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* === MOBILE DRAWER === */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="max-w-6xl mx-auto px-6 py-4 space-y-3 text-sm">
            <li><a href="#about" className="block py-1">About</a></li>
            <li><a href="#skills" className="block py-1">Skills</a></li>
            <li><a href="#portfolio" className="block py-1">Portfolio</a></li>
            <li><a href="#contact" className="block py-1">Contact</a></li>

            {/* === SOCIAL ICONS di Mobile === */}
            <li className="pt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-lg border border-gray-200"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-[18px] h-[18px] object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-lg border border-gray-200"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-[18px] h-[18px] object-contain"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
