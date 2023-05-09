import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
      200: "#9AB2AB", // green
      300: "#9EC5CE",
      400: "#B6CE9E",
      500: "#EDA876",
      600: "#EEECC0",
      700: "#D59E9E", // rosa
      800: "#6B6262",
      900: "#C47F69", // brun - logga färg
    },
  },

  fonts: {
    heading: "Love Ya Like A Sister",
    body: "Montserrat",
  },

  typography: {
    h1: {
      fontSize: "5rem",
      color: "brand.700",
      fontFamily: "heading",
    },
    h2: {
      fontSize: "2rem",
      color: "#6B6262",
      fontFamily: "heading",
    },
    h4: {
      fontSize: "1.3rem",
      color: "6B6262",
      fontFamily: "body",
    },
    h5: {
      color: "#6B6262",
      fontWeight: 700,
      fontSize: "1rem",
      fontFamily: "body",
    },

    components: {
      Button: {
        baseStyle: {
          bg: "brand.500",
          fontFamily: "body",
        },
      },
    },
  },
});

export default theme;
