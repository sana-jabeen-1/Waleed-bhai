"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <header
        id="sticky-header"
        className="xl:pl-12 absolute left-0 top-0 w-full z-10 bg-transparent"
      >
        <div className="flex pl-4 xl:pl-0">
          <div className="flex-1 flex items-center justify-between border-b border-black border-opacity-40">
            <Link href="/">
              <Image
                src="/assets/images/logo-light.jpg"
                width="50"
                height="50"
                alt="logo"
              />
            </Link>
            <Link
              href="/contact"
              className="flex items-center flex-wrap py-[6px] px-3 text-[15px] font-bold text-active leading-none mr-2 transition-all duration-300 hover:text-orange md:hover:text-white group"
            >
              Let’s Talk
              <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeOpacity="0.9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div
            onClick={toggleOffcanvas}
            className="flex-none bg-active flex items-center flex-wrap justify-center py-7 px-[38px] cursor-pointer"
          >
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="8" width="18" height="2" fill="white" />
                <rect x="3" y="14" width="18" height="2" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas menu */}
      <div
        className={`offcanvas right-0 top-0 bottom-0 z-50 fixed h-full w-[350px] md:w-[460px] bg-black pl-8 flex flex-col justify-between transition-all duration-300 ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-white mb-[80px]">
          <Link href="/">
            {/* <img
              src="assets/images/logo/offcanvas-logo.png"
              alt="Offcanvas Logo"
            /> */}
          </Link>
          <button
            onClick={toggleOffcanvas}
            className="bg-primary py-7 px-[38px]"
            aria-label="Close offcanvas"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.28 4.72a1 1 0 010 1.42L5.7 19.28a1 1 0 01-1.42-1.42L17.86 4.72a1 1 0 011.42 0z"
                fill="white"
              />
              <path
                d="M4.72 4.72a1 1 0 011.42 0l13.5 13.5a1 1 0 01-1.42 1.42L4.72 6.14a1 1 0 010-1.42z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <nav className="offcanvas-menu mr-[40px] flex flex-col">
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "About Me", path: "/about" },
              { name: "Project", path: "/projects" },
              { name: "Blog", path: "/blogs" },
              { name: "Contact Me", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="border-b border-white py-4 group">
                <Link
                  href={item.path}
                  className="text-white text-xl font-bold flex items-center justify-between hover:text-orange transition duration-300"
                  onClick={toggleOffcanvas}
                >
                  {item.name}
                  <span className="inline-block group-hover:animate-arrow-move-up">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
