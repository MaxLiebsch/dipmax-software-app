import { useTranslations } from 'next-intl'
import ProjectCard from '../ProjectCard'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const Projects = () => {
  const t = useTranslations('projects')
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="mb-2">{t('badge')}</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t('title')}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('description')}
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="web">Web</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="E-commerce Platform"
                    description="A full-featured e-commerce platform with inventory management, payment processing, and customer analytics."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "React", "Node.js"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Health & Fitness App"
                    description="Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Mobile", "React Native", "Firebase"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Financial Dashboard"
                    description="Interactive dashboard for financial data visualization and analysis with real-time updates."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "Vue.js", "Python"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Inventory Management System"
                    description="Comprehensive system for tracking inventory, managing suppliers, and optimizing stock levels."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Backend", "Java", "PostgreSQL"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Social Media Platform"
                    description="Custom social network with user profiles, content sharing, and engagement analytics."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "Next.js", "MongoDB"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Real Estate Marketplace"
                    description="Platform connecting buyers, sellers, and agents with property listings and transaction management."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "Mobile", "Full Stack"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="E-commerce Platform"
                    description="A full-featured e-commerce platform with inventory management, payment processing, and customer analytics."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "React", "Node.js"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Financial Dashboard"
                    description="Interactive dashboard for financial data visualization and analysis with real-time updates."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "Vue.js", "Python"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Social Media Platform"
                    description="Custom social network with user profiles, content sharing, and engagement analytics."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "Next.js", "MongoDB"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="mobile" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Health & Fitness App"
                    description="Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Mobile", "React Native", "Firebase"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                  <ProjectCard
                    title="Real Estate Marketplace"
                    description="Platform connecting buyers, sellers, and agents with property listings and transaction management."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Web", "Mobile", "Full Stack"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                </div>
              </TabsContent>
              <TabsContent value="backend" className="mt-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Inventory Management System"
                    description="Comprehensive system for tracking inventory, managing suppliers, and optimizing stock levels."
                    image="/placeholder.svg?height=300&width=400"
                    tags={["Backend", "Java", "PostgreSQL"]}
                    collaborators={["John Doe", "Jane Smith"]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
  )
}

export default Projects