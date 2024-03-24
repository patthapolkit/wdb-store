export default function StarRating({ value }) {
  return (
    <div className="flex flex-row gap-1">
      {Array.from(Array(5)).map((_, index) => {
        const starSerialNumber = index + 1;

        if (starSerialNumber <= Math.round(value)) {
          return (
            <div key={starSerialNumber} className="flex">
              <img src="/src/assets/filled-star.svg" alt="" />
            </div>
          );
        }

        if (starSerialNumber > Math.round(value)) {
          return (
            <div key={starSerialNumber} className="flex">
              <img src="/src/assets/empty-star.svg" alt="" />
            </div>
          );
        }
      })}
    </div>
  );
}
