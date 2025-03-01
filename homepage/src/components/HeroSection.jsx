
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className=" mt-20  text-center  flex flex-col items-center gap-10 text-white">
      <div
        className={`
          transform transition-all duration-700 ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
          animate-slide-up
        `}
      >
        <p className="text-white text-2xl lg:text-5xl lg:w-8/12 mx-auto font-semibold">
          Premium Business & consulting Elementor WordPress theme
        </p>
      </div>
      <p className={`lg:w-5/12 mx-auto  text-[#abafb0] transform transition-all duration-700 ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
          animate-slide-up`} >
        The most customizable WordPress theme with 12+ demos, 1000+ sections,
        100+ pages and enjoy smooth GSAP animations
      </p>
      <button className={`border-2 px-6 py-4 rounded-full transform transition-all duration-700 ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
          animate-slide-up`}>
        Purchase Binox now
      </button>
    </div>
  );
}
