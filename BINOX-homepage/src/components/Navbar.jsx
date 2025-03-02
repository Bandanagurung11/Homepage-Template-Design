import React from "react";
import logo from "../assets/images/logo-2.png";
import cart from "../assets/images/cart.png";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 lg:px-16">
      <img className="color-white" src={logo} alt="logo-image" />

      <div className=" hidden lg:flex gap-10 text-[#abafb0]">
        <div className="flex items-center">
          <p className=" hover:text-white cursor-pointer">Home</p>
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
              stroke-width="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <p className=" hover:text-white cursor-pointer"> Pages </p>

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
              stroke-width="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <p className=" hover:text-white cursor-pointer">Blogs</p>
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
              stroke-width="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <p className=" hover:text-white cursor-pointer">Features </p>
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
              stroke-width="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <p className=" hover:text-white cursor-pointer">Help </p>
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
              stroke-width="2"
              d="m6 9l6 6l6-6"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4 h-12 w-30 p-4 rounded-full bg-[#8ff2ff] hover:cursor-pointer  hover:bg-neutral-300">
        <img src={cart} alt="cart-image" />
        <p> Buy now</p>
      </div>
    </div>
  );
}
