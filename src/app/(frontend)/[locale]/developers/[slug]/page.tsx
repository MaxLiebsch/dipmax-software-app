import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Link } from "@/src/i18n/navigation";
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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

export default function DeveloperProfile({
  params,
}: {
  params: { slug: string };
}) {
  const developer = getDeveloperData(params.slug);
  const t = useTranslations("team.member");
  if (!developer) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">{t("not-found-title")}</h1>
        <p className="mt-4">
          {t("not-found-description")}
        </p>
        <Button asChild className="mt-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("return-home")}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/#team">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("back")}
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full">
                      <Image
                        src={developer.image || "/placeholder.svg"}
                        alt={developer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h1 className="text-2xl font-bold">{developer.name}</h1>
                    <p className="text-muted-foreground">{developer.role}</p>

                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{developer.location}</span>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Link
                        href={developer.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">{t("social.github")}</span>
                        </Button>
                      </Link>
                      <Link
                        href={developer.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">{t("social.linkedin")}</span>
                        </Button>
                      </Link>
                      <Link
                        href={developer.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">{t("social.twitter")}</span>
                        </Button>
                      </Link>
                      <Link href={`mailto:${developer.email}`}>
                        <Button variant="outline" size="icon">
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">{t("contact")}</span>
                        </Button>
                      </Link>
                    </div>

                    <div className="w-full mt-6">
                      <h3 className="mb-4 text-lg font-semibold">{t("skills")}</h3>
                      <div className="space-y-4">
                        {developer.skills.map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className="w-full mt-6">
                      <Link href={`/#contact`}>{t("contact")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="about">{t("about")}</TabsTrigger>
                  <TabsTrigger value="experience">{t("experience")}</TabsTrigger>
                  <TabsTrigger value="projects">{t("projects")}</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("about")} {developer.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{developer.bio}</p>

                      <h3 className="mt-6 mb-4 text-lg font-semibold">
                        {t("education")}
                      </h3>
                      <div className="space-y-4">
                        {developer.education.map((edu, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-muted pl-4 py-1"
                          >
                            <h4 className="font-medium">{edu.institution}</h4>
                            <p className="text-sm text-muted-foreground">
                              {edu.degree}, {edu.year}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("work-experience")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {developer.experience.map((exp, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-muted pl-4 py-2"
                          >
                            <h4 className="font-medium">{exp.role}</h4>
                            <p className="text-sm font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exp.period}
                            </p>
                            <p className="mt-2 text-sm">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("projects")}</CardTitle>
                      <CardDescription>
                        {t("projects-developed", { developer: developer.name.split(" ")[0] })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {developer.projects.map((project) => (
                          <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="block"
                          >
                            <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                              <div className="aspect-video w-full overflow-hidden">
                                <Image
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  width={400}
                                  height={300}
                                  className="h-full w-full object-cover transition-all hover:scale-105"
                                />
                              </div>
                              <CardContent className="p-4">
                                <h3 className="text-xl font-bold">
                                  {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                  {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
