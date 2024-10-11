// module imports 
import React from "react";

// layout import
import Layout from "../components/Layout";

// component imports
import Contact from "../components/Contact";


/**
 * A default function that renders the ContactPage component. It returns JSX elements enclosed within a Layout component, which includes a Contact component.
 * @author Xander
 *
 * @export
 * @returns {*} A default function that renders a ContactPage component within a Layout component.
 */
export default function ContactPage() {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}
