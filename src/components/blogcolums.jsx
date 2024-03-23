const Blogcolumns = () => {
  return (
    <div>
      <div className="relative px-6 pt-[68px] pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-[1600px]">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg ">
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="" className="mt-2 block">
                    <p className="text-8xl font-bold text-black">
                      2024 <p className="text-5xl">Collection</p>
                    </p>
                    <p className="mt-6 text-base text-black">
                      Step into a world of winter elegance and style with our
                      latest Winter Collection. As temperatures drop, our
                      curated selection of clothing is designed to keep you
                      fashionably warm. From luxurious knitwear to trend-setting
                      outerwear, each piece in our collection is a celebration
                      of seasonal sophistication. Explore the blend of comfort
                      and fashion, as we present you with the must-have
                      ensembles to make a statement in the chilly months ahead.
                      Welcome to a winter wardrobe that seamlessly combines
                      coziness with chic aesthetics.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg bg-imageblock2 bg-cover object-contain h-[500px] ">
              <div className="flex flex-1 flex-shrink-0 flex-col justify-end p-4">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-2xl font-bold text-white">Cozy Breeze</p>
                  <p className="mt-3 text-base text-white">
                    Embrace the season with our carefully curated selection of
                    garments, each piece thoughtfully designed to blend fashion
                    and functionality. From cozy knits to elegant outerwear, our
                    collection invites you to indulge in the allure of winter
                    fashion.
                  </p>
                  <a className="text-white bg-[#222222] py-[17px] px-[10px]">
                    View more
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg bg-imageblock3 bg-cover object-contain h-[500px] ">
              <div className="flex flex-shrink-0 flex-1 flex-col  p-4">
                <div className="flex flex-1 flex-col items-center justify-end gap-4">
                  <p className="text-2xl font-bold text-white">Flexi Move</p>
                  <p className="mt-3 text-base text-white">
                    Step into a world where fashion meets functionality with our
                    latest Sneaker Collection. Designed for those who appreciate
                    the perfect fusion of style and comfort, our curated
                    selection of sneakers is a celebration of urban chic.
                  </p>
                  <a className="text-white bg-[#222222] py-[17px] px-[10px]">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Blogcolumns };
