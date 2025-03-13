import About from "@/src/components/sections/About";
import Contact from "@/src/components/sections/Contact";
import Hero from "@/src/components/sections/Hero";
import Projects from "@/src/components/sections/Projects";
import Services from "@/src/components/sections/Services";
import Team from "@/src/components/sections/Team";

export default function Home() {
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
        <Team />
        {/* Projects */}
        <Projects />
        {/* Contact Section */}
        <Contact />
      </main>
     
    </div>
  );
}
