import React from 'react';
import { cn } from '../../utils/cn';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'between';
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  kicker,
  title,
  description,
  align = 'left',
  action,
  ...props
}) => {
  const isBetween = align === 'between' && action;
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        isCenter ? 'text-center max-w-3xl mx-auto' : '',
        isBetween ? 'flex flex-col md:flex-row md:items-end md:justify-between gap-6' : '',
        className
      )}
      {...props}
    >
      <div className={cn('space-y-3', isBetween ? 'max-w-2xl' : '')}>
        {kicker && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-accent-lime tracking-wider uppercase">
              {kicker}
            </span>
            <span className="h-px w-6 bg-accent-lime/40"></span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-content-primary tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-content-muted text-base sm:text-lg leading-relaxed pt-1">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 flex items-center gap-3">
          {action}
        </div>
      )}
    </div>
  );
};
