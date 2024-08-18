"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my{" "}
        <span className="font-medium">Master of Computer Application</span>, I pursued my passion for web development. I have been working as a{" "}
        <span className="font-medium">front-end developer</span> specializing in{" "}
        <span className="font-medium">
          React, Next.js, and modern web technologies
        </span>.{" "}
        <span className="italic">My favorite part of development</span> is the challenge of creating efficient and visually appealing user interfaces. I enjoy collaborating with cross-functional teams and constantly improving my skills. I am always eager to learn new technologies and frameworks.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy exploring the latest trends in technology, watching movies, and spending time with family. I am also passionate about{" "}
        <span className="font-medium">continuous learning</span>, and I'm currently deepening my knowledge in{" "}
        <span className="font-medium">TypeScript and GraphQL</span>. I also take interest in{" "}
        <span className="font-medium">designing and optimizing user experiences</span> in web applications.
      </p>
    </motion.section>
  );
}
