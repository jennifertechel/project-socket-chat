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
      100: "#404040",
      200: "#B36A5E",
      300: "#CCD5AE",
      400: "#C89F9C",
      500: "#EDA876",
      600: "#EFDCFB",
    },
  },

  typography: {
    fontFamily: ["Montserrat", "Sarabun", "Sulphur Point", "Lato"].join(","),
    h1: {
      fontSize: "3.5rem",
      color: "#7A9C6A",
    },
    h2: {
      fontSize: "2rem",
      color: "#7A9C6A",
    },
    h4: {
      fontSize: "1.3rem",
      color: "white",
    },
    h5: {
      color: "#57724B",
      fontWeight: 700,
      fontSize: "20px",
    },

    components: {
      Button: {
        baseStyle: {
          bg: "brand.100",
        },
      },
    },
  },
});

export default theme;
