import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/ui/Navigation';
import { HomePage } from './pages/HomePage';
import { PROFILE } from './data/profile';
import { BackToTop } from './components/common/BackToTop';
import { ArrowUp, Github, Mail, Linkedin, Sparkles } from 'lucide-react';

// Lazy load non-home sub-routes for performance optimization
const Customer360CaseStudyPage = lazy(() =>
  import('./pages/Customer360CaseStudyPage').then((m) => ({ default: m.Customer360CaseStudyPage }))
);
const WanderlustCaseStudyPage = lazy(() =>
  import('./pages/WanderlustCaseStudyPage').then((m) => ({ default: m.WanderlustCaseStudyPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const SkillsPage = lazy(() =>
  import('./pages/SkillsPage').then((m) => ({ default: m.SkillsPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const StyleGuidePage = lazy(() =>
  import('./pages/StyleGuidePage').then((m) => ({ default: m.StyleGuidePage }))
);

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-content-primary flex flex-col selection:bg-accent-lime selection:text-content-inverse">
        {/* Sticky Header Navigation */}
        <Navigation onOpenResume={() => setIsResumeOpen(true)} />

        {/* Global Back To Top Control */}
        <BackToTop />

        {/* Routes with Suspense Fallback */}
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="min-h-[50vh] flex items-center justify-center font-mono text-xs text-content-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-lime animate-ping"></span>
                  <span>Loading resource...</span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenResume={() => setIsResumeOpen(true)}
                    isResumeOpen={isResumeOpen}
                    onCloseResume={() => setIsResumeOpen(false)}
                  />
                }
              />
              <Route path="/work/customer360" element={<Customer360CaseStudyPage />} />
              <Route path="/work/wanderlust" element={<WanderlustCaseStudyPage />} />
              <Route path="/about" element={<AboutPage onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage onOpenResume={() => setIsResumeOpen(true)} />} />
              <Route path="/style-guide" element={<StyleGuidePage />} />
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenResume={() => setIsResumeOpen(true)}
                    isResumeOpen={isResumeOpen}
                    onCloseResume={() => setIsResumeOpen(false)}
                  />
                }
              />
            </Routes>
          </Suspense>
        </main>

        {/* Global Editorial Footer */}
        <footer className="border-t border-border-subtle bg-surface-muted py-12 text-xs font-mono text-content-muted">
          <div className="layout-container space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border-subtle/60">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-content-primary text-base">
                    ZAID<span className="text-accent-lime">.</span>
                  </span>
                  <span className="text-content-subtle">/</span>
                  <span className="text-content-secondary">
                    Md Zaid Haque
                  </span>
                </div>
                <p className="text-content-muted text-xs font-sans">
                  Data Analyst & Software Developer • B.Tech @ NIT Durgapur
                </p>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
                <a
                  href="/#work"
                  className="text-content-secondary hover:text-accent-lime transition-colors"
                >
                  Featured Work
                </a>
                <a
                  href="/#about"
                  className="text-content-secondary hover:text-accent-lime transition-colors"
                >
                  About & Background
                </a>
                <a
                  href="/#skills"
                  className="text-content-secondary hover:text-accent-lime transition-colors"
                >
                  Skills Matrix
                </a>
                <a
                  href="/style-guide"
                  className="text-accent-lime flex items-center gap-1 hover:underline"
                >
                  <Sparkles className="w-3 h-3" />
                  Design System
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-4 text-content-muted">
                <span>© 2026 Md Zaid Haque. All rights reserved.</span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-content-secondary hover:text-accent-lime transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-content-secondary hover:text-accent-lime transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="flex items-center gap-1.5 text-content-secondary hover:text-accent-lime transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="flex items-center gap-1 text-content-muted hover:text-content-primary transition-colors p-1"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Back to Top</span>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
