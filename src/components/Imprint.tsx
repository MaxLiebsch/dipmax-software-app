import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Imprint = () => {
  const t = useTranslations("imprint");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-6">
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">{t("info")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.rich("info-description", { br: () => <br /> })}
                </p>
              </div>
            </li>
            <li>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">{t("commercial")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.rich("commercial-description", { br: () => <br /> })}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Imprint;
