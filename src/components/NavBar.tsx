import { Code } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import { Button } from "./ui/button";

const NavBar = () => {
    const t = useTranslations("navigation");
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6" />
            <span>DipMax Software</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
                {t("about")}
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary">
              {t("services")}
            </Link>
            <Link href="/#team" className="text-sm font-medium hover:text-primary">
              {t("team")}
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:text-primary">
              {t("projects")}
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              {t("contact")}
            </Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/#contact">{t("cta")}</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">{t("sr-only")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
  )
}

export default NavBar