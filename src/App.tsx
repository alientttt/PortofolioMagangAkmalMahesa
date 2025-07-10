import "./index.css";
import ContactSection from "./components/layouts/ContactSection/ContactSection";
import Header from "./components/layouts/Header/Header";
import HeroSection from "./components/layouts/HeroSection/HeroSection";
import ProjectsSection from "./components/layouts/ProjectsSection/ProjectsSection";
import ServicesSection from "./components/layouts/ServicesSection/ServicesSection";
import SkillsSection from "./components/layouts/SkillsSection/SkillsSection";
import AboutSection from "./components/layouts/AboutMe/AboutSection";
import PinnedPost from "./components/layouts/AboutMe/PinnedPost";


function App() {
  return (
    <div className="container mx-auto overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <PinnedPost />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <div className="separator"></div>
    </div>
  );
}

export default App;
