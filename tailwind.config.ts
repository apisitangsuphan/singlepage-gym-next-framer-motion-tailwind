import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {colors:{
      primary:"#ff8901",
      secondary:"#fb923c"
    },
      container:{
        center: true,
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          md:'3rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem',
        }
        
      }
    },
  },
  plugins: [],
} satisfies Config;
