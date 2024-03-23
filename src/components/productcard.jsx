const ProductCard = () => {
  // <!-- source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html -->

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Featured Product</h1>
      </div>

      {/* // <!-- ✅ Grid Section - Starts Here 👇 --> */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 container"
      >
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        <div className="w-72 bg-white rounded-xl  hover:scale-105 hover:shadow-xl">
          <a>
            <img
              src="https://s3-alpha-sig.figma.com/img/0f01/0064/aea4afacb5e24464ee5faecad2e2c05f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2T7~gj8Hm8Og11QwQoxKZK84c2uKDHeCjRDtLTCWSUv0Iu-z2lVNEkAdXv9o0nJiQBs1y4ZGw5jJm-P5gzVlBZ2sHRItrEVwjt0mNqnFv7GsXn9tOjY2z~CAyly9dtNXWfW59~kGH9zEAv1S56BFsLFYLGUTc8ixVXpyuHCrqLYL1de1kMaloaevJ0TugsxGnE3Wv3OzGGG8JJXcT5YcIpfpc890MpvfCwEzzw54oloprsvHKksjr~hZeFrRVrDATiTyMYddtfaqmTsOy2m97M27ftYmwbDwi9l89H0x3Y5NwaCgpySBrhT-pz001HJ0~hB4Tu1g0gNwHv5d0W3aw__"
              alt="Product"
              className="h-[370px] w-72 object-cover rounded-t-xl"
            />
            <div className=" py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
                Reyon Long Sleeve Shirt
              </p>
              <span className="text-[#626262] mr-3 text-base">
                Elevate your winter style with our cozy flann...
              </span>
              <div className="flex items-center justify-end">
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    2000 THB
                  </p>
                </del>
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  1000 THB
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 1 - Ends Here  --> */}

        {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
        <div className="w-72 bg-white  rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://s3-alpha-sig.figma.com/img/318d/407c/123b0faea351f751f93289dc65f8fd01?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3yzCph8rH-GNayN9DyVHq6WIoHTBvmuZOitaHIJ5mbXFP2fHFd5nAARYm~2CIX9YRv90JSmZzjJebeHfPr2QuIhS~iGl6EBP7djNBbQRJbico~5ch4fKh0ordxCwiK7hpXEMZ-Wih-Lk~b1pSjDQiV-HepVjhbLrIWnbVbjxPQdbV3URG8CDDvxrCSmzM4LV6ExBMRYLUkMMr04Rkq6DY4ffi0hFIk9dE7eoH~VUAPDE-Ji779Rmq-QElQc0jPc7iUmXAIa~DJSw3Rb3BPM5njCYHEsOI-uktfrMernGV5tdNYIGO5ZjGTrP3Ija2nWKPEtPJ-wlJINZR2nLR1S4A__"
              alt="Product"
              className="h-[370px] w-72 object-cover rounded-t-xl"
            />
            <div className="py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
                Pleated Camisole Dress
              </p>
              <span className="text-[#626262] mr-3 text-base">
                Our versatile crossbody bag combines fashio...
              </span>
              <div className="flex items-center justify-end">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  1600 THB
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 2- Ends Here  --> */}

        {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
        {/* <ProductCard imgurl={"dsfdfssdf"} price={1200}>
          A Bags
        </ProductCard>
        <ProductCard imgurl={"dsfdfssdf"} price={1200}>
          A Bags
        </ProductCard>
        <ProductCard imgurl={"dsfdfssdf"} price={1200}>
          A Bags
        </ProductCard>
        <ProductCard imgurl={"dsfdfssdf"} price={1200}>
          A Bags
        </ProductCard> */}

        <div className="w-72 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://s3-alpha-sig.figma.com/img/9883/4483/67b1b423b3930382075a3bb3dbbf6939?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vxkn0NEr99sAKewpbdjD4nBCuw2i4y3-2AvvYApuUKblBkMGKjQRHJzvDFRA4OpY-Sn1rx9a1Z1Uq2Vy4tLuYNE14uxvc9XuWuvPkk2leSyE1UyKvcwRuCZDXVcMc41ghFOErO~LRhV08AoKikJlGY7aYMZ4ZCPxyNMKQiZi4EVQScFSUybf6dCTZ~FTbe~y~VU5JDnpbSzqoUHF0RaJu9RiS3Hp78bgPPKDEcHKj~D-iANBimiiNqd42d7XBUS3IGbRvly3b8y~Jurvt0RMgAYN5TcZ4byYjGCgE8qW3KbXo8H3ZSYAXyt3T618i8We6UwClz3qBTH4aF3ZLBsVKg__"
              alt="Product"
              className="h-[370px] w-72 object-cover rounded-t-xl"
            />
            <div className=" py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
                Washable Milano Ribbed Cr...
              </p>
              <span className="text-[#626262] mr-3 text-base">
                Embrace coziness with our crafted from a so...
              </span>
              <div className="flex items-center justify-end">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  1200 THB
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 3 - Ends Here  --> */}

        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        <div className="w-72 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://s3-alpha-sig.figma.com/img/bb65/788d/f94cf2a0b080f9f8b5597ad229cd53cc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ReLZ~zFN4rNimDBAKnriIGGY86Kc4789G-i41kPYLIiOi0WfQuuPbL81P~uV1Hcb0~SzdnCstKeSOc5mOo3C0xF8Ek1JuMtS-0A24UhLdyNJHOVweNyskTlok3gwmTbhbXSgeDQCKqM2wc-dqd9ht6ALAEKuoDMQ~cvdUhI9JyVPjeb~X1F5-QESeyUsaRmJfTeTcijaYbTQ47JnhSvZzHw9JtlsA722jp~LxjU-IW0xsC~emgQvmCTjHR4rsbW73bXaV2IXAMg2gzYPGU7qqmik~0sOaLtzexGfv6ivWLKaqymdmGlZQcTXLbdfgaRYU3cytQa9b2~kkdTPoE-utg__"
              alt="Product"
              className="h-[370px] w-72 object-cover rounded-t-xl"
            />
            <div className=" py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
                Flexi Move Sneaker
              </p>
              <span className="text-[#626262] mr-3 text-base">
                Step into comfort and style with our lightweig...
              </span>
              <div className="flex items-center justify-end">
                <p className="text-lg font-semibold text-black  cursor-auto my-3">
                  1700 THB
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* <!--   🛑 Product card 4 - Ends Here  --> */}
      </section>

      {/* // <!-- 🛑 Grid Section - Ends Here --> */}
    </div>
  );
};

export { ProductCard };
