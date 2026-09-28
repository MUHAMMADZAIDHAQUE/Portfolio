import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_ITEMS } from '../../data/experience';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Tag } from '../ui/Tag';
import { GraduationCap, Award, Trophy, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-accent-lime" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-sky-400" />;
      case 'extracurricular':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-accent-lime" />;
    }
  };

  return (
    <section id="experience" className="section-spacing border-b border-border-subtle bg-background">
      <motion.div
        className="layout-container space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <SectionHeader
          kicker="04. EDUCATION & LEADERSHIP"
          title="Academic Foundation & Campus Impact"
          description="Demonstrated leadership, organizational execution, and team resilience across academic and collegiate arenas."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TIMELINE_ITEMS.map((item) => (
            <Card
              key={item.id}
              variant="surface"
              padding="lg"
              className="space-y-5 hover:border-accent-lime/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2.5 rounded-lg bg-surface-elevated border border-border-subtle shrink-0">
                    {getTimelineIcon(item.type)}
                  </div>
                  <Badge
                    variant={item.type === 'education' ? 'lime' : 'neutral'}
                    size="xs"
                  >
                    {item.badge}
                  </Badge>
                </div>

                {/* Title & Organization */}
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-xl text-content-primary">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-accent-lime font-mono">
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

                {/* Description */}
                <p className="text-sm text-content-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2 border-t border-border-subtle/70">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-content-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
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
      </motion.div>
    </section>
  );
};
