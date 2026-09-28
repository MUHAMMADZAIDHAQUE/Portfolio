import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { PROFILE } from '../data/profile';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import {
  Code2,
  Database,
  LineChart,
  BarChart3,
  Layers,
  Cpu,
  Terminal,
  FileText,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-accent-lime" />;
      case 'data-analysis':
        return <LineChart className="w-4 h-4 text-sky-400" />;
      case 'bi-analytics':
        return <BarChart3 className="w-4 h-4 text-emerald-400" />;
      case 'databases':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'data-engineering':
        return <Layers className="w-4 h-4 text-amber-400" />;
      case 'machine-learning':
        return <Cpu className="w-4 h-4 text-rose-400" />;
      case 'tools-apis':
        return <Terminal className="w-4 h-4 text-accent-lime" />;
      default:
        return <Sparkles className="w-4 h-4 text-accent-lime" />;
    }
  };

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background text-content-primary pb-32">
      {/* Top Breadcrumb */}
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
            <span className="text-content-primary font-bold">TECHNICAL SKILLS MATRIX</span>
            <span className="text-content-subtle">|</span>
            <Badge variant="lime" size="xs">
              Verified CV Stack
            </Badge>
          </div>
        </div>
      </div>

      <main className="layout-container pt-12 sm:pt-16 space-y-16">
        {/* Page Header */}
        <div className="border-b border-border-subtle pb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="lime" size="xs">
              7 TECHNICAL DISCIPLINES
            </Badge>
            <span className="font-mono text-xs text-content-muted">
              Strictly verified from CV — zero arbitrary ratings
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight">
              Technical Tooling & Applied Competencies
            </h1>
            <p className="text-lg sm:text-xl text-content-secondary leading-relaxed font-sans pt-2">
              A comprehensive inventory of programming languages, analytical libraries, business intelligence platforms,
              database storage engines, analytics engineering tools, machine learning algorithms, and developer utilities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href={PROFILE.contact.resumePath}
              download="Md_Zaid_Haque_Resume.pdf"
              iconLeft={<FileText className="w-4 h-4" />}
            >
              Download CV (PDF)
            </Button>
            <Button
              variant="outline"
              size="md"
              href="/work/customer360"
            >
              View Applied in Customer360
            </Button>
          </div>
        </div>

        {/* Category Filter Chips */}
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
            All Categories ({SKILL_CATEGORIES.length})
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
              <span>{cat.title}</span>
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
              className="space-y-6 hover:border-accent-lime/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
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

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime shrink-0" />
                        <h4 className="font-heading font-semibold text-sm text-content-primary">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-xs text-content-secondary leading-relaxed pl-5">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-1 pl-5 pt-1">
                        {skill.tags.map((tag) => (
                          <Tag key={tag} size="sm">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};
