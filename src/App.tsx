import React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import { TurboSculpture } from "./TurboSculpture";

const Home = (props: RouteComponentProps) => (
  <div>
    HOMEPAGE
    <Link to="turbo-sculpture">Turbo-Sculpture</Link>
  </div>
);

const App = () => (
  <Router>
    <Home path="/" />
    <TurboSculpture path="turbo-sculpture" />
  </Router>
);

export default App;
