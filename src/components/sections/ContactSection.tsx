import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../../data/profile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Github,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
  Send,
  MessageSquare,
} from 'lucide-react';

export interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.contact.email}?subject=Opportunity Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <section id="contact" className="section-spacing bg-background">
      <motion.div
        className="layout-container space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section Header */}
        <SectionHeader
          kicker="05. INITIATE DIALOGUE"
          title="Let's Build Something Exceptional"
          description="Open to entry-level Data Analyst, Analytics Engineering, and Software Development opportunities. Let's discuss how my analytical and engineering capabilities can create value for your team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Connect & Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Direct Email Card */}
            <Card variant="editorial" padding="lg" className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="live" size="xs">
                    Ready to Connect
                  </Badge>
                  <span className="font-mono text-xs text-content-muted">
                    Direct Email
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-content-primary">
                  {PROFILE.contact.email}
                </h3>
                <p className="text-xs text-content-muted leading-relaxed">
                  Best channel for interview invitations, full-time offers, and technical inquiries.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Button
                  variant="primary"
                  size="sm"
                  href={`mailto:${PROFILE.contact.email}`}
                  iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Compose Email
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyEmail}
                  iconLeft={
                    copied ? (
                      <Check className="w-3.5 h-3.5 text-status-success" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )
                  }
                >
                  {copied ? 'Copied to Clipboard' : 'Copy Email'}
                </Button>
              </div>
            </Card>

            {/* Verified Channels Card */}
            <Card variant="surface" padding="md" className="space-y-4">
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // VERIFIED PLATFORMS & ASSETS
              </span>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-accent-lime/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-content-primary group-hover:text-accent-lime transition-colors" />
                    <div>
                      <div className="text-xs font-heading font-semibold text-content-primary">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] font-mono text-content-muted">
                        github.com/{PROFILE.contact.githubUser}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-content-muted group-hover:text-accent-lime transition-colors" />
                </a>

                {/* Location */}
                <div className="p-3 rounded-lg bg-surface-elevated border border-border-subtle flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-lime" />
                  <div>
                    <div className="text-xs font-heading font-semibold text-content-primary">
                      Primary Location
                    </div>
                    <div className="text-[11px] font-mono text-content-muted">
                      {PROFILE.location}
                    </div>
                  </div>
                </div>

                {/* Resume Download CTA */}
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full p-3 rounded-lg bg-accent-muted border border-accent-lime/30 hover:border-accent-lime flex items-center justify-between transition-all group text-left"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent-lime" />
                    <div>
                      <div className="text-xs font-heading font-semibold text-accent-lime">
                        Curriculum Vitae (CV)
                      </div>
                      <div className="text-[11px] font-mono text-content-secondary">
                        View verified ATS resume
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-accent-lime" />
                </button>
              </div>
            </Card>
          </div>

          {/* Right Column: Quick Reach Form (7 Cols) */}
          <Card variant="surface" padding="lg" className="lg:col-span-7 space-y-6">
            <div className="space-y-2 border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent-lime" />
                <h3 className="text-xl font-heading font-bold text-content-primary">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs text-content-muted">
                Fill in your details below to open a pre-filled direct email message.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono text-content-secondary">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border border-border-subtle text-content-primary text-sm focus:border-accent-lime focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono text-content-secondary">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border border-border-subtle text-content-primary text-sm focus:border-accent-lime focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono text-content-secondary">
                  Message / Role Details *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Zaid, I saw your Customer360 analytics project and would love to discuss an open Data Analyst / Developer opportunity at..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border border-border-subtle text-content-primary text-sm focus:border-accent-lime focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                iconRight={<Send className="w-4 h-4" />}
              >
                {sent ? 'Message Dispatched' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
