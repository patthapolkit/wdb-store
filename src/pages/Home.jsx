import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ProductCard } from "../components/productcard";
import { Image } from "../components/image";
import { Blogcolumns } from "../components/blogcolums";
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
