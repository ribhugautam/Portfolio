import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../../public/vector.svg";

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
  "With a strong focus on enhancing user experiences through innovative solutions, I bring expertise in software development and integration. My skill set includes specialized knowledge in payment gateway integration, particularly with Cashfree and Razorpay systems, alongside proficiency in developing QR code scanning and camera integration features. I am known for efficiently resolving code conflicts and currently leverage AWS services like AWS S3 and AWS Amplify to streamline image management and implement robust CI/CD pipelines at Tipzy. Passionate about delivering high-quality solutions, I drive business growth and ensure customer satisfaction through scalable, secure, and performance-driven software implementations."
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

const HeroSection = ({ summary }: { summary: string }): JSX.Element => {
  const filteredSummary = generateContentObject(summary);
  return (
    <div className="container flex flex-col-reverse justify-center gap-8 p-6 py-28 pb-12 mx-auto sm:pt-36 lg:pt-52 lg:flex-row lg:justify-between">
      <motion.div
        initial={{ opacity: 0, transform: "translateX(-50px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
      >
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
          I am <span className="text-violet-600">Ribhu Gautam</span>
        </h1>
        <p className="mt-6 mb-8 text-2xl sm:mb-12">
          {(filteredSummary === null ? filteredSummary : heroContent).map(
            (part, index) =>
              part.text || part.span ? (
                <TypingText key={index} text={part.text || part.span || ""} />
              ) : null
          )}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, transform: "translateX(50px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      >
        <Image
          src={hero.src}
          alt="Hero Image"
          width={372}
          height={372}
          className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
