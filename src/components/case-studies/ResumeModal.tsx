import React, { useEffect } from 'react';
import { PROFILE } from '../../data/profile';
import { SKILL_CATEGORIES } from '../../data/skills';
import { PROJECTS } from '../../data/projects';
import { TIMELINE_ITEMS } from '../../data/experience';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { X, Download, Printer, Mail, MapPin, Github } from 'lucide-react';

export interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-card border border-border-subtle rounded-xl shadow-elevated z-10 text-content-primary">
        {/* Sticky Action Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-elevated/95 backdrop-blur border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent-lime font-semibold uppercase">
              // CURRICULUM VITAE
            </span>
            <Badge variant="lime" size="xs">Verified Profile</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              iconLeft={<Printer className="w-3.5 h-3.5" />}
            >
              Print / PDF
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-content-muted hover:text-content-primary hover:bg-surface-card border border-transparent hover:border-border-subtle transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-10 space-y-8 bg-surface-card">
          {/* Header Block */}
          <div className="border-b border-border-subtle pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-heading font-bold text-content-primary">
                {PROFILE.name}
              </h1>
              <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
                {PROFILE.tagline}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-content-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent-lime" />
                {PROFILE.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-accent-lime" />
                {PROFILE.contact.email}
              </span>
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-content-secondary hover:text-accent-lime transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/{PROFILE.contact.githubUser}
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold border-b border-border-subtle/60 pb-1">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-content-primary text-base">
                  {PROFILE.education.institution}
                </h3>
                <div className="text-sm text-content-secondary">
                  {PROFILE.education.degree}
                </div>
              </div>
              <div className="font-mono text-xs text-content-muted mt-1 sm:mt-0">
                {PROFILE.education.period}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold border-b border-border-subtle/60 pb-1">
              KEY TECHNICAL PROJECTS
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-2 p-3 rounded-lg bg-surface-elevated/60 border border-border-subtle">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="font-heading font-bold text-content-primary text-sm flex items-center gap-2">
                    {proj.title}
                    <span className="text-xs font-normal text-content-muted">
                      — {proj.subtitle}
                    </span>
                  </h3>
                  <span className="font-mono text-[11px] text-accent-lime">
                    {proj.badgeText}
                  </span>
                </div>
                <p className="text-xs text-content-secondary leading-relaxed">
                  {proj.overview}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {proj.technologies.slice(0, 8).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-card text-content-muted border border-border-subtle">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold border-b border-border-subtle/60 pb-1">
              CORE TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <div className="font-heading font-semibold text-content-primary">
                    {cat.title}
                  </div>
                  <p className="text-content-muted font-mono leading-relaxed text-[11px]">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular & Leadership */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold border-b border-border-subtle/60 pb-1">
              LEADERSHIP & ACTIVITIES
            </h2>
            <div className="space-y-2">
              {TIMELINE_ITEMS.filter((t) => t.type !== 'education').map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold text-content-primary">{exp.title} — {exp.organization}</span>
                    <span className="font-mono text-content-muted">{exp.period}</span>
                  </div>
                  <p className="text-content-muted mt-0.5">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-surface-elevated border-t border-border-subtle flex items-center justify-between">
          <span className="font-mono text-xs text-content-muted">
            Format: ATS-Friendly Resume Document
          </span>
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.contact.resumePath}
              download="Md_Zaid_Haque_Resume.pdf"
              className="inline-flex items-center justify-center font-heading font-semibold text-xs tracking-tight rounded-md px-3.5 py-1.5 bg-accent-lime text-background hover:bg-accent-hover transition-colors shadow-subtle gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </a>
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
