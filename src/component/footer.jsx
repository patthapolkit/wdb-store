const Footer = () => {
  return (
    <div>
      <footer class="flex flex-col text-white bg-black justify-center w-full sm:text-left">
        <section class="flex justify-between">
          <div class="flex flex-col gap-6 w-2/6">
            <h3 class="font-bold text-[32px] px-12 py-4">Featured Product</h3>
            <div class="px-12">
              <p class="pb-4">Men</p>
              <p class="pb-4">Ladies</p>
              <p class="pb-4">Shoes</p>
              <p class="pb-4">Accessories</p>
            </div>
            <div class="flex text-xs text-gray-500 px-12">
              <p>Copyright © 2024 All rights reserved for all contents. </p>
            </div>
          </div>
          <div class="flex flex-col gap-4 w-2/6">
            <h3 class="font-bold text-[32px] py-4">Customer services</h3>
            <p class="text-base pb-4">
              MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
              Bangkok 10330
            </p>
            <p class="text-base">Email: jane.doe@realmail.com</p>
          </div>
        </section>
      </footer>
    </div>
  );
};

export { Footer };
