import { useState } from "react";
function Navbar() {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  };

  return (
    <div>
      <nav className="bg-black flex justify-between items-center w-full h-[60px]">
        <div className="flex items-center text-white">
          <div className="flex items-center justify-center pl-[160px] ">
            <a className="hidden md:flex hover:text-gray-400 gap-[10.42px] ">
              <img className="w-10 h-10" src="Group.png"></img>
              <div className="self-center font-semibold text-lg pr-10">WDB</div>
            </a>
          </div>
          <div className="items-center space-x-1 py-5 text-white hidden md:flex">
            <a className="py-5 px-3 hover:text-gray-400 ">Men</a>
            <a className="py-5 px-3 hover:text-gray-400	">Women</a>
            <a className="py-5 px-3 hover:text-gray-400	">Kids</a>
            <a className="py-5 px-3 hover:text-gray-400	">Shoes</a>
            <a className="py-5 px-3 hover:text-gray-400	">Accessories</a>
          </div>
          {/* hide menu and change to hamburger */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-white "
              onClick={toggleMenu}
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 16h16"></path>
              </svg>
            </button>
            <div className="flex items-center justify-center pl-[160px] ">
              <a className="flex hover:text-gray-400 gap-[10.42px]">
                <img className="w-10 h-10" src="Group.png"></img>
                <div className="self-center font-semibold text-lg pr-10">
                  WDB
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="justify-self-end	flex text-white pr-40">
          <a href="" className="py-5 px-3 hover:text-gray-400">
            <img src="/public/shopping.svg"></img>
          </a>
        </div>

        {/* mobile menu  */}
        {isMenuopen ? (
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
