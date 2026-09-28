export interface RestRoute {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  purpose: string;
  middleware: string;
  authRequired: boolean;
}

export interface SchemaField {
  name: string;
  type: string;
  required: boolean;
  notes: string;
}

export interface SchemaModel {
  name: string;
  description: string;
  fields: SchemaField[];
}

export interface GalleryScreen {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  mockType: 'listings-feed' | 'listing-detail' | 'mapbox-view' | 'review-flow';
  image?: string;
}

export interface EngineeringChallenge {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
}

export const WANDERLUST_ROUTES: RestRoute[] = [
  {
    method: 'GET',
    path: '/listings',
    purpose: 'Display all marketplace property listings with category filters and search',
    middleware: 'None (Public)',
    authRequired: false,
  },
  {
    method: 'GET',
    path: '/listings/new',
    purpose: 'Render property creation form with Cloudinary upload & location inputs',
    middleware: 'isLoggedIn',
    authRequired: true,
  },
  {
    method: 'POST',
    path: '/listings',
    purpose: 'Validate payload with Joi, geocode via Mapbox SDK, upload image to Cloudinary & persist to MongoDB',
    middleware: 'isLoggedIn, upload.single("listing[image]"), validateListing',
    authRequired: true,
  },
  {
    method: 'GET',
    path: '/listings/:id',
    purpose: 'Show detailed listing with nested reviews, author details, and interactive Mapbox pinpoint',
    middleware: 'None (Public)',
    authRequired: false,
  },
  {
    method: 'GET',
    path: '/listings/:id/edit',
    purpose: 'Render listing edit interface with prefilled details and thumbnail preview',
    middleware: 'isLoggedIn, isOwner',
    authRequired: true,
  },
  {
    method: 'PUT',
    path: '/listings/:id',
    purpose: 'Update listing attributes and replace Cloudinary asset if new file is supplied',
    middleware: 'isLoggedIn, isOwner, upload.single("listing[image]"), validateListing',
    authRequired: true,
  },
  {
    method: 'DELETE',
    path: '/listings/:id',
    purpose: 'Remove listing and trigger Mongoose cascade delete middleware to remove associated reviews',
    middleware: 'isLoggedIn, isOwner',
    authRequired: true,
  },
  {
    method: 'POST',
    path: '/listings/:id/reviews',
    purpose: 'Create 1-5 star review and comment bound to the authenticated user ID',
    middleware: 'isLoggedIn, validateReview',
    authRequired: true,
  },
  {
    method: 'DELETE',
    path: '/listings/:id/reviews/:reviewId',
    purpose: 'Remove review from listing array and delete review document',
    middleware: 'isLoggedIn, isReviewAuthor',
    authRequired: true,
  },
];

export const WANDERLUST_SCHEMAS: SchemaModel[] = [
  {
    name: 'Listing Schema',
    description: 'Core accommodation document containing pricing, geocoded geometry, media, and review references.',
    fields: [
      { name: 'title', type: 'String', required: true, notes: 'Property display headline' },
      { name: 'description', type: 'String', required: true, notes: 'Detailed property overview' },
      { name: 'image.url', type: 'String', required: true, notes: 'Cloudinary CDN asset URL' },
      { name: 'image.filename', type: 'String', required: true, notes: 'Cloudinary public ID for deletion' },
      { name: 'price', type: 'Number', required: true, notes: 'Nightly rental price in USD' },
      { name: 'location', type: 'String', required: true, notes: 'City / Street location string' },
      { name: 'country', type: 'String', required: true, notes: 'Country name' },
      {
        name: 'geometry',
        type: 'GeoJSON Point',
        required: true,
        notes: 'type: "Point", coordinates: [longitude, latitude]',
      },
      { name: 'reviews', type: 'ObjectId[]', required: false, notes: 'References to Review collection' },
      { name: 'owner', type: 'ObjectId', required: true, notes: 'References User collection (host)' },
      { name: 'category', type: 'String', required: true, notes: 'Trending, Rooms, Iconic Cities, Castles, Pools' },
    ],
  },
  {
    name: 'Review Schema',
    description: 'Individual verified traveler feedback with numerical rating and timestamp.',
    fields: [
      { name: 'rating', type: 'Number (1-5)', required: true, notes: 'Star score rating' },
      { name: 'comment', type: 'String', required: true, notes: 'Written review text' },
      { name: 'author', type: 'ObjectId', required: true, notes: 'References User author' },
      { name: 'createdAt', type: 'Date', required: false, notes: 'Auto-populated timestamp' },
    ],
  },
  {
    name: 'User Schema',
    description: 'User identity document with session credentials and role permissions.',
    fields: [
      { name: 'email', type: 'String', required: true, notes: 'Unique login email' },
      { name: 'username', type: 'String', required: true, notes: 'Unique display handle' },
      { name: 'hash & salt', type: 'String', required: true, notes: 'PBKDF2 encrypted password hashes via Passport' },
    ],
  },
];

