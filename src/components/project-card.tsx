import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 dark:hover:border-primary/70">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline group"
              >
                {title}{" "}
                <ExternalLink className="size-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2">
                {title}
                <span className="text-[10px] rounded-md bg-muted px-2 py-1 font-mono text-muted-foreground whitespace-nowrap">
                  Coming soon
                </span>
              </span>
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
