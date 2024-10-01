// module imports
import React from "react";

// layout import
import Layout from "../components/Layout";

// component imports
import Intro from "../components/HomeIntro";
import Projects from "../components/HomeProjects";

export default function HomePage() {
  return (
    <Layout>
      <Intro />
      <Projects />
    </Layout>
  );
}
