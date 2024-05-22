/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./script/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'startGrad': 'linear-gradient(to bottom, #89CFF0, #D8BFD8)',
        'sunny-grad': 'linear-gradient(to bottom, #5DBACB, #E4E3C3)',
        'cloudy-grad': 'linear-gradient(to bottom, #D3D3D3, #A9A9A9)', 
        'haze-grad': 'linear-gradient(to bottom, #B0C4DE, #696969)', 
        'rainy-grad': 'linear-gradient(to bottom, #00C6FF, #0072FF)', 
        'thunderstorm-grad': 'linear-gradient(to bottom, #283E51, #4B79A1)', 
        'smoke-grad': 'linear-gradient(to bottom, #708090, #2F4F4F)', 
        'mist-grad': 'linear-gradient(to bottom, #A4A8A9, #E0E4E5)', 
      },
      backgroundColor: {
        'bg-1': '#ebfffc',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], /* Ensure Manrope Variable is used */
      }
    },
  },
  plugins: [],
}
