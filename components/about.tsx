"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About" });

  return (
    <motion.section
      className="scroll-mt-40 mb-28 max-w-[47rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p>
      I&apos;m a Software Engineer passionate about building efficient and impactful solutions.
      <br />
       Currently pursuing a Computer Science Design (CSD) degree at SUTD, I&apos;ve gained hands-on experience in web development, IoT, and cloud-based applications through internships and personal projects.
    <br />
I love tackling challenging problems and constantly learning new technologies to improve my skills. When I&apos;m not coding, I enjoy listening to classical music and powerlifting.

      </p>
    </motion.section>
  );
}
