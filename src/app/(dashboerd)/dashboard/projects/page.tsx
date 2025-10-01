import ProjectCard from "../../ProjectCard"


const data = [
  {
    id: 1,
    title: "PaperTrail - Book Management Web App",
    description:
      "PaperTrail is a full-stack web application designed to help users manage their documents efficiently...",
    thumbnail: "https://prnt.sc/wb_-MfsJn6TO",
    liveUrl: null,
    repoUrl: "https://github.com/nahidn228/PaperTrail",
    techStack: ["React.js", "Redux", "Node", "Express", "MongoDB"],
    features: [
      "Login/registration with email & password",
      "JWT-based authentication for API requests",
      "Protected routes to prevent unauthorized access",
    ],
  },
]

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
