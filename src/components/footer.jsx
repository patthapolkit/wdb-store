const Footer = () => {
  return (
    <div>
      {/* <footer className="flex flex-col text-white bg-black justify-center w-full sm:text-left">
        <section className="flex justify-between">
          <div className="flex flex-col pl-[160px]">
            <h3 className="font-bold text-[32px] px-12 py-4 gap-6">
              Featured Product
            </h3>
            <div className="px-12 gap-4">
              <p className="pb-4">Men</p>
              <p className="pb-4">Ladies</p>
              <p className="pb-4">Shoes</p>
              <p className="pb-4">Accessories</p>
            </div>
          </div>
          <div className="flex flex-col w-2/4">
            <h3 className="font-bold text-[32px] py-4 gap-6">
              Customer services
            </h3>
            <p className="text-base pb-4">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-base">Email: jane.doe@realmail.com</p>
          </div>
          <div className="flex items-end justify-between ">
            <div className="flex text-xs text-gray-500 ">
              <p>Copyright © 2024 All rights reserved for all contents. </p>
            </div>
            <div className="flex justify-end pr-[160px] pt-[104px] pb-6 text-xs text-gray-500 ">
              <p className="flex ">Powered By</p>
              <img src="/Storefront.png" alt="Sponser" className="gap-2" />
            </div>
          </div>
        </section>
      </footer> */}
      {/* <footer className="flex flex-col text-white bg-black justify-center w-full sm:text-left">
        <section className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:w-2/4">
            <h3 className="font-bold text-2xl sm:text-3xl px-6 sm:px-12 py-4">
              Featured Product
            </h3>
            <div className="px-6 sm:px-12">
              <p className="pb-2 sm:pb-4">Men</p>
              <p className="pb-2 sm:pb-4">Ladies</p>
              <p className="pb-2 sm:pb-4">Shoes</p>
              <p className="pb-2 sm:pb-4">Accessories</p>
            </div>
            <div className="flex text-xs text-gray-500 px-6 sm:px-12 pb-6">
              <p>Copyright © 2024 All rights reserved for all contents. </p>
            </div>
          </div>
          <div className="flex flex-col sm:w-2/4">
            <h3 className="font-bold text-2xl sm:text-3xl py-4 px-6">
              Customer services
            </h3>
            <p className="text-base px-6 pb-4">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-base px-6 pb-6">Email: jane.doe@realmail.com</p>
            <div className="flex justify-end px-6 sm:px-12 text-xs text-gray-500 ">
              <p className="flex">Powered By</p>
              <img
                src="/Storefront.png"
                alt="Sponsor"
                className="h-4 ml-2 sm:ml-1"
              />
            </div>
          </div>
        </section>
      </footer> */}
      {/* <footer className="flex flex-col text-white bg-black justify-center w-full sm:text-left">
        <section className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:w-2/4">
            <h3 className="font-bold text-2xl sm:text-3xl px-6 sm:px-12 py-4">
              Featured Product
            </h3>
            <div className="px-6 sm:px-12">
              <p className="pb-2 sm:pb-4">Men</p>
              <p className="pb-2 sm:pb-4">Ladies</p>
              <p className="pb-2 sm:pb-4">Shoes</p>
              <p className="pb-2 sm:pb-4">Accessories</p>
            </div>
            <div className="flex text-xs text-gray-500 px-6 sm:px-12 pb-6">
              <p className="mr-4">
                Copyright © 2024 All rights reserved for all contents.
              </p>
              <div className="flex">
                <p className="mr-2">Powered By</p>
                <img src="/Storefront.png" alt="Sponsor" className="h-4" />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:w-2/4">
            <h3 className="font-bold text-2xl sm:text-3xl py-4 px-6">
              Customer services
            </h3>
            <p className="text-base px-6 pb-4">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-base px-6 pb-6">Email: jane.doe@realmail.com</p>
          </div>
        </section>
      </footer> */}
      <footer className="flex flex-col text-white bg-black justify-center w-full lg:text-left text-center ">
        <section className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:w-2/4">
            <h3 className="font-bold text-2xl sm:text-3xl px-6 sm:px-12 py-4">
              Featured Product
            </h3>
            <div className="px-6 sm:px-12">
              <p className="pb-2 sm:pb-4">Men</p>
              <p className="pb-2 sm:pb-4">Ladies</p>
              <p className="pb-2 sm:pb-4">Shoes</p>
              <p className="pb-2 sm:pb-4">Accessories</p>
            </div>
          </div>
          <div className="flex flex-col sm:w-2/4">
            <h3 className="font-bold text-2xl sm:text-3xl py-4 px-6">
              Customer services
            </h3>
            <p className="text-base px-6 pb-4">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-base px-6 pb-6">Email: jane.doe@realmail.com</p>
          </div>
        </section>
        <div className="flex flex-col justify-center items-center md:flex-row lg:justify-between px-6 sm:px-12 pb-6 text-xs text-gray-500 ">
          <p>Copyright © 2024 All rights reserved for all contents.</p>
          <div className="flex ">
            <p className="mr-2">Powered By</p>
            <img src="/Storefront.png" alt="Sponsor" className="h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
