/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  author: {
    name: string;
    email: string;
    picture: string | null;
  };
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface BlogPageProps {
  heading?: string;
  description?: string;
}

const BlogPage = ({
  heading = "Blog Posts",
  description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
}: BlogPageProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 5,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/post?page=${page}&limit=${pagination.limit}`,
        {
          next: { tags: ["BLOGS"] },
        }
      );
      const { data: blogData } = await res.json();
      setBlogs(blogData?.data || []);
      setPagination(blogData?.pagination || pagination);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(pagination.page);
  }, [pagination.page]);

  if (loading) return <p className="text-center py-10">Loading blogs...</p>;

  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {blogs.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.content}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">
                      {post.author.name}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <div className="aspect-16/9 overflow-clip rounded-lg border border-border">
                    <Image
                      width={200}
                      height={200}
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-2 mt-10">
          <button
            disabled={pagination.page <= 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => fetchBlogs(pagination.page - 1)}
          >
            Prev
          </button>
          {Array.from({ length: pagination.totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 border rounded ${
                pagination.page === i + 1 ? "bg-primary text-white" : ""
              }`}
              onClick={() => fetchBlogs(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={pagination.page >= pagination.totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => fetchBlogs(pagination.page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
