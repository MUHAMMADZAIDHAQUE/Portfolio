import React from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  subtext?: string;
  badge?: {
    text: string;
    variant?: 'lime' | 'success' | 'warning' | 'neutral';
  };
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  className,
  value,
  label,
  subtext,
  badge,
  icon,
  ...props
}) => {
  return (
    <Card
      variant="surface"
      padding="md"
      className={cn('relative flex flex-col justify-between group', className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-content-muted font-medium">
          {label}
        </span>
        {icon && (
          <span className="text-content-muted group-hover:text-accent-lime transition-colors">
            {icon}
          </span>
        )}
      </div>

      <div className="space-y-1.5">
        <div className="text-3xl sm:text-4xl font-heading font-bold text-content-primary tracking-tight font-data">
          {value}
        </div>
        {(subtext || badge) && (
          <div className="flex items-center gap-2 pt-1">
            {badge && (
              <span
                className={cn(
                  'text-[10px] font-mono px-1.5 py-0.5 rounded border uppercase font-medium',
                  badge.variant === 'lime' || !badge.variant
                    ? 'bg-accent-muted text-accent-lime border-accent-lime/30'
                    : '',
                  badge.variant === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : '',
                  badge.variant === 'warning'
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                    : '',
                  badge.variant === 'neutral'
                    ? 'bg-surface-elevated text-content-secondary border-border-subtle'
                    : ''
                )}
              >
                {badge.text}
              </span>
            )}
            {subtext && (
              <span className="text-xs text-content-muted font-mono truncate">
                {subtext}
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};
