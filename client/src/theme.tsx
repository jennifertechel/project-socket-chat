import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
  components: {
    Button: {
      baseStyle: {
        bg: "brand.100",
      },
    },
  },
});

export default theme;
