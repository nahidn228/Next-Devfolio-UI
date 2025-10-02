import BlogTable from "@/components/module/dashbord/blog/BlogTable";
import ProjectTable from "@/components/module/dashbord/project/ProjectTable";
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <BlogTable />
      <ProjectTable />
    </div>
  );
}
