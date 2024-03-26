import HeroImage from "../components/HeroImage";
import BlogColumns from "../components/BlogColumns";
import ProductCardContainer from "../components/ProductCardContainer";

export default function Home() {
  return (
    <div className="mb-9 lg:mb-44">
      <HeroImage />
      <BlogColumns />
      <div className="flex flex-col items-center px-4 lg:px-[160px] gap-10 lg:gap-16">
        <h1 className="font-bold text-[32px]">Featured Product</h1>
        <ProductCardContainer />
      </div>
    </div>
  );
}
