import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ProductList from "./pages/ProductList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/details",
    element: <ProductDetails />,
  },
  {
    path: "/list",
    element: <ProductList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
