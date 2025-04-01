import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const activeServices = [
  "web-development",
  "mobile-development",
  "backend-development",
  "ui-ux-design",
  "consultation",
  "custom-solutions",
];
const Services = () => {
  const t = useTranslations("services");
  return (
    <section id="services" className="w-full py-24 lg:py-32">
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
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service) => (
            <Card key={service}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle>{t(`${service}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t(`${service}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
