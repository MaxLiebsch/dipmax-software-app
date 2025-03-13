import { nanoid } from "nanoid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../i18n/navigation";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

export default function ProjectCard({
  slug,
  title,
  description,
  image,
  tags,
  collaborators,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  collaborators: string[];
}) {
  const t = useTranslations("projects");
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
            <Badge key={nanoid()} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full">
          <Link href={`/projects/${slug}`}>{t("view")}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
