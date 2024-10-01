// module imports
import React from "react";
import { TypeAnimation } from "react-type-animation";

// styling
import "../styles/HomeIntro.css";

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
