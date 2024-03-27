export default function Footer() {
  return (
    <>
      <footer className="flex flex-col text-white bg-secondary-base justify-center w-full lg:text-left text-center items-center lg:px-[160px] py-4">
        <div className="flex flex-col lg:flex-row justify-between gap-14 w-full">
          <div className="flex flex-col lg:w-1/2">
            <h3 className="font-bold text-2xl lg:text-3xl px-6 lg:px-12 py-8 lg:py-4">
              Featured Product
            </h3>
            <div className="px-6 lg:px-12 flex flex-col font-semibold gap-4">
              <a href="/list?categories=all-men">
                <p>Men</p>
              </a>
              <a href="/list?categories=all-ladies">
                <p>Ladies</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <h3 className="font-bold text-2xl lg:text-3xl py-4 px-6">
              Customer services
            </h3>
            <p className="text-base px-6 pb-4">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p className="text-base px-6 pb-6">Email: jane.doe@realmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row lg:justify-between px-6 lg:px-12 pb-6 text-xs text-gray-500 w-full">
          <p>Copyright © 2024 All rights reserved for all contents.</p>
          <div className="flex items-center justify-center">
            <p className="mr-2">Powered By</p>
            <img src="/src/assets/storefront.png" alt="Sponsor" />
          </div>
        </div>
      </footer>
    </>
  );
}
