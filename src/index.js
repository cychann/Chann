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
import CatecoryProducts from "./pages/CatecoryProducts";
import Main from "./pages/Main";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: "catecories/:catecoryId", element: <CatecoryProducts /> },
      {
        path: "/register",
        element: (
          <ProtectedRoute requireAdmin>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        path: "/like",
        element: (
          <ProtectedRoute>
            <Like />
          </ProtectedRoute>
        ),
      },
      {
        path: "/basket",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      { path: "/detail/:productId", element: <ProductDetail /> },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <AuthenticationProvider>
      <RouterProvider router={router} />
    </AuthenticationProvider>
  </QueryClientProvider>
);
