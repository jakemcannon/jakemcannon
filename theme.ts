import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // this is a hack
  semanticTokens: {
    colors: {
      "chakra-body-text": "white",
    },
  },
  fonts: {
    body: "system-ui",
    heading: "system-ui",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      body: {
        bg: "#202124",
      },
      ".mdx-prose": {
        h1: {
          fontSize: "1.75rem",
          fontWeight: "bold",
          mb: "4",
        },
        h3: {
          fontSize: "1.25rem",
          fontWeight: "bold",
          mb: "4",
        },
        p: {
          fonSize: "3.75rem",
          mb: 2,
        },
        a: {
          color: "#ecb365",
        },
        ol: {
          ml: 10,
        },
        ul: {
          ml: 10,
          mb: 3,
        },
      },
    },
  },
});
