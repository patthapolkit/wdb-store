import React, { useState, useEffect, useRef } from "react";

export default function Sidebar(props) {
  // const [menuVisible, setMenuVisible] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const [thirdSubmenuVisible, setThirdSubmenuVisible] = useState(false);
  // const [isDesktop, setIsDesktop] = useState(false); // Add isDesktop state
  // const [sideDeskVisible, setSideDeskVisible] = useState(true); // Set sidebar sheet visible by default on desktop

  console.log("props :>> ", props);
  const { open: openSidebar, setOpen } = props;

  const sidebarRef = useRef(null);
  // const hamburgerRef = useRef(null);

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

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       sidebarRef.current &&
  //       !sidebarRef.current.contains(event.target) &&
  //       hamburgerRef.current &&
  //       !hamburgerRef.current.contains(event.target)
  //     ) {
  //       setOpen(false);
  //     }
  //   }
  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.closest(".sidebar-sheet") &&
        !event.target.closest(".submenu-sheet") &&
        !event.target.closest(".third-submenu-sheet")
      ) {
        // Close all levels if clicked outside
        setOpen(false);
        setSubmenuVisible(false);
        setThirdSubmenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setOpen, sidebarRef]);

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [setOpen, sidebarRef]);

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   };
  // }, [setOpen, sidebarRef]);

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

  const sidebarClass = `sidebar-sheet z-50 fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    openSidebar ? "translate-x-0" : "-translate-x-full"
  }`;

  const submenuClass = `submenu-sheet z-50 fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    submenuVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  const thirdSubmenuClass = `third-submenu-sheet z-50 fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
    thirdSubmenuVisible ? "translate-x-0" : "-translate-x-full"
  }`;

  // const sidebarDeskClass = `side-desk-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
  //   sideDeskVisible ? "translate-x-0" : "-translate-x-full"
  // }`;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSubmenuVisible(true);
  };

  const handleSubmenuClick = (subMenu) => {
    setSelectedSubmenu(subMenu);
    setThirdSubmenuVisible(true);
  };

  const handleThirdSubmenuClick = (thirdMenu) => {
    setSelectedSubmenu(thirdMenu); // Set selected submenu to the clicked thirdMenu item
    setThirdSubmenuVisible(true); // Show the third submenu
  };

  const firstHandleBackButtonClick = () => {
    if (submenuVisible) {
      // Close submenu and reset submenu state
      setSubmenuVisible(false);
      setSelectedSubmenu(null);
    } else if (thirdSubmenuVisible) {
      // Close third submenu
      setThirdSubmenuVisible(false);
    } else {
      // Close entire sidebar and reset states
      setOpen(false);
      setSelectedCategory(null);
      setSelectedSubmenu(null);
    }
  };

  const secondHandleBackButtonClick = () => {
    if (thirdSubmenuVisible) {
      // Close third submenu
      setThirdSubmenuVisible(false);
    } else if (submenuVisible) {
      // Close submenu and reset submenu state
      setSubmenuVisible(false);
      setSelectedSubmenu(null);
    } else {
      // Close entire sidebar and reset states
      setOpen(false);
      setSelectedCategory(null);
      setSelectedSubmenu(null);
    }
  };

  return (
    <div className="bg-white">
      {/* <nav className="navbar flex justify-between items-center bg-gray-900 text-white px-4 py-2">
        <div className="navbar-left flex items-center">
          <div className="hamburger-menu cursor-pointer" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav> */}

      <div className={sidebarClass} onClick={(e) => e.stopPropagation()}>
        {/* <div ref={menuRef}></div> */}
        {menus.map((value) => (
          <div
            key={value.key}
            className="py-4 pl-4 pr-4 font-semibold flex flex-row items-center justify-between"
          >
            {value.key !== "Home" ? (
              <button
                className="text-left font-bold flex items-center justify-between"
                onClick={() => handleCategoryClick(value.key)}
              >
                {value.key}
                {value.submenu && value.submenu.length > 0 && (
                  <img
                    className="items-center"
                    src="../src/assets/right-arrow.svg"
                    alt="Sort by"
                  />
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
            <img
              className="items-center"
              src="../src/assets/left-arrow.svg"
              alt="Sort by"
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
                  onClick={(e) => {
                    handleSubmenuClick(item.key);
                    e.stopPropagation(); // Prevent closing on submenu click
                  }}
                >
                  {item.key}
                  <img
                    className="items-center"
                    src="../src/assets/right-arrow.svg"
                    alt="Sort by"
                  />
                </button>
              ))
            )}
        </div>
      )}

      {thirdSubmenuVisible && (
        <div className={thirdSubmenuClass}>
          <div className="py-4 pl-4 pr-4 font-semibold flex">
            <button className="" onClick={secondHandleBackButtonClick}>
              <img
                className="items-center"
                src="../src/assets/left-arrow.svg"
                alt="Sort by"
              />
              <div className="items-center">{selectedSubmenu}</div>
            </button>
          </div>
          {menus
            .filter((menu) => menu.key === selectedCategory)
            .map(
              (menu) =>
                menu.submenu.filter((sub) => sub.key === selectedSubmenu)[0]
                  .submenu && // Check if submenu exists before accessing it
                menu.submenu
                  .filter((sub) => sub.key === selectedSubmenu)[0]
                  .submenu.map((thirdMenu) => (
                    <div
                      key={thirdMenu}
                      className="py-4 pl-4 pr-4 font-semibold flex items-center justify-between"
                      onClick={() => handleThirdSubmenuClick(thirdMenu)}
                    >
                      <button className="cursor-pointer text-left font-bold">
                        {thirdMenu}
                      </button>
                    </div>
                  ))
            )}
        </div>
      )}
    </div>
  );
}
