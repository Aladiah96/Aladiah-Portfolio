import "./homepage.css";

import HeroSection from "@/components/hero/HeroSection";
import ToolsSection from "@/components/tools/ToolsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import AboutMe from "@/components/about/AboutMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <ProjectsSection />
      <AboutMe />
    </>
  );
}
