// module imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// styling
import "../styles/App.css";

// components
import HomePage from "../pages/HomePage";
import BlogParent from "../pages/BlogParent";
import BlogPost from "../pages/BlogPost";
import Contact from "../pages/Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogParent />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
