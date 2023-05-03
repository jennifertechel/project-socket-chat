import { createTheme, Theme } from "@chakra-ui/react";

export let theme: Theme = createTheme({
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1400,
    xl: 1536,
  },

  colors: {
    brand: {
      100: "#F5F5F5",
      200: "#D14F9D",
      300: "#9EC5CE",
      400: "#B6CE9E",
      500: "#EDA876",
      600: "#EEECC0",
      700: "#CA368F",
      800: "#6B6262",
      // 100 är färgen på chattrutorna
      // 700 är färgen på Chatropolis-texten
      // 800 är textfärgen
    },
  },

  fonts: {
    heading: "Love ya like a sister",
    body: "Montserrat",
  },

  typography: {
    h1: {
      fontSize: "3.5rem",
      color: "#CA368F",
      fontFamily: "heading",
    },
    h2: {
      fontSize: "2rem",
      color: "#6B6262",
      fontFamily: "body",
    },
    h4: {
      fontSize: "1.3rem",
      color: "6B6262",
      fontFamily: "body",
    },
    h5: {
      color: "#6B6262",
      // fontWeight: 700,
      fontSize: "1rem",
      fontFamily: "body",
    },

    components: {
      Button: {
        baseStyle: {
          bg: "brand.100",
          fontFamily: "body",
        },
      },
    },
  },
});

export default theme;
