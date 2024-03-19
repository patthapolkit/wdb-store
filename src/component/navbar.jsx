import { useState } from "react";
function Navbar() {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  };

  return (
    <div>
      <nav class="bg-black flex justify-between items-center w-full ">
        {/* <div class="flex justify-between">
          <div class="flex space-x-4 px-2"> */}
        <div class="flex pl-20">
          <div class="flex items-center text-white text-lg px-5 ">
            <a
              href="/src/index.html"
              class="flex justify-between hover:text-gray-400	"
            >
              <img class="w-10 h-10 p-1 " src="Group.png"></img>
              <p class="justify-center">WDB</p>
            </a>
          </div>
          <ul class=" items-center space-x-1 text-white hidden md:flex">
            <li>
              <a href="/src/blogs.html" class="py-5 px-3 hover:text-gray-400	">
                Men
              </a>
            </li>
            <li>
              <a href="/src/contact.html" class="py-5 px-3 hover:text-gray-400	">
                Women
              </a>
            </li>
            <li>
              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-400	">
                Kids
              </a>
            </li>
            <li>
              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-400	">
                Shoes
              </a>
            </li>
            <li>
              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-400	">
                Accessories
              </a>
            </li>
          </ul>
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
          </div>
        </div>

        <div class="justify-self-end	flex text-white pr-20">
          <a href="" class="py-5 px-3 hover:text-gray-400">
            Shopping Bag
          </a>
        </div>
        {/* </div> */}
        {/* </div>
        </div> */}
        {/* mobile menu  */}
        {isMenuopen ? (
          <ul class=" flex-col items-center space-x-1 text-white md:hidden">
            <li>
              <a href="/src/blogs.html" class="py-5 px-3 hover:text-gray-400	">
                Men
              </a>
            </li>
            <li>
              <a href="/src/contact.html" class="py-5 px-3 hover:text-gray-400	">
                Women
              </a>
            </li>
            <li>
              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-400	">
                Kids
              </a>
            </li>
            <li>
              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-400	">
                Shoes
              </a>
            </li>
            <li>
              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-400	">
                Accessories
              </a>
            </li>
          </ul>
        ) : null}
      </nav>
      <div class="border-spacing-2 bg-black"></div>
    </div>
  );
}

export { Navbar };
