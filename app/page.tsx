import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <WhatIDo />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
