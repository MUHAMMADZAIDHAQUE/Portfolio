import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'lime' | 'neutral' | 'elevated' | 'success' | 'warning' | 'danger' | 'live';
  size?: 'xs' | 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'neutral',
  size = 'sm',
  dot = false,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-mono font-medium rounded-full border transition-colors select-none';

  const variants = {
    lime: 'bg-accent-muted text-accent-lime border-accent-lime/30',
    neutral: 'bg-surface-card text-content-secondary border-border-subtle',
    elevated: 'bg-surface-elevated text-content-primary border-border-subtle',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    danger: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    live: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40',
  };

  const sizes = {
    xs: 'text-[10px] px-2 py-0.5 gap-1 tracking-wider uppercase',
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-sm px-3 py-1 gap-2',
  };

  const isLive = variant === 'live' || dot;

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {isLive && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
        </span>
      )}
      {children}
    </span>
  );
};
