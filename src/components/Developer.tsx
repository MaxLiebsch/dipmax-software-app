"use client";
import { ArrowLeft, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "../i18n/navigation";
import { Developer } from "../types/Developer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const DeveloperComponent = ({ developer }: { developer: Developer }) => {
  const t = useTranslations("team.member");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/#team">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("back")}
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
                      <Image
                        src={developer.image.url || "/placeholder.svg"}
                        alt={developer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h1 className="text-2xl font-bold">{developer.name}</h1>
                    <p className="text-muted-foreground">{developer.role}</p>

                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{developer.location}</span>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {Object.entries(developer.social).map(([key, value]) => (
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
                    </div>

                    {developer.skills.length > 0 && (
                      <div className="w-full mt-6">
                        <h3 className="mb-4 text-lg font-semibold">
                          {t("skills")}
                        </h3>
                        <div className="space-y-4">
                          {developer.skills.map((skill) => (
                            <div key={skill.name} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button asChild className="w-full mt-6">
                      <Link href={`/#contact`}>{t("contact")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList style={{
                  gridTemplateColumns: `repeat(${
                    (developer.education.length > 0 ? 1 : 0) +
                    (developer.experience.length > 0 ? 1 : 0) +
                    (developer.projects.length > 0 ? 1 : 0)
                  }, 1fr)`
                }} className={`grid w-full`}>
                  {developer.education.length > 0 && (
                    <TabsTrigger value="about">{t("about")}</TabsTrigger>
                  )}
                  {developer.experience.length > 0 && (
                    <TabsTrigger value="experience">
                      {t("experience")}
                    </TabsTrigger>
                  )}
                  {developer.projects.length > 0 && (
                    <TabsTrigger value="projects">{t("projects")}</TabsTrigger>
                  )}
                </TabsList>

                {developer.education.length > 0 && (
                  <TabsContent value="about" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                        {t("about")} {developer.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{developer.bio}</p>

                      <h3 className="mt-6 mb-4 text-lg font-semibold">
                        {t("education")}
                      </h3>
                      <div className="space-y-4">
                        {developer.education.map((edu, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-muted pl-4 py-1"
                          >
                            <h4 className="font-medium">{edu.institution}</h4>
                            <p className="text-sm text-muted-foreground">
                              {edu.degree}, {edu.year}
                            </p>
                          </div>
                        ))}
                      </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}

                {developer.experience.length > 0 && (
                  <TabsContent value="experience" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("work-experience")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {developer.experience.map((exp, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-muted pl-4 py-2"
                          >
                            <h4 className="font-medium">{exp.role}</h4>
                            <p className="text-sm font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exp.period}
                            </p>
                            <p className="mt-2 text-sm">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>)}

                {developer.projects.length > 0 && (
                  <TabsContent value="projects" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("projects")}</CardTitle>
                      <CardDescription>
                        {t("projects-developed", {
                          developer: developer.name.split(" ")[0],
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {developer.projects.map(({ project }) => (
                          <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="block"
                          >
                            <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                              <div className="aspect-video w-full overflow-hidden">
                                <Image
                                  src={
                                    project.images.length
                                      ? project.images[0].image.url
                                      : "/placeholder.svg"
                                  }
                                  alt={project.title}
                                  width={400}
                                  height={300}
                                  className="h-full w-full object-cover transition-all hover:scale-105"
                                />
                              </div>
                              <CardContent className="p-4">
                                <h3 className="text-xl font-bold">
                                  {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                  {project.description}
                                </p>
                                {project.tags && (
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                      <Badge key={tag} variant="secondary">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                    </Card>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeveloperComponent;
