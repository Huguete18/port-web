"use client";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "./hero/HeroSection";
import AchievementsSection from "./archivements/AchievementsSection";
import AboutSection from "./about/AboutSection";
import ProjectsSection from "./card/ProjectsSection";
import EmailSection from "./emailsection/EmailSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-300 dark:bg-[#162a3b]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
