/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#eff9fb",100:"#d8f1f6",200:"#b6e5ee",300:"#86d3e3",400:"#4cb9d1",500:"#1e98b3",600:"#167997",700:"#135f79",800:"#134e63",900:"#113f52" },
        ink: { 900:"#0b1324",700:"#1b2a41",500:"#33415c",300:"#7c8da6",200:"#a9b3c3" },
        surface:{ DEFAULT:"#fbfdff",50:"#fbfdff",100:"#f3f7fb",200:"#e8eef5",300:"#dbe6f0" }
      },
      fontFamily: { sans:["ui-sans-serif","system-ui","-apple-system","Segoe UI","Inter","Roboto","Ubuntu","Cantarell","Noto Sans","Helvetica Neue","Arial","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"] },
      boxShadow: { card:"0 10px 20px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)" }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
