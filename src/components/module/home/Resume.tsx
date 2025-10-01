import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-7">
          {/*  GLOBPAY */}
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>MERN Stack Developer (Remote)</Cover>
            </h4>
            <Link
              href="https://softvence.agency/"
              target="_blank"
              className="text-[#f4f4f4] text-[1rem] font-[600]"
            >
              GLOBPAY
            </Link>
            <br />
            <span className="text-blue-400 my-[10px]">Jun 2025 - Running</span>

            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <span className="font-[600]"> Responsibilities:</span>
              <li>
                - Build responsive web applications with React, Next.js (SSR, ISR, and SSG), Node.js, Express.js, and Mongoose.
              </li>
              <li>
                - Built Figma to responsive web apps with SSR/ISR, reducing load times by 20%.
              </li>
              <li>
                - Enhance UI/UX while ensuring clean, optimized, cross-browser, and high-performance web applications.
              </li>
              
            </ul>
          </div>
          
          {/* The RN Agency */}
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>SEO Strategist (Remote) </Cover>
            </h4>
            <Link
              href="https://thernagency.com/"
              target="_blank"
              className="text-[#f4f4f4] text-[1rem] font-[600]"
            >
              The RN Agency
            </Link>
            <br />
            <span className="text-blue-400 my-[10px]">Jan 2020 - Oct 2024</span>

             <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <span className="font-[600]"> Duties/Responsibilities:</span>
              <li>- Led a 5-member team,</li>
              <li>- Improved search ranking for 50+ clients</li>
              <li>- Collaborated with content/dev/marketing teams.</li>
            </ul>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <span className="font-[800]"> Tools:</span>
              <span> Ahrefs, GSC, MOZ, Indexing Checker (app.seowl.co), Geogrid Rank Tracker (Local Viking)</span>
            </ul>
          </div>
          {/* Magnet Marketing SEO */}
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover> SEO Strategist (Remote) </Cover>
            </h4>
            <Link
              href="https://magnetmarketingseo.com/"
              target="_blank"
              className="text-[#f4f4f4] text-[1rem] font-[600]"
            >
              Magnet Marketing SEO
            </Link>
            <br />
            <span className="text-blue-400 my-[10px]">Jan 2021 - Jan 2023</span>

            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <span className="font-[600]"> Duties/Responsibilities:</span>
              <li>- Contributed in 8-member agile teams</li>
              <li>- Coordinated with 3 departments</li>
              <li>- Collaborated with content/dev/marketing teams.</li>
              
            </ul>
           <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <span className="font-[800]"> Tools:</span>
              <span> Ahrefs, GSC, MOZ, Indexing Checker (app.seowl.co), Geogrid Rank Tracker (Local Viking)</span>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-7">
          {/* Jahangirnagar University */}
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover> Professional Masters in Information Technology </Cover>
            </h4>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal">
              {" "}
              Jahangirnagar University
            </p>

            <p className="text-[#f4f4f4]">
              Session:{" "}
              <span className="text-blue-400 my-[10px]">Summer-2023</span>
            </p>
            <p className="text-[#f4f4f4]">
              Publication Year:{" "}
              <span className="text-blue-400 my-[10px]">2025</span>
            </p>

            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {" "}
              CGPA: <span className="text-blue-400 ">3.77</span> out of 4.00
            </p>
          </div>
          {/* Bangladesh University*/}
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover> BSc in Computer Science and Engineering </Cover>
            </h4>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal">
              Bangladesh University
            </p>
            <p className="text-[#f4f4f4]">
              Session:{" "}
              <span className="text-blue-400 my-[10px]">2019 - 2022</span>
            </p>
            <p className="text-[#f4f4f4]">
              Publication Year:{" "}
              <span className="text-blue-400 my-[10px]">2023</span>
            </p>

            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {" "}
              CGPA: <span className="text-blue-400 ">3.93</span> out of 4.00
            </p>
          </div>
          {/* Lakshmipur Polytechnic Institute*/}
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover> Diploma in Computer Engineering </Cover>
            </h4>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal">
              Lakshmipur Polytechnic Institute
            </p>
            <p className="text-[#f4f4f4]">
               Session:{" "}
              <span className="text-blue-400 my-[10px]">2013 - 2017</span>
            </p>
            <p className="text-[#f4f4f4]">
              Publication Year:{" "}
              <span className="text-blue-400 my-[10px]">2018</span>
            </p>

            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {" "}
              CGPA: <span className="text-blue-400 ">3.53</span> out of 4.00
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}
