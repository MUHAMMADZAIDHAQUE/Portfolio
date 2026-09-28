import React, { useState } from 'react';
import { ProjectCaseStudy } from '../data/projects';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturedWorkSection } from '../components/sections/FeaturedWorkSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { ContactSection } from '../components/sections/ContactSection';
import { CaseStudyModal } from '../components/case-studies/CaseStudyModal';
import { ResumeModal } from '../components/case-studies/ResumeModal';

export interface HomePageProps {
  onOpenResume: () => void;
  isResumeOpen: boolean;
  onCloseResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenResume,
  isResumeOpen,
  onCloseResume,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection onOpenResume={onOpenResume} />

      {/* 2. Featured Case Studies */}
      <FeaturedWorkSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 3. About & Philosophy */}
      <AboutSection />

      {/* 4. Skills Matrix */}
      <SkillsSection />

      {/* 5. Experience & Education Timeline */}
      <ExperienceSection />

      {/* 6. Contact & Footer */}
      <ContactSection onOpenResume={onOpenResume} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={onCloseResume}
      />
    </div>
  );
};
