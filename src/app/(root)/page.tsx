import hero from "../../../public/vector.svg";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 max-w-[80%] mx-auto font-Caveat">
        {/* Hero */}
        <div className="container flex flex-col justify-center p-6 py-28 mx-auto sm:pt-52 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              I am
              <span className="text-violet-600"> Ribhu Gautam</span>
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12">
              A <span className="text-violet-600">Software Developer</span>{" "}
              based in Chandigarh India
              <br className="hidden md:inline lg:hidden" /> with a passion for
              creating innovative solutions.
            </p>
          </div>
          <div className="flex items-center z-[-2] justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={hero.src}
              alt=""
              className="object-cover object-center h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
        {/* cards */}

        <h1 className="text-5xl font-bold pb-4 font-Caveat text-black text-center">
          Projects
        </h1>
        <section className="flex flex-wrap justify-between p-6 sm:py-24 gap-8">
          <Card name="Project 1" description="Project 1 description" image="https://picsum.photos/300" />
          <Card name="Project 2" description="Project 2 description" image="https://picsum.photos/300" />        
          <Card name="Project 3" description="Project 3 description" image="https://picsum.photos/300" />
          <Card name="Project 4" description="Project 4 description" image="https://picsum.photos/300" />
        </section>
      </div>
    </div>
  );
}
