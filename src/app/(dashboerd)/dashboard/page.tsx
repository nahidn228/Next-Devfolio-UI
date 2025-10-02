import BlogTable from "@/components/module/dashbord/blog/BlogTable";
import ProjectTable from "@/components/module/dashbord/project/ProjectTable";

interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  views: number;
  author: {
    id: number;
    name: string;
  };
}

export default async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  const allBlogs = data?.data;
  console.log(allBlogs);
  return (
    <div>
      <BlogTable />
      <ProjectTable />
    </div>
  );
}
