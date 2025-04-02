"use client";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Link } from "@/src/i18n/navigation";
import {
  ArrowLeft,
  Calendar,
  Check,
  ExternalLink,
  Github,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Project } from "../types/Projects";

const ProjectComponent = ({ project }: { project: Project }) => {
  const t = useTranslations("projects.project");
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8 md:py-12 px-4 md:px-6 mx-auto max-w-7xl">
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("return-home")}
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.images[0].image.url || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-8">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                {project.completionDate && (
                  <div className="mt-2 flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>
                      Completed:{" "}
                      {new Date(project.completionDate).toLocaleDateString()}
                    </span>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(({ tag, id }) => (
                    <Badge key={id} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Tabs defaultValue="overview" className="mt-8">
                  <TabsList
                    style={{
                      gridTemplateColumns: `repeat(${
                        (project.features.length > 0 ? 1 : 0) +
                        (project.testimonial ? 1 : 0) +
                        (project.images.length > 0 ? 1 : 0)
                      }, 1fr)`,
                    }}
                    className="grid w-full"
                  >
                    {project.client && (
                      <TabsTrigger value="overview">
                        {t("overview")}
                      </TabsTrigger>
                    )}
                    {project.features.length > 0 && (
                      <TabsTrigger value="features">
                        {t("features")}
                      </TabsTrigger>
                    )}
                    {project.images.length > 0 && (
                      <TabsTrigger value="gallery">{t("gallery")}</TabsTrigger>
                    )}
                  </TabsList>

                  {project.client && (
                    <TabsContent value="overview" className="mt-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>{t("overview")}</CardTitle>
                          <CardDescription>
                            {t("client")}: {project.client}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {project.description && (
                              <p className="text-muted-foreground whitespace-pre-line">
                                {project.description}
                              </p>
                            )}
                            {project.longDescription && (
                              <p className="text-muted-foreground whitespace-pre-line">
                                {project.longDescription}
                              </p>
                            )}

                            {Object.keys(project.testimonial).length > 0 && (
                              <div className="mt-8 rounded-lg bg-muted p-6">
                                <blockquote className="text-lg italic">
                                  "{project.testimonial.quote}"
                                </blockquote>
                                <div className="mt-4">
                                  <p className="font-medium">
                                    {project.testimonial.author}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {project.testimonial.position}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  )}

                  {project.features.length > 0 && (
                    <TabsContent value="features" className="mt-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>{t("features-title")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {project.features.map(({ feature, id }) => (
                              <li key={id} className="flex items-start">
                                <Check className="mr-2 h-5 w-5 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  )}

                  {project.images.length > 0 && (
                    <TabsContent value="gallery" className="mt-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>{t("gallery")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 sm:grid-cols-2">
                            {project.images.map(({ image }, index) => (
                              <div
                                key={index}
                                className="overflow-hidden rounded-lg"
                              >
                                <Image
                                  src={image.url || "/placeholder.svg"}
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  width={600}
                                  height={400}
                                  className="h-full w-full object-cover transition-all hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  )}
                </Tabs>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("links")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.liveUrl && (
                    <Button asChild className="w-full">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {t("live-site")}
                      </Link>
                    </Button>
                  )}

                  {project.repoUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t("repo")}
                      </Link>
                    </Button>
                  )}

                  <Button asChild variant="outline" className="w-full">
                    <Link href="/#contact">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t("request-similar-project")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("team")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.team.map(({ developer, role }) => (
                      <Link
                        key={developer.id}
                        href={`/developers/${developer.slug}`}
                      >
                        <div className="flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-muted">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={developer?.image.url || "/placeholder.svg"}
                              alt={developer.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{developer.name}</h3>
                            {role && (
                              <p className="text-sm text-muted-foreground">
                                {role}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {project.technologies.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>{t("technologies-title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(({ technology, id }) => (
                        <Badge key={id} variant="outline">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>{t("interested-in-project")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t("interested-in-project-description")}
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/#contact">{t("contact-us")}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectComponent;
