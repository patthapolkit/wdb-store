import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.svg";
import burger from "../assets/burger-menu.svg";
import shopping0 from "../assets/shopping-0.svg";
import shopping1 from "../assets/shopping-1.svg";

function MenuItem({ text, href }) {
  return (
    <a href={href} className="py-5 px-3 hover:text-gray-400">
      {text}
    </a>
  );
}

export default function Navbar() {
  const [extendedMenu, setExtendedMenu] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(0);
  const cartId = localStorage.getItem("cartId");

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://api.storefront.wdb.skooldio.dev/carts/${cartId}`)
        .then((res) => {
          setIsCartEmpty(res.data.items.length === 0 ? 0 : 1);
        });
    };
    fetchData();
  }, [cartId]);

  return (
    <>
      <nav className="bg-secondary-base flex flex-row justify-between items-center w-full h-[60px] px-4 lg:px-[160px] text-white sticky top-0 z-50">
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
            <img src={burger} alt="menu" />
          </button>
          <a
            href="/"
            className="flex gap-2.5 flex-row items-center justify-center"
          >
            <img className="w-9 h-9" src={logo} alt="WDB Store" />
            <p className="font-semibold text-lg">WDB</p>
          </a>
          <div className="hidden lg:flex">
            <MenuItem text="Men" href="/list?categories=all-men" />
            <MenuItem text="Women" href="/list?categories=all-ladies" />
          </div>
        </div>
        <a href="/checkout">
          {isCartEmpty === 0 ? (
            <img src={shopping0} alt="shopping cart" />
          ) : (
            <img src={shopping1} alt="shopping cart" />
          )}
        </a>
      </nav>
    </>
  );
}
