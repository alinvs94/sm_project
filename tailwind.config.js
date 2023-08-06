/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#016797",
            secondary: "#9c9c9c28",
            tertiary: "#9deaea",
            quaternary: "#0084c1",
         },
      },
   },
   plugins: [],
};
