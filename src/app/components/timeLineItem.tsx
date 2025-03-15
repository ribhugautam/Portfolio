"use client";

import { Position } from "@/models/linkedIn-data";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const timelineData: Position[] = [
  {
    title: "Full Stack Trainee",
    companyName: "Excellence Technology",
    start: { day: 0, month: 0, year: 2024 },
    description:
      "As a Full Stack Trainee, I gained hands-on experience with the MERN stack, mastering MongoDB, Express.js, React, and Node.js. This training equipped me with the skills to create dynamic web applications and tackle real-world development challenges.",
  },
  {
    title: "Front End Developer Intern",
    companyName: "Tipzy",
    start: { day: 0, month: 2, year: 2024 },
    description:
      "As a Front End Developer Intern at Tipzy, I contributed to the development of three web applications, enhancing my skills in creating user-friendly interfaces. This experience allowed me to apply my knowledge in a practical setting and collaborate with a dynamic team.",
  },
  {
    title: "Full Stack Developer",
    companyName: "Tipzy",
    start: { day: 0, month: 6, year: 2023 },
    description:
      "I was promoted to Full Stack Developer at Tipzy after my internship, where I expanded my skills to encompass both front-end and back-end development. In this role, I contributed to building and optimizing web applications, collaborating closely with the team to deliver high-quality solutions.",
  },
];

const TimelineItem = ({
  title,
  companyName,
  start,
  description,
  index,
}: Position & { index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 * (index % 2 === 0 ? 1 : -1) }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ ease: "easeOut", duration: 0.7, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
  >
    <h3 className="text-2xl font-bold tracking-wide">{companyName}</h3>
    <h4 className="text-xl font-semibold text-violet-600 tracking-wide">{title}</h4>
    <time className="text-md tracking-wide uppercase text-gray-600">
      {dayjs(
        `${start.year}-${start.month + 1}-${start.day + 1}`,
        "YYYY-M-D"
      ).format("MMM D, YYYY")}
    </time>
    <p className="mt-3 text-xl font-semibold">{description}</p>
  </motion.div>
);

export const Timeline = ({ fullPositions }: { fullPositions?: Position[] }) => {
  return (
    <section className="w-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center"
      >
        Timeline
      </motion.h1>
      <div className="container max-w-5xl px-4 py-24 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0"
            >
              <h3 className="text-4xl font-bold">Ribhu Gautam</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-600">
                Software Developer
              </span>
            </motion.div>
          </div>
          <div className="relative col-span-12 px-4 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              {(fullPositions ? fullPositions : timelineData).map(
                (entry, index) => (
                  <TimelineItem key={index} {...entry} index={index} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
