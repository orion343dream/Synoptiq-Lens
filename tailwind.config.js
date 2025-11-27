/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        /* Core white background theme */
        background: '#FFFFFF',     // Pure white primary background
        surface: '#F8F9FA',        // Off-white for subtle depth
        
        /* Header maintains current style but with white base */
        'header-container': '#FFFFFF',
        header: '#FFFFFF',

        /* Updated presets with white background optimization */
        'light-bg': '#F8F9FA',     // Using subtle off-white
        'light-surface': '#FFFFFF', // Pure white surface
        'dark-bg': '#043056',      // Green Vogue for dark sections
        'dark-surface': '#343E4C', // Oxford Blue for dark surfaces

        /* New color system based on specifications */
        // Primary Action & Accent
        'crusta': '#FB8928',
        
        // Primary Text & Structure Colors
        'green-vogue': '#043056',  // Primary text/main headers
        'oxford-blue': '#343E4C',  // Secondary text/subtle elements
        
        // Secondary Support & Data Visualization
        'ming': '#345C7C',         // Secondary buttons/charts
        
        // System Colors
        'success': '#4BB543',
        'warning': '#FFC107', 
        'error': '#DC3545',
        
        /* Legacy colors for backward compatibility */
        primary: '#FB8928',        // Now uses Crusta as primary
        'primary-light': '#FC9B4D',
        'primary-dark': '#E67A1F',
        dark: '#043056',           // Now uses Green Vogue
        text: '#343E4C',           // Now uses Oxford Blue
        
        /* Original palette preserved for reference */
        navy: '#002C5F',
        royal: '#0056A4',
        cyan: '#00B5E2',
        'accent-orange': '#FB8928', // Now matches Crusta
        'light-gray': '#F8F9FA',    // Updated to match surface
        'dark-gray': '#343E4C',     // Now uses Oxford Blue
        white: '#FFFFFF'
      },
      fontFamily: {
        title: ['Exo', 'sans-serif'],
        body: ['Fira Sans', 'sans-serif'],
        ui: ['Red Hat Display', 'sans-serif']
      }
    }
  },
  plugins: [],
}
