import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      yellow: string;
      orange: string;
      green: string;
    };
    border: {
      right: string;
      left: string;
      top: string;
      bottom: string;
    };
    transition: { background: string };
    media: {
      minWidth760: string;
      maxWidth759: string;
      minWidth1000: string;
      maxWidth999: string;
      flexColumnRow: string;
      borderColumnRowLeft: string;
      borderColumnRowRight: string;
    };
    styles: {
      wrapper: string;
    };
  }
}