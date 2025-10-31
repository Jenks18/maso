import { RESUME_DATA } from "@/data/resume-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = (RESUME_DATA.projects as any).find((p: any) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="container mx-auto p-6">
      <div className="mx-auto max-w-3xl space-y-6 bg-card p-6 rounded-md">
        <div className="flex items-start gap-4">
          {project.logoUrl ? (
            <div className="h-20 w-20 flex-none overflow-hidden rounded-md border border-input">
              <Image src={project.logoUrl} alt={`${project.title} logo`} width={80} height={80} />
            </div>
          ) : null}
          <div>
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <div className="mt-2 flex gap-2">
              {(project.status === "live" ? ["Live"] : project.status === "prototype" ? ["Prototype"] : ["Coming"]).map((s: string) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <p>{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((t: string) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {project.link && project.link.href ? (
            <a href={project.link.href} target="_blank" rel="noreferrer">
              <Button>Visit site</Button>
            </a>
          ) : null}
          <Button variant="ghost">Back</Button>
        </div>
      </div>
    </main>
  );
}
