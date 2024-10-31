import hero from "../../../public/vector.svg";
import collage from "../../../public/doodlecollage.svg";
import tech from "../../../public/tech-stack.svg";
import Card from "../components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 max-w-[80%] mx-auto font-Caveat">
        {/* Hero */}
        <div className="container flex flex-col-reverse justify-center p-6 py-28 pb-12 mx-auto sm:pt-36 lg:pt-52 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              I am
              <span className="text-violet-600"> Ribhu Gautam</span>
            </h1>
            <p className="mt-6 mb-8 text-2xl sm:mb-12">
              A{" "}
              <span className="text-violet-600 font-semibold ">
                Software Developer
              </span>{" "}
              based in <span className="font-semibold">Chandigarh, India</span>,
              who thrives on tackling{" "}
              <span className="font-semibold">complex challenges</span> and
              transforming ideas into{" "}
              <span className="font-semibold">reality</span>. With a strong
              foundation in{" "}
              <span className="font-semibold text-violet-600">
                full stack development
              </span>
              , I am dedicated to creating{" "}
              <span className="font-semibold">innovative solutions</span> that
              enhance user experiences and drive efficiency. My passion for
              technology fuels my{" "}
              <span className="font-semibold">continuous learning</span>,
              allowing me to stay updated with the latest trends and best
              practices in the industry.
              <br className="hidden md:inline lg:hidden" />I believe in the
              power of{" "}
              <span className="font-semibold text-violet-600">
                collaboration
              </span>{" "}
              and{" "}
              <span className="font-semibold text-violet-600">creativity</span>,
              striving to make a positive impact through my work.
            </p>
          </div>
          <div className="flex items-center relative z-[-2] justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src={hero.src}
              alt=""
              width={372}
              height={80}
              className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
            <Image
              src={collage.src}
              alt=""
              width={472}
              height={80}
              className="absolute object-cover rounded-tl-full rounded-e-full -z-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>

        {/* Skills */}

        <h1 className="text-5xl font-bold underline decoration-violet-600 underline-offset-4 font-Caveat text-black text-center">
          Stack
        </h1>
        <section className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between p-6 sm:py-24 gap-8">
          <p className=" text-2xl p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            As a <span className="text-violet-600">Full Stack Developer</span>,
            I have a diverse skill set that enables me to build robust web
            applications. I am currently enhancing my expertise in{" "}
            <span className="text-violet-600">MERN Stack</span>, while also
            being proficient in Node.js and MongoDB. My foundation in web
            development includes a solid grasp of HTML, CSS, and JavaScript. I
            leverage version control using{" "}
            <span className="text-violet-600"> Git and GitHub </span>, and I am
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
          </p>

          <div className="flex items-center relative z-[-2] justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              src={tech.src}
              alt=""
              width={372}
              height={72}
              className="object-cover scale-125 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </section>

        {/* cards */}

        <h1 className="text-5xl font-bold font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center">
          Projects
        </h1>
        <section className="flex flex-wrap justify-between p-6 sm:py-24 gap-8">
          <Card
            name="Project 1"
            description="Project 1 description"
            image="https://picsum.photos/300"
          />
          <Card
            name="Project 2"
            description="Project 2 description"
            image="https://picsum.photos/300"
          />
          <Card
            name="Project 3"
            description="Project 3 description"
            image="https://picsum.photos/300"
          />
          <Card
            name="Project 4"
            description="Project 4 description"
            image="https://picsum.photos/300"
          />
        </section>
      </div>
    </div>
  );
}
