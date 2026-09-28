import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime-ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      isLoading = false,
      disabled,
      children,
      href,
      target,
      rel,
      download,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-heading font-medium tracking-tight rounded-md transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]';

    const variants = {
      primary:
        'bg-accent-lime text-background hover:bg-accent-hover font-semibold shadow-subtle hover:shadow-lime-sm',
      secondary:
        'bg-surface-card text-content-primary border border-border-subtle hover:border-border-active hover:bg-surface-elevated',
      outline:
        'bg-transparent text-content-primary border border-border-subtle hover:border-accent-lime hover:text-accent-lime',
      ghost:
        'bg-transparent text-content-muted hover:text-content-primary hover:bg-white/[0.04]',
      'lime-ghost':
        'bg-transparent text-accent-lime hover:bg-accent-muted hover:text-accent-hover',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
      icon: 'h-10 w-10 p-0',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && iconRight && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {iconRight}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          download={download}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : rel}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        className={classes}
        disabled={disabled || isLoading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
