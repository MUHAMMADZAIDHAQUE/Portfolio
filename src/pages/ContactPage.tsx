import React, { useState } from 'react';
import { PROFILE } from '../data/profile';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import {
  Github,
  Linkedin,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
  Send,
  MessageSquare,
} from 'lucide-react';

export interface ContactPageProps {
  onOpenResume?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume: _onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Opportunity Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

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
            <span className="text-content-primary font-bold">CONTACT & CHANNELS</span>
            <span className="text-content-subtle">|</span>
            <Badge variant="live" size="xs">
              Open to Opportunities
            </Badge>
          </div>
        </div>
      </div>

      <main className="layout-container pt-12 sm:pt-16 space-y-16">
        {/* Page Header */}
        <div className="border-b border-border-subtle pb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="lime" size="xs">
              DIRECT RECRUITER & TECHNICAL CHANNEL
            </Badge>
            <span className="font-mono text-xs text-content-muted">
              Jamshedpur / Durgapur, India
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight">
              Get In Touch & Explore Opportunities
            </h1>
            <p className="text-lg sm:text-xl text-content-secondary leading-relaxed font-sans pt-2">
              Currently open to entry-level <strong>Data Analyst</strong>, <strong>Analytics Engineer</strong>,
              and <strong>Software Developer</strong> roles. Let's discuss how my analytical modeling and full-stack engineering skills can create tangible value for your organization.
            </p>
          </div>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Verified Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="editorial" padding="lg" className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="live" size="xs">Direct Email</Badge>
                  <span className="font-mono text-xs text-content-muted">Primary Channel</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-content-primary">
                  {PROFILE.contact.email}
                </h3>
                <p className="text-xs text-content-muted leading-relaxed">
                  Fastest response channel for interviews, full-time opportunities, and technical questions.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <Button
                  variant="primary"
                  size="sm"
                  href={`mailto:${PROFILE.contact.email}`}
                  iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Open Mail Client
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

            {/* Verified Channels */}
            <Card variant="surface" padding="md" className="space-y-3">
              <span className="font-mono text-xs text-accent-lime uppercase tracking-wider font-semibold">
                // VERIFIED PLATFORMS & PROFILES
              </span>

              <div className="space-y-2.5 font-mono text-xs">
                {/* GitHub */}
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-accent-lime/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-content-primary group-hover:text-accent-lime transition-colors" />
                    <div>
                      <div className="font-heading font-semibold text-content-primary">GitHub Profile</div>
                      <div className="text-[11px] text-content-muted">github.com/{PROFILE.contact.githubUser}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-content-muted group-hover:text-accent-lime" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-surface-elevated hover:bg-surface-card border border-border-subtle hover:border-accent-lime/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-content-primary group-hover:text-accent-lime transition-colors" />
                    <div>
                      <div className="font-heading font-semibold text-content-primary">LinkedIn Profile</div>
                      <div className="text-[11px] text-content-muted">linkedin.com/in/{PROFILE.contact.linkedinUser}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-content-muted group-hover:text-accent-lime" />
                </a>

                {/* Location */}
                <div className="p-3 rounded-lg bg-surface-elevated border border-border-subtle flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent-lime" />
                  <div>
                    <div className="font-heading font-semibold text-content-primary">Location</div>
                    <div className="text-[11px] text-content-muted">{PROFILE.location}</div>
                  </div>
                </div>

                {/* Resume Download Link */}
                <a
                  href={PROFILE.contact.resumePath}
                  download="Md_Zaid_Haque_Resume.pdf"
                  className="p-3 rounded-lg bg-accent-muted border border-accent-lime/30 hover:border-accent-lime flex items-center justify-between transition-all group block"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-accent-lime" />
                    <div>
                      <div className="font-heading font-semibold text-accent-lime">Curriculum Vitae (PDF)</div>
                      <div className="text-[11px] text-content-secondary">Click to download verified document</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-lime" />
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Message Form (7 Cols) */}
          <Card variant="surface" padding="lg" className="lg:col-span-7 space-y-6">
            <div className="space-y-1.5 border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent-lime" />
                <h3 className="text-xl font-heading font-bold text-content-primary">
                  Compose Pre-Formatted Message
                </h3>
              </div>
              <p className="text-xs text-content-muted">
                Pre-populates an email directly to <code>{PROFILE.contact.email}</code>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono text-content-secondary">
                    Your Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Lead / Technical Recruiter"
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
                    placeholder="e.g. lead@company.com"
                    className="w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border border-border-subtle text-content-primary text-sm focus:border-accent-lime focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-xs font-mono text-content-secondary">
                  Subject Line
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Data Analyst Opportunity / Portfolio Discussion"
                  className="w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border border-border-subtle text-content-primary text-sm focus:border-accent-lime focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-mono text-content-secondary">
                  Message Details *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Zaid, I reviewed your Customer360 case study and would like to discuss an opportunity for a Data Analyst / Developer position on our team..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-surface-elevated border border-border-subtle text-content-primary text-sm focus:border-accent-lime focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                iconRight={<Send className="w-4 h-4" />}
              >
                {submitted ? 'Opening Mail Client...' : 'Dispatch Message via Email'}
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};
