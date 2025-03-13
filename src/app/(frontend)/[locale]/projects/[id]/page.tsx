
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Link } from "@/src/i18n/navigation"
import { ArrowLeft, Calendar, Check, ExternalLink, Github, Globe } from 'lucide-react'
import Image from "next/image"

export const projects = {
  "ecommerce-platform": {
    published: true,
    id: "ecommerce-platform",
    type: "web",
    title: "E-commerce Platform",
    client: "RetailTech Inc.",
    completionDate: "June 2022",
    description: "A full-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    longDescription: "This comprehensive e-commerce solution was built to help RetailTech Inc. transition from their legacy system to a modern, scalable platform. The project involved creating a responsive frontend for customers, a robust admin dashboard for inventory and order management, and integration with multiple payment gateways and shipping providers.\n\nThe platform includes features such as product categorization, search functionality, user accounts, wishlists, shopping carts, checkout process, order tracking, and customer support tools. The admin dashboard provides detailed analytics on sales, inventory levels, and customer behavior to help the client make data-driven decisions.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API", "AWS S3", "Docker"],
    features: [
      "Responsive design for all devices",
      "Advanced search and filtering",
      "Secure payment processing",
      "Inventory management system",
      "Customer accounts and profiles",
      "Order tracking and history",
      "Admin dashboard with analytics",
      "Integration with shipping providers"
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    liveUrl: "https://example-ecommerce.com",
    repoUrl: "https://github.com/devteam/ecommerce-platform",
    team: [
      {
        id: "alex-johnson",
        name: "Alex Johnson",
        role: "Lead Developer",
        image: "/placeholder.svg?height=96&width=96"
      },
      {
        id: "sarah-chen",
        name: "Sarah Chen",
        role: "Frontend Developer",
        image: "/placeholder.svg?height=96&width=96"
      }
    ],
    testimonial: {
      quote: "The DevTeam delivered an exceptional e-commerce platform that exceeded our expectations. The system is intuitive, scalable, and has significantly improved our online sales performance.",
      author: "Jennifer Williams",
      position: "CTO, RetailTech Inc."
    }
  },
  "health-fitness-app": {
    published: true,
    id: "health-fitness-app",
    type: "mobile",
    title: "Health & Fitness App",
    client: "FitLife Solutions",
    completionDate: "March 2023",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    longDescription: "The Health & Fitness App was developed for FitLife Solutions to provide their customers with a comprehensive mobile solution for health and fitness tracking. The app allows users to track workouts, log meals, monitor health metrics, and receive personalized recommendations based on their goals and progress.\n\nThe project involved creating native mobile applications for iOS and Android using React Native, implementing complex algorithms for workout and nutrition recommendations, and integrating with wearable devices for health data collection. The backend system processes user data to generate insights and personalized plans.",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB", "TensorFlow", "Apple HealthKit", "Google Fit API"],
    features: [
      "Workout tracking and planning",
      "Nutrition logging and analysis",
      "Health metrics monitoring",
      "Personalized recommendations",
      "Integration with wearable devices",
      "Progress tracking and visualization",
      "Social sharing and community features",
      "Offline functionality"
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    liveUrl: "https://fitlifeapp.example.com",
    repoUrl: "https://github.com/devteam/health-fitness-app",
    team: [
      {
        id: "sarah-chen",
        name: "Sarah Chen",
        role: "Frontend Developer",
        image: "/placeholder.svg?height=96&width=96"
      }
    ],
    testimonial: {
      quote: "The app has transformed how our customers engage with their fitness journey. The intuitive interface and smart recommendations have received overwhelmingly positive feedback.",
      author: "Michael Thompson",
      position: "CEO, FitLife Solutions"
    }
  },
  "financial-dashboard": {
    published: true,
    id: "financial-dashboard",
    type: "web",
    title: "Financial Dashboard",
    client: "Global Investments Ltd.",
    completionDate: "November 2022",
    description: "Interactive dashboard for financial data visualization and analysis with real-time updates.",
    longDescription: "The Financial Dashboard was developed for Global Investments Ltd. to provide their analysts and clients with a comprehensive tool for visualizing and analyzing financial data. The dashboard displays real-time market data, portfolio performance, investment trends, and risk assessments.\n\nThe project involved creating a responsive web application with interactive charts and graphs, implementing real-time data feeds from financial markets, and developing complex algorithms for financial analysis and forecasting. The system processes large volumes of data to generate actionable insights for investment decisions.",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "D3.js", "WebSockets", "AWS"],
    features: [
      "Real-time market data visualization",
      "Portfolio performance tracking",
      "Investment trend analysis",
      "Risk assessment tools",
      "Customizable dashboard layouts",
      "Automated reports and alerts",
      "Historical data comparison",
      "Export functionality for reports"
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    liveUrl: "https://finance-dashboard.example.com",
    repoUrl: "https://github.com/devteam/financial-dashboard",
    team: [
      {
        id: "alex-johnson",
        name: "Alex Johnson",
        role: "Lead Developer",
        image: "/placeholder.svg?height=96&width=96"
      },
      {
        id: "michael-rodriguez",
        name: "Michael Rodriguez",
        role: "Backend Developer",
        image: "/placeholder.svg?height=96&width=96"
      }
    ],
    testimonial: {
      quote: "The dashboard has revolutionized how we analyze and present financial data. The intuitive interface and powerful analytics have made it an essential tool for our team and clients.",
      author: "Robert Chen",
      position: "Head of Analytics, Global Investments Ltd."
    }
  },
  "inventory-management-system": {
    id: "inventory-management-system",
    type: "backend",
    title: "Inventory Management System",
    client: "LogiTech Supply Chain",
    completionDate: "August 2022",
    description: "Comprehensive system for tracking inventory, managing suppliers, and optimizing stock levels.",
    longDescription: "The Inventory Management System was developed for LogiTech Supply Chain to streamline their warehouse operations and improve inventory control. The system provides real-time tracking of inventory levels, automated reordering, supplier management, and analytics for optimization.\n\nThe project involved creating a robust backend system with a user-friendly interface for warehouse staff, implementing barcode scanning functionality, and developing algorithms for inventory forecasting and optimization. The system integrates with the client's existing ERP and accounting software.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "Docker", "Kubernetes", "RabbitMQ", "Elasticsearch"],
    features: [
      "Real-time inventory tracking",
      "Barcode scanning integration",
      "Automated reordering system",
      "Supplier management",
      "Warehouse location mapping",
      "Inventory forecasting",
      "Reporting and analytics",
      "Mobile access for warehouse staff"
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    liveUrl: "https://inventory.example.com",
    repoUrl: "https://github.com/devteam/inventory-management",
    team: [
      {
        id: "michael-rodriguez",
        name: "Michael Rodriguez",
        role: "Backend Developer",
        image: "/placeholder.svg?height=96&width=96"
      }
    ],
    testimonial: {
      quote: "This system has transformed our warehouse operations. We've reduced stockouts by 85% and improved order fulfillment times by 40%. The ROI has been exceptional.",
      author: "David Johnson",
      position: "Operations Director, LogiTech Supply Chain"
    }
  },
  "social-media-platform": {
    published: true,
    id: "social-media-platform",
    type: "web",
    title: "Social Media Platform",
    client: "ConnectX",
    completionDate: "January 2023",
    description: "Custom social network with user profiles, content sharing, and engagement analytics.",
    longDescription: "The Social Media Platform was developed for ConnectX to create a niche social network focused on professional networking in the creative industry. The platform allows users to create profiles, share their work, connect with other professionals, and discover opportunities.\n\nThe project involved building a scalable web application with real-time features, implementing complex algorithms for content recommendation, and developing robust security measures for user data protection. The platform includes features for content moderation, analytics, and monetization.",
    technologies: ["Next.js", "MongoDB", "GraphQL", "Apollo", "Redis", "AWS S3", "Socket.io", "Stripe"],
    features: [
      "User profiles and portfolios",
      "Content sharing and discovery",
      "Real-time messaging and notifications",
      "Connection and networking tools",
      "Job board and opportunity marketplace",
      "Analytics dashboard for creators",
      "Content moderation system",
      "Subscription and monetization options"
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    liveUrl: "https://connectx.example.com",
    repoUrl: "https://github.com/devteam/social-platform",
    team: [
      {
        id: "alex-johnson",
        name: "Alex Johnson",
        role: "Lead Developer",
        image: "/placeholder.svg?height=96&width=96"
      },
      {
        id: "michael-rodriguez",
        name: "Michael Rodriguez",
        role: "Backend Developer",
        image: "/placeholder.svg?height=96&width=96"
      }
    ],
    testimonial: {
      quote: "DevTeam delivered a platform that perfectly captures our vision. The user engagement has exceeded our projections, and the scalability has allowed us to grow rapidly without technical issues.",
      author: "Lisa Park",
      position: "Founder, ConnectX"
    }
  },
  "real-estate-marketplace": {
    published: true,
    id: "real-estate-marketplace",
    type: "mobile",
    title: "Real Estate Marketplace",
    client: "HomeFind Properties",
    completionDate: "April 2023",
    description: "Platform connecting buyers, sellers, and agents with property listings and transaction management.",
    longDescription: "The Real Estate Marketplace was developed for HomeFind Properties to create a comprehensive platform for property listings, searches, and transaction management. The platform connects buyers, sellers, and real estate agents in a streamlined ecosystem.\n\nThe project involved creating web and mobile applications with advanced search functionality, implementing virtual tour features, and developing secure transaction management tools. The platform includes integration with mapping services, mortgage calculators, and document signing solutions.",
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Redis", "Google Maps API", "AWS", "DocuSign API"],
    features: [
      "Advanced property search and filtering",
      "Virtual property tours",
      "Agent profiles and ratings",
      "Saved searches and alerts",
      "Mortgage calculator and pre-approval",
      "Transaction management dashboard",
      "Document signing and storage",
      "Communication tools for all parties"
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    liveUrl: "https://homefind.example.com",
    repoUrl: "https://github.com/devteam/real-estate-marketplace",
    team: [
      {
        id: "sarah-chen",
        name: "Sarah Chen",
        role: "Frontend Developer",
        image: "/placeholder.svg?height=96&width=96"
      }
    ],
    testimonial: {
      quote: "The platform has revolutionized how we connect buyers and sellers. The intuitive interface and powerful features have received praise from users and agents alike.",
      author: "James Wilson",
      position: "CEO, HomeFind Properties"
    }
  }
};
// This would typically come from a database
const getProjectData = (id: string) => {

  return projects[id as keyof typeof projects];
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id);
  
  if (!project) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-4">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
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
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="mt-8">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <div className="mt-2 flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Completed: {project.completionDate}</span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Tabs defaultValue="overview" className="mt-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Overview</CardTitle>
                        <CardDescription>Client: {project.client}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
                          
                          {project.testimonial && (
                            <div className="mt-8 rounded-lg bg-muted p-6">
                              <blockquote className="text-lg italic">"{project.testimonial.quote}"</blockquote>
                              <div className="mt-4">
                                <p className="font-medium">{project.testimonial.author}</p>
                                <p className="text-sm text-muted-foreground">{project.testimonial.position}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Key Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="gallery" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Gallery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {project.images.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-all hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.liveUrl && (
                    <Button asChild className="w-full">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" />
                        View Live Site
                      </Link>
                    </Button>
                  )}
                  
                  {project.repoUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Repository
                      </Link>
                    </Button>
                  )}
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/#contact">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Request Similar Project
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Project Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.team.map((member) => (
                      <Link key={member.id} href={`/developers/${member.id}`}>
                        <div className="flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-muted">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{member.name}</h3>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interested in this project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss how we can create a similar solution tailored to your specific needs.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/#contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}