import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCaseStudy, PROJECTS } from '../../data/projects';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Database,
  Layers,
  Cpu,
  MapPin,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export interface FeaturedWorkSectionProps {
  onSelectProject?: (project: ProjectCaseStudy) => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({ onSelectProject: _onSelectProject }) => {
  const customer360 = PROJECTS.find((p) => p.id === 'customer360')!;
  const wanderlust = PROJECTS.find((p) => p.id === 'wanderlust')!;

  return (
    <section id="work" className="section-spacing border-b border-border-subtle bg-background">
      <div className="layout-container space-y-16">
        {/* Section Header */}
        <SectionHeader
          kicker="01. FEATURED CASE STUDIES"
          title="Engineered for Impact & Analytical Depth"
          description="Production systems built with real data pipelines, statistical intelligence, modern full-stack architectures, and cloud deployments."
          align="between"
          action={
            <Badge variant="live" size="sm">
              Live Cloud Deployments
            </Badge>
          }
        />

        {/* PROJECT 1: CUSTOMER360 (Primary Large Asymmetric Card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card
            variant="editorial"
            padding="none"
            className="bg-surface-card border-border-subtle hover:border-accent-lime/40 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Narrative Column (7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  {/* Header Pills */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="lime" size="xs">
                      FLAGSHIP PROJECT
                    </Badge>
                    <span className="font-mono text-xs text-content-muted">
                      {customer360.category}
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1 ml-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live on Render
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-heading font-bold text-content-primary tracking-tight group-hover:text-accent-lime transition-colors">
                      {customer360.title}
                    </h3>
                    <p className="text-sm font-mono text-accent-lime mt-1 font-medium">
                      {customer360.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                    {customer360.overview}
                  </p>

                  {/* Quantitative Value Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {customer360.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-lg bg-surface-elevated border border-border-subtle/80 space-y-0.5 hover:border-accent-lime/30 transition-colors"
                      >
                        <div className="text-[10px] font-mono text-content-muted uppercase">
                          {m.label}
                        </div>
                        <div className="text-xl font-heading font-bold text-accent-lime">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-content-secondary truncate">
                          {m.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-content-muted uppercase mb-2">
                      Key Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {customer360.technologies.slice(0, 8).map((tech) => (
                        <Tag key={tech} size="sm">
                          {tech}
                        </Tag>
                      ))}
                      <Tag size="sm" className="text-accent-lime">
                        +5 More
                      </Tag>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle/80">
                  <Button
                    variant="primary"
                    size="md"
                    href="/work/customer360"
                    iconRight={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Read Full Case Study
                  </Button>

                  {customer360.links.liveDemo && (
                    <Button
                      variant="secondary"
                      size="md"
                      href={customer360.links.liveDemo}
                      target="_blank"
                      iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Launch App
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    size="md"
                    href={customer360.links.github}
                    target="_blank"
                    iconLeft={<Github className="w-3.5 h-3.5" />}
                  >
                    Source Code
                  </Button>
                </div>
              </div>

              {/* Right Visual / Architecture Column (5 Cols) */}
              <div className="lg:col-span-5 bg-surface-elevated/70 border-t lg:border-t-0 lg:border-l border-border-subtle p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                    <span className="font-mono text-xs text-content-muted uppercase">
                      // DASHBOARD & ARCHITECTURE
                    </span>
                    <span className="font-mono text-[10px] text-accent-lime">
                      STAR SCHEMA + ML
                    </span>
                  </div>

                  {/* Dashboard Screenshot Preview */}
                  <div className="rounded-lg overflow-hidden border border-border-subtle relative group/img shadow-subtle">
                    <img
                      src={customer360.image}
                      alt="Customer360 Executive Analytics Dashboard"
                      className="w-full h-44 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-3">
                      <span className="font-mono text-[10px] text-accent-lime bg-surface-card/90 px-2 py-0.5 rounded border border-accent-lime/30">
                        Executive KPI & Churn Dashboard
                      </span>
                    </div>
                  </div>

                  {/* Architecture Visual Preview Card */}
                  <div className="space-y-2 pt-1">
                    <div className="p-3 rounded-lg bg-surface-card border border-border-subtle flex items-start gap-3 hover:border-sky-400/40 transition-colors">
                      <div className="p-2 rounded bg-surface-elevated text-sky-400 shrink-0">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-content-primary">
                          1. Ingestion & Storage
                        </div>
                        <div className="text-[11px] text-content-muted">
                          PostgreSQL raw tables & DuckDB in-memory engine
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-card border border-border-subtle flex items-start gap-3 hover:border-amber-400/40 transition-colors">
                      <div className="p-2 rounded bg-surface-elevated text-amber-400 shrink-0">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-content-primary">
                          2. dbt Analytics Marts
                        </div>
                        <div className="text-[11px] text-content-muted">
                          `stg_` → `int_` → `mart_customer_360` star schema
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-card border border-border-subtle flex items-start gap-3 hover:border-accent-lime/40 transition-colors">
                      <div className="p-2 rounded bg-surface-elevated text-accent-lime shrink-0">
                        <Cpu className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-content-primary">
                          3. Churn ML & TreeSHAP
                        </div>
                        <div className="text-[11px] text-content-muted">
                          XGBoost classifier with feature interpretability
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Note */}
                <div className="p-3 rounded-lg bg-surface-muted border border-border-subtle text-xs font-mono text-content-muted flex items-center justify-between">
                  <span>Production API:</span>
                  <span className="text-emerald-400 font-semibold">online (Render)</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* PROJECT 2: WANDERLUST (Secondary Asymmetric Card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <Card
            variant="surface"
            padding="none"
            className="bg-surface-card border-border-subtle hover:border-accent-lime/40 transition-all duration-300 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="elevated" size="xs">
                      SOFTWARE APPLICATION
                    </Badge>
                    <span className="font-mono text-xs text-content-muted">
                      {wanderlust.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl font-heading font-bold text-content-primary tracking-tight group-hover:text-accent-lime transition-colors">
                      {wanderlust.title}
                    </h3>
                    <p className="text-sm font-mono text-content-secondary mt-1 font-medium">
                      {wanderlust.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                    {wanderlust.overview}
                  </p>

                  {/* Highlights List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-content-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>MVC architecture with Express RESTful routing</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-content-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>Mapbox geocoding & interactive destination maps</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-content-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>Cloudinary automated image optimization CDN</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-content-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>Session authentication & verified user reviews</span>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <div className="text-xs font-mono text-content-muted uppercase mb-2">
                      Key Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {wanderlust.technologies.map((tech) => (
                        <Tag key={tech} size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-subtle/80">
                  <Button
                    variant="primary"
                    size="md"
                    href="/work/wanderlust"
                    iconRight={<ArrowUpRight className="w-4 h-4" />}
                  >
                    View Architectural Case Study
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    href={wanderlust.links.github}
                    target="_blank"
                    iconLeft={<Github className="w-3.5 h-3.5" />}
                  >
                    GitHub Repository
                  </Button>
                </div>
              </div>

              {/* Right Visual Column (5 Cols) */}
              <div className="lg:col-span-5 bg-surface-elevated/70 border-t lg:border-t-0 lg:border-l border-border-subtle p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-subtle pb-2">
                    <span className="font-mono text-xs text-content-muted uppercase">
                      // APP PREVIEW & ARCHITECTURE
                    </span>
                    <span className="font-mono text-[10px] text-accent-lime">
                      MVC + GEOCODING
                    </span>
                  </div>

                  {/* App Screenshot Preview */}
                  <div className="rounded-lg overflow-hidden border border-border-subtle relative group/img shadow-subtle">
                    <img
                      src={wanderlust.image}
                      alt="WanderLust Marketplace & Mapbox Interface"
                      className="w-full h-44 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-3">
                      <span className="font-mono text-[10px] text-accent-lime bg-surface-card/90 px-2 py-0.5 rounded border border-accent-lime/30">
                        Listings Feed & Mapbox SDK
                      </span>
                    </div>
                  </div>

                  {/* Visual Architecture Box */}
                  <div className="space-y-2 pt-1">
                    <div className="p-3 rounded-lg bg-surface-card border border-border-subtle flex items-start gap-3 hover:border-accent-lime/40 transition-colors">
                      <div className="p-2 rounded bg-surface-elevated text-accent-lime shrink-0">
                        <Compass className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-heading font-semibold text-content-primary">
                          Mapbox SDK Forward Geocoding
                        </div>
                        <div className="text-[11px] text-content-muted">
                          Converts addresses into exact lat/long coordinates
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-card border border-border-subtle flex items-start gap-3 hover:border-emerald-400/40 transition-colors">
                      <div className="p-2 rounded bg-surface-elevated text-emerald-400 shrink-0">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-heading font-semibold text-content-primary">
                          MongoDB Atlas & Mongoose
                        </div>
                        <div className="text-[11px] text-content-muted">
                          Nested schemas for reviews, ratings & listings
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-card border border-border-subtle flex items-start gap-3 hover:border-sky-400/40 transition-colors">
                      <div className="p-2 rounded bg-surface-elevated text-sky-400 shrink-0">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-heading font-semibold text-content-primary">
                          Cloudinary Media Pipeline
                        </div>
                        <div className="text-[11px] text-content-muted">
                          Multipart uploads with CDN responsive transformations
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Note */}
                <div className="p-3 rounded-lg bg-surface-muted border border-border-subtle text-xs font-mono text-content-muted flex items-center justify-between">
                  <span>Pattern:</span>
                  <span className="text-accent-lime font-semibold">MVC + RESTful CRUD</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
