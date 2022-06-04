module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        content: "fit-content",
      },
      height: {
        content: "fit-content",
      },
      maxWidth: {
        1400: "1400px",
      },
      colors: {
        primary: "rgba(0,0,0,0.95)",
        secondary: "rgba(255,255,255,1)",
        third: "rgba(200,200,200,1)",
        four: "rgba(201, 158, 84, 1)"
      },
      backgroundColor: {
        primary: "rgba(0,0,0,0.95)",
        secondary: "rgba(255,255,255,1)",
        third: "rgba(150,150,150,1)",
        four: "rgba(229, 152, 18, 1)"
      },
      borderColor: {
        primary: "rgba(0,0,0,0.95)",
        secondary: "rgba(255,255,255,1)",
        third: "rgba(150,150,150,1)",
        four: "rgba(229, 152, 18, 1)"
      },
      lineHeight: {
        extra: "3",
      },
    },
  },
  plugins: [],
};
