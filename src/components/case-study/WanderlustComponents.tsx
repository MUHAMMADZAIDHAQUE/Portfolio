import React, { useState } from 'react';
import {
  WANDERLUST_ROUTES,
  WANDERLUST_SCHEMAS,
  WANDERLUST_GALLERY,
  GalleryScreen,
  RestRoute,
  SchemaModel,
} from '../../data/wanderlustData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  Compass,
  Layers,
  Database,
  Lock,
  Image,
  Star,
  CheckCircle2,
  X,
  Maximize2,
  ArrowRight,
  Shield,
  Server,
  Globe,
} from 'lucide-react';

/* 1. Interactive MVC Architecture Diagram */
export const MvcArchitectureDiagram: React.FC = () => {
  const [activeTier, setActiveTier] = useState<'view' | 'controller' | 'model' | 'cloud'>('controller');

  return (
    <Card variant="surface" padding="lg" className="space-y-6">
      {/* Tier Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle pb-4">
        <div>
          <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
            // MVC ARCHITECTURAL PATTERN
          </span>
          <h4 className="text-xl font-heading font-bold text-content-primary">
            Full-Stack Node / Express & MongoDB Architecture
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: 'view', label: '1. View (EJS)' },
            { id: 'controller', label: '2. Controller & Auth' },
            { id: 'model', label: '3. Model (Mongoose)' },
            { id: 'cloud', label: '4. External Services' },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTier(t.id as any)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs border transition-all ${
                activeTier === t.id
                  ? 'bg-accent-lime text-background border-accent-lime font-semibold shadow-lime-sm'
                  : 'bg-surface-elevated text-content-muted border-border-subtle hover:border-border-active'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tier Content Display */}
      {activeTier === 'view' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold">
              <Globe className="w-4 h-4" />
              Dynamic EJS Layouts
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              `boilerplate.ejs` template layout wrapping all views with responsive Bootstrap navbar, flash messages, and footer.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold">
              <Compass className="w-4 h-4" />
              Client Mapbox SDK
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              `public/js/map.js` parses GeoJSON coordinate data into WebGL canvas rendering custom listing location markers.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
              <Star className="w-4 h-4" />
              Interactive Starability
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Accessible pure CSS 5-star rating inputs with zero-JS dependency for seamless form submissions.
            </p>
          </div>
        </div>
      )}

      {activeTier === 'controller' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold">
              <Server className="w-4 h-4" />
              Express RESTful Routers
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Clean modular routers for `/listings`, `/reviews`, and `/users` with parameterized ID matching and async error wrappers.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold">
              <Lock className="w-4 h-4" />
              Passport & Session Auth
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              `passport-local` with PBKDF2 hashing, secure session cookies stored in `connect-mongo`, and `isLoggedIn` route guards.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
              <Shield className="w-4 h-4" />
              Ownership Middleware
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              `isOwner` and `isReviewAuthor` middleware verify database permissions before permitting update or delete mutations.
            </p>
          </div>
        </div>
      )}

      {activeTier === 'model' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold">
              <Database className="w-4 h-4" />
              MongoDB Atlas Cloud
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Multi-region cloud database cluster with encrypted connections and high availability.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold">
              <Layers className="w-4 h-4" />
              Mongoose Schemas
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Typed Listing, Review, and User schemas with GeoJSON Point indexing for spatial queries.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              Cascade Delete Hook
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              `post('findOneAndDelete')` hook cleans up all child review documents when a parent listing is removed.
            </p>
          </div>
        </div>
      )}

      {activeTier === 'cloud' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-accent-lime font-mono text-xs font-bold">
              <Image className="w-4 h-4" />
              Cloudinary Media CDN
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Multer streaming file uploads directly to Cloudinary storage with dynamic aspect ratio resizing and WebP/AVIF auto-format delivery.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-elevated border border-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold">
              <Compass className="w-4 h-4" />
              Mapbox Geocoding API
            </div>
            <p className="text-xs text-content-secondary leading-relaxed">
              Forward geocoding converts user location text into exact spatial coordinates embedded into the listing document.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};

