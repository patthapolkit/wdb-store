import React, { Component } from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import { ProductCard } from "../component/productcard";
import { Image } from "../component/image";
import { Blogcolumns } from "../component/blogcolums";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Image />
        <Blogcolumns />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
