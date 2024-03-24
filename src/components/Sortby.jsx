import React, { useState } from "react";

export default function Sortby({
  bottomSheetVisible,
  toggleBottomSheet,
  handleOutsideClick,
  isMobile,
}) {
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected radio button value

  const handleClickOutside = (e) => {
    if (e.target.id === "bottomsheet") {
      handleOutsideClick();
    }
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);

    // Additionally, close the bottom sheet on desktop view
    if (!isMobile) {
      toggleBottomSheet();
    }
  };

  const renderSortBy = () => {
    // Check if the screen width is less than or equal to 768px (mobile view)
    if (isMobile) {
      return (
        <div
          id="bottomsheet"
          className="bottom-sheet fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-4 px-8"
          onClick={handleClickOutside}
        >
          <div className="bottom-sheet-header flex justify-between items-center mb-4">
            <button
              className="cancel-button text-info font-normal"
              onClick={toggleBottomSheet}
            >
              Cancel
            </button>
            <h3 className="sort-by font-semibold">Sort by</h3>
            <button className="reset-button text-info font-normal">
              Reset
            </button>
          </div>
          <div className="bottom-sheet-content">
            <div className="radio-buttons">
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  value="lowToHigh"
                  checked={selectedOption === "lowToHigh"}
                  onChange={() => handleRadioChange("lowToHigh")}
                />
                Price - Low to High
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  value="highToLow"
                  checked={selectedOption === "highToLow"}
                  onChange={() => handleRadioChange("highToLow")}
                />
                Price - High to Low
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  value="ratings"
                  checked={selectedOption === "ratings"}
                  onChange={() => handleRadioChange("ratings")}
                />
                Ratings
              </label>
            </div>
          </div>
          <button className="bottom-sheet-footer bg-black text-white hover:bg-[#DEF81C] hover:text-black mt-4 p-2 w-full flex justify-center">
            <div className="apply-button flex items-center">Apply</div>
          </button>
        </div>
      );
    } else {
      // Desktop view
      return (
        <>
          <div class="absolute justify-self-end	flex right-0 text-left">
            <div
              id="bottomsheet"
              className="bottom-sheet accent-[#DEF81C] absolute top-full right-0 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#C1CD00] ring-opacity-5 focus:outline-none z-50 transform translate-y-0"
              onClick={handleClickOutside}
            >
              <label className="flex items-center px-4 py-2">
                <input
                  type="radio"
                  className="mr-2"
                  value="lowToHigh"
                  checked={selectedOption === "lowToHigh"}
                  onChange={() => handleRadioChange("lowToHigh")}
                />
                Price - Low to High
              </label>
              <label className="flex items-center px-4 py-2">
                <input
                  type="radio"
                  className="mr-2"
                  value="highToLow"
                  checked={selectedOption === "highToLow"}
                  onChange={() => handleRadioChange("highToLow")}
                />
                Price - High to Low
              </label>
              <label className="flex items-center px-4 py-2">
                <input
                  type="radio"
                  className="mr-2"
                  value="ratings"
                  checked={selectedOption === "ratings"}
                  onChange={() => handleRadioChange("ratings")}
                />
                Ratings
              </label>
            </div>
          </div>
        </>
      );
    }
  };

  return <>{bottomSheetVisible && renderSortBy()}</>;
}
