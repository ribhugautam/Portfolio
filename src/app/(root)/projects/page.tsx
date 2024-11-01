import Card from "@/app/components/Card";
import data from "../../../lib/data.json";

function page() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 min-h-screen font-Caveat max-w-[80%] mx-auto">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <h1 className="text-5xl font-bold pb-6 font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center">
            Projects
          </h1>
          <section className="flex flex-wrap p-6 justify-center items-baseline gap-8">
            {data.projects.map(
              (project: {
                id: number;
                name: string;
                description: string;
                image: string;
                link: string;
              }) => (
                <Card
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              )
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
