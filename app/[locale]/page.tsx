import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <NavBar />
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
