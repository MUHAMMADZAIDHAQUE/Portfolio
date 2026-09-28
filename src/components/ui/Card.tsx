import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'elevated' | 'interactive' | 'editorial';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  accentBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'surface',
  padding = 'md',
  accentBorder = false,
  children,
  ...props
}) => {
  const baseStyles =
    'relative rounded-lg border transition-all duration-200 overflow-hidden';

  const variants = {
    surface: 'bg-surface-card border-border-subtle shadow-subtle',
    elevated: 'bg-surface-elevated border-border-subtle shadow-elevated',
    interactive:
      'bg-surface-card border-border-subtle hover:border-accent-lime/50 hover:bg-surface-elevated cursor-pointer group shadow-subtle hover:shadow-card hover:-translate-y-0.5',
    editorial:
      'bg-surface-card border-border-subtle relative before:absolute before:top-0 before:left-0 before:h-[2px] before:w-12 before:bg-accent-lime shadow-subtle',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8 sm:p-10',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        paddings[padding],
        accentBorder && 'border-accent-lime/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3
    className={cn('text-xl font-heading font-semibold text-content-primary tracking-tight', className)}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-sm text-content-muted leading-relaxed', className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => <div className={cn('text-content-secondary', className)} {...props}>{children}</div>;

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn('flex items-center pt-4 mt-6 border-t border-border-subtle/60 text-xs text-content-muted', className)}
    {...props}
  >
    {children}
  </div>
);
