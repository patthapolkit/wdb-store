import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function ProductCardContainer() {
  const randomNumber = Math.floor(Math.random() * 30);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.storefront.wdb.skooldio.dev/products")
      .then((res) => {
        setProducts(res.data.data.slice(randomNumber, randomNumber + 4));
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center px-4 lg:px-[160px] gap-10 lg:gap-16">
        <h1 className="font-bold text-[32px]">Featured Product</h1>
        <div className="gap-10 flex flex-col lg:flex-row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.imageUrls[0]}
              name={product.name}
              promotionalPrice={product.promotionalPrice}
              price={product.price}
              rating={product.ratings}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
