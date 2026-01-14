/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#a855f7',    // Purple 500
          'purple-light': '#c084fc', // Purple 400
          'purple-dark': '#7c3aed',  // Purple 600
          blue: '#3b82f6',      // Blue 500
          'blue-light': '#60a5fa',   // Blue 400
          'blue-dark': '#2563eb',    // Blue 600
          pink: '#ec4899',      // Pink 500
          cyan: '#06b6d4',      // Cyan 500
        },
      },
      animation: {
        'float-up': 'floatUp 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'money-pop': 'moneyPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'character-burst': 'characterBurst 0.6s ease-out forwards',
        'critical-pulse': 'criticalPulse 0.5s ease-out',
        'critical-fade': 'criticalFade 1.5s ease-out forwards',
        'scanline-run': 'scanlineRun 0.8s ease-out forwards',
        'button-press': 'buttonPress 0.3s ease-out',
        'particle-burst': 'particleBurst 0.8s ease-out forwards',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'neon-pulse-extreme': 'neonPulseExtreme 0.5s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'scanline-move': 'scanlineMove 8s linear infinite',
        'noise-anim': 'noiseAnim 0.2s steps(10) infinite',
        'progress-shine': 'progressShine 2s linear infinite',
        'haptic-shake': 'hapticShake 0.1s ease-in-out',
        'fever-bg': 'feverBg 1s infinite alternate',
        'fever-text': 'feverText 1s ease-in-out infinite alternate',
      },
      keyframes: {
        hapticShake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        feverBg: {
          '0%': { background: 'rgba(0, 0, 0, 0.4)' },
          '100%': { background: 'rgba(255, 0, 0, 0.2)' },
        },
        feverText: {
          '0%': { transform: 'scale(1) rotate(-5deg)', opacity: '0.8' },
          '100%': { transform: 'scale(1.2) rotate(5deg)', opacity: '1' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(1.2)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 110, 1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
        moneyPop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        characterBurst: {
          '0%': { transform: 'scale(1) translateY(0)', opacity: '1' },
          '50%': { transform: 'scale(1.5) translateY(-20px)', opacity: '0.8' },
          '100%': { transform: 'scale(0.5) translateY(-60px)', opacity: '0' },
        },
        criticalPulse: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        criticalFade: {
          '0%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        scanlineRun: {
          '0%': { transform: 'translateY(-50vh)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(50vh)', opacity: '0' },
        },
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        particleBurst: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(0)', opacity: '0' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        neonPulseExtreme: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        scanlineMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        noiseAnim: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
        progressShine: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
    },
  },
  plugins: [],
}
