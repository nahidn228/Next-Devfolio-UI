import FeaturedBlogs from "@/components/module/home/FeaturedBlog";
import HeroSection from "@/components/module/home/HeroSection";
import AboutMe from "@/components/module/home/AboutMe";
import CarouselCards from "@/components/module/home/FeaturedProject";
import OrbitingSkills from "@/components/module/home/OrbitSkill";


export default function Home() {
  return (
    <div className=" z-0">
      <AboutMe />
      <HeroSection />
      <FeaturedBlogs />
      <CarouselCards />
      <OrbitingSkills />
    </div>
  );
}


