import React, { Component, useState } from "react";
import DeskNav from "../components/DeskNav";
import Sortby from "../components/Sortby";
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
      <div className="bg-white min-h-screen">
        <Sidebar
          open={openSidebar}
          setOpen={(x) => this.setState({ openSidebar: x })}
        />
        <button onClick={() => this.setState({ openSidebar: true })}>
          Open
        </button>
        <div className="main-content p-6">
          <div className="topic text-center mb-4 font-bold">
            Woman's Clothing
          </div>
          {/* Clickable "Sort By" button with filter icon on desktop */}
          <div className="flex items-center justify-end mb-4">
            <button
              className="sort-button sort-button-container border
              border-[#C1CD00] px-2 py-2"
              onClick={this.toggleBottomSheet}
            >
              Sort By <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
          <div>
            {/* Conditionally render Bottomsheet component */}
            <Sortby
              bottomSheetVisible={this.state.bottomSheetVisible}
              toggleBottomSheet={this.toggleBottomSheet}
              handleOutsideClick={this.toggleBottomSheet} // Add handleOutsideClick prop
              isMobile={isMobile} // Pass isMobile as a prop
            />
          </div>
          {!isMobile && <DeskNav />} {/* Render DeskNav only if not mobile */}
        </div>
      </div>
    );
  }
}
