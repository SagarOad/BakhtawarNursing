"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="bg-[#9a1b55] w-full py-6"></div>
      <nav className="">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} width={100} height={100} alt="Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              dropdownOpen ? "block" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col justify-center items-center font-medium p-4 md:p-0 mt-4 border md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-[18px] text-black rounded md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown}
                  className="flex items-center text-[18px] justify-between text-black w-full py-2 px-3 md:p-0"
                >
                  Programs
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className={`absolute z-10 ${
                    dropdownOpen ? "block" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link href="/cmw" className="block px-4 py-2 text-black">
                        Community Midwife
                      </Link>
                    </li>
                    <li>
                      <Link href="/cna" className="block px-4 py-2 text-black">
                        Certified Nursing Assistant
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/generic-nursing"
                        className="block px-4 py-2 text-black"
                      >
                        Generic Nursing
                      </Link>
                    </li>
                    <li>
                      <Link href="/lhv" className="block px-4 py-2 text-black">
                        Lady Health Visitor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/post-nursing"
                        className="block px-4 py-2 text-black"
                      >
                        Post Nursing
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-[18px] text-black rounded md:p-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/application-form"
                  className="block py-2 px-3 text-[21px] border-2 border-[#9a1b55] text-black rounded"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
