import del from "../assets/delete.svg";
import chevronDown from "../assets/chevron-down.svg";

export default function ItemCard(props) {
  const { id, skuCode, quantity } = props.item;
  const product = props.product;
  const deleteItem = props.deleteItem;
  const updateItem = props.updateItem;

  const defaultVariant = product?.variants?.find(
    (variant) => variant.skuCode === skuCode
  );

  const selectedColor = defaultVariant?.color;
  const selectedSize = defaultVariant?.size;
  const selectedQty = quantity;

  const uniqueColors = [
    ...new Set(product?.variants?.map((variant) => variant.color)),
  ];

  const availableSizes = product?.variants
    ?.filter((variant) => variant.color === selectedColor)
    .map((variant) => variant.size)
    .sort();

  const avaliableQty = product?.variants?.find(
    (variant) =>
      variant.color === selectedColor && variant.size === selectedSize
  )?.remains;

  const isPromo = product?.promotionalPrice < product?.price;

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "THB",
    }).format(number);
  };

  const findSkuCode = (color, size) => {
    if (size) {
      const variant = data?.variants?.find(
        (variant) => variant.color === color && variant.size === size
      );
      return variant?.skuCode;
    } else {
      const variant = data?.variants?.find(
        (variant) => variant.color === color
      );
      return variant?.skuCode;
    }
  };

  const sizeRemain = (size) => {
    return product?.variants?.find((variant) => variant.size === size)?.remains;
  };

  return (
    <div className="border-b-[1px] pb-6 mb-6 w-full flex flex-col lg:flex-row lg:gap-10">
      <img
        src={product?.imageUrls?.[0]}
        alt={product?.name}
        className="w-[209px] h-[209px] object-cover self-center mb-4"
      />
      <div className="lg:flex lg:flex-col lg:justify-between lg:w-full">
        <div className="flex justify-between gap-4 mb-5">
          <p className="font-bold text-2xl">{product?.name}</p>
          <button
            onClick={() => {
              deleteItem(id);
            }}
          >
            <img src={del} alt="delete this item" className="w-10 h-10" />
          </button>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="grid grid-rows-2 grid-cols-2 gap-4 mb-4 lg:grid-rows-1 lg:grid-cols-3 lg:mb-0 w-full lg:mr-10">
            <div className="col-span-2 lg:col-span-1">
              <p htmlFor={id + "color"} className="mb-2 text-secondary-700">
                Color
              </p>
              <div className="relative">
                <select
                  id={id + "color"}
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                  value={selectedColor}
                  onChange={(e) => {
                    updateItem(
                      findSkuCode(e.target.value, selectedSize),
                      selectedQty,
                      id
                    );
                  }}
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
                  <img src={chevronDown} alt="" />
                </div>
              </div>
            </div>
            <div>
              <p htmlFor={id + "size"} className="mb-2 text-secondary-700">
                Size
              </p>
              <div className="relative">
                <select
                  id={id + "size"}
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                  value={selectedSize}
                  onChange={(e) => {
                    updateItem(
                      findSkuCode(selectedColor, e.target.value),
                      selectedQty,
                      id
                    );
                  }}
                >
                  {availableSizes?.map((size) =>
                    size !== "" ? (
                      sizeRemain(size) > 0 ? (
                        <option key={id + size} value={size}>
                          {size}
                        </option>
                      ) : (
                        <option key={id + size} value={size} disabled>
                          {size} (Out of stock)
                        </option>
                      )
                    ) : (
                      <option key={id + "-"} value="-">
                        -
                      </option>
                    )
                  )}
                </select>
                <div className="absolute top-2 right-2 pointer-events-none">
                  <img src={chevronDown} alt="" />
                </div>
              </div>
            </div>
            <div>
              <p htmlFor={id + "qty"} className="mb-2 text-secondary-700">
                Qty.
              </p>
              <div className="relative">
                <select
                  id={id + "qty"}
                  className="w-full h-[54px] border px-2.5 focus:outline-none appearance-none"
                  value={selectedQty}
                  onChange={(e) => {
                    updateItem(
                      findSkuCode(selectedColor, selectedSize),
                      e.target.value,
                      id
                    );
                  }}
                >
                  {avaliableQty > 0 ? (
                    [...Array(avaliableQty).keys()].map((num) => (
                      <option key={id + num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))
                  ) : (
                    <option key={id + 0} value={0}>
                      -
                    </option>
                  )}
                </select>
                <div className="absolute top-2 right-2 pointer-events-none">
                  <img src={chevronDown} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col items-end">
            <p className=" text-danger font-bold">
              {avaliableQty === 0 && "Out of stock"}
            </p>
            {isPromo ? (
              <div className="flex flex-col items-end">
                <p className="font-semibold">
                  From{" "}
                  <span className="line-through">
                    {formatNumber(product?.price * selectedQty)}
                  </span>
                </p>
                <p className="text-2xl font-bold text-white bg-danger p-2">
                  {formatNumber(product?.promotionalPrice * selectedQty)}
                </p>
              </div>
            ) : (
              <p className="text-2xl font-bold">
                {formatNumber(product?.price * selectedQty)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
