import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  icon: ReactNode;
  index: number;
}

export function Skills() {
  const frontendTech = [
    {
      title: "ReactJS",
      icon: <Image src="/React-bg.png" alt="ReactJS" width={50} height={50} />,
    },
    {
      title: "Next.js",
      icon: (
        <Image
          src="/nextjs-icon-dark.png"
          alt="nextjs"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "TypeScript",
      icon: (
        <Image
          src="/Typescript.svg.png"
          alt="Typescript"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "JavaScript",
      icon: <Image src="/JS.png" alt="js" width={50} height={50} />,
    },
    {
      title: "Tailwind",
      icon: (
        <Image
          src="/tailwindCSS-removebg-preview.png"
          alt="Tailwind"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Bootstrap",
      icon: (
        <Image
          src="/Bootstrap-removebg-preview.png"
          alt="Bootstrap"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "shadcn/ui",
      icon: (
        <Image src="/shadcn-ui.png" alt="shadcn-ui" width={50} height={50} />
      ),
    },

    {
      title: "DaisyUI",
      icon: (
        <Image
          src="/DaisyUI-removebg-preview.png"
          alt="Daisy UI"
          width={50}
          height={50}
        />
      ),
    },

    {
      title: "Wix",
      icon: <Image src="/WIX.png" alt="WIX" width={50} height={50} />,
    },
    {
      title: "Redux",
      icon: <Image src="/REDUX.png" alt="REDUX" width={50} height={50} />,
    },
    {
      title: "RTK Query",
      icon: <Image src="/RTQ.png" alt="RTK Query" width={50} height={50} />,
    },
  ];

  const backendTech = [
    {
      title: "Node.js",

      icon: (
        <Image
          src="/nodejs-removebg-preview.png"
          alt="NodeJS"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Express.js",

      icon: (
        <Image
          src="/Expressjs-removebg-preview.png"
          alt="Expressjs"
          width={50}
          height={50}
        />
      ),
    },

    {
      title: "Mongoose",

      icon: (
        <Image src="/mongoose1111.png" alt="mongoose" width={50} height={50} />
      ),
    },
    {
      title: "MongoDB",

      icon: (
        <Image
          src="/MongoDB-removebg-preview.png"
          alt="MongoDB"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Postman",

      icon: <Image src="/postman.png" alt="MongoDB" width={50} height={50} />,
    },
    {
      title: "ApiDog",

      icon: (
        <Image src="/apidog-logo.png" alt="MongoDB" width={50} height={50} />
      ),
    },
  ];
  const authTech = [
    {
      title: "Firebase",

      icon: (
        <Image
          src="/Firebase-removebg-preview.png"
          alt="Firebase"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "JWT",

      icon: (
        <Image
          src="/JWT__JSON_Web_Token_-removebg-preview.png"
          alt="jWT"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Zod",

      icon: <Image src="/ZOD.png" alt="ZOD" width={50} height={50} />,
    },
    {
      title: "Bcrypt . js",

      icon: (
        <Image
          src="/Bcrypt_._js-removebg-preview.png"
          alt="MongoDB"
          width={50}
          height={50}
        />
      ),
    },
  ];

  const versionTech = [
    {
      title: "Git",

      icon: (
        <Image
          src="/Git-removebg-preview.png"
          alt="GIT"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "GitHub",

      icon: (
        <Image
          src="/github-white-icon.png"
          alt="Github"
          width={50}
          height={50}
        />
      ),
    },
    {
      title: "Vercel",

      icon: (
        <Image src="/logo-vercel.png" alt="Vercel" width={50} height={50} />
      ),
    },
    {
      title: "Netlify",

      icon: (
        <Image src="/netlify-light.png" alt="MongoDB" width={50} height={50} />
      ),
    },
    {
      title: "Surge . sh",

      icon: <Image src="/surge.png" alt="MongoDB" width={50} height={50} />,
    },
  ];

  return (
    <div className="flex flex-col z-0  mt-[150px]" >
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto  text-white text-2xl md:text-4xl  font-sans py-8 md:pt-10 relative  font-bold tracking-tight">
          <Cover> My Tech Stack & Skills</Cover>
        </h2>
        <p className="max-w-xl mt-[20px] text-[1rem] md:text-lg text-neutral-700 dark:text-neutral-400 text-center ">
          Building scalable, efficient, and user-friendly apps with modern web
          tools and frameworks.
        </p>
      </div>
      {/*  Frontend Development */}
      <h3 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-100 my-6">
        Frontend Development
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4  relative z-10 py-10  mx-auto">
        {frontendTech.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>{" "}
      {/*  Backend Development */}
      <h3 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-100 my-6">
        Backend Development
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4  relative z-10 py-10  mx-auto">
        {backendTech.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>{" "}
      {/*  Authentication & Validation */}
      <h3 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-100 my-6">
        Authentication & Validation
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4  relative z-10 py-10  mx-auto">
        {authTech.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>{" "}
      {/*  Version Control & Deployment */}
      <h3 className="text-2xl font-bold text-center text-neutral-800 dark:text-neutral-100 my-6">
        Version Control & Deployment
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4  relative z-10 py-10  mx-auto">
        {versionTech.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>{" "}
    </div>
  );
}

const Feature: React.FC<FeatureProps> = ({ title, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r z-[0]  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0  z-[0]  group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent " />
      )}
      {index >= 4 && (
        <div className="opacity-0  z-[0]  group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent " />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-0 px-10 ">
        <div className="absolute  z-[0]  left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center " />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 text-center">
          {title}
        </span>
      </div>
    </div>
  );
};
