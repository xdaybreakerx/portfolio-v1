// module imports
import React from "react";

// Define the structure for each project
interface Project {
  name: string;
  description: string;
  url: string;
}

export default function Projects() {
  // array of projects
  const projects: Project[] = [
    {
      name: "YOLOv8 Vision | Python, OpenCV, ByteTracker",
      description:
        "Developed a real-time object detection and vehicle counting tool using YOLOv8. Achieved 98.24% accuracy in traffic analysis, integrating advanced video processing.",
      url: "https://github.com/xdaybreakerx/computer-vision-with-yolov8",
    },
    {
      name: "Go Interpreter | Go",
      description:
        "Built an interpreter for a custom programming language, focusing on lexing, parsing, and evaluation. Implemented macros, Boolean operations, and AST manipulation with plans for future enhancements.",
      url: "https://github.com/xdaybreakerx/go-interpreter",
    },
    {
      name: "Finance Management API | Python, Flask, PostgreSQL, Neon.tech",
      description:
        "Built a Flask-based API for secure CRUD operations, managing user accounts, transactions, and categorising expenses. Integrated PostgreSQL via Neon for scalability and optimised database performance. Security focus with JWT-based authentication, input sanitisation, and error handling.",
      url: "https://github.com/xdaybreakerx/finance-management-api/",
    },
    {
      name: "BeanFinder | Astro, Tailwind CSS, JavaScript",
      description:
        "Developed a responsive directory of Australian coffee roasters with dynamic filtering and pagination. Integrated Google Maps and SEO optimisation using Astro and React hooks. Deployed on Netlify, leveraging continuous deployment for fast iteration.",
      url: "https://github.com/xdaybreakerx/beanfinder.coffee",
    },
    {
      name: "Barbarian TTRPG Dice Roller | Python, JavaScript",
      description:
        "Built a terminal app for D&D players, automating dice rolls and tracking Barbarian class features. Recreated Avare for Python in JavaScript, available via npm-js for custom and standardised dice roll syntax.",
      url: "https://github.com/xdaybreakerx/barbarian-dnd-dice-roller",
    },
  ];

  return (
    <>
      <h3>projects</h3>
      <p>
        you can find more projects on my{" "}
        <a href="https://github.com/xdaybreakerx">github</a>
      </p>
      <p>some interesting public projects of mine are:</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.url}>{project.name}</a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
