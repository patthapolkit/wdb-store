import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import DeskNav from "../components/DeskNav";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [header, setHeader] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const categories = searchParams.get("categories");
  const collection = searchParams.get("collection");
  const sort = searchParams.get("sort");

  const formatText = (text) => {
    if (text === null) return;
    return text.replace(/-/g, " ").toUpperCase();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.storefront.wdb.skooldio.dev/products",
          {
            params: {
              sort: sort,
              categories: categories,
              collection: collection,
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    setLoading(true);
    fetchData();
    setHeader(
      formatText(categories) || formatText(collection) || "All Products"
    );
    setLoading(false);
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
    if (value === "lowToHigh") {
      setData(
        [...data].sort(
          (a, b) =>
            (a.promotionalPrice || a.price) - (b.promotionalPrice || b.price)
        )
      );
    } else if (value === "highToLow") {
      setData(
        [...data].sort(
          (a, b) =>
            (b.promotionalPrice || b.price) - (a.promotionalPrice || a.price)
        )
      );
    } else if (value === "ratings") {
      setData([...data].sort((a, b) => b.ratings - a.ratings));
    }
    toggleBottomSheet();
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <>
      {!isMobile && (
        <div className="flex flex-row px-[160px] py-24 justify-between gap-32 mb-44">
          <DeskNav />
          <div className="flex flex-col w-full">
            <div className="flex-row flex w-full justify-between">
              <h1 className="text-3xl font-bold mb-16">{header}</h1>
              <button
                className="items-center flex border w-fit h-fit border-primary-base px-2 py-2 focus:outline-none"
                onClick={toggleBottomSheet}
              >
                <p>Sort by</p>
                <img src="/src/assets/chevron-down.svg" alt="" />
              </button>
            </div>
            <div className="flex flex-wrap gap-10 w-full">
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
                    permalink={product.permalink}
                  />
                ))}
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex flex-col items-center gap-5 mt-6 px-4 mb-9">
          <h1 className="font-bold text-[32px] ">{header}</h1>
          <div className="flex flex-row justify-center items-center self-end">
            <button onClick={toggleBottomSheet}>
              <div className="flex flex-row justify-center items-center self-end">
                <p>Sort by</p>
                <img className="ml-2" src="/src/assets/sort.svg" alt="Sort" />
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-10">
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
                  permalink={product.permalink}
                />
              ))}
          </div>
        </div>
      )}

      {bottomSheetVisible && (
        <div
          className={`${
            isMobile
              ? "fixed bottom-0 left-0 w-full bg-white border-t rounded-t-2xl pt-8 pb-6 px-4"
              : "text-left flex justify-start absolute top-52 right-40 border border-primary-base bg-white"
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
              <div className="flex flex-col gap-4">
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
    </>
  );
}
