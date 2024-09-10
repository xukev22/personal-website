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
import racereadyImg from "@/public/raceready.png";
import { StaticImageData } from "next/image";
import { FaPencil, FaScreenpal } from "react-icons/fa6";

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
    title: "Northeastern University",
    location: "Boston, MA",
    description:
      "Expected May 2026 with a Bachelor's in Computer Science and concentration in AI",
    icon: React.createElement(LuGraduationCap),
    date: "Fall 2022",
  },
  {
    title: "Front-End Dev Intern",
    location: "Palo Alto, CA",
    description:
      "Increased customer service efficiency by 20% through developing intuitive user interfaces with React. Developed a blog generation assistance tool for search engine optimization, specifically focusing on 'Top 10' style blogs. Leveraged OpenAI's AI capabilities to develop an automated email generation tool, empowering our customer service agents to efficiently handle tickets with a personal touch and improved efficiency.",
    icon: React.createElement(FaReact),
    date: "Summer 2023",
  },
  {
    title: "Teaching Assistant",
    location: "Boston, MA",
    description:
      "TA'd for Fundamentals of Computer Science 2. Facilitated 2-4 office hours weekly to help students with course material, debugging, and design decisions. Graded homework and exams for 67 students in the accelerated section. Conducted weekly interactive lab sessions for a group of 30 students, reviewing the current week's course material and fostering practical application.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Spring 2024",
  },
  {
    title: "DevOps Intern",
    location: "Waltham, MA",
    description:
      "Automated system inventory review using Ansible to ensure essential security agents were installed and deployed as needed. Utilized Terraform and vSphere to create reproducible test environments with automated VM configuration, enabling easy testing through snapshots and RDP, while reducing manual operations and enhancing loggability. Implemented a proof-of-concept Azure AD login solution to replace local SSH keys with Active Directory sign-in, enabling 2FA and improved account management.",
    icon: React.createElement(FaTools),
    date: "Fall 2024 - present",
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
      "My favorite class project, which can visualize the least interesting 'seam', and removes it from the image. Can also reverse/pause the program and show the image grayscale",
    tags: ["Java"],
    imageUrl: seamcarverImg,
    externalUrl: "https://github.com/xukev22/seam_carver",
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
  "Java",
  "Python",
  "React",
  "Next.js",
  "Terraform",
  "Ansible",
  "Azure",
  "AWS",
  "Docker",
  "Pytorch",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Git",
  "Tailwind",
  "Apollo GraphQL",
  "Framer Motion",
  "Spring",
] as const;
