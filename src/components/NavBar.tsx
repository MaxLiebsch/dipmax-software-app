"use client";
import { Code } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "../i18n/navigation";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
const NavBar = () => {
  const t = useTranslations("navigation");
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 px-4 md:px-6 items-center justify-between mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code className="h-6 w-6" />
          <span>DipMax Software</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/#contact">{t("cta")}</Link>
        </Button>
        <Button
          variant="ghost"
          onClick={() => setOpen(!open)}
          size="icon"
          className="md:hidden"
        >
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
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-start mb-4">
              DipMax Software
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-6 items-start">
            {navItems
              .filter((item) => item.label !== "contact")
              .map((item) => (
                <Link
                  onClick={() => setOpen(false)}
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary"
                >
                  {t(item.label)}
                </Link>
              ))}
          </nav>
          <Button asChild className="w-full mt-4">
            <Link onClick={() => setOpen(false)} href="/#contact">
              {t("cta")}
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </header>
  );
};

const navItems = [
  {
    label: "about",
    href: "#about",
  },
  {
    label: "services",
    href: "#services",
  },
  {
    label: "team",
    href: "#team",
  },
  {
    label: "projects",
    href: "#projects",
  },
  {
    label: "contact",
    href: "#contact",
  },
];

export default NavBar;
