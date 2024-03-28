import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftArrow from "../components/icons/LeftArrow";
import RightArrow from "../components/icons/RightArrow";
import SaleLabel from "../components/labels/SaleLabel";
import OutStockLabel from "../components/labels/OutStockLabel";
import GreyStar from "../components/icons/GreyStar";
import GreenStar from "../components/icons/GreenStar";
import axios from "axios";
import ProductCardContainer from "../components/ProductCardContainer";

export default function ProductDetails() {
  const { permalink } = useParams();
  const baseurl = "https://api.storefront.wdb.skooldio.dev/products/";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [rating, setRating] = useState(0);
  const [colorData, setColorData] = useState([]);
  const [sizeData, setSizeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOutStock, setIsOutStock] = useState(false);
  const [currentColor, setCurrentColor] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const [currentSku, setCurrentSku] = useState({});
  const [selectedValue, setSelectedValue] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    {
      isSubmit &&
        axios
          .post("https://api.storefront.wdb.skooldio.dev/carts", {
            items: [
              {
                skuCode: currentSku.skuCode,
                quantity: Number(selectedValue),
              },
            ],
          })
          .then((res) => {
            localStorage.setItem("cartId", res.data.id);
          });
    }
    return setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    // console.log(currentColor, currentSize);
    {
      currentColor !== "" && currentSize !== "" && getSku(selectedValue);
    }
  }, [currentColor, currentSize]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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

  const getSku = () => {
    const filterSku = data.variants.filter(
      (variant) =>
        variant.color === currentColor && variant.size === currentSize
    );
    console.log(filterSku[0]);
    setCurrentSku(filterSku?.[0]);
  };

  const handleSubmit = () => {
    console.log(selectedValue);
    // set price
    setTotalPrice(data.promotionalPrice * selectedValue);
    setIsSubmit(true);
    // console.log(totalPrice);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
    const sizeOrders = [];
    const sizeButton = [];
    variants.forEach((data) => {
      if (!tempCollect.includes(data.size)) tempCollect.push(data.size);
    });
    tempCollect.forEach(() => {
      if (tempCollect.includes("XS") && !sizeOrders.includes("XS"))
        sizeOrders.push("XS");
      if (tempCollect.includes("S") && !sizeOrders.includes("S"))
        sizeOrders.push("S");
      if (tempCollect.includes("M") && !sizeOrders.includes("M"))
        sizeOrders.push("M");
      if (tempCollect.includes("L") && !sizeOrders.includes("L"))
        sizeOrders.push("L");
      if (tempCollect.includes("XL") && !sizeOrders.includes("XL"))
        sizeOrders.push("XL");
    });
    sizeOrders;
    sizeOrders.forEach((size) => {
      const newSizeObj = {
        size: size,
        isClicked: false,
      };
      sizeButton.push(newSizeObj);
    });
    setSizeData(sizeButton);
  };

  const getColors = (variants) => {
    const tempCollect = [];
    variants.forEach((data) => {
      const newColorData = {
        code: data.colorCode,
        name: data.color,
        isClicked: false,
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

  return (
    <>
      <div className="flex flex-col">
        {/* Loading */}
        {loading ? (
          <div className="m-6 border shadow rounded-md mx-4 mt-10 lg:mx-40 lg:mt-10">
            {/* {Array(10)
              .fill(null)
              .map((_, index) => (
                <div className="animate-pulse flex space-x-4 my-8">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                      </div>
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              ))} */}
          </div>
        ) : (
          <>
            {/*Product Detail */}
            <div className="flex flex-col mx-4 mt-10 lg:mx-40 lg:mt-[171px]">
              {isOutStock && (
                <>
                  <div className="flex flex-col mb-20 lg:mb-[134px] lg:flex-row lg:gap-x-10">
                    {/*Image review*/}
                    <div className="flex flex-col gap-y-4 mb-5 h-[500px] lg:w-[780px] lg:gap-y-[31px]">
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
                              <GreenStar
                                className="h-full w-full"
                                key={index}
                              />
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
                              <a className="text-xs text-info">
                                What's my size?
                              </a>
                            </div>
                            <div className="flex gap-x-2 justify-between h-[54px]">
                              {sizeData.map((size, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  className="aspect-square w-full border border-secondary-300 text-secondary-500"
                                  disabled={true}
                                >
                                  {size.size}
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
                              className="h-[54px] border border-secondary-300 text-secondary-500"
                              disabled={true}
                            >
                              <option
                                className="text-base text-secondary-300"
                                value="out of stock"
                              >
                                Out of stock
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
                </>
              )}
              {!isOutStock && (
                <>
                  <div className="flex flex-col mb-20 lg:flex-row lg:gap-x-10">
                    {/*Image review*/}
                    <div className="flex flex-col gap-y-4 mb-5 h-full lg:h-[1008px] lg:w-[780px] lg:gap-y-[31px]">
                      <div className="relative w-full  h-[343px] lg:h-[780px]">
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
                        <div className="flex h-10 w-44 items-center">
                          {Array(rating)
                            .fill(null)
                            .map((_, index) => (
                              <GreenStar
                                className="h-full w-full"
                                key={index}
                              />
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
                        <form
                          // onSubmit={handleSubmit}
                          className="flex flex-col gap-6"
                        >
                          <div className="flex flex-col gap-y-2">
                            <label
                              htmlFor="button-selection"
                              className="text-sm text-secondary-700"
                            >
                              Color
                            </label>
                            <div className="flex gap-x-2 justify-between h-[82px] lg:justify-start">
                              {colorData.map((color, index) => (
                                <div
                                  key={color.code}
                                  className="flex flex-col gap-y-2 items-center w-full lg:w-[100px] "
                                >
                                  <button
                                    type="button"
                                    id={index}
                                    className="aspect-square w-[54px] h-[54px]"
                                    style={{
                                      backgroundColor: color.code,
                                      border: color.isClicked
                                        ? `1px solid #C1CD00`
                                        : "none",
                                    }}
                                    onClick={() => {
                                      setCurrentColor(color.name);
                                      const updatedColorButtonData = [
                                        ...colorData,
                                      ];
                                      updatedColorButtonData.forEach(
                                        (item, i) => {
                                          if (i == index) {
                                            updatedColorButtonData[
                                              index
                                            ].isClicked =
                                              !colorData[index].isClicked;
                                          } else {
                                            item.isClicked = false;
                                          }
                                        }
                                      );
                                      setColorData(updatedColorButtonData);
                                    }}
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
                              <a className="text-xs text-info">
                                What's my size?
                              </a>
                            </div>
                            <div className="flex gap-x-2 justify-between h-[54px]">
                              {sizeData.map((size, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  className="aspect-square w-full border border-secondary-300"
                                  style={{
                                    border: size.isClicked
                                      ? `1px solid #C1CD00`
                                      : "none",
                                  }}
                                  onClick={() => {
                                    const updatedSizeButtonData = [...sizeData];
                                    setCurrentSize(size.size);
                                    updatedSizeButtonData.forEach((item, i) => {
                                      if (i == index) {
                                        updatedSizeButtonData[index].isClicked =
                                          !sizeData[index].isClicked;
                                      } else {
                                        item.isClicked = false;
                                      }
                                    });
                                    setSizeData(updatedSizeButtonData);
                                  }}
                                >
                                  {size.size}
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
                              className="h-[54px] border border-secondary-300"
                              value={selectedValue}
                              onChange={handleChange}
                            >
                              <option className="text-base" value="1">
                                1
                              </option>
                              <option className="text-base" value="2">
                                2
                              </option>
                              <option className="text-base" value="3">
                                3
                              </option>
                            </select>
                          </div>
                          <button
                            type="button"
                            className="btn rounded-none bg-secondary-base text-white font-normal text-base h-[54px] w-full"
                            onClick={() => {
                              document.getElementById("my_modal").showModal();
                              handleSubmit();
                            }}
                          >
                            Add to cart
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {/*People also like these*/}
              <div className="mb-10 ">
                <h2 className="font-bold text-[32px] my-10">
                  People also like these
                </h2>
                <ProductCardContainer />
              </div>
            </div>
            {/* Modal */}
            <dialog id="my_modal" className="modal">
              <div className="modal-box w-[343px] max-h-[518px] h-[518px] mx-4 my-36 p-6 lg:w-[900px] max-w-full lg:p-[9px] lg:max-h-[374px]">
                <div className="flex-col m-0 lg:m-4 gap-y-6">
                  <div className="flex justify-between">
                    <h3 className="self-center font-semibold lg:font-bold lg:text-2xl text-lg text-center">
                      Items added to your cart
                    </h3>
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button
                        // onClick={closeModal}
                        className="btn btn-md btn-circle btn-ghost w-10 h-10"
                      >
                        ✕
                      </button>
                    </form>
                  </div>
                  <div className="flex flex-col gap-y-6 pt-6">
                    <div className="flex flex-col justify-between items-center   h-[258px] lg:h-[160px] lg:flex-row gap-x-10">
                      <img
                        src={data.imageUrls[0]}
                        alt=""
                        className="w-40 h-40 lg:w-40 lg:h-40 bg-contain"
                      />
                      <div className="flex flex-col gap-y-1 justify-between h-[82px] lg:flex-row lg:p-y-[47px] w-full">
                        <div className="flex flex-col lg:h-[66px]">
                          <h3 className="text-[20px] font-semibold lg:text-2xl lg:font-bold">
                            {data.name}
                          </h3>
                          {/* <div className="h-full relative"> */}
                          <p className="left-0 bottom-0 text-sm">
                            QTY: {selectedValue}{" "}
                          </p>
                          {/* </div> */}
                        </div>
                        <p className="self-end right-0 lg:right-0 lg:top-0 font-semibold lg:font-bold lg:text-2xl">
                          THB {totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4  lg:flex-row lg:gap-x-1 w-full mt-6">
                    <button
                      onClick={() => navigate("/checkout")}
                      className="flex-grow bg-secondary-base text-white font-normal text-base h-[54px] rounded-none"
                    >
                      View cart
                    </button>
                    <button
                      onClick={() => navigate("/list")}
                      className="flex-grow text-black border-black border-solid border-2   font-normal text-base h-[54px] rounded-none"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </dialog>
          </>
        )}
        <div></div>
      </div>
    </>
  );
}
