import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Cabin",
      styles: ["700"],
    },
    {
      name: "Noto Serif KR",
      styles: ["200", "300", "400", "700"],
    },
  ],
  headerFontFamily: ["Cabin", "sans-serif"],
  bodyFontFamily: ["Noto Serif KR", "serif"],
  headerColor: "hsla(0,0%,0%,0.8)",
  bodyColor: "hsla(0,0%,0%,0.7)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    "h1,h2,h3,h4,h5,h6": {
      margin: 0,
      lineHeight: 1.5,
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      color: options.bodyColor,
    },
    p: {
      margin: 0,
    },
  }),
})

export default typography
