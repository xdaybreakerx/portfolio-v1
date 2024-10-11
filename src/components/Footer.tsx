// module imports
import React from "react";


/**
 * A function that returns the JSX element for the footer section of a webpage with copyright information and credit to the creator.
 * @author Xander
 *
 * @export
 * @returns {*} A function component that renders a footer with copyright information and credits to the creator.
 */
export default function Footer() {
  return (
    <footer>
      <p>
        Copyright © {new Date().getFullYear()} - Made with ❤️ by{" "}
        <a href="https://github.com/xdaybreakerx">Xander</a>.
      </p>
    </footer>
  );
}
