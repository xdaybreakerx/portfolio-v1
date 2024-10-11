// module imports
import React from "react";


/**
 * A function that renders a contact section with information on how to contact the author through email. It also provides links to the author's GitHub, LinkedIn, and CV.
 * @author Xander
 *
 * @export
 * @returns {*} A function that returns contact information including email, GitHub, LinkedIn, and CV links.
 */
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
