import React from "react";
import header from "../assets/images/header-footer-info.webp";

export default function HeaderFooter() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 w-10/12 mx-auto pb-10 lg:py-24">
      <div className="lg:py-12 lg:space-y-12">
        <p className="text-5xl font-bold">Header & Footer builder</p>
        <p className="text-lg opacity-60">
          It’s very interesting that, Binox with impressive and awesome headers
          & footers. you can build as your choice using builder.
        </p>
        <button className="border border-black font-bold rounded-full py-2 px-6 hover:text-white hover:bg-black transition duration-700 ease-in-out">Purchase now</button>
      </div>
      <img src={header} alt="" />
    </div>
  );
}
