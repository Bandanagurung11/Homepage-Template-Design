import React, { useEffect, useRef, useState } from "react";

export default function Exclusive() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current; // Capture the ref value

    if (!sectionElement) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(sectionElement);

    return () => {
      observer.unobserve(sectionElement); // Use captured value
    };
  }, []);

  // console.log(isVisible) // Add this inside your component

  return (
    <div className="bg-[#f9f9fb] pt-24">
      <div
        ref={sectionRef}
        className="lg:flex pl-4 lg:pl-0 items-center lg:w-11/12 m-auto gap-8 lg:gap-44"
      >
        <p
          className={`text-2xl lg:text-5xl transition-all duration-700 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0  animate-slide-left"
              : "translate-y-full opacity-0"
          }`}
        >
          Exclusive Features
        </p>
        <div
          className={` lg:flex space-x-3 space-y-6 lg:space-x-0 lg:space-y-0 gap-4 transition-all duration-700 ease-in-out  ${
            isVisible
              ? "opacity-100 translate-y-0 animate-slide-left"
              : "translate-y-full opacity-0"
          }`}
        >
          <button className="border-2 border-[#cb8efc] rounded-full px-1 lg:px-6 py-2 text-lg">
            Live Customization
          </button>
          <button className="border-2 border-[#afe699] rounded-full px-6 py-2 text-lg">
            12+ Demos
          </button>
          <button className="border-2 border-[#f6bbc5] rounded-full px-6 py-2 text-lg">
            1000+ Sections
          </button>
        </div>
      </div>
      {/* first */}

      <div className="lg:flex space-y-4 lg:space-y-0 justify-between mt-16 w-10/12 m-auto gap-2">
        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 32 32"
          >
            <path
              // className="hover:fill-blue-200"
              fill="currentColor"
              d="M5 5v22h22V5zm2 2h18v18H7zm4 4v10h2V11zm4 0v2h6v-2zm0 4v2h6v-2zm0 4v2h6v-2z"
            />
          </svg>
          <p className=" text-lg text-center">Customizable with Elementor</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M6 3a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM4.75 1A1.75 1.75 0 0 0 3 2.75v10.5c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 13 13.25V2.75A1.75 1.75 0 0 0 11.25 1zM4 2.75A.75.75 0 0 1 4.75 2h6.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75z"
            />
          </svg>
          <p className=" text-lg text-center">Header and Footer Builder</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 8v12h14V8zm0-2h14V4H5zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 10h4v4H7zm0 6h10v2H7zm6-5h4v2h-4z"
            />
          </svg>
          <p className=" text-lg text-center">Pre Built Offcanvas</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 0H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 22H4V2h16Z"
            />
            <path
              fill="currentColor"
              d="M6 4h12v2H6zm0 4h7v2H6zm2 12h8l-4-3zm11-1v-6l-5 3zM6 13v6l4-3zm10-1H8l4 3z"
            />
          </svg>
          <p className=" text-lg text-center">Templates Library</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 128 128"
          >
            <path
              fill="#78a3ad"
              d="M125.52 109.7c-2.86-4.07-9.18-6.24-14.01-6.11c-1.97.05-3.78.58-5.15 1.77c-1.58-.34-3-.97-3.56-2.19c-.45-.95-.13-2.08.45-3.81c.59-1.75 1.26-3.74.57-5.86c-.87-2.66-3.75-5.85-12.8-5.7c-.98.01-1.78.82-1.76 1.81c.01.98.81 1.77 1.78 1.77h.03c5.25-.08 8.66 1.12 9.35 3.23c.32.99-.09 2.2-.56 3.6c-.63 1.85-1.4 4.15-.3 6.48c.99 2.1 2.87 3.21 4.91 3.84c-.74 4.12 4.04 8.41 7.21 10.28c3.42 2.01 8.1 3.27 11.88 1.75c4.86-1.93 4.55-7.15 1.96-10.86M90.93 97.13H14.26c-1.07 0-2.12.85-2.33 1.9l-4.4 21.55c-.21 1.04.48 1.9 1.55 1.9h87.03c1.06 0 1.76-.85 1.55-1.9l-4.4-21.55c-.22-1.05-1.26-1.9-2.33-1.9M46.21 84.49H31.24c-2.29 0-4.16 1.74-4.16 3.88v3.74h50.15v-3.74c0-2.13-1.88-3.88-4.17-3.88H58.1V77.8h39.86c3.13 0 5.7-2.57 5.7-5.71V11.24c0-3.14-2.57-5.71-5.7-5.71H6.35C3.21 5.53.64 8.1.64 11.24V72.1c0 3.14 2.57 5.71 5.71 5.71h39.86z"
            />
            <defs>
              <path
                id="notoV1Laptop0"
                d="M12.47 63.07c-2.4 0-4.35-1.96-4.35-4.36V18.12c0-2.4 1.95-4.36 4.35-4.36h79.36c2.39 0 4.35 1.96 4.35 4.36v40.59c0 2.4-1.96 4.36-4.35 4.36z"
              />
            </defs>
            <use fill="#006ca2" href="#notoV1Laptop0" />
            <clipPath id="notoV1Laptop1">
              <use href="#notoV1Laptop0" />
            </clipPath>
            <path
              fill="#fff"
              d="M50.73 11.35L32.85 68.11l-27.63-.28V11.92z"
              clip-path="url(#notoV1Laptop1)"
            />
            <path
              fill="#fff"
              d="M18.67 102.69h68.42c1.07 0 1.94.87 1.94 1.94s-.87 1.94-1.94 1.94H18.67c-1.06 0-1.94-.87-1.94-1.94c0-1.08.88-1.94 1.94-1.94m70.28 13.23H16.82c-1.07 0-1.94-.87-1.94-1.94s.87-1.94 1.94-1.94h72.14a1.94 1.94 0 0 1-.01 3.88"
            />
            <path
              fill="#006ca2"
              d="M91.64 18.3v40.22H12.66V18.3zm.2-4.54H12.47c-2.4 0-4.35 1.96-4.35 4.36v40.59c0 2.4 1.95 4.36 4.35 4.36h79.36c2.39 0 4.35-1.96 4.35-4.36V18.12c0-2.4-1.96-4.36-4.34-4.36"
            />
          </svg>
          <p className=" text-lg text-center">Animation Builder (GSAP)</p>
        </div>
      </div>

      {/* second */}
      <div className="lg:flex space-y-4 lg:space-y-0 justify-between mt-6 w-10/12 m-auto gap-2">
        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <rect width="10" height="10" x="1" y="1" fill="currentColor" rx="1">
              <animate
                id="svgSpinnersBlocksShuffle30"
                fill="freeze"
                attributeName="x"
                begin="0;svgSpinnersBlocksShuffle3b.end"
                dur="0.2s"
                values="1;13"
              />
              <animate
                id="svgSpinnersBlocksShuffle31"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBlocksShuffle38.end"
                dur="0.2s"
                values="1;13"
              />
              <animate
                id="svgSpinnersBlocksShuffle32"
                fill="freeze"
                attributeName="x"
                begin="svgSpinnersBlocksShuffle39.end"
                dur="0.2s"
                values="13;1"
              />
              <animate
                id="svgSpinnersBlocksShuffle33"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBlocksShuffle3a.end"
                dur="0.2s"
                values="13;1"
              />
            </rect>
            <rect
              width="10"
              height="10"
              x="1"
              y="13"
              fill="currentColor"
              rx="1"
            >
              <animate
                id="svgSpinnersBlocksShuffle34"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBlocksShuffle30.end"
                dur="0.2s"
                values="13;1"
              />
              <animate
                id="svgSpinnersBlocksShuffle35"
                fill="freeze"
                attributeName="x"
                begin="svgSpinnersBlocksShuffle31.end"
                dur="0.2s"
                values="1;13"
              />
              <animate
                id="svgSpinnersBlocksShuffle36"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBlocksShuffle32.end"
                dur="0.2s"
                values="1;13"
              />
              <animate
                id="svgSpinnersBlocksShuffle37"
                fill="freeze"
                attributeName="x"
                begin="svgSpinnersBlocksShuffle33.end"
                dur="0.2s"
                values="13;1"
              />
            </rect>
            <rect
              width="10"
              height="10"
              x="13"
              y="13"
              fill="currentColor"
              rx="1"
            >
              <animate
                id="svgSpinnersBlocksShuffle38"
                fill="freeze"
                attributeName="x"
                begin="svgSpinnersBlocksShuffle34.end"
                dur="0.2s"
                values="13;1"
              />
              <animate
                id="svgSpinnersBlocksShuffle39"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBlocksShuffle35.end"
                dur="0.2s"
                values="13;1"
              />
              <animate
                id="svgSpinnersBlocksShuffle3a"
                fill="freeze"
                attributeName="x"
                begin="svgSpinnersBlocksShuffle36.end"
                dur="0.2s"
                values="1;13"
              />
              <animate
                id="svgSpinnersBlocksShuffle3b"
                fill="freeze"
                attributeName="y"
                begin="svgSpinnersBlocksShuffle37.end"
                dur="0.2s"
                values="1;13"
              />
            </rect>
          </svg>
          <p className=" text-lg text-center">50+ Premium Elementor Addons</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M24 26h7v2h-7zm0-4h7v2h-7zm-3.586-10H25v-2h-8v8h2v-4.586L25.586 20L27 18.586z"
            />
            <path
              fill="currentColor"
              d="M7 7h22v12h2V7c0-1.102-.897-2-2-2H7c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h7v4h-4v2h12v-8H7zm13 21h-4v-4h4z"
            />
            <path
              fill="currentColor"
              d="M26 3V1H3c-1.103 0-2 .897-2 2v15h2V3z"
            />
          </svg>
          <p className=" text-lg text-center">Mega Menu Builder</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3m6.954 2.94l1-1a1.12 1.12 0 0 1 1.586 0v0a1.12 1.12 0 0 1 0 1.585l-1 1m-1.586-1.586l-2.991 2.991a1 1 0 0 0-.28.553l-.244 1.557l1.557-.243a1 1 0 0 0 .553-.28l2.99-2.992m-1.585-1.586l1.586 1.586" />
              <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" />
            </g>
          </svg>
          <p className=" text-lg text-center">Custom Post Type Builder</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a5 5 0 0 1-.584-1H3V2h7v2a1 1 0 0 0 1 1h2v2.1q.523.106 1 .316V4a1 1 0 0 0-.293-.707l-2-2A1 1 0 0 0 11 1zm13 11a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-1.646-1.354a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.146-2.147a.5.5 0 0 1 .708 0"
            />
          </svg>
          <p className=" text-lg text-center">Archive Page builder</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                d="M16 40H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v6"
              />
              <path d="M42 24H26a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V26a2 2 0 0 0-2-2Z" />
            </g>
          </svg>
          <p className=" text-lg text-center">Unique Popup Builder</p>
        </div>
      </div>

      {/* third */}
      <div className="lg:flex space-y-4 lg:space-y-0 justify-between mt-6 w-10/12 m-auto gap-2">
        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <g clip-path="url(#siSunLine0)">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556l-1.414-1.414M18 12a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
                />
              </g>
              <defs>
                <clipPath id="siSunLine0">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
          <p className=" text-lg text-center">Dark and Light Version</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              color="currentColor"
            >
              <path d="M7.192 18.071c.152 1.913 1.667 3.538 3.62 3.778c.718.089 1.448.151 2.188.151s1.47-.062 2.188-.15c1.953-.241 3.467-1.866 3.62-3.779c.105-1.326.192-2.685.192-4.071s-.087-2.745-.193-4.071c-.151-1.913-1.666-3.538-3.62-3.778A18 18 0 0 0 13 6c-.74 0-1.47.062-2.188.15c-1.953.241-3.468 1.866-3.62 3.779C7.087 11.255 7 12.614 7 14s.087 2.745.192 4.071" />
              <path d="M13 9V7.5c0-1.886 0-2.828-.586-3.414S10.886 3.5 9 3.5H6.5A1.5 1.5 0 0 1 5 2m6.5 8.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C12.301 9 12.534 9 13 9s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v1c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C13.699 13 13.466 13 13 13s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883z" />
            </g>
          </svg>
          <p className=" text-lg text-center">Smooth Scrolling</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20 15v-5M4 15V7c0-1.886 0-2.828.586-3.414S6.114 3 8 3h3.5M14 6s1 0 2 2c0 0 3.177-5 6-6M3.498 16.015L4.02 15h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989"
              color="currentColor"
            />
          </svg>
          <p className=" text-lg text-center">Lottie Animation</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <p>icon</p>
          <p className=" text-lg text-center">Pre Built Offcanvas</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7.75 7.567C9.67 4.522 10.63 3 12 3s2.33 1.522 4.25 4.567l2.244 3.56c2.742 4.35 4.113 6.525 3.249 8.2C20.878 21 18.383 21 13.394 21h-2.788c-4.99 0-7.484 0-8.349-1.674c-.864-1.674.507-3.849 3.249-8.199zM3.5 15H9m11.5 0H15M7 9h10m-5 0v12"
              color="currentColor"
            />
          </svg>
          <p className=" text-lg text-center">Custom Font Uploader</p>
        </div>
      </div>

      {/* fourth */}
      <div className="lg:flex space-y-4 lg:space-y-0 justify-between mt-6 w-6/12 m-auto gap-2">
        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 32 32"
          >
            <path
              fill="#dbaf7b"
              d="M27.4 5.5h-9.2l-2.1 4.2H4.3v4H.5l3.8 12.8h25.2v-21Zm-7.2 2.1h7.1v2.1h-8.1Zm5.5 6.1H6.6v-1.9h20.8v7.6Z"
            />
            <path
              fill="#a86749"
              d="M27.3 16.881a7.8 7.8 0 0 1 1.575 1.419a4.666 4.666 0 0 1 .17 6.087a5.2 5.2 0 0 1-3.162 1.765a9.3 9.3 0 0 1-3.381-.073a11 11 0 0 0-1.609-.176a.9.9 0 0 0-1.046.724v.015a.94.94 0 0 0 .18.742a10.5 10.5 0 0 0 .848 1.108a2.2 2.2 0 0 1 .529.99a.787.787 0 0 1-.491.946a6.4 6.4 0 0 1-3.139.552a15 15 0 0 1-7.736-2.555a6.84 6.84 0 0 1-2.928-4.416a5.87 5.87 0 0 1 1-4.544a10.2 10.2 0 0 1 4.318-3.6a15.05 15.05 0 0 1 11.67-.6c.039.02 3.13 1.677 3.202 1.616"
            />
            <path
              fill="#3783ff"
              d="M11.246 22.676a2.47 2.47 0 0 1 1.595.514a1.126 1.126 0 0 1 .32 1.533a1.1 1.1 0 0 1-.32.328a2.77 2.77 0 0 1-3.2 0a1.13 1.13 0 0 1-.329-1.535a1.1 1.1 0 0 1 .336-.342a2.46 2.46 0 0 1 1.598-.498"
            />
            <path
              fill="#4de94c"
              d="M10.965 21.431a1.92 1.92 0 0 1-1.172-.371a.9.9 0 0 1-.3-1.214a.9.9 0 0 1 .29-.3a2.11 2.11 0 0 1 2.458.025a.887.887 0 0 1 .235 1.212a.9.9 0 0 1-.225.234a1.95 1.95 0 0 1-1.286.414"
            />
            <path
              fill="#fe0"
              d="M14.109 18.49a1.46 1.46 0 0 1-1.072-.385a.72.72 0 0 1-.087-1a1 1 0 0 1 .087-.089a1.656 1.656 0 0 1 2.124 0a.72.72 0 0 1 .087 1a.7.7 0 0 1-.128.123a1.48 1.48 0 0 1-1.011.351"
            />
            <path
              fill="#4c1ac6"
              d="M15.858 25.412a2.8 2.8 0 0 1 1.793.568a1.234 1.234 0 0 1 .373 1.677a1.2 1.2 0 0 1-.373.382a3.16 3.16 0 0 1-3.6 0a1.237 1.237 0 0 1-.39-1.678a1.2 1.2 0 0 1 .4-.4a2.8 2.8 0 0 1 1.797-.549"
            />
            <path
              fill="#2a3e4f"
              d="M31 13.466a5.8 5.8 0 0 1-1.151 1.909a47 47 0 0 1-3.749 4.084a.51.51 0 0 1-.537.189a.7.7 0 0 1-.251-.153q-.429-.409-.844-.833a.475.475 0 0 1-.076-.653l.052-.057l.056-.052a49 49 0 0 1 4.1-3.7a8.5 8.5 0 0 1 1.421-.946a2.6 2.6 0 0 1 .507-.189a.353.353 0 0 1 .463.187v.014Z"
            />
            <path
              fill="#7e8c8d"
              d="M20 22.963a.1.1 0 0 1 .03.006A2.26 2.26 0 0 0 23 22.5a1.54 1.54 0 0 0 .412-1.21a1.17 1.17 0 0 0-1-1.006a1.02 1.02 0 0 0-.923.408a1.55 1.55 0 0 0-.284.657A2.57 2.57 0 0 1 20 22.938Z"
            />
            <path
              fill="#f89b36"
              d="M25.16 19.792q-.49-.49-.985-.976a.236.236 0 0 0-.33-.053h-.006a.3.3 0 0 0-.062.072q-.419.544-.831 1.092a.22.22 0 0 0 .008.3l.011.01q.369.366.739.728a.223.223 0 0 0 .313.029q.565-.413 1.12-.839a.8.8 0 0 0 .136-.2a1 1 0 0 0-.113-.163"
            />
            <path
              fill="#ff8c00"
              d="M17.864 17.121a1.15 1.15 0 0 1-.859-.321a.617.617 0 0 1-.048-.856l.048-.05a1.286 1.286 0 0 1 1.7 0a.617.617 0 0 1 .048.857a.6.6 0 0 1-.08.077a1.17 1.17 0 0 1-.809.293"
            />
            <path
              fill="#8f9fa0"
              d="M20 22.963s3.915-1.136 2.659-2.614c0 0-.857-.393-1.454 1.007A3.93 3.93 0 0 1 20 22.963"
            />
            <path
              fill="#e9bb42"
              d="m23.305 20.585l1.374-1.272l-.5-.5a.24.24 0 0 0-.335-.045l-.008.006a.2.2 0 0 0-.055.063c-.2.259-1.153 1.07-.813 1.407Z"
            />
            <path
              fill="#32495d"
              d="M24.877 19.073L31 13.254s.041-.393-.468-.2s-.8-.177-6.093 4.9a.44.44 0 0 0 .024.71Z"
            />
            <path
              fill="#f60000"
              d="M21.721 17.41a1.15 1.15 0 0 1-.859-.321a.617.617 0 0 1-.048-.857l.048-.049a1.286 1.286 0 0 1 1.7 0a.617.617 0 0 1 .048.855a.6.6 0 0 1-.082.078a1.16 1.16 0 0 1-.807.294"
            />
          </svg>
          <p className=" text-lg text-center">Advance Theme Option</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 64 64"
          >
            <path
              fill="#d0d2d3"
              d="M38.986 48.749c0 2.174-2.01 3.932-4.498 3.932H5.805c-2.486 0-4.499-1.758-4.499-3.932V13.314c0-2.17 2.01-3.931 4.499-3.931h28.683c2.488 0 4.498 1.761 4.498 3.931z"
            />
            <path
              fill="#fff"
              d="M36.672 45.722c0 1.903-1.768 3.448-3.945 3.448H7.567c-2.179 0-3.946-1.545-3.946-3.448v-31.08c0-1.903 1.767-3.448 3.946-3.448h25.16c2.178 0 3.945 1.545 3.945 3.448z"
            />
            <path
              fill="#34484c"
              d="M8.598 19.549h22.383c1.502 0 1.502-2.04 0-2.04H8.598c-1.505 0-1.505 2.04 0 2.04m0 4.136h22.383c1.502 0 1.502-2.036 0-2.036H8.598c-1.505-.001-1.505 2.036 0 2.036m0 4.229h22.383c1.502 0 1.502-2.036 0-2.036H8.598c-1.505 0-1.505 2.036 0 2.036m0 4.136h22.383c1.502 0 1.502-2.036 0-2.036H8.598c-1.505 0-1.505 2.036 0 2.036m0 14.96h10.299c1.501 0 1.501-2.036 0-2.036H8.598c-1.505 0-1.505 2.036 0 2.036"
            />
            <path
              fill="#d0d2d3"
              d="M50.951 39.37c0 2.175-2.02 3.932-4.497 3.932H17.765c-2.482 0-4.497-1.757-4.497-3.932V3.936c0-2.17 2.01-3.931 4.497-3.931h28.689c2.482 0 4.497 1.761 4.497 3.931z"
            />
            <path
              fill="#fff"
              d="M48.634 36.34c0 1.902-1.765 3.447-3.944 3.447H19.53c-2.177 0-3.943-1.545-3.943-3.447V5.26c0-1.903 1.766-3.444 3.943-3.444h25.16c2.18 0 3.944 1.541 3.944 3.444z"
            />
            <path
              fill="#34484c"
              d="M20.561 10.162H42.94c1.508 0 1.508-2.037 0-2.037H20.561c-1.502 0-1.502 2.037 0 2.037m0 4.139H42.94c1.508 0 1.508-2.036 0-2.036H20.561c-1.502 0-1.502 2.036 0 2.036m0 4.23H42.94c1.508 0 1.508-2.041 0-2.041H20.561c-1.502.001-1.502 2.041 0 2.041m0 4.136H42.94c1.508 0 1.508-2.036 0-2.036H20.561c-1.502-.001-1.502 2.036 0 2.036m0 14.957h10.301c1.501 0 1.501-2.036 0-2.036H20.561c-1.502 0-1.502 2.036 0 2.036"
            />
            <path
              fill="#d0d2d3"
              d="M62.913 60.16c0 2.174-2.01 3.931-4.497 3.931H29.729c-2.486 0-4.501-1.757-4.501-3.931V24.725c0-2.169 2.02-3.931 4.501-3.931h28.687c2.484 0 4.497 1.761 4.497 3.931z"
            />
            <path
              fill="#fff"
              d="M60.6 57.14c0 1.905-1.77 3.447-3.947 3.447h-25.16c-2.178 0-3.946-1.542-3.946-3.447V26.06c0-1.902 1.769-3.443 3.946-3.443h25.16c2.178 0 3.947 1.541 3.947 3.443z"
            />
            <path
              fill="#34484c"
              d="M32.522 30.965h22.383c1.505 0 1.505-2.041 0-2.041H32.522c-1.501 0-1.501 2.041 0 2.041m0 4.135h22.383c1.505 0 1.505-2.036 0-2.036H32.522c-1.501-.001-1.501 2.036 0 2.036m0 4.23h22.383c1.505 0 1.505-2.036 0-2.036H32.522c-1.501 0-1.501 2.036 0 2.036m0 4.14h22.383c1.505 0 1.505-2.041 0-2.041H32.522c-1.501 0-1.501 2.041 0 2.041m0 14.95h10.304c1.501 0 1.501-2.035 0-2.035H32.522c-1.501 0-1.501 2.035 0 2.035"
            />
          </svg>
          <p className=" text-lg text-center">Pining Elements</p>
        </div>

        <div className="border bg-[#ffffff] p-2 rounded-2xl flex flex-col items-center gap-2">
          <svg
            className="text-black hover:text-blue-700 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M110.5 131.8C145.6 90.5 197.5 64 256 64c106.1 0 192 85.9 192 192h64C512 114.6 397.4 0 256 0C179.8 0 111.7 33.4 64.9 86.2L0 21.3V192h170.7zm291 248.4c-35.2 41.3-87 67.8-145.5 67.8c-106.1 0-192-85.9-192-192H0c0 141.4 114.6 256 256 256c76.2 0 144.3-33.4 191.1-86.2l64.9 64.9V320H341.3zM213.3 256c0 23.6 19.1 42.7 42.7 42.7s42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7s-42.7 19.1-42.7 42.7"
            />
          </svg>
          <p className=" text-lg text-center">One Click Demo Installation</p>
        </div>
      </div>
    </div>
  );
}
