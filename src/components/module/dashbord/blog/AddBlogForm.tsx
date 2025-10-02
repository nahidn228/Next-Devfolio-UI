"use client";

import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createBlog } from "@/action/create";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// ✅ Validation schema
const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
  isFeatured: z.boolean(), // required boolean
  tags: z.string().optional(), // optional comma-separated tags
});

type BlogFormValues = z.infer<typeof blogSchema>;

export default function AddBlogForm() {
  const router = useRouter();
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      content: "",
      thumbnail: "",
      isFeatured: false,
      tags: "",
    },
  });

  async function onSubmit(values: BlogFormValues) {
    console.log("🚀 Blog Data:", values);
    const toastId = toast.loading("Creating Blog...");
    try {
      const res = await createBlog(values);
      console.log(res);
      if (res?.success === true) {
        toast.success("Blog creation success", { id: toastId });
        router.push("/dashboard/blogs");
      } else {
        toast.error("Blog creation failed", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      toast.error("Blog creation failed", { id: toastId });
    }
  }

  return (
    <Card className="max-w-2xl mx-auto mt-10 p-4 bg-background border rounded-lg shadow">
      <CardHeader>
        <h2 className="text-xl text-center font-bold">Add New Blog</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog content..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Thumbnail */}
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.png"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Featured Toggle */}
            <FormField
              control={form.control}
              name="isFeatured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Is Featured?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Next.js, React, Web" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full text-white">
              Save Blog
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
