import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#101010',
        'surface-2': '#181818',
        accent: {
          DEFAULT: '#68D7FF',
          light: '#B2F3FF',
        },
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'var(--font-geist)', 'sans-serif'],
        body: ['var(--font-geist)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        hero: ['var(--step-hero)', { lineHeight: '1', letterSpacing: '-0.04em' }],
        display: ['var(--step-display)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['var(--step-h1)', { lineHeight: '1.1' }],
        h2: ['var(--step-h2)', { lineHeight: '1.1' }],
        h3: ['var(--step-h3)', { lineHeight: '1.1' }],
        body: ['var(--step-body)', { lineHeight: '1.6' }],
        small: ['var(--step-small)', { lineHeight: '1.5' }],
        caption: ['var(--step-caption)', { lineHeight: '1.4' }],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '96px',
        '2xl': '160px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '500ms',
        hero: '1200ms',
      },
      borderRadius: {
        button: '999px',
        card: '24px',
        input: '16px',
        badge: '999px',
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.35)',
        glow: '0 0 60px rgba(104,215,255,0.2)',
        'glow-hover': '0 0 30px rgba(104,215,255,0.25)',
      },
      backdropBlur: {
        card: '20px',
      },
      animation: {
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        float: 'float 14s ease-in-out infinite',
        'spin-slow': 'spin 60s linear infinite',
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
