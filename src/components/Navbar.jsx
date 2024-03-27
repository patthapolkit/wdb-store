import { useState } from "react";
import Sidebar from "./Sidebar";

function MenuItem({ text, href }) {
  return (
    <a href={href} className="py-5 px-3 hover:text-gray-400">
      {text}
    </a>
  );
}

export default function Navbar() {
  const [extendedMenu, setExtendedMenu] = useState(false);

  return (
    <>
      <nav className="bg-secondary-base flex flex-row justify-between items-center w-full h-[60px] px-4 lg:px-[160px] text-white sticky top-0 z-10">
        <div className="flex flex-row items-center justify-center gap-2 lg:gap-10">
          <Sidebar
            extendedMenu={extendedMenu}
            setExtendedMenu={setExtendedMenu}
          />

          <button
            id="menu-toggle"
            onClick={() => {
              setExtendedMenu(true);
            }}
            className="lg:hidden"
          >
            <img src="/src/assets/burger-menu.svg" alt="menu" />
          </button>
          <a
            href="/"
            className="flex gap-2.5 flex-row items-center justify-center"
          >
            <img
              className="w-9 h-9"
              src="/src/assets/logo.svg"
              alt="WDB Store"
            />
            <p className="font-semibold text-lg">WDB</p>
          </a>
          <div className="hidden lg:flex">
            <MenuItem text="Men" href="/list?categories=all-men" />
            <MenuItem text="Women" href="/list?categories=all-ladies" />
          </div>
        </div>
        <a href="/checkout">
          <img src="/src/assets/shopping-0.svg" alt="shopping cart"></img>
        </a>
      </nav>
    </>
  );
}
