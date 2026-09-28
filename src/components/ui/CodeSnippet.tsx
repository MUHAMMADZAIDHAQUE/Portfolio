import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import { Check, Copy, Terminal } from 'lucide-react';

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  className,
  code,
  language = 'sql',
  filename,
  showLineNumbers = true,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div
      className={cn(
        'rounded-lg border border-border-subtle bg-surface-muted overflow-hidden shadow-subtle',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-card border-b border-border-subtle text-xs font-mono text-content-muted">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-accent-lime" />
          <span className="text-content-secondary font-medium">
            {filename || `${language.toUpperCase()} SNIPPET`}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-elevated hover:bg-border-subtle text-content-muted hover:text-content-primary transition-colors text-[11px]"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-status-success" />
              <span className="text-status-success">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-sm text-content-primary leading-relaxed">
        <pre className="grid">
          {lines.map((line, idx) => (
            <div key={idx} className="table-row">
              {showLineNumbers && (
                <span className="table-cell pr-4 text-content-subtle select-none text-right w-8">
                  {idx + 1}
                </span>
              )}
              <span className="table-cell text-content-secondary">
                {line || ' '}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};
