import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  link: string;
};


const blogPosts = [
  {
    title: "🚀 Tackling Real-World Fintech UX Challenges",
    date: "",
    description:
      "While building my Digital Wallet API, I quickly realized that the backend is only half the battle. The frontend is where users interact, and every click, scroll, and animation can make or break the experience.",
    link: "https://www.linkedin.com/posts/nahid-hasan01_problemsolving-reactjs-typescript-activity-7367621619218841600-NFaW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF_atMBAzNKJwAxM5OoTTMg6Fby2qU81Qc",
  },
  {
    title: "While building my Tour Management System,",
    date: "",
    description:
      "🚀 While building my Tour Management System, I faced a challenge that many developers can relate to",
    link: "https://www.linkedin.com/posts/nahid-hasan01_problemsolving-reactjs-typescript-activity-7365041342638403584-LLz7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF_atMBAzNKJwAxM5OoTTMg6Fby2qU81Qc",
  },
  {
    title: "Building Smarter Forms",
    date: "",
    description:
      " One of the biggest lessons from this project was how to handle complex form inputs without making the code messy — especially with images and dates. Image Uploads--- For the Division setup, I needed just one banner image. But for New Tour creation, I had to manage a gallery of multiple images.",
    link: "https://www.linkedin.com/posts/nahid-hasan01_webdevelopment-mernstack-typescript-activity-7364719597716975616-qsgj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADF_atMBAzNKJwAxM5OoTTMg6Fby2qU81Qc",
  },
];

const FeaturedBlogs = () => {
  return (
    <div id="blogs">
      {/* Heading */}
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-white text-2xl md:text-4xl font-sans py-2 md:pt-10 relative z-20 font-bold tracking-tight">
          <Cover>From My Notebook</Cover>
        </h2>
        <p className="max-w-xl mt-[20px] text-[1rem] md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Sharing thoughts, projects, and lessons from my journey in tech.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[1000px] w-[90%] m-[90px_auto] grid md:grid-cols-3 gap-[25px]">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};


const BlogCard: React.FC<BlogCardProps> = ({ title, date, description, link }) => {
  return (
    <CardSpotlight className="w-full p-[30px] flex flex-col">
      <p className="text-sm text-neutral-400 relative z-20">{date}</p>
      <h3 className="text-xl font-bold relative z-20 mt-2 text-white">
        {title}
      </h3>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm flex-grow">
        {description}
      </p>
      <Link
        href={link}
        target="_blank"
        className="bg-[#242424] text-[0.9rem] relative z-20 p-[6px_12px] rounded-[5px] mt-6 flex justify-center text-white font-[600] hover:bg-[#333] transition"
      >
        Read More →
      </Link>
    </CardSpotlight>
  );
};

export default FeaturedBlogs;
