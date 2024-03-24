import StarRating from "./StarRating";

export default function ProductCard({
  image,
  name,
  description,
  price,
  rating,
}) {
  return (
    <div className="flex flex-col w-[370px] gap-4">
      <img src={image} alt={name} className="h-[370px] object-cover"></img>
      <p className="font-bold text-2xl truncate w-full">{name}</p>
      <p className="truncate text-secondary-700 w-full">{description}</p>
      <StarRating value={rating} />
      <p className="font-bold text-2xl w-full text-end">{price}</p>
    </div>
  );
}
