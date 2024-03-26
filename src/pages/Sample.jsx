// export default class ProductList extends Component {
//   render() {
//     return (
//       <div>Product</div>
//         <Bottomsheet />?
//     );
//   }
// }

// export default function Bottomsheet() {
//   const [sortBy, setSortBy] = useState(null);

//   const handleSortChange = (value) => {
//     setSortBy(value);
//   };

//   const handleApply = () => {
//     // console.log("Sort by:", sortBy);
//     // Add logic to apply sorting here
//   };

//   const handleReset = () => {
//     setSortBy(null);
//     // Add logic to reset sorting here
//   };

//   return (
//     <div className="bottom-sheet">
//       <div className="bottom-sheet-header">
//         <button className="cancel-button text-info">Cancel</button>
//         <h3 className="sort-by">Sort by</h3>
//         <button className="reset-button text-info" onClick={handleReset}>Reset</button>
//       </div>
//       <div className="bottom-sheet-content">
//         <div className="radio-buttons">
//           <label>
//             <input
//               type="radio"
//               value="lowToHigh"
//               checked={sortBy === "lowToHigh"}
//               onChange={() => handleSortChange("lowToHigh")}
//             />
//             Price - Low to High
//           </label>
//           <label>
//             <input className="accent-[#C1CD00]"
//               type="radio"
//               value="highToLow"
//               checked={sortBy === "highToLow"}
//               onChange={() => handleSortChange("highToLow")}
//             />
//             Price - High to Low
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="ratings"
//               checked={sortBy === "ratings"}
//               onChange={() => handleSortChange("ratings")}
//             />
//             Ratings
//           </label>
//         </div>
//       </div>
//       <div className="bottom-sheet-footer">
//         <button className="bg-black text-white" onClick={handleApply}>Apply</button>
//       </div>
//     </div>
//   );
// }

// import React, { Component } from "react";

