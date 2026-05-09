import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Languages } from "@/components/Languages";
import { Skills } from "@/components/Skills";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { Volunteer } from "@/components/Volunteer";

export default function Page() {
  return (
    <div className="bg-[radial-gradient(900px_500px_at_20%_-10%,rgba(13,148,136,0.14),transparent_60%),radial-gradient(900px_500px_at_80%_-10%,rgba(15,23,42,0.08),transparent_55%)]">
      <Navbar />
      <main>
        <Hero />
        <div id="cv-content">
          "<Container>
              <About />
              <Experience />
              <Education />
              <Languages />
              <Skills />
              <Certificates />
              <Volunteer />
              <Projects />
              <Contact />
            </Container>"
         </div>
      </main>
      <Footer />
    </div>
  );
}

