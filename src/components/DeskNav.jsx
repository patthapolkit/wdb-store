import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    key: "Tops",
    submenu: [
      "All items",
      "T-shirts",
      "Cardigans",
      "Knitwear & Sweaters",
      "Sweatshirts & Hoodies",
      "Fleece",
    ],
  },
  { key: "Bottoms", submenu: ["All items", "Jeans", "Shorts"] },
  {
    key: "Dress & Jumpsuits",
    submenu: ["All items", "Long dress", "Short dress", "Mini dress"],
  },
  { key: "Accessories", submenu: ["All items", "Rings", "Necklaces"] },
  { key: "Collections", submenu: ["All items", "Summer", "Winter"] },
];

const DeskNav = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [activated, setActivated] = useState(null);

  const handleCategoryClick = (category, index) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setFocusedIndex(index); // Set focused index when category is clicked
  };

  return (
    <div className="sidebar text-left flex flex-col font-bold bg-white">
      {categories.map((category, index) => (
        <div key={category.key}>
          <button
            className="category-button flex items-center justify-between px-4 py-4"
            onClick={() => handleCategoryClick(category.key, index)}
          >
            {category.key}
            <FontAwesomeIcon
              icon={
                expandedCategory === category.key ? faChevronUp : faChevronDown
              }
            />
          </button>
          {expandedCategory === category.key && (
            <div className="submenu font-semibold">
              {category.submenu.map((item, subIndex) => (
                <button
                  key={`${item}-${subIndex}`}
                  className="submenu-item py-2 px-4 hover:bg-[#F2F2F2] font-semibold display: flex flex-grow: 1"
                  onClick={() => {
                    handleCategoryClick(category.key, subIndex);
                    setActivated(item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DeskNav;
