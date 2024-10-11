// module imports
import React from "react";
import { Link } from "react-router-dom";

// styling
import "../styles/Navigation.css"


/**
 * A functional component that renders a header with navigation links to the home page, blog page, and contact page.
 * @author Xander
 *
 * @export
 * @returns {*} This function represents the Header component which renders a navigation bar with links to the home, blog, and contact pages.
 */
export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
