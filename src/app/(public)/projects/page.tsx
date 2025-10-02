"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronFirst, ChevronLast } from "lucide-react";
import Link from "next/link";

interface Author {
  id: number;
  name: string;
  email: string;
  picture: string | null;
}

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  liveUrl: string | null;
  repoUrl: string | null;
  views: number;
  techStack: string[];
  features: string[];
  isFeatured: boolean;
  createdAt: string;
  author: Author;
}

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const limit = 5;

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/project?page=${page}&limit=${limit}`,
        { cache: "no-store" }
      );
      const { data, pagination } = await res.json();
      console.log(data);
      setProjects(data?.data);
      setTotalPages(pagination?.totalPages);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [page]);

  if (loading) return <p className="text-center py-10">Loading projects...</p>;

  return (
    <section className="container mx-auto py-20 px-4">
      <h2 className="mb-10 text-3xl font-bold text-center">
        Our <span className="text-primary">Projects</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Card className="border bg-background rounded-lg shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {project.isFeatured && (
                  <span className="px-2 w-16 py-1 mt-2  bg-green-100 text-green-600 text-xs rounded">
                    Featured
                  </span>
                )}
              </CardHeader>
              <CardContent>
                <div className="w-full h-40 relative mb-4">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-3 truncate">
                  {project.description}
                </p>

                <p className="text-sm font-medium mb-2">
                  <strong>Author:</strong> {project.author.name} (
                  {project.author.email})
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted-foreground text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Live
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      className="px-3 py-1 text-xs bg-gray-800 text-white rounded hover:bg-gray-900"
                    >
                      Repo
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          <ChevronFirst className="w-4 h-4 mr-1" /> Prev
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <Button
            key={num}
            size="sm"
            variant={num === page ? "default" : "outline"}
            onClick={() => setPage(num)}
          >
            {num}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next <ChevronLast className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  );
};

export default ProjectList;
