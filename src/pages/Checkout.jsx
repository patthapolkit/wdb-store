import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Summary from "../components/Summary";
import axios from "axios";

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartId, setCartId] = useState("");

  useEffect(() => {
    setCartId(localStorage.getItem("cartId"));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://api.storefront.wdb.skooldio.dev/carts/${cartId}`)
        .then((res) => {
          setItems(res.data.items);
        });
    };
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [cartId]);

  useEffect(() => {
    items.map(async (item) => {
      setLoading(true);
      const res = await axios.get(
        `https://api.storefront.wdb.skooldio.dev/products/${item.productPermalink}`
      );
      setProducts((prev) => [...prev, res.data]);
      setLoading(false);
    });
  }, [items]);

  const findIndex = (item) => {
    return products.findIndex(
      (product) => product.permalink === item.productPermalink
    );
  };

  const deleteItem = async (id) => {
    axios.delete(
      `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${id}`
    );
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = async (skuCode, quantity, id) => {
    axios.patch(
      `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${id}`,
      {
        skuCode: skuCode,
        quantity: quantity,
      }
    );
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, skuCode: skuCode, quantity: quantity }
          : item
      )
    );
  };

  return (
    <div className="mx-4 lg:mx-40">
      <h1 className="font-bold text-32px my-8 lg:my-10">My cart</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      ) : (
        <div className="flex flex-col gap-10 w-full lg:flex-row lg:justify-between">
          <div className="bg-white p-4 lg:p-6 flex flex-col items-center h-fit lg:w-8/12">
            <p className="text-2xl font-bold self-start mb-6">Items</p>
            {items.length > 0 ? (
              items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  product={products[findIndex(item)]}
                  deleteItem={deleteItem}
                  updateItem={updateItem}
                />
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
                  Looks like you have not added anything to your cart. Go ahead
                  & explore top categories.
                </p>
                <button className="btn rounded-none bg-secondary-base text-white font-normal text-base px-[10px] h-[54px]">
                  Continue shopping
                </button>
              </div>
            )}
          </div>
          <Summary items={items} products={products} findIndex={findIndex} />
        </div>
      )}
      {items.length <= 0 && (
        <h1 className="font-bold text-32px my-10">People also like these</h1>
      )}
    </div>
  );
}
