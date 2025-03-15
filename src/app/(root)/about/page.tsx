import * as motion from "framer-motion/client";
// import { motion } from "framer-motion";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Ribhu Gautam",
};

function Page() {
  return (
    <div className="pattern h-dvh relative overflow-hidden">
      <div className="w-11/12 max-w-[80%] font-Caveat mx-auto min-h-screen relative z-10">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold underline decoration-violet-600 underline-offset-4 text-black text-center"
          >
            About
          </motion.h1>
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg my-6  border-2 border-black"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              With a robust foundation in full stack development, I have honed
              my skills in the MERN stack. My professional journey has taken me
              through various internships, notably at{" "}
              <strong className="text-violet-600">Tipzy</strong>, where I
              designed user-centric applications. This experience sharpened my
              technical and team collaboration skills.
            </p>
          </motion.section>
        </div>

        <div className="rounded-lg p-6 my-6 mt-8  border-2 border-black">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 underline decoration-violet-600 text-center mb-4"
          >
            Skills
          </motion.h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
            {[
              { label: "Languages", value: "JavaScript, HTML, CSS" },
              { label: "Frameworks", value: "React, Node.js, Express" },
              { label: "Databases", value: "MongoDB" },
              { label: "Tools", value: "Git, Docker, AWS" },
            ].map((skill, index) => (
              <motion.li
                key={skill.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
                viewport={{ once: true }}
                className="hover:text-violet-600 transition"
              >
                <strong className="text-violet-600 text-2xl">
                  {skill.label}:
                </strong>{" "}
                {skill.value}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg p-6 my-6  border-2 border-black">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 underline decoration-violet-600 text-center mb-4"
          >
            Philosophy
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
          I believe in the power of collaboration and creativity. My goal is
            to create innovative solutions that enhance user experiences,
            fostering engagement and satisfaction through intuitive design and
            functionality. I understand that every project is unique, and I
            strive to approach each challenge with an open mind and a
            willingness to learn. By leveraging diverse perspectives and skill
            sets, I aim to build products that not only meet user needs but also
            inspire and delight them. I am passionate about staying updated with
            industry trends and best practices, as I believe that continuous
            learning is essential for growth. Ultimately, my philosophy is
            centered around creating meaningful connections between users and
            technology, ensuring that every interaction is seamless and
            enjoyable.
          </p>
        </div>

        <div className="rounded-lg p-6 my-6  border-2 border-black">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 underline decoration-violet-600 text-center mb-4"
          >
            Current Focus
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
          I’m currently diving deeper into cloud technologies and enhancing my
            skills in React Native for mobile app development. As the tech
            landscape evolves, I recognize the importance of cloud computing in
            creating scalable and efficient applications. I am exploring various
            cloud services, including AWS and Azure, to understand how to
            leverage their capabilities for deploying and managing applications
            effectively. Additionally, my focus on React Native is driven by a
            passion for building cross-platform mobile applications that provide
            seamless user experiences. I’m experimenting with different features
            and libraries to create intuitive interfaces and optimize
            performance. This combination of cloud expertise and mobile
            development skills is equipping me to tackle complex projects and
            deliver innovative solutions that meet modern user demands.
          </p>
        </div>

        <div className="rounded-lg p-6 my-6  border-2 border-black">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 underline decoration-violet-600 text-center mb-4"
          >
            Personal Interests
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
          When I’m not coding, I enjoy exploring new tech trends and spending
            quality time with my family. I love keeping up with the latest
            advancements in technology, whether it is emerging programming
            languages, innovative tools, or groundbreaking developments in AI
            and machine learning. This curiosity not only fuels my passion for
            development but also inspires me to think creatively about how
            technology can solve real-world problems. Additionally, I value the
            moments spent with my family, whether it is embarking on outdoor
            adventures, playing board games, or simply sharing stories over a
            meal. These experiences remind me of the importance of balance and
            perspective, helping me to stay grounded and inspired in my
            professional journey. I also find joy in sharing my knowledge with
            others, whether through mentoring aspiring developers or engaging in
            tech communities. This blend of personal and professional interests
            enriches my life and continuously motivates me to grow both as a
            developer and an individual.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
