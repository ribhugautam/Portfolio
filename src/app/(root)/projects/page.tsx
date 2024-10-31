import Card from "@/app/components/Card";

function page() {
  return (
    <div className="pattern h-dvh">
      <div className="min-h-screen w-11/12 font-Caveat flex justify-center items-center max-w-[80%] mx-auto">
        <section className="flex flex-wrap p-6 mt-28 md:mt-32 lg:mt-0 justify-center gap-8" >
          <Card
            name="Tipzy"
            description="Tipzy is a web application that allows you to find and book a
        table in a restaurant. It is a web application that allows you to
        find and book a table in a restaurant."
            image="https://picsum.photos/300/300"
          />

          <Card
            name="Manifest.io"
            description="Manifest.io is a web application that allows you to find and book a
        table in a restaurant. It is a web application that allows you to
        find and book a table in a restaurant."
            image="https://picsum.photos/300/300"
          />

          <Card
            name="Tech Buddies"
            description="Tech Buddies is a web application that allows you to find and book a
        table in a restaurant. It is a web application that allows you to
        find and book a table in a restaurant."
            image="https://picsum.photos/300/300"
          />

          <Card
            name="Tipzy"
            description="Tipzy is a web application that allows you to find and book"
            image="https://picsum.photos/300/300"
          />
        </section>
      </div>
    </div>
  );
}

export default page;
