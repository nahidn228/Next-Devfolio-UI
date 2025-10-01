import { Calendar } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

const HeroSection = () => {
  return (
    <section className=" container mx-auto py-20 z-0">
     {/* <div className="w-full absolute inset-0 h-screen pointer-events-none">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div> */}

      <div className="w-full mx-auto flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-20 px-4">
        {/* Left Content */}
        <div className="flex flex-col gap-10 text-center items-center lg:items-start lg:text-left lg:max-w-2xl ">
          {/* Logo Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-primary text-white shadow-lg group-hover:scale-110 transition ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {/* Code brackets icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 18l6-6-6-6M8 6l-6 6 6 6"
              />
            </svg>
          </div>
          <div>
            <h1 className="mb-4 text-3xl font-bold text-pretty lg:text-6xl">
              Code That Works, Designs That Inspire
            </h1>
            <p className="mx-auto max-w-xl text-muted-foreground text-pretty lg:mx-0">
              From sleek designs to powerful backends. Creating fast,
              responsive, and engaging websites to help you stand out online.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
            <Link href={"/projects"}>
              <Button
                size="lg"
                className="w-full sm:w-fit text-white cursor-pointer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Get Started Today
              </Button>
            </Link>
            <div className="flex flex-col items-center gap-2 lg:items-start">
              <span className="inline-flex items-center -space-x-1">
                {[
                  "avatar-1.webp",
                  "avatar-6.webp",
                  "avatar-3.webp",
                  "avatar-4.webp",
                ].map((img, i) => (
                  <Avatar key={i} className="size-7 border">
                    <AvatarImage
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/${img}`}
                      alt={`User avatar ${i + 1}`}
                    />
                  </Avatar>
                ))}
              </span>
              <p className="text-xs text-muted-foreground">
                Trusted by industry leaders
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className=" max-w-full ">
          <Image
            src="/nahidHasan.png"
            alt="Nahid Hasan Portrait"
            width={600}
            height={600}
            quality={100}
            className="rounded-lg object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
