import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Resume from "@/components/Resume";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <Hero />
      <Stats />
      <Timeline />
      <Resume />
      <div className="flex flex-col items-center w-full px-4 md:px-8">
        <About />
        <Skills />
        <div id="contact" className="w-full flex flex-col items-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}