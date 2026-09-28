import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/skills';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { Database, LineChart, Code2, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'data-analytics':
        return <Database className="w-4 h-4 text-accent-lime" />;
      case 'machine-learning':
        return <LineChart className="w-4 h-4 text-accent-lime" />;
      case 'software-dev':
        return <Code2 className="w-4 h-4 text-accent-lime" />;
      case 'tools-cloud':
        return <Cloud className="w-4 h-4 text-accent-lime" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent-lime" />;
    }
  };

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="section-spacing border-b border-border-subtle bg-background">
      <motion.div
        className="layout-container space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <SectionHeader
          kicker="03. TECHNICAL CAPABILITIES"
          title="Curated Tools & Applied Competencies"
          description="A rigorous technical toolkit focused on reproducible analytics pipelines, statistical validation, and production software."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-md font-mono text-xs border transition-all ${
              activeCategory === 'all'
                ? 'bg-accent-lime text-background border-accent-lime font-semibold shadow-lime-sm'
                : 'bg-surface-card text-content-muted border-border-subtle hover:border-border-active hover:text-content-primary'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md font-mono text-xs border transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-accent-lime text-background border-accent-lime font-semibold shadow-lime-sm'
                  : 'bg-surface-card text-content-muted border-border-subtle hover:border-border-active hover:text-content-primary'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((category) => (
            <Card
              key={category.id}
              variant="surface"
              padding="lg"
              className="space-y-6 hover:border-accent-lime/30 transition-colors"
            >
              {/* Category Header */}
              <div className="space-y-1.5 border-b border-border-subtle pb-4">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(category.id)}
                  <h3 className="font-heading font-bold text-xl text-content-primary">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-content-muted leading-relaxed font-sans">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime shrink-0" />
                      <h4 className="font-heading font-semibold text-sm text-content-primary">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-xs text-content-secondary leading-relaxed pl-5">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                      {skill.tags.map((tag) => (
                        <Tag key={tag} size="sm">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
