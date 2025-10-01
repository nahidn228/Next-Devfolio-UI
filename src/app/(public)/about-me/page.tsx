import Hero1 from "@/components/module/home/Hero1";
import { Resume } from "@/components/module/home/Resume";
import { Skills } from "@/components/module/home/Skills";

const page = () => {
  return (
    <div>
      <Hero1 />
      <Resume />
      <Skills />
    </div>
  );
};

export default page;
