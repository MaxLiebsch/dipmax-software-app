import { ProjectWrapper } from "@/src/types/Projects";
import { useTranslations } from "next-intl";
import ProjectCard from "../ProjectCard";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const Projects = ({projects}: {projects: ProjectWrapper}) => {
  const t = useTranslations("projects");
  const backend = projects.docs.filter((project: any) => project.type === "backend");
  const mobile = projects.docs.filter((project: any) => project.type === "mobile");
  const web = projects.docs.filter((project: any) => project.type === "web");
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
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
        <Tabs defaultValue="all" className="mt-8">
          <div className="flex justify-center">
            <TabsList>
              {projects.docs.length > 0 && <TabsTrigger value="all">All</TabsTrigger>}
              {web.length > 0 && <TabsTrigger value="web">Web</TabsTrigger>}
              {mobile.length > 0 && <TabsTrigger value="mobile">Mobile</TabsTrigger>}
              {backend.length > 0 && <TabsTrigger value="backend">Backend</TabsTrigger>}
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(projects.docs).map(([key, value]) => (
                <ProjectCard
                  key={key + "all"}
                  project={value}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="web" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(web)
                .filter(([key, value]) => value.type === "web")
                .map(([key, value]) => (
                  <ProjectCard
                    key={key + "web"}
                    project={value}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(mobile)
                .filter(([key, value]) => value.type === "mobile")
                .map(([key, value]) => (
                  <ProjectCard
                    key={key + "mobile"}
                    project={value}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="backend" className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(backend)
                .filter(([key, value]) => value.type === "backend")
                .map(([key, value]) => (
                  <ProjectCard
                    key={key + "backend"}
                    project={value}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
