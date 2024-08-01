"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  interface NavItem {
    title: string;
    url: string;
  }

  const items: NavItem[] = [
    { title: "Abouts", url: "/" },
    { title: "Skills", url: "#skills" },
    { title: "Projects", url: "#project" },
    { title: "Contacts", url: "#contacts" },
  ];

  return (
    <nav className="fixed top-3 left-0 right-0 z-50">
      <div className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-slate bg-white border shadow-xl rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-bold text-xl text-emerald-500">
            Aethyy
          </a>
          <div className="flex-grow flex items-center justify-center text-emerald-gray-900">
            <div className="hidden sm:block">
              <div className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-emerald-gray-900">
                <div className="flex flex-row items-center gap-6 text-sm">
                  {items.map((i) => (
                    <div key={i.url} className="relative group">
                      <Link
                        href={i.url}
                        className="transition-colors duration-300 group-hover:text-emerald-500"
                      >
                        {i.title}
                      </Link>
                      <span className="absolute -bottom-1 left-0 w-full h-[0.150rem] bg-emerald-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button
            className="relative h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:hidden"
            type="button"
            onClick={toggleSidebar}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 right-0 z-55 w-64 bg-white shadow-xl transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 rounded-l-lg ease-in-out :hidden`}
      >
        <div className="p-6">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="mt-8 space-y-4">
            {items.map((i) => (
              <li key={i.url} className="relative group">
                <Link
                  href={i.url}
                  className="transition-colors duration-300 group-hover:text-emerald-500"
                >
                  {i.title}
                </Link>
                <span className="absolute -bottom-1 left-0 w-full h-[0.150rem] bg-emerald-600 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
