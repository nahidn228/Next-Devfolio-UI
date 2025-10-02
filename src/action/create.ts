/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// create.ts
export const createBlog = async (values: any) => {
  const session = await getUserSession();

  const modifiedData = {
    ...values,
    authorId: session?.user?.id,
    isFeatured: Boolean(values.isFeatured),
    tags: values.tags
      ? values.tags.split(",").map((tag: string) => tag.trim())
      : [],
  };

  console.log("📌 Sending to API:", modifiedData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();

  if (result.id) {
    revalidateTag("BLOGS");
    redirect("/dashboard/blogs");
  }

  return result;
};
