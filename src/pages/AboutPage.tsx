import React from 'react';
import { PROFILE } from '../data/profile';
import { TIMELINE_ITEMS } from '../data/experience';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Tag } from '../components/ui/Tag';
import {
  GraduationCap,
  Users,
  Trophy,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  FileText,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';

export interface AboutPageProps {
  onOpenResume?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResume: _onOpenResume }) => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-accent-lime" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-sky-400" />;
      case 'sports':
      case 'extracurricular':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-accent-lime" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-content-primary pb-32">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-border-subtle bg-surface-muted py-3 px-4 sm:px-8">
        <div className="layout-container flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <a
            href="/"
            className="flex items-center gap-2 text-content-muted hover:text-accent-lime transition-colors"
          >
            <span>← Portfolio Overview</span>
          </a>
          <div className="flex items-center gap-3">
            <span className="text-content-muted">SECTION:</span>
            <span className="text-content-primary font-bold">ABOUT & BACKGROUND</span>
            <span className="text-content-subtle">|</span>
            <Badge variant="live" size="xs">
              NIT Durgapur (2023–2027)
            </Badge>
          </div>
        </div>
      </div>

      <main className="layout-container pt-12 sm:pt-16 space-y-20">
        {/* Page Hero */}
        <div className="border-b border-border-subtle pb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="lime" size="xs">
              BIOTECHNOLOGY & DATA ANALYTICS
            </Badge>
            <span className="font-mono text-xs text-content-muted">
              National Institute of Technology Durgapur
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight">
              Bridging Quantitative Science & Software Engineering
            </h1>
            <p className="text-lg sm:text-xl text-content-secondary leading-relaxed font-sans pt-2">
              Undergraduate engineer at NIT Durgapur applying statistical reasoning, hypothesis testing,
              and systems architecture to enterprise customer analytics and scalable web platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href={PROFILE.contact.resumePath}
              download="md-zaid-haque-resume.pdf"
              iconLeft={<FileText className="w-4 h-4" />}
            >
              Download Full CV (PDF)
            </Button>

            <Button
              variant="secondary"
              size="md"
              href="/contact"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Narrative & Educational Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Card variant="surface" padding="lg" className="lg:col-span-8 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-content-primary">
              The Analytical Transition
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-content-secondary leading-relaxed font-sans">
              <p>
                My academic training in <strong>Biotechnology at NIT Durgapur (2023–2027)</strong> immersed me in the study
                of complex quantitative systems. In biological research, one learns to isolate signal from noisy experimental data,
                model multi-variable feedback loops, and validate hypotheses using rigorous statistical inference.
              </p>
              <p>
                I recognized that modern <strong>data analytics and business intelligence</strong> require the exact same scientific mindset:
                transforming unstructured transactional logs into clean star-schema analytical marts, identifying subtle cohort retention shifts,
                and training predictive machine learning models that are explainable and mathematically validated.
              </p>
              <p>
                As an aspiring <strong>Data Analyst and Software Developer</strong>, I complement analytical inquiry with software engineering execution —
                building complete production pipelines from PostgreSQL and dbt to FastAPI backend endpoints and responsive React interfaces.
              </p>
            </div>

            <div className="pt-4 border-t border-border-subtle space-y-3">
              <h4 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // CORE PRINCIPLES & METHODOLOGY
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Empirical Proof:</strong> Statistical hypothesis testing before making commercial recommendations.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Dimensional Rigor:</strong> Curated star-schema data marts with schema test coverage over ad-hoc queries.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Transparent ML:</strong> TreeSHAP local & global feature attribution over opaque black-box models.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Full-Stack Fluency:</strong> Engineering the production API and database as well as the analytical layer.</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Institutional Card & Profiles */}
          <div className="lg:col-span-4 space-y-6">
            <Card variant="elevated" padding="md" className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle text-accent-lime">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <Badge variant="live" size="xs">Undergraduate</Badge>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg text-content-primary">
                  {PROFILE.education.institution}
                </h4>
                <div className="text-sm text-accent-lime font-mono mt-0.5">
                  {PROFILE.education.degree}
                </div>
                <div className="text-xs text-content-muted mt-1 font-mono">
                  {PROFILE.education.period} • {PROFILE.education.location}
                </div>
              </div>

              <p className="text-xs text-content-secondary leading-relaxed pt-1">
                National Institute of Technology Durgapur is an Institute of National Importance under the Ministry of Education, Government of India.
              </p>
            </Card>

            <Card variant="surface" padding="md" className="space-y-3">
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // CONNECTED CHANNELS
              </span>
              <div className="space-y-2 text-xs font-mono">
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded bg-surface-elevated hover:bg-surface-card border border-border-subtle flex items-center justify-between text-content-secondary hover:text-accent-lime transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4" /> GitHub
                  </span>
                  <span>/{PROFILE.contact.githubUser}</span>
                </a>
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded bg-surface-elevated hover:bg-surface-card border border-border-subtle flex items-center justify-between text-content-secondary hover:text-accent-lime transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </span>
                  <span>/{PROFILE.contact.linkedinUser}</span>
                </a>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="p-2.5 rounded bg-surface-elevated hover:bg-surface-card border border-border-subtle flex items-center justify-between text-content-secondary hover:text-accent-lime transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </span>
                  <span>{PROFILE.contact.email}</span>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Verified Experience, Leadership & Sports */}
        <section className="space-y-8 pt-8 border-t border-border-subtle">
          <SectionHeader
            kicker="LEADERSHIP, SOCIETIES & ATHLETICS"
            title="Campus Impact & Extracurricular Leadership"
            description="Active contributions across NIT Durgapur entrepreneurial societies, technical festival coordination, cultural operations, and competitive sports."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIMELINE_ITEMS.map((item) => (
              <Card
                key={item.id}
                variant="surface"
                padding="lg"
                className="space-y-4 flex flex-col justify-between hover:border-accent-lime/30 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-2.5 rounded-lg bg-surface-elevated border border-border-subtle">
                      {getTimelineIcon(item.type)}
                    </div>
                    <Badge
                      variant={item.type === 'sports' ? 'lime' : item.type === 'education' ? 'live' : 'neutral'}
                      size="xs"
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-xl text-content-primary">
                      {item.title}
                    </h4>
                    <div className="text-sm font-semibold text-accent-lime font-mono mt-0.5">
                      {item.organization}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-content-muted font-mono pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-content-secondary leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border-subtle/60">
                    {item.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-content-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/50">
                  {item.tags.map((t) => (
                    <Tag key={t} size="sm">
                      {t}
                    </Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
