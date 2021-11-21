import React, { useState } from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./ThemeProvider";
import "./index.css";

import "./fonts/SangBleuKingdom-Medium.otf";
import "./fonts/SangBleuKingdom-MediumItalic.otf";
import "./fonts/SangBleuKingdom-Regular.otf";
import "./fonts/SangBleuKingdom-RegularItalic.otf";

import "react-image-lightbox/style.css";

import { App } from "./App";
import { Router } from "@reach/router";
import { Home } from "./Views/Home";
import { TurboSculpture } from "./Views/TurboSculpture";
import { About } from "./Views/About";
import { Work } from "./Views/Work";
import { Work as workCopy } from "./Copy/Copy";
import { Gallery, GalleryContent } from "./Components/Gallery";
import { Placeholder } from "./Components/Placeholder";
import { Degrowth, DegrowthContent } from "./Components/Degrowth";
import { Contact } from "./Views/Contact";
import { Statement } from "./Views/Statement";
import { Projects } from "./Views/Projects";

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
            <About path="/about" navHeight={navHeight} />
            <Contact path="/contact" />
            <Statement path="/statement" />
            <Projects path="projects" />
            {/* <Work path="/work" content={workCopy} />
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
            <Placeholder path="work/Bodies-in-Alliance-Bodies-in-Defiance" />*/}
          </App>
          {/* <TurboSculpture path="turbosculpture" />  */}
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Apapa />, document.getElementById("root"));
