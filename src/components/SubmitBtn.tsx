import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitBtn = () => {

  const { pending } = useFormStatus();
  const t = useTranslations("contact");
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {t("form.send")}
      {pending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default SubmitBtn;
