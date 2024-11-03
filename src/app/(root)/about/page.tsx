import * as motion from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ribhu Gautam",
};

function page() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 max-w-[80%] font-Caveat mx-auto min-h-screen">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold underline decoration-violet-600 underline-offset-4 font-Caveat text-black text-center"
          >
            About
          </motion.h1>
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg my-6"
          >
            <p className="text-xl text-gray-600 mb-4">
              With a robust foundation in full stack development, I have honed
              my skills in the MERN stack, which includes MongoDB, Express.js,
              React, and Node.js. My professional journey has taken me through
              various internships, notably at
              <strong className="text-violet-600">Tipzy</strong>, where I had
              the opportunity to design and develop user-friendly applications
              that prioritize seamless user experience. During my time there, I
              collaborated with cross-functional teams to gather requirements,
              implement innovative features, and troubleshoot issues in real
              time. This experience not only strengthened my technical skills
              but also enhanced my ability to communicate effectively within a
              team, adapt to evolving project needs, and maintain a user-centric
              approach in all development phases. I am passionate about creating
              applications that not only meet functional requirements but also
              delight users with intuitive interfaces and responsive design.
            </p>
          </motion.section>
        </div>

        <div className="rounded-lg p-6 my-6 mt-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className=" font-bold text-gray-800 underline underline-offset-4 decoration-violet-600 text-center text-4xl mb-4"
          >
            Skills
          </motion.h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl"
            >
              <strong className="text-violet-600 text-2xl">Languages:</strong>
              {` `}JavaScript, HTML, CSS
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-xl"
            >
              <strong className="text-violet-600 text-2xl">Frameworks:</strong>
              {` `}React, Node.js, Express
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="text-xl"
            >
              <strong className="text-violet-600 text-2xl">Databases:</strong>
              {` `}MongoDB
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-xl"
            >
              <strong className="text-violet-600 text-2xl">Tools:</strong>
              {` `}Git, Docker, AWS
            </motion.li>
          </ul>
        </div>

        <div className="mt-8 p-6 my-6 rounded-lg ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl capitalize underline underline-offset-4 decoration-violet-600 text-center font-bold text-gray-800 mb-4"
          >
            My philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-4"
          >
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
          </motion.p>
        </div>

        <div className="mt-8 p-6 my-6 rounded-lg ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl capitalize underline underline-offset-4 decoration-violet-600 text-center font-bold text-gray-800 mb-4"
          >
            Current Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-4"
          >
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
          </motion.p>
        </div>

        <div className="mt-8 p-6 my-6 rounded-lg ">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl capitalize underline underline-offset-4 decoration-violet-600 text-center font-bold text-gray-800 mb-4"
          >
            Personal Interests
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-4"
          >
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
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default page;
