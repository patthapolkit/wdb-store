import fillStar from "../assets/filled-star.svg";
import emptyStar from "../assets/empty-star.svg";

export default function StarRating({ value }) {
  return (
    <div className="flex flex-row gap-1">
      {Array.from(Array(5)).map((_, index) => {
        const starSerialNumber = index + 1;

        if (starSerialNumber <= Math.round(value)) {
          return (
            <div key={starSerialNumber} className="flex">
              <img src={fillStar} alt="" />
            </div>
          );
        }

        if (starSerialNumber > Math.round(value)) {
          return (
            <div key={starSerialNumber} className="flex">
              <img src={emptyStar} alt="" />
            </div>
          );
        }
      })}
    </div>
  );
}
