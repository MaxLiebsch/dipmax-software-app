import { Link } from "@/src/i18n/navigation";
import { DeveloperWrapper } from "@/src/types/Developer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Team = ({ developers }: { developers: DeveloperWrapper }) => {
  const t = useTranslations("team");
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="mb-2">{t("badge")}</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(developers.docs).map(([slug, member]) => (
            <Card key={slug}>
              <CardHeader>
                <div className="overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                  <Image
                    src={
                      member.image
                        ? member.image.url
                        : "/placeholder.svg?height=96&width=96"
                    }
                    width={96}
                    height={96}
                    alt="Team Member"
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-center">{member.name}</CardTitle>
                <CardDescription className="text-center">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                {Object.entries(member.social).map(([key, value]) => (
                  <Link
                    key={key}
                    href={value}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Image
                      src={`/social/${key}.svg`}
                      alt={key}
                      width={24}
                      height={24}
                    />
                    <span className="sr-only">{key}</span>
                  </Link>
                ))}
              </CardFooter>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  <Link href={`/developers/${member.slug}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
