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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createProject } from "@/action/create";

// ✅ Validation schema
const projectSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z
    .string()
    .min(10, "Description should be at least 10 characters"),
  thumbnail: z.string().url("Thumbnail must be a valid URL"),
  liveUrl: z.string().url().optional().or(z.literal("")),
  repoUrl: z.string().url("Repository URL must be valid"),
  isFeatured: z.boolean(), // ✅ required boolean
  techStack: z.string().min(1, "Tech is required"),
  features: z.string().min(1, "Feature is required"),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

export default function AddProjectForm() {
  const router = useRouter();
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: "",
      liveUrl: "",
      repoUrl: "",
      isFeatured: false,
      techStack: "",
      features: "",
    },
  });

  async function onSubmit(values: ProjectFormValues) {
    console.log("🚀 Project Data:", values);

    const toastId = toast.loading("Creating Project...");

    const res = await createProject(values);
    console.log(res);
    if (res?.success === true) {
      toast.success("Project creation success", { id: toastId });
      router.push("/dashboard/projects");
    }
  }

  return (
    <Card className="max-w-2xl mx-auto mt-10 p-4 bg-background border rounded-lg shadow">
      <CardHeader>
        <h2 className="text-xl text-center font-bold">Add New Project</h2>
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
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write project description..."
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

            {/* Live URL */}
            <FormField
              control={form.control}
              name="liveUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live URL (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://liveproject.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Repo URL */}
            <FormField
              control={form.control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Repository URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/user/project"
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

            {/* Tech Stack */}
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tech Stack (comma separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. React.js, TypeScript" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Features */}
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Features (comma separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. JWT Authentication, SSR, ISR" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button type="submit" className="w-full text-white">
              Save Project
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
