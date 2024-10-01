// module imports
import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>contact</h1>
      <p>
        you can contact me through my{" "}
        <a href="mailto:hello@xandersalathe.com">email</a>!
      </p>
      <h2>other</h2>
      <ul>
        <li>
          <a href="https://www.github.com/xdaybreakerx/">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/xander-salathe/">LinkedIn</a>
        </li>
        <li>
          <a href="https://read.cv/xdaybreakerx">CV</a>
        </li>
      </ul>
    </>
  );
}
