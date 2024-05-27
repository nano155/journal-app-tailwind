import animations from '@midudev/tailwind-animations'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4a47a3', // Ejemplo de tonalidad clara
          DEFAULT: '#262254', // Color primario
          dark: '#1a1b3c', // Ejemplo de tonalidad oscura
        },
        secondary: {
          light: '#7e69b0', // Ejemplo de tonalidad clara
          DEFAULT: '#543884', // Color secundario
          dark: '#3b2761', // Ejemplo de tonalidad oscura
        },
        error: {
          light: '#fc8181', // Tonalidad clara
          DEFAULT: '#e53e3e', // Color de error
          dark: '#c53030', // Tonalidad oscura
        }
      },
    },
},
plugins: [animations],
}

