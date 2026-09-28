import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const HeroNetworkVisual: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto aspect-square rounded-2xl bg-surface-card border border-border-subtle p-6 overflow-hidden shadow-card flex flex-col justify-between"
    >
      {/* Subtle Background Mesh & Grid Texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none"></div>

      {/* Top Header Row of the Visual Widget */}
      <div className="relative z-10 flex items-center justify-between border-b border-border-subtle/80 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-content-primary tracking-wide">
            CUSTOMER_INTEL_NETWORK
          </span>
        </div>
        <span className="font-mono text-[11px] text-accent-lime px-2 py-0.5 rounded bg-accent-muted border border-accent-lime/30">
          LIVE ENGINE
        </span>
      </div>

      {/* Interactive Center SVG Diagram */}
      <div className="relative z-10 my-auto py-2">
        <svg viewBox="0 0 400 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Connecting Dashed Lines */}
          <path
            d="M 60 70 L 140 140 L 260 140 L 340 70"
            stroke="#2A2D35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 60 210 L 140 140 L 260 140 L 340 210"
            stroke="#2A2D35"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Flowing Accent Beam */}
          <motion.path
            d="M 140 140 L 260 140"
            stroke="#C5FF4A"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Central Hub (XGBoost ML) */}
          <g
            transform="translate(200, 140)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('xgb')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx="0" cy="0" r="44" fill="none" stroke="rgba(197, 255, 74, 0.25)" strokeWidth="1" className="animate-ping-slow" />
            <circle
              cx="0"
              cy="0"
              r="36"
              fill="#121419"
              stroke={hoveredNode === 'xgb' ? '#D4FF70' : '#C5FF4A'}
              strokeWidth="2"
              className="transition-colors"
            />
            <text x="0" y="-4" textAnchor="middle" fill="#E7E9ED" fontFamily="Space Grotesk" fontSize="11" fontWeight="700">
              XGBoost ML
            </text>
            <text x="0" y="11" textAnchor="middle" fill="#C5FF4A" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600">
              91.4% ACC
            </text>
          </g>

          {/* Node 1: Ingestion (Top-Left) */}
          <g
            transform="translate(60, 70)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('pg')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="-45"
              y="-18"
              width="90"
              height="36"
              rx="6"
              fill="#191C22"
              stroke={hoveredNode === 'pg' ? '#38BDF8' : '#2A2D35'}
              strokeWidth="1"
              className="transition-colors"
            />
            <circle cx="-30" cy="0" r="4" fill="#38BDF8" />
            <text x="5" y="4" textAnchor="middle" fill="#E7E9ED" fontFamily="JetBrains Mono" fontSize="9" fontWeight="500">
              PostgreSQL
            </text>
          </g>

          {/* Node 2: dbt Transformation (Bottom-Left) */}
          <g
            transform="translate(60, 210)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('dbt')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="-45"
              y="-18"
              width="90"
              height="36"
              rx="6"
              fill="#191C22"
              stroke={hoveredNode === 'dbt' ? '#F59E0B' : '#2A2D35'}
              strokeWidth="1"
              className="transition-colors"
            />
            <circle cx="-30" cy="0" r="4" fill="#F59E0B" />
            <text x="5" y="4" textAnchor="middle" fill="#E7E9ED" fontFamily="JetBrains Mono" fontSize="9" fontWeight="500">
              dbt Marts
            </text>
          </g>

          {/* Node 3: TreeSHAP Attribution (Top-Right) */}
          <g
            transform="translate(340, 70)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('shap')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="-45"
              y="-18"
              width="90"
              height="36"
              rx="6"
              fill="#191C22"
              stroke={hoveredNode === 'shap' ? '#C5FF4A' : '#2A2D35'}
              strokeWidth="1"
              className="transition-colors"
            />
            <circle cx="-30" cy="0" r="4" fill="#C5FF4A" />
            <text x="5" y="4" textAnchor="middle" fill="#E7E9ED" fontFamily="JetBrains Mono" fontSize="9" fontWeight="500">
              TreeSHAP
            </text>
          </g>

          {/* Node 4: Power BI & Retention (Bottom-Right) */}
          <g
            transform="translate(340, 210)"
            className="cursor-pointer"
            onMouseEnter={() => setHoveredNode('pbi')}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <rect
              x="-45"
              y="-18"
              width="90"
              height="36"
              rx="6"
              fill="#191C22"
              stroke={hoveredNode === 'pbi' ? '#10B981' : '#2A2D35'}
              strokeWidth="1"
              className="transition-colors"
            />
            <circle cx="-30" cy="0" r="4" fill="#10B981" />
            <text x="5" y="4" textAnchor="middle" fill="#E7E9ED" fontFamily="JetBrains Mono" fontSize="9" fontWeight="500">
              Power BI
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom KPI Highlights Row */}
      <div className="relative z-10 pt-3 border-t border-border-subtle/80 grid grid-cols-3 gap-2 text-center font-mono">
        <div className="p-2 rounded bg-surface-elevated/60 border border-border-subtle/60">
          <div className="text-[10px] text-content-muted">DATASET</div>
          <div className="text-xs font-bold text-content-primary">1,500 Rows</div>
        </div>
        <div className="p-2 rounded bg-surface-elevated/60 border border-border-subtle/60">
          <div className="text-[10px] text-content-muted">PIPELINE</div>
          <div className="text-xs font-bold text-accent-lime">dbt + SQL</div>
        </div>
        <div className="p-2 rounded bg-surface-elevated/60 border border-border-subtle/60">
          <div className="text-[10px] text-content-muted">DEPLOY</div>
          <div className="text-xs font-bold text-status-success">Live Render</div>
        </div>
      </div>
    </motion.div>
  );
};
