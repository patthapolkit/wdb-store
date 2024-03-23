import StarRating from "./StarRating";

export default function ProductCard() {
  return (
    <div className="flex flex-col w-[370px] gap-4">
      <img
        src="/public/vite.svg"
        alt=""
        className="h-[370px] object-cover"
      ></img>
      <p className="font-bold text-2xl truncate w-full">Product Name</p>
      <p className="truncate text-secondary-700 w-full">Price</p>
      <StarRating value={3.8} />
      <p className="font-bold text-2xl w-full text-end">Price</p>
    </div>
  );
}
