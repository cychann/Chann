import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import { AuthenticationProvider } from "./context/AuthProvider";
import Register from "./pages/Register";
import Like from "./pages/Like";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Products /> },
      { path: "/register", element: <Register /> },
      { path: "/like", element: <Like /> },
      { path: "/basket", element: <Basket /> },
      { path: "/detail/:productId", element: <ProductDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthenticationProvider>
    <RouterProvider router={router} />
  </AuthenticationProvider>
);
