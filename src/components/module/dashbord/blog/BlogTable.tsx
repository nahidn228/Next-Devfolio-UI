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
import Loader from "@/app/(dashboerd)/dashboard/loading";

type Blog = {
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
};

const BlogTable = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const limit = 5;

  // ✅ Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
          cache: "no-store",
        });
        const { data } = await res.json();
        const allBlogs = data?.data;

        // Adjust for API response shape
        setBlogs(Array.isArray(allBlogs) ? allBlogs : [allBlogs]);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ Filter blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      (b) =>
        b?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b?.author?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [blogs, searchQuery]);

  // ✅ Pagination
  const total = filteredBlogs?.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const paginatedData = filteredBlogs.slice((page - 1) * limit, page * limit);

  if (loading) return <Loader />;

  return (
    <section className="container mx-auto px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">
          All <span className="text-primary">Blogs</span>
        </h2>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search by Title or Author..."
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
              <TableHead>Content</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={50}
                    height={40}
                    className="rounded object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.author?.name}</TableCell>
                <TableCell>{blog.views}</TableCell>
                <TableCell>
                  {blog?.isFeatured ? (
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded">
                      Yes
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                      No
                    </span>
                  )}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {blog.content}
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

export default BlogTable;
