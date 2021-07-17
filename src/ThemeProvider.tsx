import { Theme, ThemeProvider as EmotionThemeProvider } from "@emotion/react";

const theme: Theme = {
  colors: {
    yellow: "#FBCB0F",
    orange: "#FF5500",
    green: "#1CDA72",
  },
};

const ThemeProvider: React.FC<Record<string, unknown>> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
