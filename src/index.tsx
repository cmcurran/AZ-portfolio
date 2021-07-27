import React, { useState } from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./ThemeProvider";
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

import "react-image-lightbox/style.css";

import { App } from "./App";
import { Router } from "@reach/router";
import { Home } from "./Views/Home";
import { TurboSculpture } from "./Views/TurboSculpture";
import { About } from "./Views/About";
import { Work } from "./Views/Work";
import { Work as workCopy } from "./Copy/Copy";
import { Gallery } from "./Components/Gallery";
import { Placeholder } from "./Components/Placeholder";
import { Degrowth } from "./Components/Degrowth";

// Use a custom wrapper to prevent passing through DOM props
// to a non-DOM element.
const RouterComponent: React.FC = ({ children }) => <>{children}</>;

const Apapa = () => {
  const [navHeight, setNavHeight] = useState<number>();

  return (
    <React.StrictMode>
      <ThemeProvider>
        <Router primary={false} component={RouterComponent}>
          <App path="/" setNavHeight={setNavHeight} navHeight={navHeight}>
            <Home path="/" />
            <About path="/about" />
            <Work path="/work" content={workCopy} />
            {workCopy.sections.map((section) => {
              return section.works.map((work) => {
                if (!work.path) {
                  return null;
                }
                if (section.variant === "gallery") {
                  return (
                    <Gallery
                      path={`work/${work.path}`}
                      content={work.work as GalleryContent}
                      navHeight={navHeight}
                    />
                  );
                }
                if (section.variant === "degrowth") {
                  return (
                    <Degrowth
                      path={`work/${work.path}`}
                      content={work.work as DegrowthContent}
                      navHeight={navHeight}
                    />
                  );
                }
              });
            })}
            <Placeholder
              path={
                "work/The-Plan-for-the-Cultural-Consolidation-of-the-Balkan-Peninsula"
              }
            />
            <Placeholder path="work/Bodies-in-Alliance-Bodies-in-Defiance" />
          </App>
          <TurboSculpture path="turbosculpture" />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Apapa />, document.getElementById("root"));

type GalleryContent = {
  title: string;
  date: string;
  about: React.ReactNode;
  gallery: {
    img: string;
    size: string;
    material: string;
    date: string;
  }[];
};

type DegrowthContent = {
  title: string;
  date: string;
  button: { url: string; copy: string };
  about: React.ReactNode;
};
