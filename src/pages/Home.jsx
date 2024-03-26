import { Component } from "react";
import { Image } from "../components/image";
import { Blogcolumns } from "../components/blogcolums";
import { ProductCardContainer } from "../components/ProductCardContainer";
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
