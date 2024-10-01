// module imports
import React from "react";

// styling
import "../styles/Layout.css";

// components
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
