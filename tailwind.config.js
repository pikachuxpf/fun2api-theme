/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Anthropic-inspired clay accent
        primary: {
          50: '#fbf0eb',
          100: '#f6dfd6',
          200: '#ecc0b1',
          300: '#e29f89',
          400: '#d98264',
          500: '#c15f3c',
          600: '#a94e31',
          700: '#893f2a',
          800: '#6f3628',
          900: '#5b3027',
          950: '#3d211b'
        },
        // Warm neutral companion scale
        accent: {
          50: '#faf9f6',
          100: '#f1efe9',
          200: '#e4dfd6',
          300: '#d5cec3',
          400: '#b7afa4',
          500: '#8b8379',
          600: '#736f68',
          700: '#5b554d',
          800: '#403b35',
          900: '#2d2a26',
          950: '#201e1b'
        },
        // Warm charcoal dark-mode scale
        dark: {
          50: '#fffaf2',
          100: '#eee9e1',
          200: '#d8d0c6',
          300: '#b4aca1',
          400: '#9c9388',
          500: '#837b71',
          600: '#655d54',
          700: '#504941',
          800: '#312d28',
          900: '#2a2723',
          950: '#201e1b'
        }
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif'
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        glass: '0 8px 28px rgba(45, 42, 38, 0.08)',
        'glass-sm': '0 4px 14px rgba(45, 42, 38, 0.05)',
        glow: '0 0 20px rgba(193, 95, 60, 0.16)',
        'glow-lg': '0 0 36px rgba(193, 95, 60, 0.22)',
        card: '0 1px 2px rgba(45, 42, 38, 0.05)',
        'card-hover': '0 12px 32px rgba(45, 42, 38, 0.1)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 250, 242, 0.08)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #c15f3c 0%, #a94e31 100%)',
        'gradient-dark': 'linear-gradient(135deg, #312d28 0%, #201e1b 100%)',
        'gradient-glass':
          'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, rgba(20, 184, 166, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(20, 184, 166, 0.08) 0px, transparent 50%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(20, 184, 166, 0.25)' },
          '100%': { boxShadow: '0 0 30px rgba(20, 184, 166, 0.4)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
