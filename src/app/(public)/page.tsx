import FeaturedBlogs from "@/components/module/home/FeaturedBlog";
import HeroSection from "@/components/module/home/HeroSection";
import AboutMe from "@/components/module/home/AboutMe";

import OrbitingSkills from "@/components/module/home/OrbitSkill";
import { Testimonials } from "@/components/module/home/Testimonials";
import HomeProject from "@/components/module/home/HomeProject";

export default function Home() {
  return (
    <div className=" z-0">
      <AboutMe />
      <HeroSection />
      <FeaturedBlogs />
      <HomeProject />
      {/* <CarouselCards /> */}
      <OrbitingSkills />
      <Testimonials />
    </div>
  );
}
