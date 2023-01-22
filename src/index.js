import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { AuthenticationProvider } from "./context/AuthProvider";
import Register from "./pages/Register";
import Like from "./pages/Like";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";
import CatecoryProducts from "./pages/CatecoryProducts";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "catecories/:catecoryId", element: <CatecoryProducts /> },
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
