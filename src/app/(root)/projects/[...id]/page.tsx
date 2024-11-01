import React from "react";
import data from "../../../../lib/data.json";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

interface Project {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
}

interface Params {
  id: string;
}

interface PageProps {
  params: Params;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const project: Project[] = data.projects;
  const filteredProject = project.filter((p) => p.id === Number(id));

  if (filteredProject.length === 0) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 min-h-screen font-Caveat max-w-[80%] mx-auto">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <section className="flex flex-col p-6 justify-center items-center gap-12">
            <div className="relative w-full">
              <Link href="/projects" className="text-4xl mt-2 flex justify-center items-center text-violet-600 absolute left-0">
                <MdArrowBackIosNew /> 
              </Link>
              <h1 className="text-5xl mb-12 font-bold pb-6 font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center">
                {filteredProject[0].name}
              </h1>
            </div>
            <img
              src={filteredProject[0].image}
              alt={filteredProject[0].name}
              className="object-cover outline rounded-lg scale-125"
              width={500} // Specify a width
              height={500} // Specify a height
            />
            <Link
              href={filteredProject[0].link}
              target="_blank"
              className="text-4xl mt-12 text-violet-600"
            >
              Visit
            </Link>
            <p className="text-2xl text-gray-600">
              {filteredProject[0].description}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
