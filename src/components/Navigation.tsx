import React from "react";
import { Link } from "react-router-dom";

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
