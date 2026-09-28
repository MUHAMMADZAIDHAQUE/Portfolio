import React from 'react';
import {
  WANDERLUST_CHALLENGES,
  EngineeringChallenge,
} from '../data/wanderlustData';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CodeSnippet } from '../components/ui/CodeSnippet';
import {
  MvcArchitectureDiagram,
  GalleryLightboxViewer,
  RestRouteTable,
  SchemaModelViewer,
} from '../components/case-study/WanderlustComponents';
import { ScrollProgress } from '../components/common/ScrollProgress';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const WanderlustCaseStudyPage: React.FC = () => {
  const sampleAuthCode = `// middleware.js - Authentication & Ownership Authorization
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You must be signed in to create or edit listings!");
    return res.redirect("/login");
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "Access denied. You do not have permission to modify this listing.");
    return res.redirect(\`/listings/\${id}\`);
  }
  next();
};`;

  const sampleGeocodingCode = `// controllers/listings.js - Mapbox Geocoding & Cloudinary Upload
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

module.exports.createListing = async (req, res, next) => {
  // 1. Forward Geocoding via Mapbox SDK
  const response = await geocodingClient
    .forwardGeocode({
      query: \`\${req.body.listing.location}, \${req.body.listing.country}\`,
      limit: 1,
    })
    .send();

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url: req.file.path, filename: req.file.filename };
  newListing.geometry = response.body.features[0].geometry; // GeoJSON Point

  await newListing.save();
  req.flash("success", "New Accommodation Listing Created Successfully!");
  res.redirect(\`/listings/\${newListing._id}\`);
};`;

  return (
    <div className="min-h-screen bg-background text-content-primary pb-32">
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top Breadcrumb Bar */}
      <div className="border-b border-border-subtle bg-surface-muted py-3 px-4 sm:px-8">
        <div className="layout-container flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <a
            href="/"
            className="flex items-center gap-2 text-content-muted hover:text-accent-lime transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio Overview</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="text-content-muted">CASE STUDY:</span>
            <span className="text-content-primary font-bold">WANDERLUST</span>
            <span className="text-content-subtle">|</span>
            <Badge variant="lime" size="xs">
              Full-Stack MVC Platform
            </Badge>
          </div>
        </div>
      </div>

      <main className="layout-container pt-10 sm:pt-14 space-y-24">
        {/* 1. HERO SECTION */}
        <section className="space-y-6 border-b border-border-subtle pb-12">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="lime" size="xs">
              SOFTWARE ENGINEERING CASE STUDY
            </Badge>
            <Badge variant="elevated" size="xs">
              Node.js & MongoDB Atlas
            </Badge>
            <span className="font-mono text-xs text-content-muted">
              Express.js • EJS • Mapbox SDK • Cloudinary • Passport.js
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-content-primary tracking-tight leading-[1.08]">
              WanderLust — Full-Stack Travel & Vacation Accommodation Marketplace
            </h1>
            <p className="text-xl sm:text-2xl text-accent-lime font-mono">
              Modern accommodation booking, location geocoding & verified reviews.
            </p>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed font-sans pt-2">
              A production-ready full-stack marketplace application built on the Model-View-Controller (MVC)
              architectural pattern. Integrates Mapbox forward geocoding for interactive coordinate mapping,
              Cloudinary for dynamic media optimization, and robust multi-tier session authentication.
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href="https://github.com/MUHAMMADZAIDHAQUE"
              target="_blank"
              iconLeft={<Github className="w-4 h-4" />}
            >
              GitHub Repository
            </Button>
            <Button
              variant="outline"
              size="md"
              href="/work/customer360"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              View Flagship Project (Customer360)
            </Button>
          </div>

          {/* Architecture Pillars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <Card variant="surface" padding="md" className="space-y-1">
              <div className="font-mono text-[10px] text-content-muted uppercase">Architecture</div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-accent-lime font-data">MVC</div>
              <div className="text-xs text-content-secondary">Separation of concerns</div>
            </Card>

            <Card variant="surface" padding="md" className="space-y-1">
              <div className="font-mono text-[10px] text-content-muted uppercase">Database</div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-sky-400 font-data">MongoDB</div>
              <div className="text-xs text-content-secondary">Atlas Cloud Cluster</div>
            </Card>

            <Card variant="surface" padding="md" className="space-y-1">
              <div className="font-mono text-[10px] text-content-muted uppercase">Media Pipeline</div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-amber-400 font-data">Cloudinary</div>
              <div className="text-xs text-content-secondary">Automated image CDN</div>
            </Card>

            <Card variant="surface" padding="md" className="space-y-1">
              <div className="font-mono text-[10px] text-content-muted uppercase">Geospatial</div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-emerald-400 font-data">Mapbox</div>
              <div className="text-xs text-content-secondary">Forward geocoding SDK</div>
            </Card>
          </div>
        </section>

        {/* 2. PROJECT OVERVIEW & THE MARKETPLACE PROBLEM */}
        <section className="space-y-6">
          <SectionHeader
            kicker="01. SYSTEM PURPOSE"
            title="The Marketplace Challenge & Core Purpose"
            description="Providing an intuitive, transparent accommodation booking platform with verified locations and authentic guest reviews."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="surface" padding="lg" className="space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </div>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                Unreliable location discovery & opaque reviews.
              </h3>
              <div className="space-y-3 text-sm text-content-secondary leading-relaxed">
                <p>
                  Travelers looking for unique stays frequently encounter misleading location descriptions, unoptimized photo galleries that drain mobile bandwidth, and reviews that can be manipulated by unauthorized users.
                </p>
                <p>
                  Hosts need an uncomplicated interface to list properties, upload high-definition photography, and accurately display exact spatial coordinates without configuring manual map lat/long inputs.
                </p>
              </div>
            </Card>

            <Card variant="surface" padding="lg" className="space-y-4">
              <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                The Engineering Solution
              </div>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                An integrated, full-stack marketplace ecosystem.
              </h3>
              <div className="space-y-2 text-sm text-content-secondary leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">01.</span>
                  <span><strong>Mapbox Geocoding:</strong> Automated forward geocoding resolving text addresses into interactive GeoJSON pinpoint maps.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">02.</span>
                  <span><strong>Cloudinary CDN:</strong> Direct multipart image stream processing with on-the-fly thumbnail transformations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">03.</span>
                  <span><strong>Session Security:</strong> Route-level ownership middleware guaranteeing that only verified hosts and review authors can perform mutations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-accent-lime font-bold mt-0.5">04.</span>
                  <span><strong>Relational Integrity:</strong> Mongoose middleware automatically cascades deletions from listings to child reviews.</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 3. APPLICATION SCREEN GALLERY & LIGHTBOX */}
        <section className="space-y-6">
          <SectionHeader
            kicker="02. APPLICATION INTERFACE"
            title="Interactive Screen Gallery & User Flows"
            description="Explore the key user interfaces of WanderLust from discovery to geocoded property inspection and review submission."
          />

          <GalleryLightboxViewer />
        </section>

        {/* 4. FULL-STACK MVC ARCHITECTURE */}
        <section className="space-y-6">
          <SectionHeader
            kicker="03. SYSTEM ARCHITECTURE"
            title="Model-View-Controller & Service Integration"
            description="Separating UI presentation, business controller logic, and data layer models across Node, Express, and MongoDB Atlas."
          />

          <MvcArchitectureDiagram />
        </section>

        {/* 5. AUTHENTICATION & AUTHORIZATION IMPLEMENTATION */}
        <section className="space-y-6">
          <SectionHeader
            kicker="04. SECURITY & AUTHENTICATION"
            title="Multi-Tier Authentication & Ownership Middleware"
            description="Session-based authentication with Passport.js and defensive route-level authorization guards."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Card variant="surface" padding="lg" className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
                // AUTHORIZATION ARCHITECTURE
              </span>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                Defensive Route Guards
              </h3>
              <div className="space-y-3 text-sm text-content-secondary leading-relaxed">
                <p>
                  Authentication is managed using <code>passport-local</code> with PBKDF2 password hashing. Sessions are persisted in MongoDB via <code>connect-mongo</code>.
                </p>
                <p>
                  To prevent unauthorized mutations, custom middleware functions intercept every state-changing request:
                </p>
                <div className="space-y-2 text-xs font-mono pt-1">
                  <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle">
                    <span className="text-accent-lime font-bold">isLoggedIn: </span>
                    <span className="text-content-muted">Guarantees active user session</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle">
                    <span className="text-sky-400 font-bold">isOwner: </span>
                    <span className="text-content-muted">Verifies listing ownership before edit/delete</span>
                  </div>
                  <div className="p-2.5 rounded bg-surface-elevated border border-border-subtle">
                    <span className="text-amber-400 font-bold">isReviewAuthor: </span>
                    <span className="text-content-muted">Ensures only review creators can delete feedback</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="lg:col-span-7">
              <CodeSnippet
                code={sampleAuthCode}
                language="javascript"
                filename="middleware.js (Auth & Ownership Guards)"
              />
            </div>
          </div>
        </section>

        {/* 6. DATA MODELING & RESTFUL ROUTING */}
        <section className="space-y-6">
          <SectionHeader
            kicker="05. RESTFUL ROUTING & DATA SCHEMAS"
            title="Standardized REST API & Mongoose ODM Models"
            description="Complete RESTful routing catalog paired with GeoJSON-indexed schemas and relational review arrays."
          />

          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-mono text-content-muted uppercase mb-3 font-semibold">
                // RESTful Routing Specification (9 Endpoints)
              </h4>
              <RestRouteTable />
            </div>

            <div>
              <h4 className="text-sm font-mono text-content-muted uppercase mb-3 font-semibold">
                // Mongoose Data Schema Definitions
              </h4>
              <SchemaModelViewer />
            </div>
          </div>
        </section>

        {/* 7. IMAGE UPLOADS & MAPBOX GEOLOCATION PIPELINE */}
        <section className="space-y-6">
          <SectionHeader
            kicker="06. MEDIA & GEOSPATIAL PIPELINE"
            title="Cloudinary Multipart Uploads & Mapbox Geocoding"
            description="How user-submitted text and images are converted into optimized CDN assets and GeoJSON point geometries."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <CodeSnippet
                code={sampleGeocodingCode}
                language="javascript"
                filename="controllers/listings.js (Geocoding & Cloud Upload)"
              />
            </div>

            <Card variant="surface" padding="lg" className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
                // GEOJSON & CLOUD PIPELINE
              </span>
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                Automated Coordinate Extraction
              </h3>
              <div className="space-y-3 text-sm text-content-secondary leading-relaxed">
                <p>
                  When a host enters "Santorini, Greece", the controller invokes the Mapbox Forward Geocoding API, extracting exact longitude and latitude:
                </p>
                <div className="p-3 rounded bg-surface-elevated border border-border-subtle font-mono text-xs text-accent-lime">
                  geometry: &#123; type: "Point", coordinates: [25.4316, 36.3932] &#125;
                </div>
                <p className="text-xs text-content-muted leading-relaxed">
                  On the frontend, Mapbox GL JS consumes this GeoJSON object to render a responsive WebGL vector map with interactive pins and animated popups.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 8. ENGINEERING DECISIONS, CHALLENGES & SOLUTIONS */}
        <section className="space-y-6">
          <SectionHeader
            kicker="07. ENGINEERING LOG"
            title="Key Technical Challenges & Architectural Decisions"
            description="Real-world engineering hurdles solved through defensive coding, middleware hooks, and cloud optimization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WANDERLUST_CHALLENGES.map((ch: EngineeringChallenge) => (
              <Card key={ch.title} variant="surface" padding="lg" className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="lime" size="xs">
                    CHALLENGE & RESOLUTION
                  </Badge>
                </div>
                <h4 className="font-heading font-bold text-xl text-content-primary">
                  {ch.title}
                </h4>
                <div className="space-y-2 text-xs leading-relaxed">
                  <div className="p-3 rounded bg-surface-elevated border border-border-subtle">
                    <span className="text-rose-400 font-mono font-bold">Problem: </span>
                    <span className="text-content-secondary font-sans">{ch.challenge}</span>
                  </div>
                  <div className="p-3 rounded bg-surface-elevated border border-border-subtle">
                    <span className="text-accent-lime font-mono font-bold">Solution: </span>
                    <span className="text-content-secondary font-sans">{ch.solution}</span>
                  </div>
                  <div className="pt-1 text-emerald-400 font-mono text-[11px]">
                    ✓ Result: {ch.impact}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 9. NAVIGATION & PROJECT FOOTER */}
        <section className="pt-12 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              href="https://github.com/MUHAMMADZAIDHAQUE"
              target="_blank"
              iconLeft={<Github className="w-4 h-4" />}
            >
              Explore GitHub Repository
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/work/customer360"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              View Customer360 Analytics Case Study
            </Button>
          </div>

          <a
            href="/"
            className="flex items-center gap-2 font-mono text-xs text-content-secondary hover:text-accent-lime transition-colors group"
          >
            <span>Return to Portfolio Home</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </section>
      </main>
    </div>
  );
};
