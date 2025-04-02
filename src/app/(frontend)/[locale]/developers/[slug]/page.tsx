import DeveloperComponent from "@/src/components/Developer";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { DeveloperWrapper } from "@/src/types/Developer";
import config from "@payload-config";
import { ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getPayload } from "payload";


export default async function DeveloperProfile({
  params,
}: {
  params: { slug: string };
}) {
  const payload = await getPayload({ config });
  const locale = await getLocale();
  const _params = await params;
  const developer = (await payload.find({
    collection: "developers",
    fallbackLocale: "en",
    locale: locale,
    depth: 4,
    where: {
      slug: {
        equals: _params.slug,
      },
    },
  })) as DeveloperWrapper;

  const t = await getTranslations("team.member");

  if (!developer.docs.length) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">{t("not-found-title")}</h1>
        <p className="mt-4">{t("not-found-description")}</p>
        <Button asChild className="mt-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("return-home")}
          </Link>
        </Button>
      </div>
    );
  }

  return <DeveloperComponent developer={developer.docs[0]} />;
}
