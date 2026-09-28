import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/profile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroNetworkVisual } from '../illustrations/HeroNetworkVisual';
import { ArrowDown, FileText, MapPin, Database, LineChart, Code2 } from 'lucide-react';

export interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-border-subtle overflow-hidden">
      {/* Background Subtle Mesh and Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none"></div>

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative & CTAs with Staggered Motion */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <Badge variant="live" size="sm">
                {PROFILE.status}
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-content-muted">
                <MapPin className="w-3.5 h-3.5 text-accent-lime" />
                {PROFILE.location}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight leading-[1.08]">
                I turn complex data into{' '}
                <span className="text-accent-lime underline decoration-accent-lime/40 decoration-wavy decoration-2 underline-offset-8">
                  clear decisions.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-content-secondary max-w-2xl leading-relaxed font-sans pt-2">
                {PROFILE.bio}
              </p>
            </motion.div>

            {/* Core Capability Chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-card border border-border-subtle text-xs font-mono text-content-secondary hover:border-accent-lime/40 transition-colors">
                <Database className="w-3.5 h-3.5 text-accent-lime" />
                <span>SQL & dbt Marts</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-card border border-border-subtle text-xs font-mono text-content-secondary hover:border-accent-lime/40 transition-colors">
                <LineChart className="w-3.5 h-3.5 text-accent-lime" />
                <span>Customer Churn & RFM</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-card border border-border-subtle text-xs font-mono text-content-secondary hover:border-accent-lime/40 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-accent-lime" />
                <span>Full-Stack SaaS Apps</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                iconRight={<ArrowDown className="w-4 h-4" />}
              >
                Explore My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenResume}
                iconLeft={<FileText className="w-4 h-4 text-accent-lime" />}
              >
                Download CV
              </Button>
            </motion.div>

            {/* Micro-Metrics Row */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-border-subtle/70 grid grid-cols-3 gap-4"
            >
              {PROFILE.stats.map((st) => (
                <div key={st.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-content-primary font-data">
                    {st.value}
                  </div>
                  <div className="font-mono text-xs text-accent-lime uppercase font-semibold">
                    {st.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Data Network Visualization */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroNetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
