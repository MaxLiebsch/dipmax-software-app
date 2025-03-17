import { Frown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function notFound() {
  const t = useTranslations("notFound");
  return (
    <div className="container py-12 text-center">
      <div className="grid place-items-center">
        <Frown className="w-10 h-10" />
        <div>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
      </div>
    </div>
  );
}
