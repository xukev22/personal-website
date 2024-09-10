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
      <p className="tex">
        My journey in computer science began as a{" "}
        <span className="italic">world-class</span> Scratch developer—at least,
        that's what I told myself at age 10. Armed with a fierce imagination, I
        built pixelated worlds where airplanes shot bouncy balls. Though my
        early games weren’t exactly AAA titles, those humble beginnings ignited
        a <span className="font-medium">passion for programming</span> that
        still drives me today.
      </p>
      <p>
        My favorite technologies to work with are{" "}
        <span className="font-medium">
          Java, Python, React (Next.js), Ansible, and Terraform
        </span>
        . I am also familiar with{" "}
        <span className="italic">SQL, AWS, Azure, Spring, and GraphQL</span>.
        And of course, I am always looking for oppurtunities to learn the latest and
        greatest technologies.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, basketball, cards, and traveling. I also enjoy
        working on <span className="font-medium">pet projects</span>, as you'll
        see below.
      </p>
    </motion.section>
  );
}
