import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#e3c501] w-full py-6"></div>
      <nav class="bg-transparent mb-[-140px]">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} width={100} height={100} alt="" />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between text-white w-full py-2 px-3 md:p-0"
                >
                  Dropdown{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" class="block px-4 py-2 text-white">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-white">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block py-2 px-3 text-white rounded md:p-0"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded md:p-0">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded md:p-0">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-white rounded md:p-0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
