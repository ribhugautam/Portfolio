import hero from "../../../public/hero.svg";

export default function Home() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 max-w-[80%] mx-auto font-Caveat">
        {/* Hero */}
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-52 lg:flex-row lg:justify-between">
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
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={hero.src}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
        {/* cards */}

        <h1 className="text-5xl font-bold font-Caveat text-black text-center">
          Projects
        </h1>
        <section className="flex flex-wrap justify-between p-6 sm:py-24 gap-4" >
          <div className="max-w-xs p-6 rounded-md shadow-md border-2 border-black text-gray-900">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 border-black border-2"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="text-gray-800">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md border-2 border-black text-gray-900">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 border-black border-2"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="text-gray-800">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md border-2 border-black text-gray-900">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 border-black border-2"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="text-gray-800">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md border-2 border-black text-gray-900">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 border-black border-2"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="text-gray-800">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
}
