import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../../data/projects';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { X, ExternalLink, Github, Database, Layers, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';

export interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-card border border-border-subtle rounded-xl shadow-elevated z-10 text-content-primary">
        {/* Modal Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-elevated/95 backdrop-blur border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-lime font-semibold uppercase">
              // CASE STUDY SPECIFICATION
            </span>
            <Badge variant="live" size="xs">
              {project.isPrimary ? 'Flagship Project' : 'Software Platform'}
            </Badge>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-content-muted hover:text-content-primary hover:bg-surface-card border border-transparent hover:border-border-subtle transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title and Tagline */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-content-muted uppercase">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-content-primary tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg text-accent-lime font-mono">
              {project.subtitle}
            </p>
            <p className="text-base text-content-secondary leading-relaxed pt-1">
              {project.overview}
            </p>
          </div>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-4 border-b border-border-subtle">
            {project.links.liveDemo && (
              <Button
                variant="primary"
                size="sm"
                href={project.links.liveDemo}
                target="_blank"
                iconRight={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Launch Production App
              </Button>
            )}
            {project.links.apiDocs && (
              <Button
                variant="secondary"
                size="sm"
                href={project.links.apiDocs}
                target="_blank"
                iconLeft={<Cpu className="w-3.5 h-3.5" />}
              >
                Interactive API Docs (Swagger)
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              href={project.links.github}
              target="_blank"
              iconLeft={<Github className="w-3.5 h-3.5" />}
            >
              View GitHub Source
            </Button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface-elevated border border-border-subtle">
                <div className="font-mono text-[11px] text-content-muted uppercase">{m.label}</div>
                <div className="text-xl font-heading font-bold text-accent-lime mt-0.5">{m.value}</div>
                <div className="text-[11px] text-content-secondary mt-1">{m.note}</div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-lg bg-surface-muted border border-border-subtle space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="w-4 h-4" />
                The Business Challenge
              </div>
              <p className="text-sm text-content-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-surface-muted border border-border-subtle space-y-2">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-semibold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                Engineering Solution
              </div>
              <p className="text-sm text-content-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture & Engineering Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-content-primary flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-lime" />
              Technical Architecture & Pipelines
            </h3>
            <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2.5">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-content-secondary">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">
                    {`0${idx + 1}.`}
                  </span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables Highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-content-primary flex items-center gap-2">
              <Database className="w-4 h-4 text-accent-lime" />
              Key Implementation Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyHighlights.map((hl) => (
                <div key={hl.title} className="p-4 rounded-lg bg-surface-card border border-border-subtle space-y-1.5">
                  <h4 className="font-heading font-semibold text-content-primary text-sm">
                    {hl.title}
                  </h4>
                  <p className="text-xs text-content-muted leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-xs text-content-muted uppercase font-semibold">
              Verified Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-surface-elevated border-t border-border-subtle flex items-center justify-between">
          <span className="font-mono text-xs text-content-muted">
            Md Zaid Haque — Verified Project Record
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};
