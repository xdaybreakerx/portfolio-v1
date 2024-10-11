// module imports
import React from "react";
import { TypeAnimation } from "react-type-animation";

// styling
import "../styles/HomeIntro.css";


/**
 * A function that renders an introduction section with the text 'hello world, i'm xander', a waving hand emoji, and a dynamic type animation displaying multiple roles. The introduction also includes the location 'based in Naarm (Melbourne)'. This function returns a JSX element containing a header, a subheader with a dynamic type animation, and a paragraph with the location information.
 * @author Xander
 *
 * @export
 * @returns {*} A function that returns an introduction JSX element displaying a welcome message, name, occupation, and location.
 */
export default function Intro() {
  return (
    <>
      <h1>
        hello world, i&apos;m xander <span className="wave">👋</span>
      </h1>
      <h2>
        {" "}
        <TypeAnimation
          sequence={[
            "Software Developer.",
            15_000,
            "Lifelong Learner.",
            2000,
            "Tech Wizard.",
            2000,
            "Nerd.",
            1000,
            "1337 h4x0r.",
            500,
            "Software Developer."
          ]}
          wrapper="span"
          speed={40}
          repeat={0}
        />
      </h2>
      <p>based in Naarm (Melbourne)</p>
    </>
  );
}
