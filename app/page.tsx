import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
