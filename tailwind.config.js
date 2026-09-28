/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090B",
        surface: {
          DEFAULT: "#121419",
          card: "#121419",
          elevated: "#191C22",
          muted: "#0E1015",
          overlay: "rgba(8, 9, 11, 0.85)",
        },
        border: {
          DEFAULT: "#2A2D35",
          subtle: "#2A2D35",
          muted: "#1E2026",
          active: "#3F4450",
          lime: "rgba(197, 255, 74, 0.35)",
        },
        accent: {
          DEFAULT: "#C5FF4A",
          lime: "#C5FF4A",
          hover: "#D4FF70",
          muted: "rgba(197, 255, 74, 0.12)",
          subtle: "rgba(197, 255, 74, 0.06)",
        },
        content: {
          primary: "#E7E9ED",
          secondary: "#B0B5C1",
          muted: "#9297A2",
          subtle: "#5C6270",
          inverse: "#08090B",
        },
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
          info: "#38BDF8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '0.9rem', letterSpacing: '0.05em' }],
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.03em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.65rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.9rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.2rem', letterSpacing: '-0.03em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.04em' }],
        '5xl': ['3rem', { lineHeight: '3.2rem', letterSpacing: '-0.04em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'none': '0',
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        'full': '9999px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 0 1px #2A2D35',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px #2A2D35',
        'lime-sm': '0 0 12px rgba(197, 255, 74, 0.25)',
        'lime-md': '0 0 24px rgba(197, 255, 74, 0.35)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(42, 45, 53, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 45, 53, 0.25) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(rgba(42, 45, 53, 0.4) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '24px 24px',
        'grid-md': '48px 48px',
        'dot-sm': '16px 16px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
    screens: {
      'sm': '640px',   // Mobile landscape / Small tablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Laptops / Small desktops
      'xl': '1280px',  // Standard desktops
      '2xl': '1536px', // Large screens
    }
  },
  plugins: [],
}
