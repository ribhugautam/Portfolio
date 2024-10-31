import Card from "@/app/components/Card";
import tipzy from "../../../../public/tipzy.png";

function page() {
  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 min-h-screen font-Caveat max-w-[80%] mx-auto">
        <div className="pt-28 mx-auto sm:pt-36 lg:pt-32">
          <h1 className="text-5xl font-bold pb-6 font-Caveat underline decoration-violet-600 underline-offset-4 text-black text-center">
            Projects
          </h1>
          <section className="flex flex-wrap p-6 justify-center items-baseline gap-8">
            <Card
              name="Tipzy"
              description="Tipzy is an innovative music web application designed to enhance your party experience by allowing you to connect directly with the DJ and other partygoers. With Tipzy, users can buzz in to the event, sharing their song requests and playlists in real-time. This interactive platform fosters a dynamic musical atmosphere, empowering everyone to contribute to the vibe and keep the energy high. Whether you're at a house party or a large event, Tipzy creates a seamless way for music lovers to connect, collaborate, and curate the perfect soundtrack together."
              image={tipzy.src}
              link="https://www.tipzyapp.com/"
            />
            <Card
              name="Manifest.io"
              description="Introducing a sleek, modern portfolio website meticulously crafted using React.js and Tailwind CSS, combined with the dynamic capabilities of JavaScript. This cutting-edge site showcases a clean, responsive design that highlights professional work, skills, and projects in a visually stunning manner. Leveraged by the component-based architecture of React.js, the site offers an incredibly smooth user experience with fast loading times and interactive elements. Tailwind CSS brings a layer of customization and utility-first styling, making the design both adaptable and mobile-friendly. Whether you're a creative, a developer, or a professional looking to stand out, this portfolio website is the perfect canvas to display your achievements and connect with your audience."
              image="https://media.licdn.com/dms/image/v2/D562DAQFiIWNXA9Wy5Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1710741811996?e=1730988000&v=beta&t=JTf4WIcWXm8d1aFjNEoF1rktKCAZeDJZMTEJl1hPWvg"
              link="https://manifest-io.vercel.app/"
            />
            <Card
              name="Tech Buddies"
              description="Tech Buddies is an innovative ed-tech web app designed to revolutionize the way we learn technology. Aimed at fostering a community of learners and experts, it offers personalized learning journeys across various tech domains. Whether you're starting from scratch or looking to upgrade your skills, Tech Buddies provides interactive courses, real-world projects, and live mentorship to help you achieve your goals. Engage in collaborative problem-solving, gain insights from industry leaders, and unlock your potential in a supportive environment. With Tech Buddies, embark on a learning adventure that prepares you for the future of technology."
              image="https://media.licdn.com/dms/image/v2/D562DAQGiLhLZwxU3jw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1710740921140?e=1730988000&v=beta&t=oUwVA7YdDmctK_SHQ-D_EYjKFIMweJi-Xi3qY7IIMJI"
              link="https://ed-tech-app.vercel.app/"
            />
            <Card
              name="Trip Planner"
              description="Trip Planner is a user-friendly web application designed to simplify the process of planning your travels by allowing you to compare prices for various trips. With Trip Planner, users can easily search for flights, accommodations, and activities, all in one place, ensuring they find the best deals tailored to their preferences. The intuitive interface makes it easy to filter options based on budget, location, and travel dates, helping users make informed decisions. Whether you are planning a weekend getaway or an extensive vacation, Trip Planner takes the hassle out of trip planning, so you can focus on enjoying your adventure."
              image="https://media.licdn.com/dms/image/v2/D562DAQGZUsYlq1Fq0A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730382365792?e=1730988000&v=beta&t=66WTnDleMBs56Z6Bp47FS7pAOIBhLQZfPJ47vnuQ9Lk"
              link="https://trip-app-coral.vercel.app/"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default page;
