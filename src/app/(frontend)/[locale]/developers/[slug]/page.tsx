import DeveloperComponent from "@/src/components/Developer";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { DeveloperWrapper } from "@/src/types/Developer";
import config from "@payload-config";
import { ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getPayload } from "payload";

export const developers = {
  "alex-johnson": {
    active: true,
    name: "Alex Johnson",
    role: "Lead Developer & Founder",
    description:
      "Full-stack developer with 10+ years of experience in building scalable web applications.",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Full-stack developer with 10+ years of experience in building scalable web applications. Specializes in React, Node.js, and cloud architecture. Founded DevTeam in 2018 to bring together talented freelancers and deliver exceptional software solutions.",
    email: "alex@devteam.com",
    location: "San Francisco, CA",
    social: {
      linkedin: "https://linkedin.com/in/alexjohnson",
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    },
    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Next.js", level: 90 },
      { name: "Database Design", level: 85 },
    ],
    experience: [
      {
        company: "Tech Innovations Inc.",
        role: "Senior Developer",
        period: "2015-2018",
        description:
          "Led development of enterprise web applications using React and Node.js.",
      },
      {
        company: "WebSolutions Co.",
        role: "Full Stack Developer",
        period: "2012-2015",
        description:
          "Developed and maintained client websites and web applications.",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "M.S. Computer Science",
        year: "2012",
      },
      {
        institution: "UC Berkeley",
        degree: "B.S. Computer Science",
        year: "2010",
      },
    ],
    projects: [
      {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description:
          "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "React", "Node.js"],
      },
      {
        id: "financial-dashboard",
        title: "Financial Dashboard",
        description:
          "Interactive dashboard for financial data visualization and analysis with real-time updates.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "Vue.js", "Python"],
      },
      {
        id: "social-media-platform",
        title: "Social Media Platform",
        description:
          "Custom social network with user profiles, content sharing, and engagement analytics.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "Next.js", "MongoDB"],
      },
    ],
  },
  "sarah-chen": {
    active: true,
    name: "Sarah Chen",
    role: "Frontend Developer",
    description:
      "Specializes in creating beautiful, responsive user interfaces with React and Next.js.",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specializes in creating beautiful, responsive user interfaces with React and Next.js. With 6 years of experience in frontend development, Sarah has a keen eye for design and user experience. She excels at translating design mockups into pixel-perfect implementations.",
    email: "sarah@devteam.com",
    location: "Seattle, WA",
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      github: "https://github.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
    },
    skills: [
      { name: "React", level: 95 },
      { name: "CSS/SCSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Next.js", level: 85 },
    ],
    experience: [
      {
        company: "Design Digital",
        role: "Frontend Developer",
        period: "2018-2021",
        description:
          "Created responsive web interfaces for various client projects.",
      },
      {
        company: "Creative Solutions",
        role: "UI Developer",
        period: "2016-2018",
        description:
          "Implemented UI designs and improved user experience for web applications.",
      },
    ],
    education: [
      {
        institution: "University of Washington",
        degree: "B.S. Computer Science",
        year: "2016",
      },
    ],
    projects: [
      {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description:
          "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "React", "Node.js"],
      },
      {
        id: "health-fitness-app",
        title: "Health & Fitness App",
        description:
          "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Mobile", "React Native", "Firebase"],
      },
      {
        id: "real-estate-marketplace",
        title: "Real Estate Marketplace",
        description:
          "Platform connecting buyers, sellers, and agents with property listings and transaction management.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "Mobile", "Full Stack"],
      },
    ],
  },
  "michael-rodriguez": {
    active: true,
    name: "Michael Rodriguez",
    role: "Backend Developer",
    description:
      "Expert in building robust backend systems with Node.js, Python, and cloud technologies.",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in building robust backend systems with Node.js, Python, and cloud technologies. Michael has 8 years of experience designing and implementing scalable APIs, database architectures, and server-side applications. He specializes in performance optimization and security.",
    email: "michael@devteam.com",
    location: "Austin, TX",
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      github: "https://github.com/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
    },
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Python", level: 90 },
      { name: "Database Design", level: 95 },
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "API Development", level: 90 },
    ],
    experience: [
      {
        company: "Cloud Systems Inc.",
        role: "Backend Engineer",
        period: "2019-2022",
        description:
          "Designed and implemented scalable backend services for enterprise clients.",
      },
      {
        company: "Data Solutions",
        role: "Software Developer",
        period: "2015-2019",
        description:
          "Developed data processing pipelines and APIs for business intelligence applications.",
      },
    ],
    education: [
      {
        institution: "University of Texas",
        degree: "M.S. Computer Engineering",
        year: "2015",
      },
      {
        institution: "University of Texas",
        degree: "B.S. Computer Science",
        year: "2013",
      },
    ],
    projects: [
      {
        id: "inventory-management-system",
        title: "Inventory Management System",
        description:
          "Comprehensive system for tracking inventory, managing suppliers, and optimizing stock levels.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Backend", "Java", "PostgreSQL"],
      },
      {
        id: "financial-dashboard",
        title: "Financial Dashboard",
        description:
          "Interactive dashboard for financial data visualization and analysis with real-time updates.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "Vue.js", "Python"],
      },
      {
        id: "social-media-platform",
        title: "Social Media Platform",
        description:
          "Custom social network with user profiles, content sharing, and engagement analytics.",
        image: "/placeholder.svg?height=300&width=400",
        tags: ["Web", "Next.js", "MongoDB"],
      },
    ],
  },
};
// This would typically come from a database
const getDeveloperData = (slug: string) => {
  return developers[slug as keyof typeof developers];
};

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
