import React, { useState, useEffect } from "react";
import axios from "axios";
import DeskNav from "../components/DeskNav";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { Navbar } from "../components/navbar";

export default function ProductList() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(""); // State for selected sorting option
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.storefront.wdb.skooldio.dev/products"
        );
        setData(response.data.data); // Assuming data structure
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (e.target.id === "bottomsheet") {
      toggleBottomSheet();
    }
  };

  const handleRadioChange = (value) => {
    setSelectedOption(value);

    // Implement sorting logic here
    if (value === "lowToHigh") {
      setData(
        [...data].sort(
          (a, b) =>
            (a.promotionalPrice || a.price) - (b.promotionalPrice || b.price)
        )
      ); // Sort by price low to high
    } else if (value === "highToLow") {
      setData(
        [...data].sort(
          (a, b) =>
            (b.promotionalPrice || b.price) - (a.promotionalPrice || a.price)
        )
      ); // Sort by price high to low
    } else if (value === "ratings") {
      setData([...data].sort((a, b) => b.ratings - a.ratings)); // Sort by ratings high to low (descending)
    }

    toggleBottomSheet(); // Close the bottom sheet
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setOpenSidebar(!openSidebar); // Open or close the Sidebar by toggling the menu
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar setOpenSidebar={setOpenSidebar} toggleMenu={toggleMenu} />
      <div className="main-content p-6">
        {/* Add flexbox layout */}
        {!isMobile && (
          <div className="flex">
            <DeskNav />
            <div className="flex">
              <div className="name font-bold py-4">Women's Clothing</div>
              <div className="">
                <button
                  className="sort-button-container items-center z-50 text-center absolute top-20 right-5 flex border border-[#C1CD00] px-2 py-2"
                  onClick={toggleBottomSheet}
                >
                  Sort by
                  <img
                    className="items-center"
                    src="../src/assets/chevron-down.svg"
                    alt="Sort by"
                  />
                </button>
              </div>
              <div className="flex absolute top-20 flex-wrap gap-4 py-16">
                {data &&
                  data.map((product, index) => (
                    <ProductCard
                      key={index}
                      image={product.imageUrls[0]}
                      name={product.name}
                      price={product.price}
                      promotionalPrice={product.promotionalPrice}
                      description={product.description}
                      rating={product.ratings}
                      className=""
                    />
                  ))}
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <>
            <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
            <button onClick={() => setOpenSidebar(true)}>Open</button>
            <div className="grid">
              <div className="name font-bold py-2 text-center items-center">
                Women's Clothing
              </div>
              <div className="">
                <button
                  className="sort-button sort-button-container text-center self-center px-1 absolute top-20 right-10 w-30 h-10"
                  onClick={toggleBottomSheet}
                >
                  <div className="flex items-center">
                    Sort by
                    <img
                      className="ml-2"
                      src="../src/assets/filter.svg"
                      alt="Sort by"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
              {data &&
                data.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.imageUrls[0]}
                    name={product.name}
                    price={product.price}
                    promotionalPrice={product.promotionalPrice}
                    description={product.description}
                    rating={product.ratings}
                    className="w-1/3 flex flex-wrap"
                  />
                ))}
            </div>
          </>
        )}

        {bottomSheetVisible && (
          <div
            id="bottomsheet"
            className={`${
              isMobile
                ? "bottom-sheet fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-4 px-8"
                : "text-left flex justify-items-start absolute top-40 right-5"
            }`}
            onClick={handleClickOutside}
          >
            {isMobile ? (
              <>
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
                <div className="flex flex-col">
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
                <button className="bottom-sheet-footer bg-black text-white hover:bg-[#DEF81C] hover:text-black mt-4 p-2 w-full flex justify-center">
                  <div className="apply-button flex items-center">Apply</div>
                </button>
              </>
            ) : (
              <div
                id="bottomsheet-container"
                className="bottom-0 right-0 w-56 rounded-md bg-white shadow-lg ring-1 ring-[#C1CD00] ring-opacity-5"
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
