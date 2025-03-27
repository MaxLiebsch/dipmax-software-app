import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import Services from "@/src/components/sections/Services";
import Team from "@/src/components/sections/Team";
import { Toaster } from "@/src/components/ui/toaster";
import { DeveloperWrapper } from "@/src/types/Developer";
import { ProjectWrapper } from "@/src/types/Projects";
import config from "@payload-config";
import { getLocale } from "next-intl/server";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({ config });
  const locale = await getLocale();
  const developers = (await payload.find({
    collection: "developers",
    limit: 20,
    fallbackLocale: "en",
    locale: locale,
    where: {
      active: {
        equals: true,
      },
    },
  })) as DeveloperWrapper;
  const projects = (await payload.find({
    collection: "projects",
    limit: 20,
    fallbackLocale: "en",
    locale: locale,
    where: {
      published: {
        equals: true,
      },
    },
  })) as ProjectWrapper;
  return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Hero */}
          <Hero />
          {/* About */}
          <About />
          {/* Services */}
          <Services />
          {/* Team */}
          <Team developers={developers} />
          {/* Projects */}
          <Projects projects={projects} />
          {/* Contact Section */}
          <Contact />
        </main>
          <Toaster />
      </div>
  );
}
