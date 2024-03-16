import { useState, useEffect } from "react";
import axios from "axios";

export default function ItemCard(props) {
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQty, setSelectedQty] = useState(0);

  const { id, skuCode, quantity, productPermalink } = props.item;
  const cartId = props.cartId;
  const defaultVariant = product.variants?.find(
    (variant) => variant.skuCode === skuCode
  );

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `https://api.storefront.wdb.skooldio.dev/products/${productPermalink}`
        );
        setProduct(res.data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [productPermalink]);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "THB",
    }).format(number);
  };

  const deleteItem = async () => {
    try {
      axios.delete(
        `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const uniqueColors = [
    ...new Set(product.variants?.map((variant) => variant.color)),
  ];

  return (
    <div className="border-b-[1px] pb-6 mb-6 w-full flex flex-col lg:flex-row lg:gap-10">
      <img
        src={product.imageUrls?.[0]}
        alt={product.name}
        className="w-[209px] h-[209px] object-cover self-center mb-4"
      />
      <div className="lg:flex lg:flex-col lg:justify-between lg:w-full">
        <div className="flex justify-between gap-4 mb-5">
          <p className="font-bold text-2xl">{product.name}</p>
          <button
            onClick={() => {
              deleteItem();
            }}
          >
            <img
              src="/src/assets/delete.svg"
              alt="delete this item"
              className="w-10 h-10"
            />
          </button>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="grid grid-rows-2 grid-cols-2 gap-4 mb-4 lg:grid-rows-1 lg:grid-cols-3 lg:mb-0 w-full lg:mr-10">
            <div className="col-span-2 lg:col-span-1">
              <p htmlFor="color" className="mb-2 text-secondary-700">
                Color
              </p>
              <div className="relative">
                <select
                  id="color"
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                  value={defaultVariant?.color}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  {uniqueColors.length > 0 ? (
                    uniqueColors.map((color) => (
                      <option key={id + color} value={color}>
                        {color}
                      </option>
                    ))
                  ) : (
                    <option value="-">-</option>
                  )}
                </select>
                <div className="absolute top-2 right-2 pointer-events-none">
                  <img src="src/assets/chevron-down.svg" alt="" />
                </div>
              </div>
            </div>
            <div>
              <p htmlFor="size" className="mb-2 text-secondary-700">
                Size
              </p>
              <div className="relative">
                <select
                  id="size"
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                  value={defaultVariant?.size}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {product.variants
                    ?.sort((a, b) => a.size.localeCompare(b.size))
                    .map((variant) => (
                      <option key={id + variant.size} value={variant.size}>
                        {variant.size}
                      </option>
                    ))}
                </select>
                <div className="absolute top-2 right-2 pointer-events-none">
                  <img src="src/assets/chevron-down.svg" alt="" />
                </div>
              </div>
            </div>
            <div>
              <p htmlFor="qty" className="mb-2 text-secondary-700">
                Qty.
              </p>
              <div className="relative">
                <select
                  id="qty"
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                  value={quantity}
                  onChange={(e) => setSelectedQty(e.target.value)}
                >
                  {[...Array(defaultVariant?.remains).keys()].map((qty) => (
                    <option key={id + qty} value={qty + 1}>
                      {qty + 1}
                    </option>
                  ))}
                </select>
                <div className="absolute top-2 right-2 pointer-events-none">
                  <img src="src/assets/chevron-down.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-end text-2xl font-bold">
            <p>{formatNumber(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
