import Card from "@/app/components/card";
import data from "../../../lib/data.json";
import * as motion from "framer-motion/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ribhu Gautam",
};

function page() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 min-h-screen font-Caveat max-w-[80%] mx-auto">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold pb-6 font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center"
          >
            Projects
          </motion.h1>
          <section className="flex flex-wrap p-6 justify-center items-baseline gap-8">
            {data.projects.map(
              (project: {
                id: number;
                name: string;
                description: string;
                image: string;
                link: string;
              }) => (
                <motion.div
                 initial={{ opacity: 0, y: -10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.8 }}
                 viewport={{ once: true }}
                 key={project.id}>
                  <Card
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                  />
                </motion.div>
              )
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
