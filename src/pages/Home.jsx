import HeroImage from "../components/HeroImage";
import BlogColumns from "../components/BlogColumns";
import ProductCardContainer from "../components/ProductCardContainer";

export default function Home() {
  return (
    <div className="mb-9 lg:mb-44">
      <HeroImage />
      <BlogColumns />
      <ProductCardContainer />
    </div>
  );
}
