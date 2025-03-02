import React, { useEffect, useState } from "react";
import first from "../assets/images/gallery-s-1.webp";
import second from "../assets/images/gallery-s-2.webp";
import third from "../assets/images/gallery-s-3.webp";
import fourth from "../assets/images/gallery-s-5.webp";
import fifth from "../assets/images/gallery-s-4.png";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Exclusive from "../components/Exclusive";
import Extensive from "../components/Extensive";
import Elementor from "../components/Elementor";
import AnimationBuider from "../components/AnimationBuider";
import HeaderFooter from "../components/HeaderFooter";


export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  return (
    <div className="mx-0 my-0">
      <div className="bg-[#092837] py-8">
        {/* navbar section */}
        <Navbar/>

        {/* herosection */}
        <HeroSection/>

        {/* image section */}
        <div className="flex mt-20 lg:gap-2 relative">
          <img className={` w-24 lg:h-96 lg:w-44  transform transition-all duration-700 ease-out
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
          animate-slide-right`} src={first} alt="image1" />

          <div className="relative h-96 w-44 flex items-end">
            <img
              className={`absolute bottom-0 h-44 lg:w-44 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }
              animate-slide-right`}
              src={second}
              alt="image2"
            />
          </div>

          <img className="h-96 w-44 lg:w-6/12" src={third} alt="image3" />

          <div className="flex flex-col gap-10 items-center">
            <img className={`h-16 w-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
          animate-slide-left`} src={fifth} alt="image5" />
            <img className="h-72 lg:w-64" src={fourth} alt="image4" />
          </div>
        </div>
      </div>

      {/* second section */}
      <Exclusive/>
      {/* third section */}
      <Extensive/>
      <Elementor/>
      <AnimationBuider/>
      <HeaderFooter/>

       
    </div>
  );
}
