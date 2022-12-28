/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    colors: {
      'indigo': '#312e81',
      'teal': '#2dd4bf',
      'black': '#171717',
      'white': '#fafafa', 
      'green': '#22c55e',
      'slate': '#f1f5f9',
      'gray-700': '#374151',
      'mauve': '#ffefe0',
      'champagne-pink': '#efd9ce',
      'medium-blue-purple': '#b79ced',
      'medium-purple': '#957fef',
      'medium-slate-blue': '#7161ef'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display: ['DM Sans', 'sans-serif'],
      Quicksand: ['Quicksand', 'sans-serif'], 
      Gloria: ['Gloria', 'sans-serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
