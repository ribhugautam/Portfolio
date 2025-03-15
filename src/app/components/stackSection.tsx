import { motion } from "framer-motion";
import Image from "next/image";
import tech from "../../../public/tech-stack.svg";

export default function StackSection() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, transform: "translateY(20px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        className="text-5xl font-bold underline decoration-violet-600 underline-offset-4 font-Caveat text-black text-center"
      >
        Stack
      </motion.h1>

      <section className="w-full">
        <div className="container max-w-8xl px-4 py-24 mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between p-6 gap-8">
          <motion.p
            initial={{ opacity: 0, transform: "translateX(50px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          >
            As a <span className="text-violet-600">Full Stack Developer</span>,
            I have a diverse skill set that enables me to build robust web
            applications. I am currently enhancing my expertise in{" "}
            <span className="text-violet-600">MERN Stack</span>, while also
            being proficient in Node.js and MongoDB. My foundation in web
            development includes a solid grasp of HTML, CSS, and JavaScript. I
            leverage version control using{" "}
            <span className="text-violet-600">Git and GitHub</span>, and I am
            comfortable working in both Linux and Windows environments.
            <br className="hidden lg:inline" />
            <br className="hidden lg:inline" />
            Additionally, I have experience with containerization using{" "}
            <span className="text-violet-600">
              Docker and orchestration with Kubernetes
            </span>
            . My cloud knowledge includes{" "}
            <span className="text-violet-600">AWS, Vercel and Firebase</span>,
            which I utilize for scalable solutions. I am also familiar with{" "}
            <span className="text-violet-600">React Native</span> for mobile app
            development, and have worked with tools like Express.js, Redux, and
            Material UI to create seamless user experiences. My development
            environment is powered by tools like{" "}
            <span className="text-violet-600">
              VS Code, IntelliJ IDEA, and PyCharm
            </span>
            , ensuring efficiency and productivity in my workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, transform: "translateX(-50px)" }}
            whileInView={{ opacity: 1, transform: "translateX(0px)" }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center relative z-[-2] justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            <Image
              src={tech.src}
              alt="Technology Stack"
              width={372}
              height={72}
              className="object-cover scale-125 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
