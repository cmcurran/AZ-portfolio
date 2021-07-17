import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import "./fonts/MonumentGrotesk-Regular.otf";
import "./fonts/MonumentGrotesk-Italic.otf";
import "./fonts/MonumentGrotesk-Mono.otf";
import "./fonts/MonumentGrotesk-Semi-Mono.otf";

import "./fonts/SuisseIntl-Regular.otf";
import "./fonts/SuisseIntl-Bold.otf";
import "./fonts/SuisseIntl-RegularItalic.otf";
import "./fonts/SuisseWorks-Book.otf";
import "./fonts/SuisseWorks-BookItalic.otf";

import { App } from "./App";
import { Router } from "@reach/router";
import { Home } from "./Home";
import { TurboSculpture } from "./TurboSculpture";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/">
        <Home path="/" />
      </App>
      <TurboSculpture path="turbosculpture" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
