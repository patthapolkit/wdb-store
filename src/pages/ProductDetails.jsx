import React, { Component, useEffect, useState } from "react";
import LeftArrow from "../components/icons/LeftArrow";
import RightArrow from "../components/icons/RightArrow";
import SaleLabel from "../components/labels/SaleLabel";
import OutStockLabel from "../components/labels/OutStockLabel";
import GreyStar from "../components/icons/GreyStar";
import GreenStar from "../components/icons/GreenStar";
import axios from "axios";

export default function ProductDetails() {
  const permalink = "shirts-city-commuter-coat";
  const baseurl = "https://api.storefront.wdb.skooldio.dev/products/";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [rating, setRating] = useState(0);
  const [colorData, setColorData] = useState([]);
  const [sizeData, setSizeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOutStock, setIsOutStock] = useState(false);

  const checkIsOutStock = (variants) => {
    let sum = 0;
    variants.forEach((sku) => {
      sum += sku?.remains ?? 0;
    });
    if (sum === 0) setIsOutStock(true);
  };

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? data.imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === data.imageUrls.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePreviewClick = (index) => {
    setCurrentIndex(index);
  };

  const getSizes = (variants) => {
    const tempCollect = [];
    const sizes = [];
    variants.forEach((data) => {
      if (!tempCollect.includes(data.size)) tempCollect.push(data.size);
    });
    tempCollect.forEach((size) => {
      if (tempCollect.includes("XS") && !sizes.includes("XS")) sizes.push("XS");
      if (tempCollect.includes("S") && !sizes.includes("S")) sizes.push("S");
      if (tempCollect.includes("M") && !sizes.includes("M")) sizes.push("M");
      if (tempCollect.includes("L") && !sizes.includes("L")) sizes.push("L");
      if (tempCollect.includes("XL") && !sizes.includes("XL")) sizes.push("XL");
    });
    setSizeData(sizes);
  };

  const getColors = (variants) => {
    const tempCollect = [];
    variants.forEach((data) => {
      const newColorData = {
        code: data.colorCode,
        name: data.color,
      };
      tempCollect.push(newColorData);
    });
    const uniqueVariants = [
      ...new Set(tempCollect.map((obj) => JSON.stringify(obj))),
    ].map((str) => JSON.parse(str));
    setColorData(uniqueVariants);
    // console.log(uniqueVariants);
  };

  const calculateStar = (num) => {
    if (num - Math.floor(num) > 0.4) {
      setRating(Math.ceil(num));
    } else {
      setRating(Math.floor(num));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(baseurl + permalink);
        setData(response);
        calculateStar(response?.ratings ?? 0);
        getColors(response?.variants ?? []);
        getSizes(response?.variants ?? []);
        checkIsOutStock(response?.variants ?? []);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <>
          {isOutStock && (
            <>
              {/*Product Detail */}
              <div className="flex flex-col flex-wrap mx-4 mt-24 lg:mx-40 lg:mt-[171px]">
                <div className="flex flex-col lg:flex-row lg:gap-x-10">
                  {/*Image review*/}
                  <div className="flex flex-col gap-y-4 mb-5  lg:w-[780px] lg:gap-y-[31px]">
                    <div className="relative w-full h-full">
                      <div className="flex w-full h-full">
                        {data.imageUrls.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full opacity-0 transition duration-500 ease-in-out ${
                              index === currentIndex ? "opacity-100 z-10" : ""
                            }`}
                          >
                            <OutStockLabel />
                            <img
                              src={image}
                              alt={"Image"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 z-10 btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30 lg:w-[70px] lg:h-[70px]"
                        disabled={currentIndex === 0}
                      >
                        <LeftArrow />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 z-10 btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30 lg:w-[70px] lg:h-[70px]"
                        disabled={currentIndex === data.imageUrls.length - 1}
                      >
                        <RightArrow />
                      </button>
                    </div>
                    <div className="flex justify-between w-full gap-2">
                      {data?.imageUrls?.map((img, index) => (
                        <button
                          key={img}
                          className="btn px-0 flex-1 h-auto"
                          onClick={() => handlePreviewClick(index)}
                        >
                          <img src={img} alt={`Image ${img}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 lg:mt-0">
                    {/*Details*/}
                    <div className="flex flex-col gap-y-6 lg:my-0">
                      {/*Description*/}
                      <div className="flex flex-col gap-y-1 lg:gap-y-4">
                        <p className="font-semibold text-lg/[24px] lg:text-2xl">
                          ID : {data.skuCode}
                        </p>
                        <p className="font-bold text-wrap text-5xl/[60px] lg:text-5xl/[72px]">
                          {data.name}
                        </p>
                        <p className="font-semibold text-lg/[24px] text-wrap text-secondary-700">
                          {data.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-y-2 h-20 lg:h-[100px]">
                        <p className="text-32px font-bold lg:text-5xl">
                          THB {data.price}
                        </p>
                        <p className="font-semibold text-danger text-base lg:text-2xl">
                          Out of stock
                        </p>
                      </div>

                      <div className="flex h-10 w-44 items-center">
                        {Array(rating)
                          .fill(null)
                          .map((_, index) => (
                            <GreenStar className="h-full w-full" key={index} />
                          ))}
                        {Array(5 - rating)
                          .fill(null)
                          .map((_, index) => (
                            <GreyStar className="h-full w-full" key={index} />
                          ))}
                      </div>
                    </div>
                    {/*Customization form*/}
                    <div className="mt-[72px]">
                      <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-y-2">
                          <label
                            htmlFor="button-selection"
                            className="text-sm text-secondary-700"
                          >
                            Color
                          </label>
                          <div className="flex gap-x-2 justify-between h-[82px] lg:justify-start">
                            {colorData.map((color) => (
                              <div
                                key={color.code}
                                className="flex flex-col gap-y-2 items-center w-full lg:w-[100px] "
                              >
                                <button
                                  type="button"
                                  className="aspect-square w-[54px] h-[54px]"
                                  style={{ backgroundColor: color.code }}
                                  disabled={true}
                                ></button>
                                <p className="text-sm text-">{color.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 h-20">
                          <div className="flex justify-between items-center">
                            <label
                              htmlFor="button-selection"
                              className="text-sm text-secondary-700"
                            >
                              Size
                            </label>
                            <a className="text-xs text-info">What's my size?</a>
                          </div>
                          <div className="flex gap-x-2 justify-between h-[54px]">
                            {sizeData.map((size, index) => (
                              <button
                                kay={index}
                                type="button"
                                className="aspect-square w-full border border-secondary-300 text-secondary-500"
                                disabled={true}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 lg:w-[139px]">
                          <label
                            htmlFor="dropdown-selection"
                            className="text-sm text-secondary-700"
                          >
                            Qty.
                          </label>
                          <select
                            id="dropdown-selection"
                            name="dropdown-selection"
                            className="h-[54px] rounded-md border border-secondary-300"
                            disabled={true}
                          >
                            <option
                              className="text-base text-secondary-500"
                              value="1"
                            >
                              1
                            </option>
                            <option
                              className="text-base text-secondary-500"
                              value="2"
                            >
                              2
                            </option>
                            <option
                              className="text-base text-secondary-500"
                              value="3"
                            >
                              3
                            </option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="btn rounded-none bg-secondary-base text-white font-normal text-base h-[54px] w-full"
                          disabled={true}
                        >
                          Add to cart
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/*People also like these*/}
                <div className="flex flex-col mb-8">
                  <p className="font-bold text-32px">People also like these</p>
                  {/* Product Card */}
                </div>
              </div>
            </>
          )}
          {/*Product Detail */}
          {!isOutStock && (
            <>
              <div className="flex flex-col flex-wrap mx-4 mt-24 lg:mx-40 lg:mt-[171px]">
                <div className="flex flex-col lg:flex-row lg:gap-x-10">
                  {/*Image review*/}
                  <div className="flex flex-col gap-y-4 mb-5  lg:w-[780px] lg:gap-y-[31px]">
                    <div className="relative w-full h-full">
                      <div className="flex w-full h-full">
                        {data.imageUrls.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full opacity-0 transition duration-500 ease-in-out ${
                              index === currentIndex ? "opacity-100 z-10" : ""
                            }`}
                          >
                            {/* <OutStockLabel /> */}
                            {data.price !== data.promotionalPrice && (
                              <SaleLabel />
                            )}
                            <img
                              src={image}
                              alt={"Image"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 z-10 btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30 lg:w-[70px] lg:h-[70px]"
                        disabled={currentIndex === 0}
                      >
                        <LeftArrow />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 z-10 btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30 lg:w-[70px] lg:h-[70px]"
                        disabled={currentIndex === data.imageUrls.length - 1}
                      >
                        <RightArrow />
                      </button>
                    </div>
                    <div className="flex justify-between w-full gap-2">
                      {data?.imageUrls?.map((img, index) => (
                        <button
                          key={img}
                          className="btn px-0 flex-1 h-auto"
                          onClick={() => handlePreviewClick(index)}
                        >
                          <img src={img} alt={`Image ${img}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 lg:mt-0">
                    {/*Details*/}
                    <div className="flex flex-col gap-y-6 lg:my-0">
                      {/*Description*/}
                      <div className="flex flex-col gap-y-1 lg:gap-y-4">
                        <p className="font-semibold text-lg/[24px] lg:text-2xl">
                          ID : {data.skuCode}
                        </p>
                        <p className="font-bold text-wrap text-5xl/[60px] lg:text-5xl/[72px]">
                          {data.name}
                        </p>
                        <p className="font-semibold text-lg/[24px] text-wrap text-secondary-700">
                          {data.description}
                        </p>
                      </div>
                      {data.price == data.promotionalPrice ? (
                        <p className="text-32px font-bold lg:text-5xl/[60px]">
                          THB {data.price}
                        </p>
                      ) : (
                        <div className="flex flex-col gap-y-2 h-24 lg:h-[108px]">
                          <p className="text-32px font-bold py-2 bg-danger text-white w-fit px-[10px]">
                            THB {data.promotionalPrice}
                          </p>
                          <p className="font-semibold text-base">
                            From{" "}
                            <span className="line-through">
                              THB {data.price}
                            </span>
                          </p>
                        </div>
                      )}

                      {/* <div className="flex flex-col gap-y-2 h-20 lg:h-[100px]">
                <p className="text-32px font-bold lg:text-5xl">THB 1,000.00</p>
                <p className="font-semibold text-danger text-base lg:text-2xl">
                  Out of stock
                </p>
              </div> */}

                      <div className="flex h-10 w-44 items-center">
                        {Array(rating)
                          .fill(null)
                          .map((_, index) => (
                            <GreenStar className="h-full w-full" key={index} />
                          ))}
                        {Array(5 - rating)
                          .fill(null)
                          .map((_, index) => (
                            <GreyStar className="h-full w-full" key={index} />
                          ))}
                      </div>
                    </div>
                    {/*Customization form*/}
                    <div className="mt-[72px]">
                      <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-y-2">
                          <label
                            htmlFor="button-selection"
                            className="text-sm text-secondary-700"
                          >
                            Color
                          </label>
                          <div className="flex gap-x-2 justify-between h-[82px] lg:justify-start">
                            {colorData.map((color) => (
                              <div
                                key={color.code}
                                className="flex flex-col gap-y-2 items-center w-full lg:w-[100px] "
                              >
                                <button
                                  type="button"
                                  className="aspect-square w-[54px] h-[54px]"
                                  style={{ backgroundColor: color.code }}
                                ></button>
                                <p className="text-sm">{color.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 h-20">
                          <div className="flex justify-between items-center">
                            <label
                              htmlFor="button-selection"
                              className="text-sm text-secondary-700"
                            >
                              Size
                            </label>
                            <a className="text-xs text-info">What's my size?</a>
                          </div>
                          <div className="flex gap-x-2 justify-between h-[54px]">
                            {sizeData.map((size, index) => (
                              <button
                                kay={index}
                                type="button"
                                className="aspect-square w-full border border-secondary-300"
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2 lg:w-[139px]">
                          <label
                            htmlFor="dropdown-selection"
                            className="text-sm text-secondary-700"
                          >
                            Qty.
                          </label>
                          <select
                            id="dropdown-selection"
                            name="dropdown-selection"
                            className="h-[54px] rounded-md border border-secondary-300"
                          >
                            <option className="text-base" value="1">
                              1
                            </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="btn rounded-none bg-secondary-base text-white font-normal text-base h-[54px] w-full"
                        >
                          Add to cart
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                {/*People also like these*/}
                <div className="flex flex-col mb-8">
                  <p className="font-bold text-32px">People also like these</p>
                  {/* Product Card */}
                </div>
              </div>
            </>
          )}
        </>
      )}
      {/* footer */}
    </div>
  );
}