/* 2. Interactive Lightbox Screen Gallery */
export const GalleryLightboxViewer: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<GalleryScreen | null>(null);

  return (
    <div className="space-y-6">
      {/* Grid of Screen Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {WANDERLUST_GALLERY.map((screen) => (
          <Card
            key={screen.id}
            variant="surface"
            padding="none"
            className="group cursor-pointer hover:border-accent-lime/40 transition-all overflow-hidden"
            onClick={() => setSelectedScreen(screen)}
          >
            {/* Visual Canvas Representation */}
            <div className="h-56 bg-surface-elevated border-b border-border-subtle relative overflow-hidden flex flex-col justify-between">
              {screen.image ? (
                <div className="relative w-full h-full">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Badge variant="lime" size="xs">
                      {screen.category}
                    </Badge>
                    <button
                      type="button"
                      className="p-1.5 rounded-md bg-surface-card/90 backdrop-blur-md border border-border-subtle text-content-muted group-hover:text-accent-lime transition-colors"
                      aria-label="Inspect screen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-content-secondary">
                    <span>Click to inspect details</span>
                    <span className="text-accent-lime flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-semibold">
                      View Specs <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-4 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between z-10">
                    <Badge variant="lime" size="xs">
                      {screen.category}
                    </Badge>
                    <button
                      type="button"
                      className="p-1.5 rounded-md bg-surface-card border border-border-subtle text-content-muted group-hover:text-accent-lime transition-colors"
                      aria-label="Inspect screen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Simulated UI Graphic */}
                  <div className="space-y-2 z-10 my-auto">
                    <div className="h-4 w-3/4 rounded bg-surface-card border border-border-subtle flex items-center px-2 text-[10px] font-mono text-content-muted">
                      {screen.title}
                    </div>
                    <div className="h-3 w-1/2 rounded bg-surface-card/60 border border-border-subtle/50"></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-content-muted z-10 border-t border-border-subtle/60 pt-2">
                    <span>Click to inspect details</span>
                    <span className="text-accent-lime flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Specs <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Narrative Box */}
            <div className="p-5 space-y-2">
              <h4 className="font-heading font-bold text-base text-content-primary group-hover:text-accent-lime transition-colors">
                {screen.title}
              </h4>
              <p className="text-xs text-content-muted line-clamp-2 leading-relaxed">
                {screen.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-background/85 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedScreen(null)}
          />

          <div className="relative w-full max-w-2xl bg-surface-card border border-border-subtle rounded-xl shadow-elevated z-10 p-6 sm:p-8 space-y-6 text-content-primary max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div className="flex items-center gap-2">
                <Badge variant="lime" size="xs">
                  {selectedScreen.category}
                </Badge>
                <span className="font-mono text-xs text-content-muted">
                  WANDERLUST UI SPEC
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreen(null)}
                className="p-1 rounded-md text-content-muted hover:text-content-primary hover:bg-surface-elevated"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Screenshot Image if present */}
            {selectedScreen.image && (
              <div className="rounded-lg overflow-hidden border border-border-subtle shadow-subtle">
                <img
                  src={selectedScreen.image}
                  alt={selectedScreen.title}
                  className="w-full h-auto object-cover max-h-72"
                />
              </div>
            )}

            {/* Modal Body */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-content-primary">
                {selectedScreen.title}
              </h3>
              <p className="text-sm text-content-secondary leading-relaxed">
                {selectedScreen.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs text-accent-lime uppercase font-semibold">
                  Key Technical Features:
                </span>
                <div className="space-y-2">
                  {selectedScreen.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-content-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-border-subtle flex justify-end">
              <Button variant="secondary" size="sm" onClick={() => setSelectedScreen(null)}>
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* 3. Interactive RESTful Route Table */
export const RestRouteTable: React.FC = () => {
  return (
    <Card variant="surface" padding="none" className="overflow-x-auto">
      <table className="w-full text-left font-mono text-xs">
        <thead>
          <tr className="border-b border-border-subtle bg-surface-elevated text-content-muted">
            <th className="py-3 px-4">Method</th>
            <th className="py-3 px-4">Endpoint Path</th>
            <th className="py-3 px-4">Purpose / Operation</th>
            <th className="py-3 px-4">Middleware Pipeline</th>
            <th className="py-3 px-4">Auth Required</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle/60 text-content-secondary">
          {WANDERLUST_ROUTES.map((r: RestRoute) => (
            <tr key={`${r.method}-${r.path}`} className="hover:bg-surface-elevated/50 transition-colors">
              <td className="py-3 px-4 font-bold">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                    r.method === 'GET'
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30'
                      : r.method === 'POST'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : r.method === 'PUT'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {r.method}
                </span>
              </td>
              <td className="py-3 px-4 text-content-primary font-semibold">{r.path}</td>
              <td className="py-3 px-4 font-sans text-xs text-content-muted">{r.purpose}</td>
              <td className="py-3 px-4 text-[11px] text-content-secondary">{r.middleware}</td>
              <td className="py-3 px-4">
                {r.authRequired ? (
                  <span className="text-amber-400 flex items-center gap-1 text-[11px]">
                    <Lock className="w-3 h-3" /> Yes
                  </span>
                ) : (
                  <span className="text-content-muted text-[11px]">Public</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

/* 4. MongoDB Schema Model Viewer */
export const SchemaModelViewer: React.FC = () => {
  const [selectedSchema, setSelectedSchema] = useState<SchemaModel>(WANDERLUST_SCHEMAS[0]);

  return (
    <div className="space-y-6">
      {/* Schema Tabs */}
      <div className="flex flex-wrap gap-2">
        {WANDERLUST_SCHEMAS.map((sch: SchemaModel) => (
          <button
            key={sch.name}
            type="button"
            onClick={() => setSelectedSchema(sch)}
            className={`px-3.5 py-1.5 rounded-md font-mono text-xs border transition-all ${
              selectedSchema.name === sch.name
                ? 'bg-accent-lime text-background border-accent-lime font-semibold shadow-lime-sm'
                : 'bg-surface-card text-content-muted border-border-subtle hover:border-border-active hover:text-content-primary'
            }`}
          >
            {sch.name}
          </button>
        ))}
      </div>

      {/* Selected Schema Table */}
      <Card variant="surface" padding="lg" className="space-y-4">
        <div className="flex items-center justify-between border-b border-border-subtle pb-3">
          <div>
            <h4 className="font-heading font-bold text-lg text-content-primary">
              {selectedSchema.name}
            </h4>
            <p className="text-xs text-content-muted font-sans mt-0.5">
              {selectedSchema.description}
            </p>
          </div>
          <Badge variant="lime" size="xs">
            Mongoose ODM
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-border-subtle text-content-muted">
                <th className="py-2.5 px-3">Field Name</th>
                <th className="py-2.5 px-3">Type</th>
                <th className="py-2.5 px-3">Required</th>
                <th className="py-2.5 px-3">Notes & Relationships</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle/50 text-content-secondary">
              {selectedSchema.fields.map((f) => (
                <tr key={f.name}>
                  <td className="py-2.5 px-3 font-semibold text-accent-lime">{f.name}</td>
                  <td className="py-2.5 px-3 text-sky-400">{f.type}</td>
                  <td className="py-2.5 px-3">
                    {f.required ? <span className="text-emerald-400">Yes</span> : <span className="text-content-muted">No</span>}
                  </td>
                  <td className="py-2.5 px-3 font-sans text-content-muted text-xs">{f.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
