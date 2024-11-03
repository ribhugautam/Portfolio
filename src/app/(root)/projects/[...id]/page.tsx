import React from "react";
import data from "../../../../lib/data.json";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import * as motion from "framer-motion/client";

type Params = Promise<{ id: number }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  console.log(id);
}

export default async function page(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const project = data.projects;
  const filteredProject = project.filter(
    (project: { id: number }) => project.id == id
  );
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 min-h-screen font-Caveat max-w-[80%] mx-auto">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <section className="flex flex-col p-6 justify-center items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <Link
                href="/projects"
                className="text-4xl mt-2 active:scale-95 flex justify-center items-center text-violet-600 absolute left-0 "
              >
                <MdArrowBackIosNew />
              </Link>
              <h1 className="text-5xl mb-12 font-bold pb-6 font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center">
                {filteredProject[0].name}
              </h1>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              src={filteredProject[0].image}
              alt={filteredProject[0].name}
              className="object-cover outline rounded-lg scale-125 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
            <Link
              href={filteredProject[0].link}
              target="_blank"
              className="text-4xl mt-12 text-violet-600"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="active:scale-95"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                View Project
              </motion.span>
            </Link>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-600"
            >
              {filteredProject[0].description}
            </motion.p>
          </section>
        </div>
      </div>
    </div>
  );
}
