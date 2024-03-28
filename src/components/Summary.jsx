export default function Summary({ items, products, findIndex }) {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const totalQty = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => {
    return acc + item.quantity * products[findIndex(item)]?.price;
  }, 0);
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.quantity * products[findIndex(item)]?.promotionalPrice;
  }, 0);
  const discount = totalPrice - subtotal;

  return (
    <div className="bg-white p-4 lg:p-6 flex flex-col items-center h-fit lg:w-4/12">
      <div className="flex justify-between w-full mb-6">
        <p className="text-2xl font-bold self-start mb-6">Summary</p>
        <p className="font-semibold text-[18px] text-secondary-700">
          {totalQty} items
        </p>
      </div>
      <div className="flex flex-col w-full pb-6 mb-6 border-b-[1px] border-secondary-300">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between w-full mb-4">
            <p className="">
              {products[findIndex(item)]?.name}{" "}
              {item.quantity > 1 && `x ${item.quantity}`}
            </p>
            <p className="">
              {formatNumber(item.quantity * products[findIndex(item)]?.price)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mb-4">
        <p className="">Subtotal</p>
        <p className="">{formatNumber(subtotal)}</p>
      </div>
      {discount !== 0 && (
        <div className="flex justify-between w-full mb-4">
          <p className="">Discount</p>
          <p className="text-danger">{formatNumber(discount)}</p>
        </div>
      )}
      <div className="flex justify-between w-full mb-6 pb-6 border-b-[1px]">
        <p className="">Shipping fee</p>
        <p className="">Free</p>
      </div>
      <div className="flex justify-between w-full mb-10 font-semibold text-[18px]">
        <p className="">Total</p>
        <p className=" text-secondary-700">{formatNumber(totalPrice)}</p>
      </div>
      <button className="btn rounded-none bg-secondary-base text-white font-normal text-base px-[10px] h-[54px] w-full mb-4">
        Check out
      </button>
      <a href="/list" className="w-full">
        <button className="btn rounded-none bg-white border font-normal text-base px-[10px] h-[54px] w-full">
          Continue shopping
        </button>
      </a>
    </div>
  );
}
