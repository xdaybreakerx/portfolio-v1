// module imports
import React from "react";

// layout import
import Layout from "../components/Layout";

// component imports
import Intro from "../components/HomeIntro";
import Projects from "../components/HomeProjects";


/**
 * A function that renders the homepage component. It returns a JSX element that includes a Layout component containing an Intro component and a Projects component.
 * @author Xander
 *
 * @export
 * @returns {*} A default function that renders the homepage with a layout component containing an introduction section and a list of projects.
 */
export default function HomePage() {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  );
}
