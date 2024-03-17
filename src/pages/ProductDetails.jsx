import React, { Component } from "react";
import LeftArrow from "../components/icons/LeftArrow";
import RightArrow from "../components/icons/RightArrow";
import SaleLabel from "../components/labels/SaleLabel";
import OutStockLabel from "../components/labels/OutStockLabel";
import GreyStar from "../components/icons/GreyStar";
import GreenStar from "../components/icons/GreenStar";

export default function ProductDetails() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      {/*Product Detail */}
      <div className="flex flex-col flex-wrap mx-4 mt-24 lg:mx-40 lg:mt-44">
        {/*Image review*/}
        <div className="flex flex-col gap-4 mb-5">
          <div className="carousel aspect-square ">
            <div id="slide1" className="carousel-item relative w-full">
              <SaleLabel />
              {/* <OutStockLabel /> */}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FtrWAP3Q0eBJTUjhmP683-Gemini%20Generated%20(8).jpeg?alt=media&token=cf7b47de-a656-4608-98a7-96a6b0cc7a2c"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                <a
                  href="#slide4"
                  className="btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30"
                >
                  <LeftArrow />
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle w-8 h-8 min-h-6 border-none bg-secondary-50/30"
                >
                  <RightArrow />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full gap-2">
            <a href="#item1" className="btn px-0 aspect-square flex-1 h-auto">
              <img src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FgoquKCU3fvbDahQPM3Zw-Gemini%20Generated%20Image%20(5).jpeg?alt=media&token=04c0b4fb-e504-4eb5-bc58-b8f9378cf038" />
            </a>
            <a href="#item2" className="btn px-0 aspect-square flex-1 h-auto">
              <img src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FgoquKCU3fvbDahQPM3Zw-Gemini%20Generated%20Image%20(5).jpeg?alt=media&token=04c0b4fb-e504-4eb5-bc58-b8f9378cf038" />
            </a>
            <a href="#item3" className="btn px-0 aspect-square flex-1 h-auto">
              <img src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FgoquKCU3fvbDahQPM3Zw-Gemini%20Generated%20Image%20(5).jpeg?alt=media&token=04c0b4fb-e504-4eb5-bc58-b8f9378cf038" />
            </a>
            <a href="#item4" className="btn px-0 aspect-square flex-1 h-auto">
              <img src="https://firebasestorage.googleapis.com/v0/b/wdb-storefront-project-api.appspot.com/o/products%2FdBt7jOQ9qnKvs8aWrxb5%2F_images%2FgoquKCU3fvbDahQPM3Zw-Gemini%20Generated%20Image%20(5).jpeg?alt=media&token=04c0b4fb-e504-4eb5-bc58-b8f9378cf038" />
            </a>
          </div>
        </div>
        <div className="mt-5">
          {/*Details*/}
          <div className="flex flex-col gap-y-6 my-2.5">
            {/*Description*/}
            <div>
              <p className="font-semibold text-lg/[24px]">ID : 104860</p>
              <p className="font-bold text-wrap text-40px">
                Reyon Long Sleeve Shirt
              </p>
              <p className="font-semibold text-lg/[24px] text-wrap text-secondary-700">
                Soft and smooth feel. Wrinkle-resistant for easy care after
                washing.
              </p>
            </div>
            {/* <p className="text-32px font-bold">THB 1,000.00</p> */}
            {/* <div className="flex flex-col gap-y-2 h-20">
              <p className="text-32px font-bold">THB 1,000.00</p>
              <p className="text-lg font-semibold text-danger">Out of stock</p>
            </div> */}
            <div className="flex flex-col gap-y-2 h-20">
              <p className="text-32px font-bold py-2 bg-danger text-white w-fit px-[10px]">
                THB 1,000.00
              </p>
              <p className="text-lg font-semibold">
                From <span className="line-through">THB 2,000.00</span>
              </p>
            </div>
            <div className="flex h-10 w-44 items-center">
              <GreenStar className="h-full w-full" />
              <GreenStar className="h-full w-full" />
              <GreenStar className="h-full w-full" />
              <GreenStar className="h-full w-full" />
              <GreyStar className="h-full w-full" />
            </div>
          </div>
          {/*Customization form*/}
          <div className="my-20">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-y-2">
                <label
                  for="button-selection"
                  className="text-base text-secondary-700"
                >
                  Color
                </label>
                <div className="flex gap-x-2 justify-between h-20">
                  <div className="flex flex-col gap-y-2 items-center w-full">
                    <button
                      type="button"
                      className="bg-[#000000] aspect-square w-14 h-14"
                    ></button>
                    <p className="text-base">Black</p>
                  </div>
                  <div className="flex flex-col gap-y-2 items-center w-full">
                    <button
                      type="button"
                      className="bg-[#0000FF] aspect-square w-14 h-14"
                    ></button>
                    <p className="text-base">Blue</p>
                  </div>
                  <div className="flex flex-col gap-y-2 items-center w-full">
                    <button
                      type="button"
                      className="bg-[#008000] aspect-square w-14 h-14"
                    ></button>
                    <p className="text-base">Green</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 h-20">
                <div className="flex justify-between items-center">
                  <label
                    for="button-selection"
                    className="text-base text-secondary-700"
                  >
                    Size
                  </label>
                  <a className="text-xs text-info">What's my size?</a>
                </div>
                <div className="flex gap-x-2 justify-between h-14">
                  <button
                    type="button"
                    className="aspect-square w-full border border-secondary-300"
                  >
                    XS
                  </button>
                  <button
                    type="button"
                    className="aspect-square w-full border border-secondary-300"
                  >
                    S
                  </button>
                  <button
                    type="button"
                    className="aspect-square w-full border border-secondary-300"
                  >
                    M
                  </button>
                  <button
                    type="button"
                    className="aspect-square w-full border border-secondary-300"
                  >
                    L
                  </button>
                  <button
                    type="button"
                    className="aspect-square w-full border border-secondary-300"
                  >
                    XL
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-y-2">
                <label
                  for="dropdown-selection"
                  className="text-base text-secondary-700"
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
                class="btn rounded-none bg-secondary-base text-white font-normal text-base h-[54px] w-full"
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
        {/*People also like these*/}
        <div className="flex flex-col">
          <p className="font-bold text-32px">People also like these</p>
          {/* Product Card */}
        </div>
      </div>
      {/* footer */}
    </div>
  );
}
