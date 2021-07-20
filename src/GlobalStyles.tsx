import { css, Global } from "@emotion/react";

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      .ril__captionContent {
        width: 100%;
      }
      html {
        scroll-behavior: smooth;
      }

      #root,
      html,
      body {
        height: 100%;

        &::-webkit-scrollbar {
          background-color: white;
          border: solid 3px black;
        }
        &::-webkit-scrollbar-thumb {
          background-color: white;
          border: solid 3px black;
        }
        ::-webkit-scrollbar-button:vertical:end:increment {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 304 304' style='enable-background:new 0 0 304 304;' xml:space='preserve'%3E%3Cpolygon points='152.5,258 41.7,66 263.4,66'/%3E%3C/svg%3E");
          border: solid 3px black;
        }
        ::-webkit-scrollbar-button:vertical:start:decrement {
          border: solid 3px black;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 304 304' style='enable-background:new 0 0 304 304;transform:rotate(180deg)' xml:space='preserve'%3E%3Cpolygon points='152.5,258 41.7,66 263.4,66'/%3E%3C/svg%3E");
        }
        ::-webkit-scrollbar-button:vertical:end:increment,
        ::-webkit-scrollbar-button:vertical:start:decrement {
          display: block;
        }
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
