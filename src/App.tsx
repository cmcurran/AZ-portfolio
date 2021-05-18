import React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import { TurboSculpture } from "./TurboSculpture";
import styled from "styled-components";

const Home = (_props: RouteComponentProps) => (
  <div>
    HOMEPAGE
    <LinkStyled to="turbo-sculpture">Turbo-Sculpture</LinkStyled>
  </div>
);

const App = () => (
  <Router>
    <Home path="/" />
    <TurboSculpture path="turbo-sculpture" />
  </Router>
);

const LinkStyled = styled(Link)`
  color: green;
`;
export default App;
