import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar({ setOpenSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSidebar((prevOpen) => !prevOpen); // Toggle the Sidebar state
  };

  return (
    <div>
      <nav className="bg-black flex justify-between items-center w-full h-[60px]">
        <div className="flex items-center text-white">
          {/* Left section of Navbar */}
          <div className="flex items-center justify-center pl-[160px] ">
            <a className="hidden md:flex hover:text-gray-400 gap-[10.42px] ">
              <img className="w-10 h-10" src="Group.png" alt="Logo"></img>
              <div className="self-center font-semibold text-lg pr-10">WDB</div>
            </a>
          </div>
          {/* Middle section of Navbar */}
          <div className="items-center space-x-1 py-5 text-white hidden md:flex">
            <a className="py-5 px-3 hover:text-gray-400 ">Men</a>
            <a className="py-5 px-3 hover:text-gray-400	">Women</a>
            <a className="py-5 px-3 hover:text-gray-400	">Kids</a>
            <a className="py-5 px-3 hover:text-gray-400	">Shoes</a>
            <a className="py-5 px-3 hover:text-gray-400	">Accessories</a>
          </div>
          {/* Right section of Navbar */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="hamburger-menu cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 16h16"></path>
              </svg>
            </button>
            <div className="flex items-center justify-center pl-[160px] ">
              <a className="flex hover:text-gray-400 gap-[10.42px]">
                <img className="w-10 h-10" src="Group.png" alt="Logo"></img>
                <div className="self-center font-semibold text-lg pr-10">
                  WDB
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Right section of Navbar for mobile */}
        <div className="justify-self-end	flex text-white pr-40">
          <a href="" className="py-5 px-3 hover:text-gray-400">
            <img src="/public/shopping.svg" alt="Shopping cart"></img>
          </a>
        </div>
        {/* Mobile menu */}
        {isMenuOpen ? (
          <div className=" flex-col items-center space-x-1 text-white md:hidden">
            <a href="/src/blogs.html" className="py-5 px-3 hover:text-gray-400	">
              Men
            </a>
            <a
              href="/src/contact.html"
              className="py-5 px-3 hover:text-gray-400	"
            >
              Women
            </a>
            <a href="/src/index.html" className="py-5 px-3 hover:text-gray-400	">
              Kids
            </a>
            <a href="/src/index.html" className="py-5 px-3 hover:text-gray-400	">
              Shoes
            </a>
            <a href="/src/index.html" className="py-5 px-3 hover:text-gray-400	">
              Accessories
            </a>
          </div>
        ) : null}
      </nav>
      <div className="border-spacing-2 bg-black"></div>
    </div>
  );
}

export { Navbar };
