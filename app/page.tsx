import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-950">
      <Hero />
      <div id="contact" className="w-full flex flex-col items-center px-4 md:px-8 py-10">
        <Contact />
      </div>
    </div>
  );
}