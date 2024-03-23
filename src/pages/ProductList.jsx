import React, { Component, useState } from "react";
// import Navbar from "../components/Navbar";
// import DeskNav from "../components/DeskNav";
import Bottomsheet from "../components/Bottomsheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Importing the filter icon
import Sidebar from "../components/Sidebar";

export default class ProductList extends Component {
  state = {
    menuVisible: false, // State to control the visibility of the menu items
    bottomSheetVisible: false, // State to control the visibility of the bottom sheet
    sortByDropdownVisible: false, // State to control the visibility of the sort by dropdown
    isMobile: false, // State to track if the device is mobile
    openSidebar: false,
  };

  // const [openSidebar, setOpenSidebar] = useState()

  componentDidMount() {
    // Add event listener to track window resize
    window.addEventListener("resize", this.handleWindowSizeChange);
    // Initialize the isMobile state based on the initial window size
    this.handleWindowSizeChange();
  }

  componentWillUnmount() {
    // Remove event listener on component unmount
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    // Update isMobile state based on window width
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  // Function to toggle the visibility of the menu items
  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  // Function to toggle the visibility of the bottom sheet
  toggleBottomSheet = () => {
    this.setState({ bottomSheetVisible: !this.state.bottomSheetVisible });
  };

  render() {
    const { isMobile, openSidebar } = this.state;
    const gridCols = isMobile ? "grid-cols-1" : "grid-cols-3"; // Set the grid column classes based on isMobile state
    return (
      <div className="min-h-screen">
        <Sidebar
          open={openSidebar}
          setOpen={(x) => this.setState({ openSidebar: x })}
        />
        <button onClick={() => this.setState({ openSidebar: true })}>
          Open
        </button>
        {/* <DeskNav /> */}
        <div className="main-content p-6">
          <div className="topic text-center mb-4 font-bold">
            Woman's Clothing
          </div>
          <div className="sort-button-container flex justify-end items-center mb-4">
            {/* Clickable "Sort By" button with filter icon on desktop */}
            <button className="sort-button" onClick={this.toggleBottomSheet}>
              Sort By <FontAwesomeIcon icon={faChevronDown} />
            </button>
            {/* CoBottomsheetnditionally render Bottomsheet component */}
            <Bottomsheet
              bottomSheetVisible={this.state.bottomSheetVisible}
              toggleBottomSheet={this.toggleBottomSheet}
              handleOutsideClick={this.toggleBottomSheet} // Add handleOutsideClick prop
              isMobile={isMobile} // Pass isMobile as a prop
            />
          </div>

          <div className={`grid ${gridCols} gap-4`}>
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="product-card border border-gray-200 rounded overflow-hidden"
              >
                <img
                  src="product-image.jpg"
                  alt="Product Image"
                  className="product-image w-full h-64 object-cover"
                />
                <div className="product-info p-4">
                  <h2 className="product-title text-lg font-semibold mb-2">
                    Product Title
                  </h2>
                  <p className="product-description mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consectetur lectus ac metus finibus, nec ultrices libero
                    fermentum.
                  </p>
                  <div className="product-rating mb-2">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="product-price mb-0">
                    Sale Price: $19.99{" "}
                    <span className="original-price">$29.99</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
