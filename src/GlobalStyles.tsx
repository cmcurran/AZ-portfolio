import { css, Global } from "@emotion/react";

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      html {
        scroll-behavior: smooth;
      }

      #root,
      html,
      body {
        height: 100%;
      }

      em,
      i {
        font-family: "MG";
        font-style: italic;
        font-weight: 400;
      }

      strong {
        /* font-family: "Suisse"; */
        font-style: normal;
        font-weight: 600;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
      }

      body {
        font-family: "MG";
        overflow-wrap: break-word;
        color: black;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      div {
        overflow-wrap: break-word;
      }
      a {
        text-decoration: none;
        color: black;
      }
    `}
  />
);
