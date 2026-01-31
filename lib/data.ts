import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaApple,
  FaAppleAlt,
  FaBook,
  FaChalkboardTeacher,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// image alias imports
import blockstartImg from "@/public/blockstart.png";
import seamcarverImg from "@/public/seamcarver.png";
import reinforcementsnakeImg from "@/public/reinforcementsnake.png";
import thefarmImg from "@/public/thefarm.png"
import racereadyImg from "@/public/raceready.png";
import { StaticImageData } from "next/image";

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
    title: "Front-End Intern — Klaviyo",
    location: "Boston, MA",
    description:
      "Shipped Identity Resolution (email-typo merge) in React/TypeScript behind Statsig feature flags, tracking usage in Heap and driving 194k+ duplicate profile merges. Built UI for custom user roles (read/export/edit) with reusable access-control components and fixed 10+ permission bugs. Cut team-owned Sentry errors by 50% and expanded Cypress E2E coverage for key flows.",
    icon: React.createElement(FaReact),
    date: "Jul 2025 – Dec 2025",
  },
  {
    title: "DevOps Intern — Wolters Kluwer",
    location: "Waltham, MA",
    description:
      "Migrated a legacy CDN to Azure Front Door + Blob Storage using Terraform, reducing CDN costs by ~85% (~$11k/month). Automated host management and audits with Python + Ansible and built patch management workflows across Windows/Linux. Deployed Zabbix to 50+ hosts, routed alerts to Slack, and used ArgoCD + Jenkins to redeploy apps with expiring secrets.",
    icon: React.createElement(FaTools),
    date: "Jul 2024 – Dec 2024",
  },
  {
    title: "Teaching Assistant — Fundamentals of Computer Science 2",
    location: "Boston, MA",
    description:
      "Held 4 weekly office hours supporting Java programming, debugging, and software design. Graded assignments/exams for ~70 students in an accelerated section and delivered written feedback on code quality. Led weekly labs for ~30 students covering data structures and testing concepts with live coding.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jan 2024 – Apr 2025",
  },
  {
    title: "Northeastern University",
    location: "Boston, MA",
    description:
      "B.S. Computer Science (concentration in AI), GPA 4.0 — Expected May 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 – May 2026",
  },
] as const;


export const projectsData: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  externalUrl?: string;
}[] = [
  {
    title: "Blockstart",
    description:
      "With my roommate, I worked as a full-stack developer on this project for a few months. High school athletes can use our tool to browse and find the best colleges for them.",
    tags: ["React", "HTML", "Java", "Spring", "AWS"],
    imageUrl: blockstartImg,
    externalUrl: "http://blockstart.net",
  },
  {
    title: "Reinforcement Snake",
    description:
      "A model that starts by making random moves in Snake, but learns over time using machine learning principles to become an expert at the game.",
    tags: ["Python", "PyTorch", "Matplotlib", "CUDA"],
    imageUrl: reinforcementsnakeImg,
    externalUrl: "https://www.youtube.com/watch?v=epjwc65-sBw",
  },
  {
    title: "Seam Carver",
    description:
      "My favorite class project, which can visualize the least interesting 'seam', and removes it from the image. Can also reverse/pause the program and show the image grayscale.",
    tags: ["Java"],
    imageUrl: seamcarverImg,
    externalUrl: "https://github.com/xukev22/seam_carver",
  },
  {
    title: "TheFarm",
    description:
      "Developed a full-stack (MVP) farm management dashboard designed to track livestock. Front end: react/tailwind/framer-motiom. Back end: Next.js, dockerized psql server.",
    tags: ["Next.js", "NextAuth", "React", "Tailwind", "Framer Motion", "Docker", "PostgreSQL"],
    imageUrl: thefarmImg,
    externalUrl: "https://www.youtube.com/watch?v=Q2Dr6F1BrPs",
  },
  {
    title: "Race Ready",
    description:
      "Collaborated with a team to develop 'RaceReady', an event organization app for races, featuring a robust database, REST API, and Dockerized services for seamless integration and functionality.",
    tags: ["Docker", "MySQL", "DataGrip", "Flask", "Appsmith"],
    imageUrl: racereadyImg,
  },
] as const;
export const skillsData = [
  // Core languages
  "Java",
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",

  // Frontend
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",

  // Backend
  "Spring",
  "Flask",
  "Django",
  "GraphQL",

  // DevOps / Infra
  "Git",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Jenkins",

  // Cloud
  "AWS",
  "Azure",

  // ML (only keep if you’ve actually built with it)
  "PyTorch",

  // Product/Experimentation (niche, but credible if real)
  "Statsig",
  "Heap",
] as const;
