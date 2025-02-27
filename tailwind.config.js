/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [],
  theme: {
  	extend: {
  		maxWidth: {
  			container: '1138px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
