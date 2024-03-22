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
  const [currentImg, setCurrentImg] = useState("");
  const [count, setCount] = useState(0);

  const handlePreviewClick = (event) => {
    const src = event.target.src;
    setCurrentImg(src);
  };

  const colorOfButton = (code) => {
    const res = `bg-[${code}] aspect-square w-[54px]`;
    console.log(res);
    return res;
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
        setCurrentImg(response.imageUrls[0]);
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
          {/*Product Detail */}
          <div className="flex flex-col flex-wrap mx-4 mt-24 lg:mx-40 lg:mt-[171px]">
            <div className="flex flex-col lg:flex-row lg:gap-x-10">
              {/*Image review*/}
              <div className="flex flex-col gap-y-4 mb-5  lg:w-[780px] lg:gap-y-[31px]">
                <div className="carousel">
                  <div id="slide1" className="carousel-item relative w-full">
                    {/* <SaleLabel /> */}
                    {/* <OutStockLabel /> */}
                    <img
                      src={currentImg}
                      alt="Previewing Image"
                      className="w-full object-cover"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                      <a
                        href="#slide4"
                        className="btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30 lg:w-[70px] lg:h-[70px]"
                      >
                        <LeftArrow />
                      </a>
                      <a
                        href="#slide2"
                        className="btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30 lg:w-[70px] lg:h-[70px]"
                      >
                        <RightArrow />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full gap-2">
                  {data?.imageUrls?.map((img) => (
                    <a
                      key={img}
                      href="#item1"
                      className="btn px-0 flex-1 h-auto"
                      onClick={handlePreviewClick}
                    >
                      <img src={img} alt={`Image ${img}`} />
                    </a>
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
                        <span className="line-through">THB {data.price}</span>
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
                            className="flex flex-col gap-y-2 items-center w-full lg:w-[100px]"
                          >
                            <button
                              type="button"
                              className={colorOfButton(color.code)}
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
      {/* footer */}
    </div>
  );
}
