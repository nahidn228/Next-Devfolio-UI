"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

// ✅ validation schema
const formSchema = z.object({
  prompt: z
    .string()
    .min(20, { message: "Prompt must be at least 20 characters." }),
  category: z.string().nonempty({ message: "Please select a category." }),
});

const categories = [
  "Painting",
  "Animated-Image",
  "Wallpaper",
  "Poster",
  "Digital-Art",
  "Realistic-Image",
];

export default function CreatePage() {
  // hook form setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      category: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" w-full max-w-xl  shadow-lg rounded-2xl p-8 border border-primary/20  overflow-hidden">
    

        {/* Content */}
        <h1 className=" text-3xl font-bold text-center mb-6  bg-clip-text  ">
          🌱 Let&apos;s Create 🐦‍🔥
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 "
          >
            {/* Prompt Input */}
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700 dark:text-gray-200">
                    Prompt
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write, what's on your mind 🧠"
                      className="resize-none min-h-[120px] rounded-xl border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-gray-500 dark:text-gray-400">
                    Be descriptive (minimum 20 characters).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Category Select */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700 dark:text-gray-200">
                    Category
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 transition">
                        <SelectValue placeholder="🎨 Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-3 text-lg text-neutral-950 dark:text-white font-semibold rounded-xl bg-gradient-to-r from-primary to-primary/60 hover:opacity-90 transition-transform transform hover:scale-[1.02]"
            >
               Create
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
