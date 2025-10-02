"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ChevronFirst, ChevronLast } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  isFeatured: boolean;
  views: number;
  author: {
    id: number;
    name: string;
    email: string;
  };
};

const ProjectTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const limit = 5;

  // ✅ Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
          cache: "no-store",
        });
        const { data } = await res.json();

        const allProjects = data?.data;
        setProjects(Array.isArray(allProjects) ? allProjects : [allProjects]);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ✅ Filter by title or author
  const filteredProjects = useMemo(() => {
    return projects.filter(
      (p) =>
        p?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p?.author?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p?.author?.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [projects, searchQuery]);

  // ✅ Pagination
  const total = filteredProjects?.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const paginatedData = filteredProjects.slice(
    (page - 1) * limit,
    page * limit
  );

  if (loading) return <p className="text-center">Loading projects...</p>;

  return (
    <section className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">
          All <span className="text-primary">Projects</span>
        </h2>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search by Title, Author Name, or Email..."
          value={searchQuery}
          onChange={(e) => {
            setPage(1);
            setSearchQuery(e.target.value);
          }}
          className="w-full"
        />
        <Button variant="outline" onClick={() => setSearchQuery("")}>
          Clear
        </Button>
      </div>

      {/* Table */}
      <div className="bg-background overflow-hidden rounded-md border min-h-80">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead>Thumbnail</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={60}
                    height={50}
                    className="rounded object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium max-w-[200px] truncate">
                  {project.title}
                </TableCell>
                <TableCell>
                  <p className="font-medium">{project.author?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {project.author?.email}
                  </p>
                </TableCell>
                <TableCell>{project.views}</TableCell>
                <TableCell>
                  {project?.isFeatured ? (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                      No
                    </span>
                  )}
                </TableCell>
                <TableCell className="max-w-[250px] truncate">
                  {project.description}
                </TableCell>
                <TableCell className="flex justify-center gap-2">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-muted-foreground">
          Showing page {page} of {totalPages}
        </p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronFirst className="w-4 h-4 mr-1" />
            Prev
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Button
              key={num}
              className="text-white"
              variant={num === page ? "default" : "outline"}
              size="sm"
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
            Next
            <ChevronLast className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectTable;
