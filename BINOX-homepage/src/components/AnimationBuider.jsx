import React from "react";
import animation from "../assets/images/animation.gif";
import iconn from "../assets/images/icon-s-5.png";

export default function AnimationBuider() {
  const icon = [
    {
      id: 1,
      title: "Smooth Scrolling",
    },
    {
      id: 1,
      title: "Animate Anything including Text",
    },
    {
      id: 1,
      title: "Image Horizontal Scrolling",
    },
    {
      id: 1,
      title: "Pin Anything",
    },
    {
      id: 1,
      title: "Animate with Character, Words or line",
    },
  ];
  return (
    <div className="grid lg:grid-cols-2 gap-20 py-24 px-12">
      <div className="  p-4 rounded-md">
      <img className="border-[#DFF1BE] border-8 rounded-md" src={animation} alt=" thisisimage" />
      </div>

      <div className="space-y-8">

        <img src={iconn} alt="thiisicon" />
        <p className=" text-4xl lg:text-6xl font-bold">Animation Builder with GSAP</p>
        <p className="text-lg opacity-60">
          Elevate your website’s vitality with custom animations or dynamic
          pre-built ones to ensure a smooth and captivating user experience!
        </p>
        <div>
          {icon.map((each, index) => (
            <div className="flex items-center gap-1">
                <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
              color="currentColor"
            />
          </svg>
              <p className="text-lg">{each.title} </p>
            </div>
          ))}
          
        </div>
        <button className="border border-black py-2 px-6 rounded-full shadow-md hover:text-white hover:bg-black hover:shadow-2xl transition duration-700 ease-in-out ">Purchase now</button>
      </div>
    </div>
  );
}
