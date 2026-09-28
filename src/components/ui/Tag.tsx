import React from 'react';
import { cn } from '../../utils/cn';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  interactive?: boolean;
  size?: 'sm' | 'md';
}

export const Tag: React.FC<TagProps> = ({
  className,
  active = false,
  interactive = false,
  size = 'md',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-mono text-xs rounded border transition-all select-none';

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  };

  const interactiveStyles = interactive
    ? 'cursor-pointer hover:border-accent-lime hover:text-accent-lime'
    : '';

  const activeStyles = active
    ? 'bg-accent-muted text-accent-lime border-accent-lime/40'
    : 'bg-surface-elevated/80 text-content-secondary border-border-subtle';

  return (
    <span
      className={cn(baseStyles, sizes[size], activeStyles, interactiveStyles, className)}
      {...props}
    >
      {children}
    </span>
  );
};
