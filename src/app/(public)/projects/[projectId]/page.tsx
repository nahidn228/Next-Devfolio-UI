import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import Link from "next/link";





const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${projectId}`,
    { cache: "no-store" }
  );
  const { data: project } = await res.json();

  console.log(project);

  return (
    <section className="container mx-auto py-28 px-4">
      <Card className="max-w-3xl mx-auto border bg-background rounded-lg shadow">
        <CardHeader>
          <h2 className="text-3xl font-bold">{project?.title}</h2>
          {project?.isFeatured && (
            <span className="mt-2 w-16 inline-block px-2 py-1 bg-green-100 text-green-600 text-xs rounded">
              Featured
            </span>
          )}
        </CardHeader>

        <CardContent>
          {/* Thumbnail */}
          <div className="w-full h-64 relative mb-6">
            <Image
              src={project?.thumbnail}
              alt={project?.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4">{project?.description}</p>

          {/* Author */}
          <p className="mb-4">
            <strong>Author:</strong> {project?.author?.name} (
            {project?.author?.email})
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <strong>Tech Stack:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {project?.techStack?.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-muted-foreground text-white rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <strong>Features:</strong>
            <ul className="list-disc list-inside mt-1 text-muted-foreground">
              {project?.features.map((feature: string, i: number) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6">
            {project?.liveUrl && (
              <Link
                href={project?.liveUrl}
                target="_blank"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Live
              </Link>
            )}
            {project?.repoUrl && (
              <Link
                href={project?.repoUrl}
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                View Repo
              </Link>
            )}
          </div>

          {/* Created Date */}
          <p className="mt-6 text-sm text-muted-foreground">
            Created at: {new Date(project?.createdAt).toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProjectDetails;
