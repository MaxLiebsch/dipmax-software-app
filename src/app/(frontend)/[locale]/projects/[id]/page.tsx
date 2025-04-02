import ProjectComponent from "@/src/components/Project";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { ProjectWrapper } from "@/src/types/Projects";
import config from "@payload-config";
import { ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getPayload } from "payload";

export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const _params = await params;
  const payload = await getPayload({ config });
  const locale = await getLocale();
  const project = (await payload.find({
    collection: "projects",
    fallbackLocale: "en",
    locale: locale,
    depth: 4,
    where: {
      id: {
        equals: _params.id,
      },
    },
  })) as ProjectWrapper;
  console.log('project:', project)

  const t = await getTranslations("projects.project");

  if (!project.docs.length) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">{t("not-found-title")}</h1>
        <p className="mt-4">{t("not-found-description")}</p>
        <Button asChild className="mt-6">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("return-home")}
          </Link>
        </Button>
      </div>
    );
  }

  return <ProjectComponent project={project.docs[0]} />;
}
