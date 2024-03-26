import { useState, useEffect } from "react";
import { menus } from "../constants/menus";

export default function Sidebar({ extendedMenu, setExtendedMenu }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subMenuVisible, setsubMenuVisible] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.closest(".sidebar-sheet") &&
        !event.target.closest(".submenu-sheet")
      ) {
        setExtendedMenu(false);
        setsubMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setExtendedMenu, setsubMenuVisible]);

  const sidebarClass = `sidebar-sheet z-50 fixed top-0 left-0 h-full w-4/5 py-5 px-8 rounded-r-2xl bg-white text-secondary-base shadow-md transition-transform duration-300 transform ${
    extendedMenu ? "translate-x-0" : "-translate-x-full"
  }`;

  const submenuClass = `submenu-sheet z-50 fixed top-0 left-0 h-full w-4/5 py-4 rounded-r-2xl bg-white text-secondary-base shadow-md transition-transform duration-300 transform ${
    subMenuVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setsubMenuVisible(true);
  };

  const handleBack = () => {
    if (subMenuVisible) {
      setsubMenuVisible(false);
    } else {
      setExtendedMenu(false);
      setSelectedCategory("");
    }
  };

  return (
    <>
      <div className={sidebarClass}>
        {menus.map((value) => (
          <div
            key={value.key}
            className="p-4 text-[18px] font-semibold flex flex-row items-center justify-between"
          >
            {value.key !== "Home" ? (
              <button
                className="flex w-full items-center justify-between"
                onClick={() => handleCategoryClick(value.key)}
              >
                {value.key}
                {value.submenu && value.submenu.length > 0 && (
                  <img src="/src/assets/right-arrow.svg" alt="" />
                )}
              </button>
            ) : (
              <a href="/">{value.key}</a>
            )}
          </div>
        ))}
      </div>
      {subMenuVisible && (
        <div className={submenuClass}>
          <button
            className="p-4 text-2xl border-b-[1px] px-8  font-bold w-full flex gap-6 items-center"
            onClick={handleBack}
          >
            <img
              className="items-center"
              src="/src/assets/left-arrow.svg"
              alt="Back"
            />
            {selectedCategory}
          </button>
          {menus
            .filter((menu) => menu.key === selectedCategory)
            .flatMap((menu) => menu.submenu)
            .map((menu) => (
              <button
                key={selectedCategory + menu}
                className="py-4 px-8 text-[18px] font-semibold flex items-center hover:bg-primary-base w-full justify-between"
              >
                {menu}
              </button>
            ))}
        </div>
      )}
    </>
  );
}
