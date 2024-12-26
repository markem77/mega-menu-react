/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Chemins vers tes fichiers React
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",  // Petit écran (mobile)
      md: "768px",  // Écran moyen (tablette)
      lg: "1024px", // Écran large (desktop)
      xl: "1280px", // Très grand écran
    },
  },
  plugins: [],
};
