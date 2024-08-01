import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        kuning: "#f0db4f",
        biru: "#007acc",
        abu: "#dadee3",
        tlwnd: "#38bdf8",
        git: "#f34f29",
        react: "#61DAFB",
        python: "#306998",
        nodejs: "#83CD29",
        npm: "#cb3837",
        html5: "#E44D26",
        css3: "#1572B6",
      },
      borderRadius: {
        apalah: "50px"
      }
    },
  },
  plugins: [],
};

export default config;
