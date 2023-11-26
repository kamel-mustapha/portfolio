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
        primary: "1200px",
      },
      colors: {
        primary: "#222831",
        secondary: "#00ADB5",
      },
      backgroundColor: {
        primary: "#222831",
        secondary: "#00ADB5",
        "gray-shade-1": "#393E46",
      },
      borderColor: {
        primary: "#222831",
        secondary: "#00ADB5",
      },
      lineHeight: {
        extra: "3",
      },
      fontFamily: {
        // oswald: ["Oswald"],
        poppins: ["Poppins", "Sans", "Arial"],
      },
    },
  },
  plugins: [],
};
