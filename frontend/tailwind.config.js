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
        1400: "1450px",
      },
      colors: {
        primary: "#f8f5f2",
        secondary: "#078080",
        third: "#232323",
        four: "#f45d48",
        secondarydarker: "#055656",
        headline: "#232323",
        paragraph: "##222525",
      },
      backgroundColor: {
        primary: "#f8f5f2",
        secondary: "#0f0f0f",
        third: "#232323",
        four: "#f45d48",
        secondarydarker: "#055656",
      },
      borderColor: {
        primary: "#f8f5f2",
        secondary: "#078080",
        third: "#232323",
        four: "#f45d48",
        secondarydarker: "#055656",
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
