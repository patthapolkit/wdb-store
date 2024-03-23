import { FaStar, FaStarHalf } from "react-icons/fa";

export default function StarRating({ value }) {
  return (
    <div className="flex flex-row gap-1">
      {Array.from(Array(5)).map((_, index) => {
        const starSerialNumber = index + 1;

        if (starSerialNumber <= Math.floor(value)) {
          return (
            <div key={starSerialNumber} className="flex">
              <FaStar className="text-primary-base w-4 h-4"></FaStar>
            </div>
          );
        }

        if (starSerialNumber > Math.ceil(value)) {
          return (
            <div key={starSerialNumber} className="flex">
              <FaStar className=" text-secondary-300 w-4 h-4"></FaStar>
            </div>
          );
        }

        return (
          <div key={starSerialNumber} className="flex">
            <FaStarHalf className="text-primary-base w-4 h-4"></FaStarHalf>
          </div>
        );
      })}
    </div>
  );
}
