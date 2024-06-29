import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prettyLink } from "@/lib/utils";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-ellipsis max-md:line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-md"
          style={{ aspectRatio: "16/9" }}
        />
      </CardContent>
      <CardFooter>
        <Link
          href={project.link}
          className="w-full flex gap-1 text-sm font-bold group duration-200 hover:text-muted-foreground hover:gap-2"
        >
          <span className="text-ellipsis line-clamp-1 w-[calc(100%-1.5rem)]">
            {prettyLink(project.link)}
          </span>
          <span>→</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
