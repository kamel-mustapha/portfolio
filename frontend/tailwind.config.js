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
        primary: "#4fc4cf",
        secondary: "#fbdd74",
        tertiary: "#994ff3",
        four: "#181818",
      },
      backgroundColor: {
        primary: "#4fc4cf",
        secondary: "#fbdd74",
        tertiary: "#994ff3",
        four: "#181818",
        light: "rgba(0,0,0,0.025)",
      },
      borderColor: {
        primary: "#4fc4cf",
        secondary: "#fbdd74",
        tertiary: "#994ff3",
        four: "#181818",
      },
      lineHeight: {
        extra: "3",
      },
    },
  },
  plugins: [],
};
