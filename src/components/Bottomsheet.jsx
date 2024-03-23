import React, { useState } from "react";

export default function Bottomsheet({
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
    setSelectedOption(value); // Update the selected option state when a radio button is clicked
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
          <div className="bottom-sheet-footer bg-black text-white hover:bg-[#DEF81C] hover:text-black mt-4 p-2 flex justify-center">
            <button className="apply-button flex items-center">Apply</button>
          </div>
        </div>
      );
    } else {
      // Desktop view
      return (
        <>
          <div class="relative inline-block text-left">
            {/* <div>
              <button
                type="button"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Sort by
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div> */}

            {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            {/* <div className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 aria-expanded">
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
            </div> */}
            <div
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
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
        </>
        // <div className="dropdown-menu flex-col  mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-20">
        //   <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
        //     <input
        //       type="radio"
        //       value="lowToHigh"
        //       className="mr-2"
        //       checked={selectedOption === 'lowToHigh'}
        //       onChange={() => handleRadioChange('lowToHigh')}
        //     />
        //     Price - Low to High
        //   </label>
        //   <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
        //     <input
        //       type="radio"
        //       value="highToLow"
        //       className="mr-2"
        //       checked={selectedOption === 'highToLow'}
        //       onChange={() => handleRadioChange('highToLow')}
        //     />
        //     Price - High to Low
        //   </label>
        //   <label className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
        //     <input
        //       type="radio"
        //       value="ratings"
        //       className="mr-2"
        //       checked={selectedOption === 'ratings'}
        //       onChange={() => handleRadioChange('ratings')}
        //     />
        //     Ratings
        //   </label>
        // </div>
      );
    }
  };

  return <>{bottomSheetVisible && renderSortBy()}</>;
}
