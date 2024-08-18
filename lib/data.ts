import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import logoslearningImg from "@/public/logoslearning.png";
import amrithaHospitalsImg from "@/public/amrithahospitals.png";
import jerseyGroupImg from "@/public/jerseygroup.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Plugend Techlabs",
    description:
      "Worked as a front-end developer, focusing on building user-friendly and efficient web solutions for an ERP system. Successfully collaborated with a team of developers to ensure project success.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Mar 2022",
  },
  {
    title: "Front-End Developer",
    location: "WebAndCrafts",
    description:
      "Currently working as a front-end developer, developing high-speed websites using React and Next.js. I manage complex projects, including LMS applications, and provide mentorship to junior developers.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "Logos Learning",
    description:
      "An LMS web application where students can book classes online or offline. Online classes feature video calls with built-in plugins for easy study.",
    tags: ["Next.js", "Node.js", "Tailwind", "Video Call Plugins"],
    imageUrl: logoslearningImg, // replace with actual image variable
  },
  {
    title: "Amritha Hospitals",
    description:
      "A hospital website where users can view doctors, departments, and book appointments. Developed with Next.js, and the backend is powered by Drupal.",
    tags: ["Next.js", "Drupal", "Tailwind"],
    imageUrl: amrithaHospitalsImg, // replace with actual image variable
  },
  {
    title: "Jersey Group",
    description:
      "A corporate website for a construction group, explaining their products and different companies. The site is developed with Next.js.",
    tags: ["Next.js", "Tailwind", "Corporate Website"],
    imageUrl: jerseyGroupImg, // replace with actual image variable
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GraphQL",
  "TypeScript",
  "GitHub",
  "GitLab",
  "VS Code",
  "CI/CD",
] as const;

