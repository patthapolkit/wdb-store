import { Component } from "react";
import { Image } from "../components/image";
import { Blogcolumns } from "../components/blogcolums";
import { ProductCardContainer } from "../components/ProductCardContainer";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.get("categories");
  const collections = searchParams.get("collections");
}

async function fetchProducts() {
  let url = "https://api.storefront.wdb.skooldio.dev/products";
  if (categories) {
    url == "?category={categories}";
  } else if (collections) {
    url == "?collection=${collection}";
  }
  const products = await fetch(url);
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image />
        <Blogcolumns />
        <ProductCardContainer />
      </div>
    );
  }
}
