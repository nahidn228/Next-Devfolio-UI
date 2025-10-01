
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface Project {
  id: number
  title: string
  description: string
  thumbnail: string
  liveUrl?: string | null
  repoUrl: string
  techStack: string[]
  features: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Thumbnail */}
      <div className="relative w-full h-56">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <CardHeader>
        <h2 className="text-xl font-bold">{project.title}</h2>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="list-disc list-inside text-sm mt-3 text-gray-600 space-y-1">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between items-center gap-3">
        {project.liveUrl && (
          <Button asChild variant="default">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live
            </a>
          </Button>
        )}
        <Button asChild variant="secondary">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Repo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
