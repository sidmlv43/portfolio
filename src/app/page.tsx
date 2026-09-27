import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 pb-32">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32 md:space-y-48">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
