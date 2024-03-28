import StarRating from "./StarRating";

export default function ProductCard({
  image,
  name,
  description,
  price,
  promotionalPrice,
  rating,
  permalink,
}) {
  const discountPercentage = Math.round(
    ((price - promotionalPrice) / price) * 100
  );

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <a href={`/details/${permalink}`}>
      <div className="flex flex-col w-[340px] lg:w-[370px] gap-4 relative hover:shadow-md hover:shadow-secondary-100 hover:-translate-y-2 hover:transition-all hover:duration-300">
        {discountPercentage > 0 && (
          <div className="bg-danger py-1 px-2.5 w-fit h-fit text-white absolute right-0 top-8">
            - {discountPercentage}%
          </div>
        )}
        <img src={image} alt={name} className="h-[370px] object-cover"></img>
        <p className="font-bold text-2xl truncate w-full">{name}</p>
        <p className="truncate text-secondary-700 w-full">{description}</p>
        <StarRating value={rating} />
        <div className="flex flex-row self-end items-center gap-4">
          {discountPercentage > 0 && (
            <p className="line-through text-secondary-700 text-lg">
              {formatNumber(price)}
            </p>
          )}
          <p
            className={`font-bold text-2xl ${
              discountPercentage > 0 ? "text-danger" : ""
            }`}
          >
            THB {formatNumber(promotionalPrice)}
          </p>
        </div>
      </div>
    </a>
  );
}
