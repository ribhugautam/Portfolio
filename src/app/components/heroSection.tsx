import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import hero from "../../../public/vector.svg";
import { useEffect, useState } from "react";

type ContentPart = {
  text?: string;
  span?: string;
  className?: string;
};

const generateContentObject = (paragraph: string): ContentPart[] => {
  if (!paragraph) {
    return [];
  }
  const spanWords = [
    "technology",
    "Software Developer",
    "Chandigarh, India",
    "complex challenges",
    "impactful solutions",
    "innovation",
    "user experiences",
    "Full-stack development",
    "continuous learning",
    "collaboration",
    "creative solutions",
    "TypeScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Next.js",
    "API integration",
    "scalable architecture",
    "performance optimization",
    "responsive design",
    "agile methodologies",
    "problem-solving",
    "data structures",
    "algorithms",
    "cloud computing",
    "AWS services",
    "version control",
    "CI/CD pipelines",
    "unit testing",
    "code optimization",
    "component reusability",
    "Cashfree",
    "Razorpay",
    "QR code scanning",
    "camera integration",
    "AWS S3",
    "AWS Amplify",
    "payment gateway integration",
    "code conflicts",
    "Tipzy",
    "image management",
    "robust CI/CD pipelines",
  ];

  const regex = new RegExp(`\\b(${spanWords.join("|")})\\b`, "gi");

  return paragraph
    .split(regex)
    .map((part) => {
      const trimmed = part.trim();
      if (
        spanWords.some((word) => word.toLowerCase() === trimmed.toLowerCase())
      ) {
        return {
          span: trimmed,
          className: "font-semibold text-violet-600",
        };
      } else {
        return { text: part };
      }
    })
    .filter((part) => part.text || part.span);
};

const heroContent = generateContentObject(
  "Passionate about crafting scalable React-based ERP applications, optimizing deployments with Azure CI/CD, and integrating AWS services. Proficient in React, TypeScript, and modern web technologies, I focus on building efficient architectures, ensuring robust testing, and delivering high-performance solutions that enhance user experience and system reliability."
);

const TypingText = ({ text }: { text: string }) => (
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.05 }}
  >
    {text}
  </motion.span>
);

const typingContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const typingText = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const HeroSection = ({ summary }: { summary: string }): JSX.Element => {
  const filteredSummary = generateContentObject(summary);
  const texts = ["Ribhu Gautam", "Software Engineer"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="container flex flex-col-reverse justify-center gap-8 p-6 pt-28 pb-12 mx-auto sm:pt-36 lg:pt-52 lg:flex-row lg:items-center lg:justify-between">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col lg:items-start justify-center p-4 sm:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
      >
        <h1 className="text-4xl overflow-visible flex flex-col md:flex-row md:gap-2 justify-center items-center whitespace-nowrap sm:text-5xl md:text-6xl font-bold leading-tight">
          <span>Hi, I&apos;m </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[currentText]}
              className="text-violet-600 inline-flex"
              variants={typingContainer}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
            >
              {texts[currentText].split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={typingText}
                  style={{
                    display: "inline-block",
                    marginRight: char === " " ? "0.3em" : "0",
                    fontSize: "inherit",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="mt-4 mb-6 text-lg sm:text-xl md:text-2xl">
          {(filteredSummary === null ? filteredSummary : heroContent).map(
            (part, index) =>
              part.text || part.span ? (
                <TypingText key={index} text={part.text || part.span || ""} />
              ) : null
          )}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center p-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      >
        <Image
          src={hero.src}
          alt="Hero Image"
          width={372}
          height={372}
          className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
