import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        black: "#181a1c",
        bg_dim: "#252630",
        bg0: "#2b2d3a",
        bg1: "#333648",
        bg2: "#363a4e",
        bg3: "#393e53",
        bg4: "#3f445b",
        bg_red: "#ffb3bd",
        diff_red: "#a67f82",
        bg_green: "#cbecb0",
        diff_green: "#818f80",
        bg_blue: "#b3e7f9",
        diff_blue: "#808d9f",
        diff_yellow: "#9c937a",
        fg: "#f2f2f3",
        pred: "#ff8c9a",
        porange: "#f3bb9a",
        pyellow: "#f8e7b0",
        pgreen: "#b4e49a",
        pblue: "#98d4e7",
        ppurple: "#bdb2ff",
        pgrey: "#c4c6cf",
        grey_dim: "#9da1af",
      },
    },
  },
  plugins: [],
} satisfies Config;
