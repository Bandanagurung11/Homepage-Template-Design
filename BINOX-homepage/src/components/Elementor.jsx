import React from "react";
import customize from "../assets/images/customize-info.webp";
import icon from "../assets/images/icon-s-4.png";

export default function Elementor() {
  return (
    <div className=" py-12 w-10/12 mx-auto grid lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <img src={icon} alt="" />

        <p className="text-4xl font-bold">Fully customizable with Elementor</p>
        <p className="opacity-60 text-lg">
          Start working with Elementor, everything will feel familiar and
          intuitive. It’s free to use.
        </p>
        <div className="flex gap-12">
          <div>
            <div className="flex gap-1 items-center">
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
              <p className="text-lg">Drag and Drop Editor</p>
            </div>
            <div className="flex gap-1 items-center">
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
              <p  className="text-lg">No coding required</p>
            </div>
            <div className="flex gap-1 items-center">
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
              <p  className="text-lg">Free & Pro Widgets</p>
            </div>
            <div className="flex gap-1 items-center">
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
              <p  className="text-lg">100% Free</p>
            </div>
          </div>

          <div>
          <div className="flex gap-1 items-center">
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
              <p  className="text-lg">Motion Effects</p>
            </div>
            <div className="flex gap-1 items-center">
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
              <p  className="text-lg">Blazing Fast Loading Speed</p>
            </div>
            <div className="flex gap-1 items-center">
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
              <p  className="text-lg">Easy to Customize</p>
            </div>
            <div className="flex gap-1 items-center">
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
              <p  className="text-lg">Custom CSS</p>
            </div>
          </div>
        </div>

        <button className="py-2 px-4 border font-bold border-black hover:text-white hover:bg-black cursor-pointer transition duration-700 ease-in-out rounded-full shadow-md">Purchase now</button>
      </div>

      <img src={customize} alt="thisisimage" />
    </div>
  );
}
