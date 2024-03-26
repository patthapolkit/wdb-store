import { useState } from "react";

const MenuItem = ({ text, href }) => (
  <a href={href} className="py-5 px-3 hover:text-gray-400">
    {text}
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black flex justify-between items-center w-full h-[60px]">
        <div className="flex items-center text-white">
          <div className="flex items-center justify-center pl-4 lg:pl-[160px]">
            <a
              href="/"
              className="hidden md:flex hover:text-gray-400 gap-[10.42px]"
            >
              <img className="w-10 h-10" src="Group.png" alt="Logo" />
              <div className="self-center font-semibold text-lg pr-10">WDB</div>
            </a>
          </div>
          <div className="items-center space-x-1 py-5 text-white hidden md:flex">
            <MenuItem text="Men" href="" />
            <MenuItem text="Women" href="" />
            <MenuItem text="Kids" href="" />
            <MenuItem text="Shoes" href="" />
            <MenuItem text="Accessories" href="" />
          </div>
          <div className="md:hidden">
            <div className="flex gap-2 items-center pr-4">
              <button
                id="menu-toggle"
                className="text-white"
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
                  <path d="M4 6h16M4 12h16M4 16h16" />
                </svg>
              </button>
              <div className="flex items-center ">
                <a href="/" className="flex hover:text-gray-400 gap-[10.42px]">
                  <img className="w-10 h-10" src="Group.png" alt="Logo" />
                  <div className="self-center font-semibold text-lg pr-10">
                    WDB
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-self-end flex text-white mr-4 lg:mr-[160px]">
          <a href="" className="py-5 px-3 hover:text-gray-400">
            <img src="/shopping.svg" alt="shopping cart"></img>
          </a>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-black text-white md:hidden">
          <div className="flex flex-col items-center space-y-4">
            <MenuItem text="Men" href="/src/blogs.html" />
            <MenuItem text="Women" href="/src/contact.html" />
            <MenuItem text="Kids" href="/src/index.html" />
            <MenuItem text="Shoes" href="/src/index.html" />
            <MenuItem text="Accessories" href="/src/index.html" />
          </div>
        </div>
      )}
      <div className="border-spacing-2 bg-black"></div>
    </>
  );
};

export { Navbar };
