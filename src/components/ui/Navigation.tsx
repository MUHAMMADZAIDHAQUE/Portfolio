import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Button } from './Button';
import { Badge } from './Badge';
import { Menu, X, FileText, Sparkles, ExternalLink } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationProps {
  onOpenResume?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Style Guide', href: '/style-guide' },
];

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all duration-200 backdrop-blur-md',
        scrolled
          ? 'bg-background/95 border-border-subtle shadow-card'
          : 'bg-background/85 border-border-subtle/80'
      )}
    >
      <div className="layout-container h-16 flex items-center justify-between">
        {/* Brand / Logo: ZAID. */}
        <a
          href="/"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-accent-lime rounded-md p-1"
        >
          <div className="w-8 h-8 rounded bg-surface-elevated border border-border-subtle flex items-center justify-center font-heading font-black text-accent-lime text-base group-hover:border-accent-lime transition-colors">
            Z
          </div>
          <span className="font-heading font-bold text-content-primary text-lg tracking-tight flex items-center">
            ZAID<span className="text-accent-lime font-black">.</span>
          </span>
        </a>

        {/* Live Status Badge (Center on desktop) */}
        <div className="hidden lg:flex items-center">
          <Badge variant="live" size="xs">
            Open for Data Analyst & Dev Roles
          </Badge>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isGuide = item.href === '/style-guide';
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'px-3 py-1.5 text-xs font-mono rounded-md transition-colors flex items-center gap-1',
                  isGuide
                    ? 'text-accent-lime bg-accent-muted/60 border border-accent-lime/30 hover:bg-accent-muted hover:text-accent-hover'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-elevated'
                )}
              >
                {isGuide && <Sparkles className="w-3 h-3 text-accent-lime" />}
                {item.label}
                {item.isExternal && <ExternalLink className="w-3 h-3 opacity-60" />}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5">
          {onOpenResume && (
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenResume}
              className="hidden sm:inline-flex"
              iconLeft={<FileText className="w-3.5 h-3.5 text-accent-lime" />}
            >
              Resume
            </Button>
          )}

          <Button
            variant="primary"
            size="sm"
            href="/#contact"
            className="hidden sm:inline-flex"
          >
            Get In Touch
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-content-muted hover:text-content-primary hover:bg-surface-elevated border border-border-subtle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-surface-card px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="pb-2 mb-2 border-b border-border-subtle flex items-center justify-between">
            <span className="font-mono text-xs text-content-muted">Md Zaid Haque</span>
            <Badge variant="live" size="xs">
              Open to Opportunities
            </Badge>
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-content-secondary hover:text-accent-lime hover:bg-surface-elevated rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            {onOpenResume && (
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                iconLeft={<FileText className="w-4 h-4 text-accent-lime" />}
              >
                View Curriculum Vitae (CV)
              </Button>
            )}
            <Button
              variant="primary"
              size="md"
              href="/#contact"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
