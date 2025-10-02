/* eslint-disable @typescript-eslint/no-explicit-any */

import { Cover } from "@/components/ui/cover";
import CarouselCards from "./FeaturedProject";
import Link from "next/link";


export default async function HomeProject() {
 
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: {
      tags: ["PROJECT"],
    },
  });

  const { data } = await res.json();
  const allProject = data?.data
  console.log(allProject);
  return (
    <div>
      
       <h2 className="mx-auto text-center text-white text-2xl md:text-4xl font-sans py-2 md:pt-10 relative z-20 font-bold tracking-tight">
            <Cover>Explore My Projects</Cover>
          </h2>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto my-5">
        {allProject?.slice(0, 3).map((project: any) => (
          <CarouselCards key={project?.id} project={project} />
        ))}
      </div>
       <div className="mt-10 flex items-center justify-center">
          <Link
            href="/projects"
            className="text-gray-300 font-semibold hover:text-white transition-colors duration-300 group"
          >
            Discover More
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">
              &rarr;
            </span>
          </Link>
        </div>
    </div>
  );
}
