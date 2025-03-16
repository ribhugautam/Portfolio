"use client";

import { Position } from "@/models/linkedIn-data";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const timelineData: Position[] = [
  {
    title: "Software Engineer",
    companyName: "Nature Technologies Pvt Ltd",
    start: { day: 0, month: 11, year: 2024 },
    description:
      "Built and maintained complex React-based ERP applications, designing scalable architectures and frameworks. Upgraded large codebases with the latest dependencies, ensuring seamless deployment via IIS and Azure CI/CD. Conducted code reviews, optimized workflows, and implemented robust testing strategies using Vitest.",
  },
  {
    title: "Full Stack Developer",
    companyName: "Tipzy (Script Studio Technology Pvt Ltd)",
    start: { day: 0, month: 2, year: 2024 },
    description:
      "Designed and developed an application ecosystem with three interconnected apps and microservices. Architected modular components, optimized state management using Redux Toolkit and TanStack Query, and improved backend performance by 30%. Delivered features that boosted user engagement by 20% while ensuring 99.9% uptime.",
  },
  {
    title: "Full Stack Trainee",
    companyName: "Excellence Technology",
    start: { day: 0, month: 0, year: 2024 },
    description:
      "Built and optimized responsive web applications using React.JS, Tailwind CSS, and Appwrite, reducing load time by 15%. Conducted code reviews, implemented performance enhancements, and ensured timely delivery by managing stakeholder communication.",
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
    <h4 className="text-xl font-semibold text-violet-600 tracking-wide">
      {title}
    </h4>
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
