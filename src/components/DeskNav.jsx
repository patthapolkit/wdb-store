import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../constants/deskMenus";

export default function DeskNav() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="flex flex-col w-72">
      {categories.map((category) => (
        <div key={category.key}>
          <button
            className="flex w-full items-center justify-between font-semibold text-lg py-3"
            onClick={() => handleCategoryClick(category.key)}
          >
            {category.key}
            <FontAwesomeIcon
              icon={
                expandedCategory === category.key ? faChevronUp : faChevronDown
              }
            />
          </button>
          {expandedCategory === category.key && (
            <div className="text-sm flex flex-col items-start font-semibold w-full">
              {category.submenu.map((item, subIndex) => (
                <button
                  key={`${item}-${subIndex}`}
                  className="py-2.5 px-2.5 hover:bg-primary-base w-full text-left last:border-b-[1px]"
                  onClick={() => {
                    handleCategoryClick(category.key, subIndex);
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
}
