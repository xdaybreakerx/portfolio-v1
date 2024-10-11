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
      name: "QuizQuokka | React, Tailwind CSS, ShadCN, Firebase",
      description:
        "Built a responsive flashcard app for mastering Data Structures, Algorithms, Python, JavaScript, and React. Integrated AI explanations via Llama 3 with user authentication through Firebase Auth for custom flashcard creation. Styled with TailwindCSS and ShadCN, deployed on Netlify with Firebase backend, Firestore database, and serverless functions.",
      url: "https://github.com/xdaybreakerx/quizquokka",
    },
    {
      name: "BeanFinder | Astro, Tailwind CSS, JavaScript",
      description:
      "Developed a responsive directory of Australian coffee roasters with dynamic filtering and pagination. Integrated Google Maps and SEO optimisation using Astro and React hooks. Deployed on Netlify, leveraging continuous deployment for fast iteration.",
      url: "https://github.com/xdaybreakerx/beanfinder.coffee",
    },
    {
      name: "Finance Management API | Python, Flask, PostgreSQL, Neon.tech",
      description:
        "Built a Flask-based API for secure CRUD operations, managing user accounts, transactions, and categorising expenses. Integrated PostgreSQL via Neon for scalability and optimised database performance. Security focus with JWT-based authentication, input sanitisation, and error handling.",
      url: "https://github.com/xdaybreakerx/finance-management-api/",
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
