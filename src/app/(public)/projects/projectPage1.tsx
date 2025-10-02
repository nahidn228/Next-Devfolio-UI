import { HoverEffect } from "@/components/ui/card-hover-effect";
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
const CardHoverEffect = () => {


  


  return (
    <section className="container mx-auto w-full py-20">
     <div className="flex flex-col items-center my-10">
       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-6"> Turning Ideas Into Reality
      
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mb-8">
        A showcase of the web applications and solutions I’ve built using modern technologies.
        Explore the projects I’ve developed, blending design, functionality, and performance.
      </p>
     </div>

      <div className="max-w-5xl mx-auto px-8 ">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default CardHoverEffect;
