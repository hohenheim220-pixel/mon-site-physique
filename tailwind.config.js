/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void:    '#050810',
        cosmos:  '#0a0f1e',
        nebula:  '#0f1629',
        stellar: '#161d35',
        orbit:   '#1e2845',
        cyan:    { DEFAULT: '#06b6d4', light: '#67e8f9', dark: '#0891b2' },
        indigo:  { DEFAULT: '#6366f1', light: '#a5b4fc', dark: '#4338ca' },
        nova:    '#f0abfc',
        pulsar:  '#34d399',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)`,
        'glow-cyan':    'radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)',
        'glow-indigo':  'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)',
      },
      backgroundSize: { 'grid': '40px 40px' },
      boxShadow: {
        'glass':    '0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow-sm':  '0 0 15px rgba(6,182,212,0.3)',
        'glow-md':  '0 0 30px rgba(6,182,212,0.2)',
        'glow-lg':  '0 0 60px rgba(6,182,212,0.15)',
        'formula':  '0 0 20px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      animation: {
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
