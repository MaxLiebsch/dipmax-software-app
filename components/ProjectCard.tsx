import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { Card, CardContent, CardFooter } from "./ui/card";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  collaborators,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  collaborators: string[];
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full">
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
}
