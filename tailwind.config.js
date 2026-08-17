module.exports = {
  content: ["./**/*.php", "./**/*.css"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#705D56",
          alt: "#965B72",
          third: "#D2EEE2",
          fourth: "#99E1D9",
          black: "#32292F",
        },
      },
      flexShrink: {
        4: 4,
      },
      fontFamily: {
        sans: ["neue-haas-grotesk-text", "sans-serif"],
        title: ["Italiana", "san-serif"],
        handwriting: ["Stalemate", "sans-serif"],
        button: ["montserrat", "sans-serif"],
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "33.3334%",
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.3334%",
        "1/4": "25%",
        "1/6": "16.6667%",
        "1/8": "12.5%",
        "1/12": "8.3333%",
        "1/24": "4.1667%",
        video: "56.6667%",
      },
      transitionDuration: {
        0: "0ms",
      },
      transitionDelay: {
        0: "0ms",
      },
      transitionProperty: {
        height: "height",
        "transform-height": "transform, height",
      },
      width: {
        "3/8": "37.5%",
        "5/8": "62.5%",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
