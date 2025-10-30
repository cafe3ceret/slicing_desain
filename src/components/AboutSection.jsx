import React from "react";
import aboutIcon from "../assets/images/about.png";
import chatIcon from "../assets/images/Vector.png"; 

function AboutSection() {
  return (
    <section
      id="about"
      className="py-10 md:py-20 bg-transparent flex justify-center items-center"
    >
      <div
        className="
          w-[90%] md:w-[1024px]
          h-auto md:h-[384px]
          bg-white rounded-[24px]
          shadow-[0_4px_12px_rgba(0,0,0,0.05),0_10px_40px_rgba(99,102,241,0.15)]
          hover:translate-y-[-4px] hover:shadow-[0_8px_45px_rgba(99,102,241,0.25)]
          p-6 md:p-14
          flex flex-col md:flex-row
          items-center
          gap-10
          transition-all duration-300
        "
      >

        {/* === AVATAR / ICON === */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <div
            className="
              w-[120px] h-[120px] md:w-[160px] md:h-[160px]
              rounded-full
              bg-gradient-to-tr from-[#BFDBFE] via-[#D8B4FE] to-[#FBCFE8]
              flex items-center justify-center
              shadow-[0_10px_30px_rgba(0,0,0,0.1)]
            "
          >
            <img
              src={aboutIcon}
              alt="About icon"
              className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-90"
            />
          </div>
        </div>

        {/* === TEKS TENTANG SAYA === */}
        <div className="flex flex-col gap-5 text-center md:text-left text-[15px] md:text-[16px] font-[Poppins] leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Tentang Saya
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
            Saya adalah seorang <b>UI/UX Designer & Web Developer</b> yang
            berdomisili di Jakarta dengan pengalaman lebih dari 5 tahun di
            industri kreatif. Passion saya adalah menciptakan solusi digital
            yang tidak hanya indah secara visual, tapi juga mudah digunakan dan
            berdampak positif bagi pengguna.
          </p>

          {/* === LIST SKILL === */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 md:gap-x-6 gap-y-3 font-medium text-gray-700">
            {[
              "Problem Solver",
              "Team Player",
              "Fast Learner",
              "Kreatif & Adaptif",
            ].map((skill, index) => (
              <span key={index} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#60A5FA"
                  className="w-[18px] h-[20px] md:w-[28px] md:h-[32px] relative top-[1px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7.07 7.07a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415l2.293 2.293 6.363-6.363a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {skill}
              </span>
            ))}
          </div>

          {/* === BUTTON === */}
          <div className="mt-6 flex justify-center md:justify-start">
            <button
              className="
                flex items-center justify-start gap-3
                w-full md:w-[740px]
                h-[44px] md:h-[40px]
                bg-gradient-to-r from-[#2563EB] to-[#8B5CF6]
                text-white font-semibold rounded-[8px]
                shadow-[0_6px_16px_rgba(99,102,241,0.25)]
                hover:opacity-90 transition-all pl-5
              "
            >
              <img
                src={chatIcon}
                alt="Chat Icon"
                className="w-[20px] h-[20px] object-contain"
              />
              <span className="text-left text-[16px]">Konsultasi Gratis</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
