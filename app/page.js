import Image from "next/image";
import HeadSection from "./components/HeadSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import PublicationsSection from "./components/PublicationsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar/>
      <div class="flex flex-col container mx-auto px-12 py-4 mt-20">
        <HeadSection/> 
        <AboutSection/>
        <PublicationsSection/>
        <ProjectsSection/>
      </div>
    </main>
  );
}
