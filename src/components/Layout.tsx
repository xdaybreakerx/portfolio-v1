// module imports
import React from "react";

// styling
import "../styles/Layout.css";

// components
import Navigation from "./Navigation";
import Footer from "./Footer";


/**
 * A function that represents the layout of a web page. It takes in a 'children' prop and renders a div with the className 'layout'. Within the div, it includes a Navigation component, a main element with the className 'main-content' containing the 'children' prop, and a Footer component.
 * @author Xander
 *
 * @export
 * @param {{ children: any; }} param0 The object containing the children property
 * @param {*} param0.children The children components to be rendered inside the layout
 * @returns {*} A function that returns a layout component with navigation, main content, and footer elements.
 */
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
