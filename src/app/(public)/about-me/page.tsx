import { Project } from "@/components/module/about-me/Project";
import Hero1 from "@/components/module/home/Hero1";
import { Resume } from "@/components/module/home/Resume";
import { Skills } from "@/components/module/about-me/Skills";

const page = () => {
  return (
    <div className="my-20">
      <Hero1 />
      <Resume />
      <Skills />
      <Project />
    </div>
  );
};

export default page;
