import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar(props) {
  // const [menuVisible, setMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const [thirdSubmenuVisible, setThirdSubmenuVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // Add isDesktop state
  const [sideDeskVisible, setSideDeskVisible] = useState(true); // Set sidebar sheet visible by default on desktop

  console.log("props :>> ", props);
  const { open: openSidebar, setOpen } = props;

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const menus = [
    { key: "Home" },
    {
      key: "Men",
      submenu: [
        {
          key: "Tops",
          submenu: [
            "All items",
            "T-shirts",
            "Cardigans",
            "Knitwear & Sweaters",
          ],
        },
        { key: "Bottom", submenu: ["All items", "Jeans"] },
        { key: "Accessories", submenu: ["All items", "Rings"] },
      ],
    },
    {
      key: "Women",
      submenu: [
        {
          key: "Tops",
          submenu: [
            "All items",
            "T-shirts",
            "Cardigans",
            "Knitwear & Sweaters",
          ],
        },
        { key: "Bottom", submenu: ["All items", "Jeans"] },
        { key: "Accessories", submenu: ["All items", "Rings"] },
      ],
    },
    {
      key: "Kids",
      submenu: [
        {
          key: "Tops",
          submenu: [
            "All items",
            "T-shirts",
            "Cardigans",
            "Knitwear & Sweaters",
          ],
        },
        { key: "Bottom", submenu: ["All items", "Jeans"] },
        { key: "Accessories", submenu: ["All items", "Rings"] },
      ],
    },
    {
      key: "Shoes",
      submenu: [
        {
          key: "Tops",
          submenu: [
            "All items",
            "T-shirts",
            "Cardigans",
            "Knitwear & Sweaters",
          ],
        },
        { key: "Bottom", submenu: ["All items", "Jeans"] },
        { key: "Accessories", submenu: ["All items", "Rings"] },
      ],
    },
    {
      key: "Accessories",
      submenu: [
        {
          key: "Tops",
          submenu: [
            "All items",
            "T-shirts",
            "Cardigans",
            "Knitwear & Sweaters",
          ],
        },
        { key: "Bottom", submenu: ["All items", "Jeans"] },
        { key: "Accessories", submenu: ["All items", "Rings"] },
      ],
    },
  ];

  const toggleMenu = () => setOpen(!openSidebar);

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) && // Check if clicked outside sidebar
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target) && // Check if clicked outside hamburger menu
      !event.target.closest(".sidebar-sheet") // Check if clicked on space besides sidebar
    ) {
      setOpen(false); // Close sidebar
      setSelectedCategory(null);
      setSubmenuVisible(false);
      setSelectedSubmenu(null);
      setThirdSubmenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // Check window width on initial load
    setIsDesktop(window.innerWidth >= 1024); // Set the threshold for desktop view
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Add event listener to track window resize for desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Set the threshold for desktop view
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarClass = `sidebar-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    openSidebar ? "translate-x-0" : "-translate-x-full"
  }`;

  const submenuClass = `submenu-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    submenuVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  const thirdSubmenuClass = `third-submenu-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    thirdSubmenuVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  const sidebarDeskClass = `side-desk-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    sideDeskVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSubmenuVisible(true);
  };

  const handleSubmenuClick = (subMenu) => {
    setSelectedSubmenu(subMenu);
    setThirdSubmenuVisible(true);
  };

  const handleThirdSubmenuClick = (thirdMenu) => {
    setSelectedCategory(null); // Reset selected category if necessary
    setSelectedSubmenu(thirdMenu); // Set selected submenu to the clicked thirdMenu item
    setThirdSubmenuVisible(true); // Show the third submenu
  };

  const firstHandleBackButtonClick = () => {
    setOpen(true); // Make sure to set menuVisible to true
    setSelectedCategory(null); // Reset selected category
    setSubmenuVisible(false); // Hide submenu
    setThirdSubmenuVisible(false); // Hide third submenu if necessary
    setSelectedSubmenu(null); // Reset selected submenu if necessary
  };

  const secondHandleBackButtonClick = () => {
    if (thirdSubmenuVisible) {
      // ถ้า third submenu ยังแสดง ให้ซ่อน third submenu
      setThirdSubmenuVisible(false);
    } else if (submenuVisible) {
      // ถ้าเฉพาะ submenu ที่แสดง ให้ซ่อน submenu และกลับไปที่เมนูหลัก
      setSubmenuVisible(false);
      setSelectedSubmenu(null); // รีเซ็ต submenu ที่เลือก
    } else {
      // ถ้าไม่มี submenu หรือ third submenu แสดง ให้ซ่อนเมนูด้านข้าง
      setOpen(false);
      setSelectedCategory(null); // รีเซ็ตหมวดหมู่ที่เลือก
      setSelectedSubmenu(null); // รีเซ็ต submenu ที่เลือก
    }
  };

  return (
    <div>
      {/* <nav className="navbar flex justify-between items-center bg-gray-900 text-white px-4 py-2">
        <div className="navbar-left flex items-center">
          <div className="hamburger-menu cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav> */}

      <div className={sidebarClass} onClick={(e) => e.stopPropagation()}>
        {menus.map((value) => (
          <div
            key={value.key}
            className="py-4 pl-4 pr-4 font-semibold flex items-center justify-between"
          >
            {value.key !== "Home" ? (
              <button
                className="text-left font-bold"
                onClick={() => handleCategoryClick(value.key)}
              >
                {value.key}
                {value.submenu && value.submenu.length > 0 && (
                  <FontAwesomeIcon icon={faChevronRight} />
                )}
              </button>
            ) : (
              <span className="text-left font-bold">{value.key}</span>
            )}
          </div>
        ))}
      </div>

      {submenuVisible && (
        <div className={submenuClass}>
          <button
            className="py-4 pl-4 pr-4 font-bold flex items-center"
            onClick={firstHandleBackButtonClick}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="mr-2 font-semibold"
            />
            {selectedCategory}
          </button>
          {menus
            .filter((menu) => menu.key === selectedCategory)
            .map((menu) =>
              menu.submenu.map((item) => (
                <button
                  key={item.key}
                  className="py-4 pl-4 pr-4 font-semibold flex items-center justify-between"
                  onClick={() => handleSubmenuClick(item.key)} // Pass item.key as the argument
                >
                  {item.key}
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              ))
            )}
        </div>
      )}

      {thirdSubmenuVisible && (
        <div className={thirdSubmenuClass}>
          <div className="py-4 pl-4 pr-4 font-semibold flex">
            <button className="" onClick={secondHandleBackButtonClick}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <div className="items-center">{selectedSubmenu}</div>
            </button>
          </div>
          {menus
            .filter((menu) => menu.key === selectedCategory)
            .map((menu) =>
              menu.submenu
                .filter((sub) => sub.key === selectedSubmenu)[0] // Check if this filtering is correct
                .submenu.map(
                  (
                    thirdMenu // Ensure correct mapping of thirdMenu items
                  ) => {
                    return (
                      <div
                        key={thirdMenu}
                        className="py-4 pl-4 pr-4 font-semibold flex items-center justify-between"
                        onClick={() => handleThirdSubmenuClick(thirdMenu)}
                      >
                        <button className="cursor-pointer text-left font-bold">
                          {thirdMenu}
                        </button>
                      </div>
                    );
                  }
                )
            )}
        </div>
      )}
    </div>
  );
}
