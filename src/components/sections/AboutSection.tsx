import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/profile';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import {
  GraduationCap,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-spacing border-b border-border-subtle bg-background">
      <motion.div
        className="layout-container space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <SectionHeader
          kicker="02. BACKGROUND & PHILOSOPHY"
          title="Analytical Rigor Meets Software Engineering"
          description="A quantitative foundation at NIT Durgapur powering data intelligence platforms and scalable software products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Card (7 Cols) */}
          <Card variant="surface" padding="lg" className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="lime" size="xs">
                  THE NARRATIVE
                </Badge>
                <span className="font-mono text-xs text-content-muted">
                  NIT Durgapur (2023 – 2027)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-content-primary">
                From biological systems to customer intelligence pipelines.
              </h3>

              <div className="space-y-4 text-content-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  As an undergraduate engineering student in <strong>Biotechnology at the National Institute of Technology (NIT) Durgapur</strong>, 
                  I was trained to model complex, multi-variable biological systems with mathematical and statistical discipline.
                </p>
                <p>
                  I realized that the exact same statistical rigor applies directly to <strong>customer retention, business intelligence, and software systems</strong>. 
                  Whether examining biological pathways or user conversion funnels, the goal is identical: separate signal from noise, uncover behavioral drivers, and build automated systems that protect value.
                </p>
                <p>
                  Today, I specialize in building end-to-end data architectures — from raw SQL ingestion and dbt analytical marts, to predictive XGBoost classifiers with TreeSHAP explainability, to modern full-stack web applications in React and Node.js.
                </p>
              </div>
            </div>

            {/* Core Principles */}
            <div className="pt-4 border-t border-border-subtle space-y-3">
              <h4 className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // MY OPERATING PRINCIPLES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Zero-Ambiguity Data:</strong> Curated star-schema marts with schema testing over messy ad-hoc queries.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Interpretable ML:</strong> Machine learning predictions backed by explainable SHAP feature values.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Full-Stack Awareness:</strong> Understanding both the analytics warehouse and the production API.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-content-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span><strong>Continuous Delivery:</strong> Containerized applications deployed to real cloud environments.</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Right Column: Institutional Profile & Quick Facts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Highlight Card */}
            <Card variant="elevated" padding="md" className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-lg bg-surface-card border border-border-subtle text-accent-lime">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <Badge variant="live" size="xs">
                  Active Student
                </Badge>
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

            {/* Target Roles Card */}
            <Card variant="surface" padding="md" className="space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-accent-lime" />
                <span className="font-mono text-xs uppercase text-content-muted font-semibold">
                  TARGET OPPORTUNITIES
                </span>
              </div>

              <div className="space-y-2.5">
                {PROFILE.roles.map((role, idx) => (
                  <div
                    key={role}
                    className="p-3 rounded-md bg-surface-elevated border border-border-subtle flex items-center justify-between text-xs font-mono"
                  >
                    <span className="font-semibold text-content-primary">{role}</span>
                    <span className="text-accent-lime">{`[0${idx + 1}]`}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
