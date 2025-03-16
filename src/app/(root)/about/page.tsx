import * as motion from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ribhu Gautam",
};

const fadeInVariant = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.5 },
  viewport: { once: true },
};

const fadeInSectionVariant = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 1, delay: 0.5 },
  viewport: { once: true },
};

function Page() {
  return (
    <div className="pattern h-dvh relative overflow-hidden">
      <div className="w-11/12 max-w-[80%] font-Caveat mx-auto min-h-screen relative z-10">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <motion.h1
            {...fadeInVariant}
            className="text-5xl font-bold underline decoration-violet-600 underline-offset-4 text-black text-center"
          >
            About
          </motion.h1>

          <motion.section
            {...fadeInSectionVariant}
            className="p-6 rounded-lg my-6 border-2 border-black"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              I am a results-driven Software Development Engineer specializing
              in building and maintaining complex React-based ERP applications.
              My expertise lies in designing scalable architectures, upgrading
              codebases, and optimizing deployments using IIS and Azure CI/CD. I
              excel in software design, workflow planning, and client
              interactions, ensuring high-performance solutions through robust
              testing with Vitest.
            </p>
          </motion.section>
        </div>

        {[
          {
            title: "Skills",
            content: (
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
                <li>
                  <strong className="text-violet-600 text-2xl">Strong:</strong>{" "}
                  React.JS, TypeScript, Tailwind CSS, JavaScript, Redux Toolkit,
                  Node.JS, MongoDB, Problem Solving, RESTful APIs, AWS Amplify,
                  Deployment, Version Control, Formik, TanStack Query
                </li>
                <li>
                  <strong className="text-violet-600 text-2xl">
                    Intermediate:
                  </strong>{" "}
                  Python, Express.JS, SQL, AWS S3, Serverless, AWS Lambda,
                  Next.JS, Data Structures, Azure, Third-Party API Integration
                </li>
                <li>
                  <strong className="text-violet-600 text-2xl">
                    Beginner:
                  </strong>{" "}
                  React Native, Artificial Intelligence, Machine Learning
                </li>
              </ul>
            ),
          },
          {
            title: "Philosophy",
            content: (
              <p className="text-xl text-gray-600 leading-relaxed">
                I believe in the power of collaboration and creativity. My goal
                is to build solutions that enhance user experiences, ensuring
                every interaction is intuitive and meaningful. I embrace
                continuous learning, value diverse perspectives, and strive to
                deliver innovative, scalable products that meet real-world
                needs.
              </p>
            ),
          },
          {
            title: "Current Focus",
            content: (
              <p className="text-xl text-gray-600 leading-relaxed">
                Currently, I am deepening my knowledge of cloud technologies,
                focusing on AWS and Azure for efficient deployments. I&apos;m
                also enhancing my expertise in mobile development with React
                Native, aiming to build seamless, cross-platform applications.
              </p>
            ),
          },
          {
            title: "Personal Interests",
            content: (
              <p className="text-xl text-gray-600 leading-relaxed">
                Beyond coding, I enjoy exploring emerging tech trends, engaging
                with developer communities, and spending quality time with my
                family. Sharing knowledge, whether through mentorship or
                collaborative projects, keeps me inspired and driven to grow
                both professionally and personally.
              </p>
            ),
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            {...fadeInSectionVariant}
            className="rounded-lg p-6 my-6 border-2 border-black"
          >
            <motion.h2
              {...fadeInVariant}
              className="text-4xl font-bold text-gray-800 underline decoration-violet-600 text-center mb-4"
            >
              {section.title}
            </motion.h2>
            {section.content}
          </motion.section>
        ))}
      </div>
    </div>
  );
}

export default Page;
