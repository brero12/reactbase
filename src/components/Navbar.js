import { HiArrowCircleRight } from "react-icons/hi";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src="https://img.icons8.com/color/96/under-computer.png" alt="BR" className="w-14"/>
        <button className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Citas App
          </a>
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-white">
           Home
          </a>
          <a href="#" className="mr-5 hover:text-white">
            My space
          </a>
          <a href="#" className="mr-5 hover:text-white">
            History
          </a>
        </nav>
      </div>
    </header>
  );
}