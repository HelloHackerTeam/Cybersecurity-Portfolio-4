module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#030203',
        neon: '#ff0038',
        neonRed: '#ff1f3d',
        accent: '#d10a1b',
        panel: '#180306'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        oxanium: ['Oxanium', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: [],
}
