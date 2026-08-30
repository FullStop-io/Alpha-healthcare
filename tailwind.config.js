/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            50: '#f0f5fa',
            100: '#e1ecf6',
            200: '#c3daf0',
            300: '#95bee5',
            400: '#5f9ed6',
            500: '#387ec4',
            600: '#2563a6',
            700: '#1f4f87',
            800: '#1c4471',
            900: '#0f2444',
            950: '#07152b',
          },
          cyan: {
            50: '#effbfa',
            100: '#c7f4f1',
            200: '#90e8e4',
            300: '#51d5d3',
            400: '#21b8b8',
            500: '#0aa1a3',
            600: '#047d80',
            700: '#076366',
            800: '#0b4f52',
            900: '#0d4245',
            950: '#022427',
          },
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          vital: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
        'subtle-mesh': 'radial-gradient(at 100% 0%, rgba(14, 165, 233, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(15, 36, 68, 0.05) 0px, transparent 50%)',
      },
      boxShadow: {
        'clinical': '0 4px 20px -2px rgba(15, 36, 68, 0.08), 0 2px 6px -1px rgba(15, 36, 68, 0.04)',
        'clinical-lg': '0 20px 40px -15px rgba(15, 36, 68, 0.12), 0 0 1px 1px rgba(15, 36, 68, 0.05)',
        'clinical-xl': '0 25px 50px -12px rgba(15, 36, 68, 0.25)',
        'vital-glow': '0 0 25px -5px rgba(239, 68, 68, 0.35)',
        'cyan-glow': '0 0 25px -5px rgba(14, 165, 233, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'heartbeat': 'heartbeat 1.8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
