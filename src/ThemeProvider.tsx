import { Theme, ThemeProvider as EmotionThemeProvider } from "@emotion/react";

const border = {
  right: "border-right: 2.5px solid black;",
  left: "border-left: 2.5px solid black;",
  top: "border-top: 2.5px solid black;",
  bottom: "border-bottom: 2.5px solid black;",
};

const theme: Theme = {
  colors: {
    yellow: "#FBCB0F",
    orange: "#FF5500",
    green: "#1CDA72",
  },
  border: border,
  transition: {
    background: "background-color 0.3s ease-out",
    color: "color 0.3s ease-out",
  },
  media: {
    minWidth600: "(min-width: 600px)",
    maxWidth599: "(max-width: 599px)",
    minWidth760: "(min-width: 760px)",
    maxWidth759: "(max-width: 759px)",
    minWidth1000: "(min-width: 1000px)",
    maxWidth999: "(max-width: 999px)",
    minWidth1700: "(min-width:1700px)",
    maxWidth1699: "(max-width:1699)",
    flexColumnRow: `
    display:flex;
    flex-direction: column;
    @media (min-width:1000px) {
      flex-direction: row;
    }`,
    borderColumnRowLeft: `
    flex: 0 1 50%;
    @media (max-width: 999px){
        ${border.bottom}
    }
    @media (min-width: 1000px) {
        ${border.right} 
    }
    `,
    borderColumnRowRight: `
    flex: 0 1 50%;
    @media (max-width: 999px){
        ${border.top}
    }
    @media (min-width: 1000px) {
        ${border.left} 
    }
    `,
  },
  styles: {
    wrapper: "height: 100%;",
  },
};

const ThemeProvider: React.FC<Record<string, unknown>> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