// export default class list extends Component {
//   render() {
//   return (
//     <div className="bottom-sheet">
//       <div className="bottom-sheet-header">
//         <button className="cancel-button text-info">Cancel</button>
//         <h3 className="sort-by">Sort by</h3>
//         <button className="reset-button text-info">Reset</button>
//       </div>
//       <div className="bottom-sheet-content">
//         <div className="radio-buttons">
//           <label>
//             <input
//               type="radio"
//               value="lowToHigh"
//             />
//             Price - Low to High
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="highToLow"
//             />
//             Price - High to Low
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="ratings"
//             />
//             Ratings
//           </label>
//         </div>
//       </div>
//       <div className="bottom-sheet-footer">
//         <button className="apply-button">Apply</button>
//       </div>
//     </div>
//   );
// }
// }

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faChevronLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../assets/WDB icon.png'; // Importing the logo icon

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
    const [page3Visible, setPage3Visible] = useState(false); // State to track page 3 sidebar visibility
    const sidebarRef = useRef(null);
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (event) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target) &&
            hamburgerRef.current &&
            !hamburgerRef.current.contains(event.target)
        ) {
            setMenuVisible(false);
            setPage3Visible(false); // Hide page 3 sidebar if it's open
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const sidebarClass = `sidebar-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
        menuVisible ? 'translate-x-0' : '-translate-x-full'
    }`;

    const page3SidebarClass = `sidebar-sheet fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-md transition-transform duration-300 transform ${
        page3Visible ? 'translate-x-0' : '-translate-x-full'
    }`;

    // Function to handle category click
    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Update selected category
        if (category === 'tops') {
            setPage3Visible(true); // Show page 3 sidebar for Tops
        } else {
            setPage3Visible(false); // Hide page 3 sidebar for other categories
        }
        // Add your logic here to navigate to the next page based on the selected category
    };

    // Function to handle back button click
    const handleBackButtonClick = () => {
        setSelectedCategory(null); // Reset selected category
        setPage3Visible(false); // Hide page 3 sidebar
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar flex justify-between items-center bg-gray-900 text-white px-4 py-2">
                <div className="navbar-left flex items-center">
                    <div className="hamburger-menu cursor-pointer" ref={hamburgerRef} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
                <div className="navbar-center flex-grow text-center">
                    <img src={logoIcon} alt="Logo" className="logo-icon" />WDB
                </div>
                <div className="navbar-right">
                    <button><FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </nav>

            {/* Sidebar Sheet */}
            <div ref={sidebarRef} className={sidebarClass} onClick={(e) => e.stopPropagation()}>
                {selectedCategory === 'women' ? (
                    <div>
                        <div className="py-2 pl-4 pr-4 font-semibold">
                            <button className="cursor-pointer" onClick={handleBackButtonClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <span className="pt-4 pl-8 pr-8 text-left font-bold">Women</span>
                            <hr className="my-2 border-gray-300" />
                        </div>
                        <ul>
                            <li className="sidebar-item pt-4 py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('tops')}>
                                <button className="flex items-center w-full justify-between">
                                    Tops <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('bottom')}>
                                <button className="flex items-center w-full justify-between">
                                    Bottom <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('dress')}>
                                <button className="flex items-center w-full justify-between">
                                    Dress & Jumpsuits <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('accessories')}>
                                <button className="flex items-center w-full justify-between">
                                    Accessories <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('collections')}>
                                <button className="flex items-center w-full justify-between">
                                    Collections <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <ul>
                        <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">Home</li>
                        <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('men')}>
                            <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('men')}>
                                Men <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </li>
                        <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('women')}>
                            <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('women')}>
                                Women <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </li>
                        <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('kids')}>
                            <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('kids')}>
                                Kids <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </li>
                        <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('shoes')}>
                            <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('shoes')}>
                                Shoes <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </li>
                        <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('accessories')}>
                            <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('accessories')}>
                                Accessories <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </li>
                    </ul>
                )}
            </div>

            {/* Page 3 Sidebar */}
            <div className={page3SidebarClass} onClick={(e) => e.stopPropagation()}>
                {page3Visible && (
                    <div>
                        <div className="py-2 pl-4 pr-4 font-semibold">
                            <button className="cursor-pointer" onClick={handleBackButtonClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <span className="pt-4 pl-8 pr-8 text-left font-bold">Tops</span>
                            <hr className="my-2 border-gray-300" />
                        </div>
                        <ul>
                            <li className="sidebar-item pt-4 py-4 pl-8 pr-8 text-left font-semibold">
                                <button className="flex items-center w-full justify-between">
                                    All items <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
                                <button className="flex items-center w-full justify-between">
                                    T-shirts <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
                                <button className="flex items-center w-full justify-between">
                                    Cardigans <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
                                <button className="flex items-center w-full justify-between">
                                    Knitwear & Sweaters <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
                                <button className="flex items-center w-full justify-between">
                                    Sweatshirts & Hoodies <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                            <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
                                <button className="flex items-center w-full justify-between">
                                    Fleece <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

// import React, { useState, useEffect, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faChevronRight, faChevronLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import logoIcon from '../assets/WDB icon.png'; // Importing the logo icon

// export default function Navbar() {
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
//     const [page3Visible, setPage3Visible] = useState(false); // State to track page 3 sidebar visibility
//     const sidebarRef = useRef(null);
//     const hamburgerRef = useRef(null);

//     const [selectedCategory1, setSelectedCategory1] = useState(null);  // desktop ไม่ต้องเช็คสิ่งนี้
//     const [selectedCategory2, setSelectedCategory2] = useState(null); 


//     // const mainMenu = ['Home','Men','Women','Kids','Shoes','Accessories']
//     const menus = [
//       {
//         key:'Home'
//       },
//       {
//         key:'Men',
//         submenu: [
//           { 
//             key: 'Tops',
//             submenu: ['All items', 'T-shirts', 'Cardigans','Knitwear & Sweaters',]
//           },
//           {
//             key: 'Bottom',
//             submenu: ['All items', '']
//           },
//           {
//             key: 'Accessories',
//             submenu: ['All items', '']
//           }
//         ]
//       },
//       {
//         key:'Women',
//         submenu: [
//           { 
//             key: 'Tops',
//             submenu: ['All items', 'T-shirts', 'Cardigans','Knitwear & Sweaters', '']
//           },
//           {
//             key: 'Bottom',
//             submenu: ['All items', '']
//           },
//           {
//             key: 'Accessories',
//             submenu: ['All items', '']
//           }
//         ]
//       },
//       {
//         key:'Kids',
//         submenu: [
//           { 
//             key: 'Tops',
//             submenu: ['All items', 'T-shirts', 'Cardigans','Knitwear & Sweaters', '']
//           },
//           {
//             key: 'Bottom',
//             submenu: ['All items', '']
//           },
//           {
//             key: 'Accessories',
//             submenu: ['All items', '']
//           }
//         ]
//       },
//       {
//         key: 'Shoes',
//         submenu: [
//             {
//             key: 'Accessories',
//             submenu: ['All items', '']
//             }
//         ]
//       },
//       {
//         key: 'Accessories',
//         submenu: [
//             {
//             key: 'Accessories',
//             submenu: ['All items', '']
//             }
//         ]
//       }
//     ]


//     const toggleMenu = () => {
//         setMenuVisible(!menuVisible);
//     };

//     const handleClickOutside = (event) => {
//         if (
//             sidebarRef.current &&
//             !sidebarRef.current.contains(event.target) &&
//             hamburgerRef.current &&
//             !hamburgerRef.current.contains(event.target)
//         ) {
//             setMenuVisible(false);
//             setPage3Visible(false); // Hide page 3 sidebar if it's open
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('click', handleClickOutside);
//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     const sidebarClass = `sidebar-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
//         menuVisible ? 'translate-x-0' : '-translate-x-full'
//     }`;

//     const page3SidebarClass = `sidebar-sheet fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 transform ${
//         page3Visible ? 'translate-x-0' : '-translate-x-full'
//     }`;

//     // Function to handle category click
//     const handleCategoryClick = (category) => {
//         setSelectedCategory(category); // Update selected category
//         if (category === 'tops') {
//             setPage3Visible(true); // Show page 3 sidebar for Tops
//         } else {
//             setPage3Visible(false); // Hide page 3 sidebar for other categories
//         }
//         // Add your logic here to navigate to the next page based on the selected category
//     };

//     // Function to handle back button click
//     const handleBackButtonClick = () => {
//         setSelectedCategory(null); // Reset selected category
//         setPage3Visible(false); // Hide page 3 sidebar
//     };

//     return (
//         <div>
//             {/* Navbar */}
//             <nav className="navbar flex justify-between items-center bg-gray-900 text-white px-4 py-2">
//                 <div className="navbar-left flex items-center">
//                     <div className="hamburger-menu cursor-pointer" ref={hamburgerRef} onClick={toggleMenu}>
//                         <FontAwesomeIcon icon={faBars} />
//                     </div>
//                 </div>
//                 <div className="navbar-center flex-grow text-center">
//                     <img src={logoIcon} alt="Logo" className="logo-icon" />WDB
//                 </div>
//                 <div className="navbar-right">
//                     <button><FontAwesomeIcon icon={faShoppingCart} /></button>
//                 </div>
//             </nav>

//             {/* Sidebar Sheet */}
//             <div ref={sidebarRef} className={sidebarClass} onClick={(e) => e.stopPropagation()}>
//             {menus.map(value=> {
//                 return (
//                     <div className="py-2 pl-4 pr-4 font-semibold">
//                         {/* <button className="cursor-pointer" onClick={()=>handleClickMainMenu(value.key)}>
//                             <FontAwesomeIcon icon={faChevronLeft} />
//                         </button> */}
//                         <span className="pt-4 pl-8 pr-8 text-left font-bold">{value.key}</span>
//                     </div>  
//                 )
//              })}

//                 {/* {selectedCategory === 'women' ? (
//                     <div>
//                         <div className="py-2 pl-4 pr-4 font-semibold">
//                             <button className="cursor-pointer" onClick={handleBackButtonClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
//                             <span className="pt-4 pl-8 pr-8 text-left font-bold">Women</span>
//                             <hr className="my-2 border-gray-300" />
//                         </div>
//                         <ul>
//                             <li className="sidebar-item pt-4 py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('tops')}>
//                                 <button className="flex items-center w-full justify-between">
//                                     Tops <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('bottom')}>
//                                 <button className="flex items-center w-full justify-between">
//                                     Bottom <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('dress')}>
//                                 <button className="flex items-center w-full justify-between">
//                                     Dress & Jumpsuits <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('accessories')}>
//                                 <button className="flex items-center w-full justify-between">
//                                     Accessories <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('collections')}>
//                                 <button className="flex items-center w-full justify-between">
//                                     Collections <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 ) : (
//                     <ul>
//                         <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">Home</li>
//                         <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('men')}>
//                             <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('men')}>
//                                 Men <FontAwesomeIcon icon={faChevronRight} />
//                             </button>
//                         </li>
//                         <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('women')}>
//                             <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('women')}>
//                                 Women <FontAwesomeIcon icon={faChevronRight} />
//                             </button>
//                         </li>
//                         <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('kids')}>
//                             <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('kids')}>
//                                 Kids <FontAwesomeIcon icon={faChevronRight} />
//                             </button>
//                         </li>
//                         <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('shoes')}>
//                             <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('shoes')}>
//                                 Shoes <FontAwesomeIcon icon={faChevronRight} />
//                             </button>
//                         </li>
//                         <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold" onClick={() => handleCategoryClick('accessories')}>
//                             <button className="flex items-center w-full justify-between" onClick={() => handleCategoryClick('accessories')}>
//                                 Accessories <FontAwesomeIcon icon={faChevronRight} />
//                             </button>
//                         </li>
//                     </ul>
//                 )} */}
//             </div>

//             {/* Page 3 Sidebar */}
//             <div className={page3SidebarClass} onClick={(e) => e.stopPropagation()}>
//                 {page3Visible && (
//                     <div>
//                         <div className="py-2 pl-4 pr-4 font-semibold">
//                             <button className="cursor-pointer" onClick={handleBackButtonClick}><FontAwesomeIcon icon={faChevronLeft} /></button>
//                             <span className="pt-4 pl-8 pr-8 text-left font-bold">Tops</span>
//                             <hr className="my-2 border-gray-300" />
//                         </div>
//                         <ul>
//                             <li className="sidebar-item pt-4 py-4 pl-8 pr-8 text-left font-semibold">
//                                 <button className="flex items-center w-full justify-between">
//                                     All items <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
//                                 <button className="flex items-center w-full justify-between">
//                                     T-shirts <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
//                                 <button className="flex items-center w-full justify-between">
//                                     Cardigans <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
//                                 <button className="flex items-center w-full justify-between">
//                                     Knitwear & Sweaters <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
//                                 <button className="flex items-center w-full justify-between">
//                                     Sweatshirts & Hoodies <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                             <li className="sidebar-item py-4 pl-8 pr-8 text-left font-semibold">
//                                 <button className="flex items-center w-full justify-between">
//                                     Fleece <FontAwesomeIcon icon={faChevronRight} />
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