export const WANDERLUST_GALLERY: GalleryScreen[] = [
  {
    id: 'screen-listings',
    title: 'Marketplace Listings Feed & Categorization',
    category: 'Discovery Experience',
    description:
      'Responsive grid showcasing available accommodations with dynamic category pills (Trending, Mountain, Beach, Iconic Cities, Castles) and real-time tax toggle calculations.',
    features: [
      'Category filtering with URL query parameters',
      'Tax-inclusive pricing toggle (+18% GST calculation on client)',
      'Responsive multi-column card layout with hover zoom effects',
      'Direct card links to detailed listing views',
    ],
    mockType: 'listings-feed',
    image: '/assets/projects/wanderlust/explore_listings.jpg',
  },
  {
    id: 'screen-details',
    title: 'Comprehensive Listing & Booking View',
    category: 'Property Details',
    description:
      'High-resolution imagery, host profile verification, nightly rate breakdown, interactive review submission form, and host-only action controls (Edit / Delete).',
    features: [
      'Host authorization checks protecting management actions',
      'Aggregated star rating display and user review carousel',
      'Formatted nightly pricing with tax breakdown',
      'Direct review submission modal for authenticated guests',
    ],
    mockType: 'listing-detail',
    image: '/assets/projects/wanderlust/listing_detail.jpg',
  },
  {
    id: 'screen-mapbox',
    title: 'Interactive Mapbox Geolocation & Map Display',
    category: 'Geospatial Mapping',
    description:
      'WebGL-accelerated vector map powered by Mapbox SDK. Forward geocodes input address text into exact longitude/latitude coordinates and renders a custom marker with popup details.',
    features: [
      'Automatic Mapbox Geocoding forward address lookup',
      'Interactive navigation controls (Zoom, Pan, Tilt)',
      'Custom styled popup with exact location and property preview',
      'Responsive map container with touch gesture support',
    ],
    mockType: 'mapbox-view',
  },
  {
    id: 'screen-reviews',
    title: 'Verified Customer Reviews & Ratings Flow',
    category: 'Social Proof & Moderation',
    description:
      'Granular feedback system with 5-star graphical rating selector, text validation, author identification, and single-click review deletion for authors.',
    features: [
      'Starability CSS accessible star rating interface',
      'Joi server-side schema validation for review payload',
      'Author verification ensuring only review creators can delete their posts',
      'Real-time cascade updates to property document',
    ],
    mockType: 'review-flow',
  },
];

export const WANDERLUST_CHALLENGES: EngineeringChallenge[] = [
  {
    title: 'Asynchronous Forward Geocoding & Coordinate Precision',
    challenge:
      'User input locations (e.g. "Paris, France" or "Udaipur, Rajasthan") needed to be converted into precise GeoJSON [lng, lat] coordinates before database persistence without crashing if the geocoding service timed out.',
    solution:
      'Integrated Mapbox Geocoding SDK inside the controller lifecycle. Wrapped the API request with defensive error handling and coordinate validation before persisting `geometry: { type: "Point", coordinates: [...] }` to MongoDB.',
    impact: '100% reliable coordinate mapping across international destination queries.',
  },
  {
    title: 'Orphaned Review Cascade Deletion',
    challenge:
      'When a host deletes a property listing, associated review documents in the separate Review collection remained orphaned in MongoDB, causing database bloat and dangling references.',
    solution:
      'Engineered a Mongoose `post("findOneAndDelete")` middleware on the Listing schema that automatically deletes all review documents whose `_id` was contained in the deleted listing’s `reviews` array.',
    impact: 'Strict database referential integrity with zero orphaned review records.',
  },
  {
    title: 'Bandwidth-Efficient Cloud Media Transformations',
    challenge:
      'Directly serving uncompressed user-uploaded photos resulted in slow page loads and excessive bandwidth consumption.',
    solution:
      'Implemented Multer with `multer-storage-cloudinary` to upload original assets to Cloudinary, applying on-the-fly URL transformations (e.g. `w_800,h_500,c_fill,q_auto,f_auto`) for thumbnails and responsive displays.',
    impact: 'Reduced image payload weight by over 65% while maintaining visual sharpness across devices.',
  },
  {
    title: 'Multi-Tier Authorization Middleware',
    challenge:
      'Preventing malicious users from modifying another host’s listing or deleting reviews authored by other travelers via manual API requests.',
    solution:
      'Built reusable Express middleware functions (`isOwner`, `isReviewAuthor`) that query the database to verify `req.user._id.equals(listing.owner)` before passing execution to the controller.',
    impact: 'Complete server-side protection against unauthorized privilege escalation and tampering.',
  },
];
