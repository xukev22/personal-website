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
      <p className="mb-4">
        My journey into computer science started in an unexpected place:{" "}
        <span className="font-medium">Minecraft redstone</span>. I loved pushing
        the game to its limits — building machines, automating farms, and
        treating each world like a sandbox for systems design. Eventually, I
        stopped just caring <span className="italic">that</span> it worked and
        started wondering <span className="italic">why</span> it worked… and how
        I could build things like that outside of Minecraft.
      </p>

      <p className="mb-4">
        That curiosity led me to my first Scratch games, where I got hooked on
        the feeling that code is basically a superpower: you imagine something,
        and then you can <span className="font-medium">make it real</span>.
        Since then, I’ve loved computer science for the same reason — it’s equal
        parts creativity and logic, and it gives you the freedom to build
        whatever you want, from small tools to full products.
      </p>

      <p className="mb-4">
        These days, I like working end-to-end — building UIs, wiring up
        backends, and shipping things that feel clean and reliable. You can find
        the tools I reach for most in the{" "}
        <a
          href="/#skills"
          className="font-medium underline underline-offset-4 decoration-2"
        >
          {" "}
          Skills
        </a>{" "}
        section below.
      </p>
    </motion.section>
  );
}
