import { Component } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Image } from "../components/image";
import { Blogcolumns } from "../components/blogcolums";
import { ProductCardContainer } from "../components/ProductCardContainer";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Image />
        <Blogcolumns />
        <ProductCardContainer />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
