import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Author {
  name: string;
  email: string;
  picture: string | null;
}

interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  createdAt: string;
  author: Author;
}

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`,
    { cache: "no-store" }
  );
  const { data } = await res.json();

  console.log(data);

  

  return (
    <section className="container mx-auto py-24 px-4">
      <Card className="max-w-4xl mx-auto p-6 bg-background border rounded-lg shadow">
              <CardHeader>
                <h1 className="text-3xl font-bold">{data?.title}</h1>
                <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{data?.author.name}</span>
                  <span>•</span>
                  <span>{new Date(data?.createdAt).toLocaleDateString()}</span>
                  {data?.isFeatured && (
                    <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                      Featured
                    </span>
                  )}
                </div>
              </CardHeader>
      
              <CardContent className="mt-6 space-y-6">
                <div className="w-full h-64 relative">
                  <Image
                    src={data?.thumbnail}
                    alt={data?.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
      
                <div className="flex flex-wrap gap-2">
                  {data?.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted-foreground text-white rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
      
                <p className="text-base text-muted-foreground">{data?.content}</p>
      
                <div className="mt-6 text-sm text-muted-foreground">
                  <p>
                    <strong>Author:</strong> {data?.author.name}
                  </p>
                  <p>
                    <strong>Author Email:</strong> {data?.author.email}
                  </p>
                  <p>
                    <strong>Views:</strong> {data?.views}
                  </p>
                </div>
              </CardContent>
            </Card>
    </section>
  );
};

export default BlogDetails;
