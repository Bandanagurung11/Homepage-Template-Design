import React from "react";
import agencey from "../assets/images/agencey.webp";
import bank from "../assets/images/bank.webp";
import business from "../assets/images/business.webp";
import corporate from "../assets/images/corporate.webp";
import financial from "../assets/images/financial.webp";
import human from "../assets/images/human.webp";
import insurance from "../assets/images/insurence.webp";
import it from "../assets/images/it.webp";
import management from "../assets/images/management.webp";
import marketing from "../assets/images/marketing.webp";
import tax from "../assets/images/tax.webp";
import travel from "../assets/images/travel.webp";

export default function Extensive() {
  return (
    <div className="bg-white">
      <div className="py-16">
        <div className="lg:w-7/12 mx-auto">
          <p className="text-3xl lg:text-5xl text-center gap-6 ">
            An extensive selection of 12+ ready-made Business websites.
          </p>
          <p className="text-center mt-6 opacity-70">
            Best-in-class designs to get started. Install any demo or template
            with a single click. Mix and match section templates to create
            unique sites.
          </p>
        </div>

        <div className=" w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
          <div>
            <img src={agencey} alt="" />
            <p className="text-center font-bold">Consulting agencey</p>
          </div>
          <div>
            <img src={it} alt="" />
            <p className="text-center font-bold">it Consulting</p>
          </div>
          <div>
            <img src={human} alt="" />
            <p className="text-center font-bold">HR Consulting</p>
          </div>
          <div>
            <img src={financial} alt="" />
            <p className="text-center font-bold">Financial Advisor</p>
          </div>
          <div>
            <img src={business} alt="" />
            <p className="text-center font-bold">Business Consultant</p>
          </div>
          <div>
            <img src={corporate} alt="" />
            <p className="text-center font-bold">corporate Consultanting</p>
          </div>
          <div>
            <img src={marketing} alt="" />
            <p className="text-center font-bold">Marketing Consultant</p>
          </div>
          <div>
            <img src={bank} alt="" />
            <p className="text-center font-bold">Banking Consultancy</p>
          </div>
          <div>
            <img src={management} alt="" />
            <p className="text-center font-bold">Management Consulting</p>
          </div>
          <div>
            <img src={travel} alt="" />
            <p className="text-center font-bold">Travel Consultancy</p>
          </div>
          <div>
            <img src={tax} alt="" />
            <p className="text-center font-bold"> Tax/Vat Consultant</p>
          </div>

          <div>
            <img src={insurance} alt="" />
            <p className="text-center font-bold">Insurancy consultancy</p>
          </div>
        </div>

        <div className=" space-y-10 lg:space-y-16">
          <div className="flex items-center justify-center">
            <button className="bg-[#95F3FF] text-black font-bold py-4 px-6 rounded-full mt-14 lg:mt-24 ">
              Purchase now
            </button>
          </div>

          <div className="flex justify-center">
            <hr />
            <button className="py-2 px-6 border rounded-full">
              We update twice in every month
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
