import { useState, useEffect } from "react";
import axios from "axios";

export default function ItemCard({ permalink, skuCode }) {
  const [item, setItem] = useState({});
  const [sku, setSku] = useState(skuCode);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `https://api.storefront.wdb.skooldio.dev/products/${permalink}`
        );
        setItem(res.data);
        console.log(res.data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [permalink]);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "THB",
    }).format(number);
  };

  const uniqueColors = [
    ...new Set(item.variants?.map((variant) => variant.color)),
  ];

  const deleteItem = async () => {
    try {
      const res = await axios.delete(
        `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${item.id}`
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border-b-[1px] pb-6 mb-6 w-full flex flex-col lg:flex-row lg:gap-10">
      <img
        src={item.imageUrls?.[0]}
        alt={item.name}
        className="w-[209px] h-[209px] object-cover self-center mb-4"
      />
      <div className="lg:flex lg:flex-col lg:justify-between lg:w-full">
        <div className="flex justify-between gap-4 mb-5">
          <p className="font-bold text-2xl">{item.name}</p>
          <button onClick={deleteItem()}>
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
                  name="color"
                  id="color"
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                >
                  {uniqueColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
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
                  name="size"
                  id="size"
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                >
                  {item.variants
                    ?.sort((a, b) => a.size.localeCompare(b.size))
                    .map((variant) => (
                      <option key={variant.id} value={variant.id}>
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
                  name="qty"
                  id="qty"
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                >
                  {item.variants?.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.remains}
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
            <p>{formatNumber(item.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
