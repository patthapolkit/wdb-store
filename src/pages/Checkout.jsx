import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import axios from "axios";

export default function Checkout() {
  const [items, setItems] = useState([]);
  const cartId = localStorage.getItem("cartId");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.storefront.wdb.skooldio.dev/carts/${cartId}`
      );
      setItems(res.data.items);
    };
    fetchData();
  });

  return (
    <div className="mx-4 lg:mx-40">
      <h1 className="font-bold text-32px my-8 lg:my-10">My cart</h1>
      <div className="flex flex-col gap-10 w-full lg:flex-row lg:justify-between">
        <div className="bg-white p-4 lg:p-6 flex flex-col items-center h-fit lg:w-8/12">
          <p className="text-2xl font-bold self-start mb-6">Items</p>
          {items.length > 0 ? (
            items.map((item) => (
              <ItemCard key={item.id} item={item} cartId={cartId} />
            ))
          ) : (
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/empty-cart.svg"
                alt="empty-cart"
                className="mb-6 lg:w-[403px]"
              />
              <p className="font-bold text-32px mb-2">Your cart is empty</p>
              <p className="text-center font-semibold mb-6 lg:w-[45%]">
                Looks like you have not added anything to your cart. Go ahead &
                explore top categories.
              </p>
              <button className="btn rounded-none bg-secondary-base text-white font-normal text-base px-[10px] h-[54px]">
                Continue shopping
              </button>
            </div>
          )}
        </div>
        <div className="bg-white p-4 lg:p-6 flex flex-col items-center h-fit lg:w-4/12">
          <div className="flex justify-between w-full mb-6">
            <p className="text-2xl font-bold self-start mb-6">Summary</p>
            <p className="font-semibold text-[18px] text-secondary-700">
              {" "}
              3 items
            </p>
          </div>
          <div className="flex justify-between w-full pb-6 mb-6 border-b-[1px] border-secondary-300">
            <p className="">No item</p>
            <p className="">0.00</p>
          </div>
          <div className="flex justify-between w-full mb-4">
            <p className="">Subtotal</p>
            <p className="">0.00</p>
          </div>
          <div className="flex justify-between w-full mb-6 pb-6 border-b-[1px]">
            <p className="">Shipping fee</p>
            <p className="">Free</p>
          </div>
          <div className="flex justify-between w-full mb-10 font-semibold text-[18px]">
            <p className="">Total</p>
            <p className=" text-secondary-700">0.00</p>
          </div>
          <button className="btn rounded-none bg-secondary-base text-white font-normal text-base px-[10px] h-[54px] w-full mb-4">
            Check out
          </button>
          <button className="btn rounded-none bg-white border font-normal text-base px-[10px] h-[54px] w-full">
            Continue shopping
          </button>
        </div>
      </div>
      {items.length <= 0 && (
        <h1 className="font-bold text-32px my-10">People also like these</h1>
      )}
    </div>
  );
}
