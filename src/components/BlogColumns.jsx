export default function BlogColumns() {
  return (
    <>
      <div className="px-4 lg:px-[160px] mb-20">
        <div className="flex flex-col gap-8 lg:gap-10 lg:flex-row items-center justify-center">
          <div className="flex flex-col lg:flex-1">
            <h1 className="text-[64px] font-bold">2024</h1>
            <h2 className="text-[40px] -mt-4">Collection</h2>
            <p className="mt-5">
              Step into a world of winter elegance and style with our latest
              Winter Collection. As temperatures drop, our curated selection of
              clothing is designed to keep you fashionably warm. From luxurious
              knitwear to trend-setting outerwear, each piece in our collection
              is a celebration of seasonal sophistication. Explore the blend of
              comfort and fashion, as we present you with the must-have
              ensembles to make a statement in the chilly months ahead. Welcome
              to a winter wardrobe that seamlessly combines coziness with chic
              aesthetics.
            </p>
          </div>
          <div className="relative h-[500px] w-full lg:w-[575px]">
            <img
              src="/src/assets/home/blog-1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-4 h-full flex flex-col items-center text-center justify-end gap-4 bg-gradient-to-t from-black/80 from-50% to-transparent to-75% lg:from-0% lg:to-100%">
              <p className="text-2xl font-bold text-white">Cozy Breeze</p>
              <p className="text-base leading-5 text-white">
                Embrace the season with our carefully curated selection of
                garments, each piece thoughtfully designed to blend fashion and
                functionality. From cozy knits to elegant outerwear, our
                collection invites you to indulge in the allure of winter
                fashion.
              </p>
              <button className="text-white bg-secondary-base py-[17px] px-2.5">
                View more
              </button>
            </div>
          </div>

          <div className="h-[500px] relative w-full lg:w-[575px]">
            <img
              src="/src/assets/home/blog-2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-4 h-full flex flex-col items-center text-center justify-end gap-4 bg-gradient-to-t from-black/80 from-50% to-transparent to-75% lg:from-0% lg:to-100%">
              <p className="text-2xl font-bold text-white">Flexi Move</p>
              <p className="text-base leading-5 text-white">
                Step into a world where fashion meets functionality with our
                latest Sneaker Collection. Designed for those who appreciate the
                perfect fusion of style and comfort, our curated selection of
                sneakers is a celebration of urban chic.
              </p>
              <button className="text-white bg-secondary-base py-[17px] px-2.5">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
